import { lazy } from "preact/compat";

const lazyLoadPromiseCache = new Map();

function createStylesheet(href) {
  return new Promise((resolve, reject) => {
    const stylesheet = document.createElement("link");
    stylesheet.href = href;
    stylesheet.rel = "stylesheet";
    stylesheet.type = "text/css";
    stylesheet.onload = () => {
      resolve();
    };
    stylesheet.onerror = () => {
      reject(new Error("failed to load stylesheet"));
    };
    document.head.appendChild(stylesheet);
  });
}

export function ensureStylesheet(href) {
  lazyLoadPromiseCache.set(href, createStylesheet(href));
  return function (component) {
    return lazy(() => lazyLoadPromiseCache.get(href).then(() => component));
  };
}

export function withStylesheet(href, component) {
  return ensureStylesheet(href)(component);
}
