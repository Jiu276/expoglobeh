const ICONS = {
  instagram:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3.5"/><circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14.7 10.4 20.4 4h-1.4l-5 5.7L10 4H4.6l6 8.7L4.6 20h1.4l5.3-6.1L14.6 20H20l-5.3-9.6Zm-1.9 2.2-.6-.9-4.9-7h2.1l4 5.7.6.9 5.1 7.3h-2.1l-4.2-6Z"/></svg>',
  youtube:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="3"/><path d="m11 10 4 2-4 2v-4Z" fill="currentColor" stroke="none"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.7 9.3H4.2V19h2.5V9.3ZM5.4 4.6A1.5 1.5 0 1 0 5.5 7.6 1.5 1.5 0 0 0 5.4 4.6ZM19.8 19h-2.5v-5.1c0-1.4-.5-2.3-1.7-2.3a1.8 1.8 0 0 0-1.7 1.2c-.1.2-.1.6-.1.9V19H11.3s.1-8.5 0-9.7h2.5v1.5c.3-.6 1.1-1.7 2.8-1.7 2 0 3.2 1.3 3.2 4.1V19Z"/></svg>',
  pinterest:
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3.5A8.5 8.5 0 0 0 8 19.6c0-.7.1-1.6.4-2.4l1.5-6.2s-.4-.8-.4-1.9c0-1.8 1-3.1 2.3-3.1 1.1 0 1.6.8 1.6 1.8 0 1.1-.7 2.7-1.1 4.2-.3 1.3.6 2.3 1.9 2.3 2.3 0 3.8-2.9 3.8-6.4 0-2.6-1.8-4.6-5-4.6A5.3 5.3 0 0 0 6.6 9.3c0 1.1.3 1.9.8 2.5.1.1.2.2.1.4l-.3 1c0 .2-.2.2-.4.1-1.3-.5-1.9-2-1.9-3.6 0-2.7 2.3-5.9 6.8-5.9 3.6 0 6 2.6 6 5.4 0 3.7-2.1 6.5-5.1 6.5-1 0-2-.5-2.3-1.2l-.6 2.4a8.6 8.6 0 0 1-1 .4A8.5 8.5 0 1 0 12 3.5Z"/></svg>',
  search:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/></svg>',
  arrowUp:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 18V7"/><path d="m7 11 5-5 5 5"/></svg>',
  globe:
    '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="16" cy="16" r="11"/><ellipse cx="16" cy="16" rx="5.5" ry="11"/><path d="M5 16h22M7 11.5h18M7 20.5h18"/></svg>',
};

/**
 * 返回一个内联图标节点。
 * @param {keyof typeof ICONS} name
 * @returns {HTMLElement}
 */
export function icon(name) {
  const wrap = document.createElement("span");
  wrap.className = "icon";
  wrap.innerHTML = ICONS[name] || "";
  return wrap;
}
