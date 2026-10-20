import { getProductCategories, products } from "../data/products.js";
import { createHero } from "../components/hero.js";
import { createProductCard } from "../components/product-card.js";
import { finishPage, mountShell } from "../layout.js";
import { el } from "../utils/dom.js";

/**
 * 渲染产品列表。
 */
function renderProducts() {
  mountShell({ active: "products" });
  const categories = ["All", ...getProductCategories()];
  let current = "All";
  const chips = el("div", { className: "chips", role: "group", ariaLabel: "Product categories" });
  const grid = el("div", { className: "product-grid" });
  const main = document.getElementById("main");

  const paint = () => {
    const visible = current === "All" ? products : products.filter((product) => product.category === current);
    chips.replaceChildren(
      ...categories.map((name) =>
        el("button", {
          type: "button",
          className: name === current ? "chip is-active" : "chip",
          ariaPressed: name === current ? "true" : "false",
          onClick: () => {
            current = name;
            paint();
          },
        }, [name]),
      ),
    );
    grid.replaceChildren(...visible.map((product) => createProductCard(product)));
  };

  main.append(
    createHero({
      compact: true,
      eyebrow: "Shelf",
      title: "Objects with a paper trail.",
      lede: "Each product has a photograph, a plain description, and the field note that explains why it stayed.",
      image: "assets/images/desk-setup.jpg",
    }),
    el("section", { className: "page-pad" }, [
      el("div", { className: "wrap stack" }, [chips, grid]),
    ]),
  );

  paint();
  finishPage(main);
}

renderProducts();
