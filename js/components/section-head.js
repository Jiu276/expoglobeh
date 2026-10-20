import { el } from "../utils/dom.js";

/**
 * 区块标题，可选右侧链接。
 * @param {{ eyebrow?: string, title: string, link?: { href: string, label: string } }} options
 * @returns {HTMLElement}
 */
export function createSectionHead({ eyebrow, title, link }) {
  return el("div", { className: "section-head" }, [
    el("div", {}, [
      eyebrow ? el("p", { className: "eyebrow" }, [eyebrow]) : null,
      el("h2", {}, [title]),
    ]),
    link ? el("a", { className: "text-link", href: link.href }, [link.label]) : null,
  ]);
}
