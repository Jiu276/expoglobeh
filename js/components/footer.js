import { site } from "../data/site.js";
import { el } from "../utils/dom.js";
import { createLogo } from "./logo.js";
import { createSocialList } from "./social.js";

/**
 * 创建页脚，含导航与社交图标。
 * @returns {HTMLElement}
 */
export function createFooter() {
  const explore = el("div", {}, [
    el("h2", {}, ["Explore"]),
    el("ul", { className: "footer-links" }, site.nav.map((item) => el("li", {}, [el("a", { href: item.href }, [item.label])]))),
  ]);

  return el("footer", { className: "site-footer" }, [
    el("div", { className: "wrap--wide footer-grid" }, [
      el("div", {}, [
        createLogo(),
        el("p", {}, [site.tagline]),
      ]),
      explore,
      el("div", {}, [
        el("h2", {}, ["Follow"]),
        el("p", {}, ["The icons leave this site and open each network."]),
        createSocialList(),
      ]),
    ]),
    el("div", { className: "wrap--wide footer-base" }, [
      el("span", {}, [`© ${new Date().getFullYear()} expoglobeh`]),
      el("span", {}, ["Photographs via Unsplash."]),
    ]),
  ]);
}
