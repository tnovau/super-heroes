const workboxBuild = require("workbox-build");

const buildSW = () => workboxBuild.injectManifest({
  swSrc: './src/sw-custom.js',
  swDest: "./build/sw.js",
  globDirectory: "./build",
  globPatterns: ["**/*.{js,css,html,png,svg,ico,json}"],
  maximumFileSizeToCacheInBytes: 5 * 1024 * 102
}).then(result => {
  const { count, size, warnings } = result;
  warnings.forEach(console.warn);
  console.info(`${count} files will be precached, totaling ${size/(1024 * 1024)} MBs.`);
}).catch(err => {
  console.log(err)
});

(async () => await buildSW())();