// svelte.config.js
const svelte = require('svelte');
const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess({
    // ...svelte-preprocess options
    pug: {},
    sass: {},
    typescript: {}
  }),
  // ...other svelte options
};