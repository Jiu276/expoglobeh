import { el } from "../utils/dom.js";
import { formatPrice } from "../utils/format.js";

/**
 * 产品卡片。
 * @param {import("../data/products.js").Product} product
 * @returns {HTMLElement}
 */
export function createProductCard(product) {
  return el("article", { className: "product-card" }, [
    el("a", { className: "product-card__media", href: `product.html?slug=${product.slug}` }, [
      el("img", { src: product.image, alt: product.name, loading: "lazy" }),
    ]),
    el("div", { className: "product-card__body" }, [
      el("p", { className: "kicker" }, [el("span", {}, [product.category])]),
      el("h3", {}, [el("a", { href: `product.html?slug=${product.slug}` }, [product.name])]),
      el("p", { className: "excerpt" }, [product.summary]),
      el("p", { className: "price" }, [formatPrice(product.price)]),
    ]),
  ]);
}
