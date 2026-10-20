import { createHero } from "../components/hero.js";
import { createSocialWidget } from "../components/social.js";
import { finishPage, mountShell } from "../layout.js";
import { el } from "../utils/dom.js";

/**
 * 校验并展示联系表单的结果。
 * @param {HTMLFormElement} form
 * @param {HTMLElement} panel
 */
function handleSubmit(form, panel) {
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const message = String(data.get("message") || "").trim();
  const fields = {
    name: name.length >= 2,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    message: message.length >= 20,
  };

  form.querySelectorAll(".error").forEach((node) => {
    node.textContent = "";
  });
  form.querySelectorAll("[aria-invalid]").forEach((node) => node.removeAttribute("aria-invalid"));

  if (!fields.name) setFieldError(form, "name", "Please add your name.");
  if (!fields.email) setFieldError(form, "email", "Use a full email address.");
  if (!fields.message) setFieldError(form, "message", "A note of at least a sentence helps us answer.");
  if (!fields.name || !fields.email || !fields.message) return;

  panel.replaceChildren(
    el("div", { className: "form-success" }, [
      el("h2", {}, [`Thanks, ${name}.`]),
      el("p", {}, ["This is a static desk, so the note stays in the browser instead of traveling to an inbox. For a reply that leaves the page, email hello@expoglobeh.com."]),
      el("button", {
        type: "button",
        className: "btn btn--dark",
        onClick: () => {
          form.reset();
          panel.replaceChildren(form);
        },
      }, ["Write another note"]),
    ]),
  );
}

/**
 * 在字段下显示错误。
 * @param {HTMLFormElement} form
 * @param {string} name
 * @param {string} text
 */
function setFieldError(form, name, text) {
  const input = form.elements.namedItem(name);
  if (input instanceof HTMLElement) input.setAttribute("aria-invalid", "true");
  const error = form.querySelector(`[data-error-for="${name}"]`);
  if (error) error.textContent = text;
}

/**
 * 创建一个带错误位的表单字段。
 * @param {{ label: string, name: string, control: HTMLElement }} options
 * @returns {HTMLElement}
 */
function field({ label, name, control }) {
  return el("label", { className: "field" }, [
    el("span", {}, [label]),
    control,
    el("span", { className: "error", dataset: { errorFor: name } }),
  ]);
}

/**
 * 渲染联系页。
 */
function renderContact() {
  mountShell({ active: "contact" });
  const panel = el("div", { id: "contact-panel" });
  const form = el("form", { className: "form", novalidate: true }, [
    field({ label: "Name", name: "name", control: el("input", { name: "name", type: "text", autocomplete: "name", required: true }) }),
    field({ label: "Email", name: "email", control: el("input", { name: "email", type: "email", autocomplete: "email", required: true }) }),
    field({
      label: "Subject",
      name: "subject",
      control: el("select", { name: "subject" }, [
        el("option", {}, ["General"]),
        el("option", {}, ["A product worth testing"]),
        el("option", {}, ["A correction"]),
        el("option", {}, ["Partnerships"]),
      ]),
    }),
    field({
      label: "Message",
      name: "message",
      control: el("textarea", { name: "message", required: true }),
    }),
    el("button", { className: "btn btn--dark", type: "submit" }, ["Send the note"]),
  ]);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    handleSubmit(form, panel);
  });
  panel.append(form);

  const main = document.getElementById("main");
  main.append(
    createHero({
      compact: true,
      eyebrow: "Contact",
      title: "Write to the desk.",
      lede: "Corrections, product suggestions, and the occasional partnership. We read what arrives.",
      image: "assets/images/coffee.jpg",
    }),
    el("section", { className: "section" }, [
      el("div", { className: "wrap contact-grid" }, [
        panel,
        el("div", { className: "stack" }, [
          el("article", { className: "detail-card" }, [
            el("p", { className: "eyebrow" }, ["Editorial"]),
            el("h2", {}, ["hello@expoglobeh.com"]),
            el("p", {}, ["Replies go out within three weekdays. If you are writing about a story, include the title so we can find the note."]),
            el("a", { className: "text-link", href: "mailto:hello@expoglobeh.com" }, ["Email the desk"]),
          ]),
          createSocialWidget(),
        ]),
      ]),
    ]),
  );

  finishPage(main);
}

renderContact();
