
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/docs/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/docs"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 33139, hash: '2ca505b0ec5234bb22147936aa992ae265baf9fccbcb86883fa088715018e0ff', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25975, hash: '9134d7d9761dd9d431703f9d3677b657c45ad6f07df722e3e2ce0c3fcfb397b3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 46137, hash: '802d6530ad64297218c18e3b2d2087e195aab54ca9909f92c90712bf5b304801', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-KBMUQMBO.css': {size: 7745, hash: '9J9XcLCiEIw', text: () => import('./assets-chunks/styles-KBMUQMBO_css.mjs').then(m => m.default)}
  },
};
