import { el } from "../utils/dom.js";

/**
 * 分页控件。不足两页时不渲染。
 * @param {{ page: number, pages: number, onPage: (page: number) => void }} options
 * @returns {HTMLElement|null}
 */
export function createPagination({ page, pages, onPage }) {
  if (pages <= 1) return null;

  const buttons = [];
  buttons.push(
    el("button", { type: "button", disabled: page === 1, onClick: () => onPage(page - 1) }, ["Previous"]),
  );

  for (let index = 1; index <= pages; index += 1) {
    buttons.push(
      el("button", {
        type: "button",
        className: index === page ? "is-current" : "",
        ariaCurrent: index === page ? "page" : null,
        onClick: () => onPage(index),
      }, [String(index)]),
    );
  }

  buttons.push(
    el("button", { type: "button", disabled: page === pages, onClick: () => onPage(page + 1) }, ["Next"]),
  );

  return el("nav", { className: "pagination", ariaLabel: "Pagination" }, buttons);
}
