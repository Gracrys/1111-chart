import App from './svelte/App.svelte';


const app = new App({
  target: document.body,
  props: {
  },
});

if (module.hot) {
  module.hot.accept()
}

export default app