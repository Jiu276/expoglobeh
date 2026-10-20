import { categories, getArticles } from "../data/articles.js";
import { products } from "../data/products.js";
import { createArticleCard } from "../components/article-card.js";
import { createHero } from "../components/hero.js";
import { createProductCard } from "../components/product-card.js";
import { createSectionHead } from "../components/section-head.js";
import { finishPage, mountShell } from "../layout.js";
import { el } from "../utils/dom.js";
import { formatDate } from "../utils/format.js";

/**
 * 渲染落地首页。
 */
function renderHome() {
  mountShell({ active: "home" });
  const stories = getArticles();
  const main = document.getElementById("main");
  const featured = stories.slice(0, 3);
  const rest = stories.slice(3);

  const featureGrid = el("div", { className: "feature-grid" }, featured.map((article) => createArticleCard(article)));
  const categoryGrid = el(
    "div",
    { className: "category-grid" },
    categories.map((category) =>
      el("a", { className: "category-tile", href: `blog.html?category=${encodeURIComponent(category.name)}` }, [
        el("img", { src: category.image, alt: "" }),
        el("div", {}, [el("strong", {}, [category.name]), el("span", {}, [category.blurb])]),
      ]),
    ),
  );

  const index = el(
    "div",
    { className: "index-list" },
    rest.map((article) =>
      el("a", { className: "index-row", href: `article.html?slug=${article.slug}` }, [
        el("time", { dateTime: article.date }, [formatDate(article.date)]),
        el("em", {}, [article.category]),
        el("h3", {}, [article.title]),
      ]),
    ),
  );

  main.append(
    createHero({
      eyebrow: "Field notes · Est. 2025",
      title: "Things worth keeping.",
      lede: "expoglobeh is an English journal of product reviews, platform picks, and the meals and cities that earn a place in an ordinary week.",
      image: "assets/images/hero.jpg",
      actions: [
        { href: "blog.html", label: "Read the journal" },
        { href: "products.html", label: "Browse products", variant: "ghost" },
      ],
    }),
    el("section", { className: "section--tight" }, [
      el("div", { className: "wrap stats" }, [
        el("div", { className: "stat" }, [el("strong", {}, [String(stories.length)]), el("span", {}, ["stories, newest first"])]),
        el("div", { className: "stat" }, [el("strong", {}, [String(categories.length)]), el("span", {}, ["categories on the desk"])]),
        el("div", { className: "stat" }, [el("strong", {}, [String(products.length)]), el("span", {}, ["products with a full note"])]),
      ]),
    ]),
    el("section", { className: "section", dataset: { reveal: "" } }, [
      el("div", { className: "wrap" }, [
        createSectionHead({
          eyebrow: "Journal",
          title: "From the latest notes",
          link: { href: "blog.html", label: "All stories" },
        }),
        featureGrid,
      ]),
    ]),
    el("section", { className: "section band", dataset: { reveal: "" } }, [
      el("div", { className: "wrap" }, [
        createSectionHead({ eyebrow: "Browse", title: "Five ways in" }),
        categoryGrid,
      ]),
    ]),
    el("section", { className: "section", dataset: { reveal: "" } }, [
      el("div", { className: "wrap" }, [
        createSectionHead({
          eyebrow: "Shelf",
          title: "Products we kept",
          link: { href: "products.html", label: "See the shelf" },
        }),
        el("div", { className: "product-grid" }, products.slice(0, 3).map((product) => createProductCard(product))),
      ]),
    ]),
    el("section", { className: "section band", dataset: { reveal: "" } }, [
      el("div", { className: "wrap split" }, [
        el("img", { src: "assets/images/ridge.jpg", alt: "A ridge in warm dawn light above a layer of fog" }),
        el("div", { className: "stack" }, [
          el("p", { className: "eyebrow" }, ["About the desk"]),
          el("h2", {}, ["Edited slowly, on purpose."]),
          el("p", { className: "lede" }, ["We test objects and platforms in the weeks they actually have to survive. The notes run from April 2025 through May 2026."]),
          el("a", { className: "btn btn--dark", href: "about.html" }, ["Read about expoglobeh"]),
        ]),
      ]),
    ]),
    el("section", { className: "section", dataset: { reveal: "" } }, [
      el("div", { className: "wrap" }, [
        createSectionHead({ eyebrow: "Archive", title: "The rest of the shelf" }),
        index,
      ]),
    ]),
  );

  finishPage(main);
}

renderHome();
