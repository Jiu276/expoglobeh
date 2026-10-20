import { el } from "../utils/dom.js";
import { formatDate } from "../utils/format.js";

/**
 * 文章卡片。
 * @param {import("../data/articles.js").Article} article
 * @returns {HTMLElement}
 */
export function createArticleCard(article) {
  return el("article", { className: "story-card" }, [
    el("a", { className: "story-card__media", href: `article.html?slug=${article.slug}` }, [
      el("img", { src: article.cover, alt: article.coverAlt, loading: "lazy" }),
    ]),
    el("div", { className: "story-card__body" }, [
      el("p", { className: "kicker" }, [
        el("a", { href: `blog.html?category=${encodeURIComponent(article.category)}` }, [article.category]),
        el("time", { dateTime: article.date }, [formatDate(article.date)]),
      ]),
      el("h3", {}, [el("a", { href: `article.html?slug=${article.slug}` }, [article.title])]),
      el("p", { className: "excerpt" }, [article.excerpt]),
      el("p", { className: "byline" }, [`${article.author.name} · ${article.readTime}`]),
    ]),
  ]);
}
