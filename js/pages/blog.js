import { articleMatches, categories, getArticles } from "../data/articles.js";
import { createArticleCard } from "../components/article-card.js";
import { createHero } from "../components/hero.js";
import { createPagination } from "../components/pagination.js";
import { finishPage, mountShell } from "../layout.js";
import { icon } from "../components/icons.js";
import { el, queryParams } from "../utils/dom.js";

const PAGE_SIZE = 4;

/**
 * 渲染带分类、搜索、排序和分页的期刊页。
 */
function renderBlog() {
  mountShell({ active: "blog" });
  const params = queryParams();
  const names = categories.map((category) => category.name);
  const state = {
    q: params.get("q") || "",
    category: names.includes(params.get("category")) ? params.get("category") : "All",
    sort: params.get("sort") === "oldest" ? "oldest" : "newest",
    page: Math.max(1, Number.parseInt(params.get("page") || "1", 10) || 1),
  };

  const main = document.getElementById("main");
  const searchIcon = icon("search");
  searchIcon.setAttribute("aria-hidden", "true");
  const searchInput = el("input", {
    type: "search",
    placeholder: "Search titles, places, products",
    value: state.q,
    ariaLabel: "Search stories",
  });
  const chips = el("div", { className: "chips", role: "group", ariaLabel: "Categories" });
  const sort = el(
    "select",
    { className: "sort", ariaLabel: "Sort stories" },
    [
      el("option", { value: "newest" }, ["Newest first"]),
      el("option", { value: "oldest" }, ["Oldest first"]),
    ],
  );
  sort.value = state.sort;
  const meta = el("p", { className: "results-meta" });
  const results = el("div", { id: "story-results" });

  const board = el("section", { className: "page-pad", id: "stories" }, [
    el("div", { className: "wrap" }, [
      el("div", { className: "tools" }, [
        el("label", { className: "search" }, [searchIcon, searchInput]),
        chips,
        el("div", { className: "tools-row" }, [meta, sort]),
      ]),
      results,
    ]),
  ]);

  main.append(
    createHero({
      compact: true,
      eyebrow: "Journal",
      title: "All the field notes.",
      lede: "Product reviews, platform picks, travel, food, and the quieter lifestyle pieces. Newest dates sit first.",
      image: "assets/images/hero.jpg",
    }),
    board,
  );

  const paintChips = () => {
    chips.replaceChildren(
      ...["All", ...names].map((name) =>
        el("button", {
          type: "button",
          className: name === state.category ? "chip is-active" : "chip",
          ariaPressed: name === state.category ? "true" : "false",
          onClick: () => {
            state.category = name;
            state.page = 1;
            paint();
          },
        }, [name]),
      ),
    );
  };

  const syncUrl = () => {
    const next = new URLSearchParams();
    if (state.q.trim()) next.set("q", state.q.trim());
    if (state.category !== "All") next.set("category", state.category);
    if (state.sort !== "newest") next.set("sort", state.sort);
    if (state.page > 1) next.set("page", String(state.page));
    const query = next.toString();
    history.replaceState(null, "", query ? `blog.html?${query}` : "blog.html");
    const headerInput = document.querySelector(".nav-search input");
    if (headerInput && document.activeElement !== headerInput) headerInput.value = state.q;
  };

  const paint = ({ scroll = false } = {}) => {
    let list = getArticles().filter((article) => articleMatches(article, state.q));
    if (state.category !== "All") list = list.filter((article) => article.category === state.category);
    list.sort((a, b) => {
      const delta = new Date(a.date) - new Date(b.date);
      return state.sort === "oldest" ? delta : -delta;
    });

    const pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
    state.page = Math.min(state.page, pages);
    const start = (state.page - 1) * PAGE_SIZE;
    const visible = list.slice(start, start + PAGE_SIZE);
    meta.textContent = list.length === 1 ? "1 story" : `${list.length} stories`;
    paintChips();
    syncUrl();

    if (!visible.length) {
      results.replaceChildren(
        el("div", { className: "empty" }, [
          el("h2", {}, ["Nothing matches that search."]),
          el("p", {}, ["Try another word, or clear the filters and start again."]),
          el("button", {
            type: "button",
            className: "btn btn--dark",
            onClick: () => {
              state.q = "";
              state.category = "All";
              state.sort = "newest";
              state.page = 1;
              searchInput.value = "";
              sort.value = "newest";
              paint();
            },
          }, ["Clear filters"]),
        ]),
      );
    } else {
      const pagination = createPagination({
        page: state.page,
        pages,
        onPage: (page) => {
          state.page = page;
          paint({ scroll: true });
        },
      });
      results.replaceChildren(
        el("div", { className: "card-grid" }, visible.map((article) => createArticleCard(article))),
        ...(pagination ? [pagination] : []),
      );
    }

    if (scroll) board.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  let timer = 0;
  searchInput.addEventListener("input", () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      state.q = searchInput.value;
      state.page = 1;
      paint();
    }, 160);
  });
  sort.addEventListener("change", () => {
    state.sort = sort.value;
    state.page = 1;
    paint();
  });

  paint();
  finishPage(main);
}

renderBlog();
