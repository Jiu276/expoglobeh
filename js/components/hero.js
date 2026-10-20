import { el } from "../utils/dom.js";

/**
 * 创建以图片为背景的首屏。
 * @param {{ eyebrow?: string, title: string, lede?: string, image: string, actions?: { href: string, label: string, variant?: string }[], compact?: boolean }} options
 * @returns {HTMLElement}
 */
export function createHero({ eyebrow, title, lede, image, actions = [], compact = false }) {
  const section = el("section", { className: compact ? "hero hero--compact" : "hero" });
  section.style.backgroundImage = `linear-gradient(180deg, rgba(18, 22, 18, 0.18) 0%, rgba(18, 22, 18, 0.72) 78%), url("${image}")`;

  section.append(
    el("div", { className: "wrap hero__content" }, [
      eyebrow ? el("p", { className: "eyebrow" }, [eyebrow]) : null,
      el("h1", {}, [title]),
      lede ? el("p", { className: "lede" }, [lede]) : null,
      actions.length
        ? el(
            "div",
            { className: "hero__actions" },
            actions.map((action) =>
              el("a", { className: action.variant === "ghost" ? "btn btn--ghost" : "btn", href: action.href }, [action.label]),
            ),
          )
        : null,
    ]),
  );

  return section;
}
