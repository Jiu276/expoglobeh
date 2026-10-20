import { el } from "../utils/dom.js";
import { icon } from "./icons.js";

/**
 * 挂载返回顶部按钮。
 */
export function mountBackToTop() {
  if (document.querySelector(".to-top")) return;

  const button = el("button", { className: "to-top", type: "button", ariaLabel: "Back to top" }, [icon("arrowUp")]);
  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const onScroll = () => {
    button.classList.toggle("is-visible", window.scrollY > 480);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  document.body.append(button);
}
