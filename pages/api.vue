<template>
  <SlotLayout>
    <template #header>
      <TopNav class="header" />
    </template>

    <template #sidebar>
      <ApiNav
        class="sidebar"
        :menu="menu"
        :current="currentSection"
        :version="version"
        :versions="versions"
        @version-change="onVersionChange"
      />
    </template>

    <template #main>
      <div class="main" @scroll="apiScroll">
        <div class="mobile-header">
          <ApiNavHeader
            :version="version"
            :versions="versions"
            @version-change="onVersionChange"
          />
        </div>
        <div ref="documentation" class="documentation">
          <MarkdownContainer
            :md="htmlDisplay"
            @content-changed="collectHeaders"
          />
        </div>
      </div>
    </template>
  </SlotLayout>
</template>

<script>
import ApiNavHeader from '@/components/api/ApiNavHeader.vue';
import SlotLayout from '@/components/SlotLayout.vue';
import { debounce } from 'lodash';
import Vue from 'vue';
import { mapMutations } from 'vuex';
import TopNav from '@/components/Navs/TopNav.vue';
import ApiNav from '~/components/api/ApiNav.vue';
import MarkdownContainer from '@/components/MarkdownContainer.vue';
import moduleInfo from '../static/lib/joi/info.json';

export default {
  components: {
    ApiNavHeader,
    SlotLayout,
    TopNav,
    ApiNav,
    MarkdownContainer,
  },
  data() {
    return {
      headers: [],
      currentSection: '',
      apis: moduleInfo.versionsArray.reduce((acc, version) => {
        acc[version] = moduleInfo.docs[version].api;
        return acc;
      }, {}),
      menus: moduleInfo.versionsArray.reduce((acc, version) => {
        // Create `folded` properties so vue can track changes
        const foldedMenu = JSON.parse(
          JSON.stringify(moduleInfo.docs[version].menu, (key, value) => {
            if (value && typeof value === 'object' && 'children' in value) {
              return { ...value, folded: true };
            }
            return value;
          })
        );
        foldedMenu.folded = false;
        acc[version] = foldedMenu;
        return acc;
      }, {}),
      versions: moduleInfo.versionsArray,
    };
  },
  head() {
    return {
      title: `joi.dev - ${this.$route.query.v} API Reference`,
      meta: [
        { hid: 'description', name: 'description', content: 'The joi API' },
      ],
    };
  },
  computed: {
    version: {
      get() {
        let apiVersion = this.versions[0];
        if (!this.$route.query.v) {
          return this.versions[0];
        } else {
          for (let v of this.versions) {
            let version = this.$route.query.v.match(/^([^.]+)/);
            if (v.startsWith(version[0])) {
              apiVersion = v;
              if (!this.versions.includes(this.$route.query.v)) {
                return v;
              }
              break;
            } else if (!this.versions.includes(this.$route.query.v)) {
              return this.versions[0];
            }
          }
        }

        return apiVersion;
      },
      set(v) {
        this.$router.push({ query: { v }, hash: this.$route.hash });
      },
    },

    htmlDisplay() {
      return this.apis[this.version];
    },

    menu() {
      return this.menus[this.version];
    },

    scrollPositions() {
      const scrollPositions = [];
      this.headers.forEach((node) => {
        scrollPositions.push([node.offsetTop, node.id]);
      });
      return scrollPositions;
    },
  },
  mounted() {
    this.collectHeaders();
    if (this.$route.hash) {
      this.currentSection = this.$route.hash.slice(1);
    }
  },
  created() {
    this.$router.push({ query: { v: this.version }, hash: this.$route.hash });
    this.setDisplay('api');
  },
  methods: {
    ...mapMutations(['setDisplay']),

    apiScroll: debounce(function (event) {
      const currentScroll = event.target.scrollTop;
      if (this.scrollPositions.length) {
        const tolerance = 5; // Anchor scrolling leads a few pixels above the anchor, let's tolerate a few pixels
        const closest = this.scrollPositions.findIndex(
          ([pos]) => pos > currentScroll + tolerance
        );

        this.currentSection =
          closest !== -1 ? this.scrollPositions[closest - 1][1] : '';
      }
    }, 100),

    collectHeaders() {
      this.headers =
        this.$refs.documentation.querySelectorAll('.api-doc-header');
    },

    async onVersionChange(value) {
      this.version = value;
      this.currentSection = '';
      Vue.nextTick(() => {
        this.$refs.documentation.scrollTo(0, 0);
      });
    },
  },
};
</script>

<style lang="postcss" scoped>
.mobile-header {
  display: none;
  padding: 10px 20px 0;
  z-index: 99;
  background: white;
}

@media screen and (max-width: 900px) {
  .main {
    overflow-y: hidden !important;
  }

  .documentation {
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    width: 100%;
  }

  .mobile-header {
    display: block;
    background: var(--off-white);
    border-bottom: 1px solid var(--dark-white);
  }
}

@media (prefers-color-scheme: dark) {
  .mobile-header {
    background: var(--blacker);
    border-bottom-color: var(--blackest);
  }
}
</style>
