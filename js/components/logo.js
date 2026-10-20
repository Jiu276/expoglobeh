import { el } from "../utils/dom.js";
import { icon } from "./icons.js";

/**
 * 可点击返回首页的标志。
 * @returns {HTMLAnchorElement}
 */
export function createLogo() {
  const link = el("a", {
    className: "logo",
    href: "index.html",
    ariaLabel: "expoglobeh, go to homepage",
  });
  const mark = icon("globe");
  mark.classList.add("logo__mark");
  link.append(mark, el("span", { className: "logo__word" }, ["expoglobeh"]));
  return link;
}
