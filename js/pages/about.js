import { createHero } from "../components/hero.js";
import { createSocialWidget } from "../components/social.js";
import { finishPage, mountShell } from "../layout.js";
import { el } from "../utils/dom.js";

const principles = [
  {
    title: "Live with it",
    text: "A weekend unboxing is not a review. We keep the object through ordinary errands, late trains, and at least one bad mood.",
  },
  {
    title: "Name the job",
    text: "Platforms and products get one job each. If a tool needs a tour before it can remember a sentence, it does not get the recommendation.",
  },
  {
    title: "Leave the price visible",
    text: "The figure on the shelf is what we paid or the going rate when the note was edited. No mystery bundles.",
  },
];

/**
 * 渲染关于页。
 */
function renderAbout() {
  mountShell({ active: "about" });
  const main = document.getElementById("main");

  main.append(
    createHero({
      compact: true,
      eyebrow: "About",
      title: "A small journal with a long view.",
      lede: "expoglobeh started as a shared desk for people who were tired of reviews written before the box was recycled.",
      image: "assets/images/ridge.jpg",
    }),
    el("section", { className: "section" }, [
      el("div", { className: "wrap split" }, [
        el("div", { className: "stack" }, [
          el("p", { className: "eyebrow" }, ["The desk"]),
          el("h2", {}, ["Edited between kitchens, trains, and one very steep city."]),
          el("p", {}, ["The name is a promise about scale, not a claim about being everywhere. We write in English about things that can be held, opened, cooked, or walked through. The archive on this site runs from April 2025 to May 2026: ten notes, six products, and no urgency to publish a sixth thing on a quiet week."]),
          el("p", {}, ["Mara tests objects. Jonah lives in the platforms. Leila takes the trips and the weeknight meals. Adrian watches how a room behaves after dark. We edit each other, which mostly means cutting the sentence that sounds like an advertisement."]),
        ]),
        el("img", { className: "about-photo", src: "assets/images/team.jpg", alt: "Four people working together around a wooden table with laptops" }),
      ]),
    ]),
    el("section", { className: "section band", dataset: { reveal: "" } }, [
      el("div", { className: "wrap" }, [
        el("div", { className: "section-head" }, [
          el("div", {}, [el("p", { className: "eyebrow" }, ["How a note gets in"]), el("h2", {}, ["Three rules"])]),
        ]),
        el("div", { className: "principles" }, principles.map((item) => el("article", { className: "principle" }, [el("h3", {}, [item.title]), el("p", {}, [item.text])]))),
      ]),
    ]),
    el("section", { className: "section" }, [
      el("div", { className: "wrap split" }, [
        el("img", { src: "assets/images/desk.jpg", alt: "A long, quiet office corridor with a kitchen at the side" }),
        el("div", { className: "stack" }, [
          createSocialWidget(),
          el("a", { className: "btn btn--dark", href: "contact.html" }, ["Write to the desk"]),
        ]),
      ]),
    ]),
  );

  finishPage(main);
}

renderAbout();
