import DefaultTheme from 'vitepress/theme';
import { h } from 'vue';

import './variables.css';
import './main.css';
import 'virtual:group-icons.css';
import CarbonAds from '../../components/CarbonAds.vue';
import ModuleIndex from '../../components/ModuleIndex.vue';
import StatusContent from '../../components/StatusContent.vue';
import TesterContent from '../../components/TesterContent.vue';
import { getRedirectPath } from './redirect.js';

import type { Theme } from 'vitepress';

export default {
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'sidebar-nav-after': () => h(CarbonAds),
    });
  },
  enhanceApp({ app, router }) {
    app.component('ModuleIndex', ModuleIndex);
    app.component('StatusContent', StatusContent);
    app.component('TesterContent', TesterContent);

    if (typeof window !== 'undefined') {
      router.onBeforeRouteChange = (to) => {
        const target = getRedirectPath(to);
        if (target) {
          router.go(target);
          return false;
        }
      };

      const initialTarget = getRedirectPath(window.location.pathname);
      if (initialTarget) {
        router.go(initialTarget);
      }
    }
  },
  extends: DefaultTheme,
} satisfies Theme;
