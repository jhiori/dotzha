
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 33134, hash: 'ddedcafe126e358a1458bbd43c2028f0fb92e9ea6298bf5abf3c2d2c2854c583', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25970, hash: 'dd7d7e1af17db05f251e5af34ea385a77f044cc1ce4b0be1bd6ae48c2533ca90', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 46132, hash: '0725be39c43381ae52d2fb39f912432cbca0ce4e8e36be2826bd0bd2afd8112d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-KBMUQMBO.css': {size: 7745, hash: '9J9XcLCiEIw', text: () => import('./assets-chunks/styles-KBMUQMBO_css.mjs').then(m => m.default)}
  },
};
