import { createFooter } from "./components/footer.js";
import { createHeader } from "./components/header.js";
import { mountBackToTop } from "./components/back-to-top.js";
import { bindHeaderScroll, observeReveals } from "./utils/motion.js";

/**
 * 挂载页头、页脚与返回顶部。
 * @param {{ active: string }} options
 */
export function mountShell({ active }) {
  document.getElementById("site-header").replaceChildren(createHeader({ active }));
  document.getElementById("site-footer").replaceChildren(createFooter());
  mountBackToTop();
  bindHeaderScroll();
}

/**
 * 页面内容写入后统一开启动画。
 * @param {ParentNode} [root]
 */
export function finishPage(root = document) {
  observeReveals(root);
}
