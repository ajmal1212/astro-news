globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DC2_D5vR.mjs';
import { manifest } from './manifest_2pTCfnIv.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/404.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/articles/_id_.astro.mjs');
const _page3 = () => import('./pages/articles/_page_.astro.mjs');
const _page4 = () => import('./pages/articles.astro.mjs');
const _page5 = () => import('./pages/authors/_id_/_page_.astro.mjs');
const _page6 = () => import('./pages/authors/_id_.astro.mjs');
const _page7 = () => import('./pages/authors.astro.mjs');
const _page8 = () => import('./pages/categories/_category_/_page_.astro.mjs');
const _page9 = () => import('./pages/categories/_category_.astro.mjs');
const _page10 = () => import('./pages/categories.astro.mjs');
const _page11 = () => import('./pages/rss.xml.astro.mjs');
const _page12 = () => import('./pages/search.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/404.astro", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/articles/[id].astro", _page2],
    ["src/pages/articles/[page].astro", _page3],
    ["src/pages/articles/index.astro", _page4],
    ["src/pages/authors/[id]/[page].astro", _page5],
    ["src/pages/authors/[id]/index.astro", _page6],
    ["src/pages/authors/index.astro", _page7],
    ["src/pages/categories/[category]/[page].astro", _page8],
    ["src/pages/categories/[category]/index.astro", _page9],
    ["src/pages/categories/index.astro", _page10],
    ["src/pages/rss.xml.js", _page11],
    ["src/pages/search/index.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
