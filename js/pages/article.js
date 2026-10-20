import { getArticle, getRelatedArticles } from "../data/articles.js";
import { getProduct } from "../data/products.js";
import { createArticleCard } from "../components/article-card.js";
import { createProductCard } from "../components/product-card.js";
import { createProse } from "../components/prose.js";
import { createSectionHead } from "../components/section-head.js";
import { finishPage, mountShell } from "../layout.js";
import { el, queryParams } from "../utils/dom.js";
import { formatDate } from "../utils/format.js";

/**
 * 挂载文章阅读进度条。
 */
function mountProgress() {
  const fill = el("span");
  const bar = el("div", { className: "progress", ariaHidden: "true" }, [fill]);
  document.body.append(bar);
  const onScroll = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    fill.style.width = `${height > 0 ? (window.scrollY / height) * 100 : 0}%`;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/**
 * 文章不存在时的提示。
 * @returns {HTMLElement}
 */
function missingStory() {
  return el("section", { className: "page-pad" }, [
    el("div", { className: "wrap empty" }, [
      el("h2", {}, ["That story is not on the desk."]),
      el("p", {}, ["It may have moved. The journal still has the rest of the notes."]),
      el("a", { className: "btn btn--dark", href: "blog.html" }, ["Back to the journal"]),
    ]),
  ]);
}

/**
 * 渲染文章详情。
 */
function renderArticle() {
  mountShell({ active: "blog" });
  const article = getArticle(queryParams().get("slug") || "");
  const main = document.getElementById("main");

  if (!article) {
    document.title = "Story not found · expoglobeh";
    main.append(missingStory());
    finishPage(main);
    return;
  }

  document.title = `${article.title} · expoglobeh`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute("content", article.excerpt);

  const mentioned = article.products.map((slug) => getProduct(slug)).filter(Boolean);
  const related = getRelatedArticles(article, 3);

  main.append(
    el("article", { className: "page-pad" }, [
      el("header", { className: "article-top" }, [
        el("nav", { className: "crumbs", ariaLabel: "Breadcrumb" }, [
          el("a", { href: "index.html" }, ["Home"]),
          el("span", { ariaHidden: "true" }, ["/"]),
          el("a", { href: "blog.html" }, ["Journal"]),
          el("span", { ariaHidden: "true" }, ["/"]),
          el("span", {}, [article.category]),
        ]),
        el("p", { className: "kicker" }, [
          el("a", { href: `blog.html?category=${encodeURIComponent(article.category)}` }, [article.category]),
          el("time", { dateTime: article.date }, [formatDate(article.date)]),
        ]),
        el("h1", {}, [article.title]),
        el("p", { className: "lede" }, [article.excerpt]),
        el("p", { className: "byline" }, [`${article.author.name}, ${article.author.role} · ${article.readTime}`]),
      ]),
      el("figure", { className: "article-cover" }, [
        el("img", { src: article.cover, alt: article.coverAlt }),
      ]),
      createProse(article.blocks),
      el("div", { className: "article-end stack" }, [
        el("div", { className: "tags" }, article.tags.map((tag) => el("a", { href: `blog.html?q=${encodeURIComponent(tag)}` }, [tag]))),
      ]),
    ]),
  );

  if (mentioned.length) {
    main.append(
      el("section", { className: "section band", dataset: { reveal: "" } }, [
        el("div", { className: "wrap" }, [
          createSectionHead({ eyebrow: "Shelf", title: "Mentioned in this note" }),
          el("div", { className: "product-grid" }, mentioned.map((product) => createProductCard(product))),
        ]),
      ]),
    );
  }

  main.append(
    el("section", { className: "section", dataset: { reveal: "" } }, [
      el("div", { className: "wrap" }, [
        createSectionHead({ eyebrow: "Continue", title: "More from the journal", link: { href: "blog.html", label: "All stories" } }),
        el("div", { className: "card-grid" }, related.map((item) => createArticleCard(item))),
      ]),
    ]),
  );

  mountProgress();
  finishPage(main);
}

renderArticle();
