
export default {
  basePath: '/Digital-Art-Gallery',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
