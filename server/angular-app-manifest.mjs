
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://jarol20cb.github.io/El-vivero-de-Jey/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/El-vivero-de-Jey"
  },
  {
    "renderMode": 2,
    "redirectTo": "/El-vivero-de-Jey",
    "route": "/El-vivero-de-Jey/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1079, hash: '8132fd5247e4aed6ffd79ac16222262e1def4db45ae771635048489e42cded5b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1059, hash: '27fd0cad999201f1815a0b2e66c9b3a255d9186336d9af1945eac1ff36bdb155', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14398, hash: '5e4db81c579901bd4f7c72a44e062c59eba0737a81b05876634401184fca38ef', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-6VWCJWEC.css': {size: 420, hash: 'jNcR6GYJimM', text: () => import('./assets-chunks/styles-6VWCJWEC_css.mjs').then(m => m.default)}
  },
};
