import { socialLinks } from "../data/site.js";
import { el } from "../utils/dom.js";
import { icon } from "./icons.js";

/**
 * 一组可跳转的社交媒体图标。
 * @param {{ className?: string }} [options]
 * @returns {HTMLElement}
 */
export function createSocialList({ className = "social" } = {}) {
  return el(
    "ul",
    { className },
    socialLinks.map((item) => {
      const mark = icon(item.icon);
      mark.setAttribute("aria-hidden", "true");
      return el("li", {}, [
        el("a", { href: item.href, target: "_blank", rel: "noopener noreferrer" }, [
          mark,
          el("span", { className: "sr-only" }, [item.name]),
        ]),
      ]);
    }),
  );
}

/**
 * 带说明的社交媒体小部件。
 * @returns {HTMLElement}
 */
export function createSocialWidget() {
  return el("aside", { className: "social-widget" }, [
    el("p", { className: "eyebrow" }, ["Elsewhere"]),
    el("h2", {}, ["Follow the desk"]),
    el("p", {}, ["Notes on products, platforms, and the weeks in between. The icons open the real networks."]),
    createSocialList(),
  ]);
}
