import { site } from "../data/site.js";
import { queryParams, el } from "../utils/dom.js";
import { icon } from "./icons.js";
import { createLogo } from "./logo.js";

/**
 * 创建站点页头。标志链回首页。
 * @param {{ active: string }} options
 * @returns {HTMLElement}
 */
export function createHeader({ active }) {
  const params = queryParams();
  const toggle = el("button", {
    className: "nav-toggle",
    type: "button",
    ariaExpanded: "false",
    ariaControls: "site-nav",
  }, ["Menu"]);

  const links = el(
    "nav",
    { className: "nav-links", ariaLabel: "Primary" },
    site.nav.map((item) =>
      el("a", {
        href: item.href,
        ariaCurrent: item.id === active ? "page" : null,
      }, [item.label]),
    ),
  );

  const searchIcon = icon("search");
  searchIcon.setAttribute("aria-hidden", "true");
  const search = el("form", { className: "nav-search", action: "blog.html", method: "get", role: "search" }, [
    el("label", { className: "search" }, [
      searchIcon,
      el("span", { className: "sr-only" }, ["Search the journal"]),
      el("input", {
        type: "search",
        name: "q",
        placeholder: "Search stories",
        value: params.get("q") || "",
      }),
    ]),
  ]);

  const panel = el("div", { className: "nav-panel", id: "site-nav" }, [links, search]);

  const closeMenu = () => {
    panel.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "Menu";
  };

  toggle.addEventListener("click", () => {
    const open = panel.classList.toggle("is-open");
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.textContent = open ? "Close" : "Menu";
  });

  panel.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  return el("header", { className: "site-header" }, [
    el("div", { className: "site-header__bar wrap--wide" }, [createLogo(), toggle, panel]),
  ]);
}
