import { getArticle } from "../data/articles.js";
import { getProduct, products } from "../data/products.js";
import { createProductCard } from "../components/product-card.js";
import { createSectionHead } from "../components/section-head.js";
import { finishPage, mountShell } from "../layout.js";
import { el, queryParams } from "../utils/dom.js";
import { formatPrice } from "../utils/format.js";

/**
 * 渲染产品详情。
 */
function renderProduct() {
  mountShell({ active: "products" });
  const product = getProduct(queryParams().get("slug") || "");
  const main = document.getElementById("main");

  if (!product) {
    document.title = "Product not found · expoglobeh";
    main.append(
      el("section", { className: "page-pad" }, [
        el("div", { className: "wrap empty" }, [
          el("h2", {}, ["That product is not on the shelf."]),
          el("p", {}, ["The rest of the recommendations are still here."]),
          el("a", { className: "btn btn--dark", href: "products.html" }, ["Browse products"]),
        ]),
      ]),
    );
    finishPage(main);
    return;
  }

  document.title = `${product.name} · expoglobeh`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", product.summary);

  const photo = el("img", { className: "product-photo", src: product.image, alt: product.name });
  const review = getArticle(product.reviewSlug);
  const others = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  const thumbs = el(
    "div",
    { className: "thumbs" },
    product.gallery.map((src, index) =>
      el("button", {
        type: "button",
        className: index === 0 ? "is-active" : "",
        ariaLabel: `Show photo ${index + 1} of ${product.name}`,
        onClick: (event) => {
          photo.src = src;
          thumbs.querySelectorAll("button").forEach((button) => button.classList.remove("is-active"));
          event.currentTarget.classList.add("is-active");
        },
      }, [el("img", { src, alt: "" })]),
    ),
  );

  main.append(
    el("section", { className: "page-pad" }, [
      el("div", { className: "wrap product-layout" }, [
        el("div", {}, [photo, thumbs]),
        el("div", { className: "product-copy" }, [
          el("nav", { className: "crumbs", ariaLabel: "Breadcrumb" }, [
            el("a", { href: "index.html" }, ["Home"]),
            el("span", { ariaHidden: "true" }, ["/"]),
            el("a", { href: "products.html" }, ["Products"]),
            el("span", { ariaHidden: "true" }, ["/"]),
            el("span", {}, [product.category]),
          ]),
          el("p", { className: "eyebrow" }, [product.category]),
          el("h1", {}, [product.name]),
          el("p", { className: "price" }, [formatPrice(product.price)]),
          el("p", { className: "lede" }, [product.summary]),
          ...product.description.map((paragraph) => el("p", {}, [paragraph])),
          review
            ? el("a", { className: "btn btn--dark", href: `article.html?slug=${review.slug}` }, ["Read the full review"])
            : null,
        ]),
      ]),
    ]),
    el("section", { className: "section band", dataset: { reveal: "" } }, [
      el("div", { className: "wrap detail-card" }, [
        el("h2", {}, ["Details"]),
        el("table", { className: "specs" }, [
          el("tbody", {}, product.specs.map((spec) => el("tr", {}, [el("th", { scope: "row" }, [spec.label]), el("td", {}, [spec.value])]))),
        ]),
      ]),
    ]),
    el("section", { className: "section", dataset: { reveal: "" } }, [
      el("div", { className: "wrap" }, [
        createSectionHead({ eyebrow: "Also on the shelf", title: "More products", link: { href: "products.html", label: "All products" } }),
        el("div", { className: "product-grid" }, others.map((item) => createProductCard(item))),
      ]),
    ]),
  );

  finishPage(main);
}

renderProduct();
