/**
 * 创建元素并挂上属性与子节点。
 * @param {string} tag
 * @param {Record<string, unknown>} [attrs]
 * @param {Array<Node|string|null|false|undefined>} [children]
 * @returns {HTMLElement}
 */
export function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);

  Object.entries(attrs).forEach(([key, value]) => {
    if (value == null || value === false) return;

    if (key === "className") {
      node.className = String(value);
      return;
    }

    if (key === "dataset" && typeof value === "object") {
      Object.entries(value).forEach(([name, item]) => {
        node.dataset[name] = String(item);
      });
      return;
    }

    if (key.startsWith("on") && typeof value === "function") {
      node.addEventListener(key.slice(2).toLowerCase(), value);
      return;
    }

    const attrNames = { htmlFor: "for", tabIndex: "tabindex" };
    const attr = attrNames[key] || key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
    node.setAttribute(attr, value === true ? "" : String(value));
  });

  children.flat().forEach((child) => {
    if (child == null || child === false) return;
    node.append(child instanceof Node ? child : document.createTextNode(String(child)));
  });

  return node;
}

/**
 * 读取当前地址栏参数。
 * @returns {URLSearchParams}
 */
export function queryParams() {
  return new URLSearchParams(window.location.search);
}
