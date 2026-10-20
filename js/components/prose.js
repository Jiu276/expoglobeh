import { el } from "../utils/dom.js";

/**
 * 渲染文章正文块。
 * @param {import("../data/articles.js").Block[]} blocks
 * @returns {HTMLElement}
 */
export function createProse(blocks) {
  return el(
    "div",
    { className: "prose" },
    blocks.map((block) => {
      if (block.type === "h2") return el("h2", {}, [block.text]);
      if (block.type === "quote") return el("blockquote", {}, [el("p", {}, [block.text])]);
      if (block.type === "ul") return el("ul", {}, block.items.map((item) => el("li", {}, [item])));
      if (block.type === "image") {
        return el("figure", { className: "prose-figure" }, [
          el("img", { src: block.src, alt: block.alt, loading: "lazy" }),
          el("figcaption", {}, [block.caption]),
        ]);
      }
      return el("p", {}, [block.text]);
    }),
  );
}
