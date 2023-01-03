import Vue from 'vue';

Vue.use(function () {
  const darkMode = {
    state: Vue.observable({ theme: 'light' }),
    update(event) {
      if (event.matches) {
        darkMode.state.theme = 'dark';
      } else {
        darkMode.state.theme = 'light';
      }
    },
  };

  if (process.browser && window.matchMedia) {
    const darkQuery = '(prefers-color-scheme: dark)';
    darkMode.update(window.matchMedia(darkQuery));
    window.matchMedia(darkQuery).addEventListener('change', darkMode.update);
  }

  Vue.prototype.$darkMode = darkMode.state;
});
