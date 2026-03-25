import DefaultTheme from 'vitepress/theme';
import { defineAsyncComponent, h } from 'vue';

import './variables.css';
import './main.css';
import 'virtual:group-icons.css';
import { getRedirectPath } from './redirect.js';

import type { Theme } from 'vitepress';

const ApiOutline = defineAsyncComponent(() => import('../../components/ApiOutline.vue'));
const CarbonAds = defineAsyncComponent(() => import('../../components/CarbonAds.vue'));
const ModuleIndex = defineAsyncComponent(() => import('../../components/ModuleIndex.vue'));
const StatusContent = defineAsyncComponent(() => import('../../components/StatusContent.vue'));
const TesterContent = defineAsyncComponent(() => import('../../components/TesterContent.vue'));

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
    app.component('ApiOutline', ApiOutline);

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
