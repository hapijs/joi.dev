<template>
  <SlotLayout>
    <template #header>
      <TopNav class="header" />
    </template>

    <template #sidebar>
      <LandingNav
        v-if="info"
        :family="family"
        :module-info="info"
        :menu="getMenu"
        :page="page"
        :version="version"
        :versions="versions"
        :results="results"
        :index-results="indexResults"
        :search="search"
        :intro="intro"
        :example="example"
        :usage="usage"
        :faq="faq"
        :advanced="advanced"
        :get-documentation-ref="() => $refs.documentation"
        :current-section="currentSection"
      />
    </template>

    <template #main>
      <div ref="documentation" class="main" @scroll="apiScroll">
        <h1 class="hapi-family-header">
          API
          <span class="api-version-span"
            >v{{ version.match(/.*(?=\.)/)[0] }}.x</span
          >
        </h1>
        <Install :name="name" :module-a-p-i="info" :version="version" />

        <MarkdownContainer :md="getAPI" @content-changed="collectHeaders" />
      </div>
    </template>
  </SlotLayout>
</template>

<script>
import MarkdownContainer from '@/components/MarkdownContainer.vue';
import TopNav from '@/components/Navs/TopNav.vue';
import SlotLayout from '@/components/SlotLayout.vue';
import { debounce } from 'lodash';
import LandingNav from '~/components/family/LandingNav.vue';
import Install from '~/components/family/Install.vue';

export default {
  components: {
    MarkdownContainer,
    TopNav,
    SlotLayout,
    LandingNav,
    Install,
  },
  async asyncData({ params }) {
    const family = params.family;
    const { default: moduleInfo } = await import(
      `../../../../static/lib/${family}/info.json`
    );
    return {
      info: moduleInfo,
      versions: moduleInfo.versionsArray,
      family,
    };
  },
  data() {
    return {
      headers: [],
      currentSection: '',
      family: '',
      info: {},
      versions: [],
      display: '',
      page: 'api',
      modules: this.modules,
      menu: '',
      name: this.$route.params.family,
      indexResults: 0,
      search: '',
      results: [],
      uls: {},
      links: {},
      intro: false,
      example: false,
      usage: false,
      faq: false,
      advanced: false,
      listeners: new Map(),
    };
  },
  head() {
    return {
      title: `joi.dev - ${this.$route.params.family} v${this.version}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `View the APIs for ${this.$route.params.family}`,
        },
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
    getAPI() {
      return this.info?.docs[this.version].api;
    },
    getMenu() {
      return this.info?.docs[this.version].menu;
    },
    scrollPositions() {
      const scrollPositions = [];
      this.headers.forEach((node) => {
        scrollPositions.push([node.offsetTop, node.id]);
      });
      return scrollPositions;
    },
  },
  created() {
    const module = this.$route.params.family;
    if (!this.$store.getters.loadModules.includes(this.$route.params.family)) {
      return this.$nuxt.error({ statusCode: 404 });
    }

    let apiVersion = this.versions[0];
    if (!this.$route.query.v) {
      this.$router.push({
        query: { v: this.versions[0] },
        hash: this.$route.hash,
      });
    } else {
      for (let v of this.versions) {
        const version = this.$route.query.v.match(/^([^.]+)/);
        if (v.startsWith(version[0])) {
          apiVersion = v;
          if (!this.versions.includes(this.$route.query.v)) {
            this.$router.push({
              query: { v: v },
              hash: this.$route.hash,
            });
          }
          break;
        } else if (!this.versions.includes(this.$route.query.v)) {
          this.$router.push({
            query: { v: this.versions[0] },
            hash: this.$route.hash,
          });
        }
      }
    }
    this.$store.commit('setDisplay', 'family');
    this.$store.commit('setVersion', apiVersion);
    this.$data.menu = this.info?.docs[this.version].menu;
    this.$store.commit('setFamily', module);
    const docs = this.info?.docs[apiVersion];
    if (docs) {
      if (docs.intro) {
        this.$store.commit('setIntro', true);
      }
      if (docs.example) {
        this.$store.commit('setExample', true);
      }
      if (docs.usage) {
        this.$store.commit('setUsage', true);
      }
      if (docs.faq) {
        this.$store.commit('setFaq', true);
      }
      if (docs.advanced) {
        this.$store.commit('setAdvanced', true);
      }
    }
  },
  mounted() {},
  beforeDestroy() {
    for (let [element, listener] of this.listeners) {
      element.removeEventListener('click', listener);
    }
    this.listeners.clear();
  },
  methods: {
    apiScroll: debounce(function (event) {
      const currentScroll = event.target.scrollTop;
      if (this.scrollPositions.length) {
        const tolerance = 5; // Anchor scrolling leads a few pixels above the anchor, let's tolerate a few pixels
        const closest = this.scrollPositions.findIndex(
          ([pos]) => pos > currentScroll + tolerance
        );

        if (closest !== -1) {
          const scrollPosition = this.scrollPositions[closest - 1];
          this.currentSection = scrollPosition ? scrollPosition[1] : '';
        } else {
          this.currentSection = '';
        }
      }
    }, 100),

    collectHeaders() {
      this.headers =
        this.$refs.documentation.querySelectorAll('.api-doc-header');
    },

    async onVersionChange(value) {
      this.version = value;
      this.$refs.documentation.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="postcss">
.family-title {
  margin: 20px 0 -16px 100px;
  padding-bottom: 16px;
  box-sizing: border-box;
  border-bottom: 1px solid var(--dark-white);
  display: inline-block;
}

.family-anchor {
  display: inline-block;
  color: var(--gray);
  font-size: 0.85em;
  height: 100%;
  width: 100%;
  padding: 2px 0;
}

.family-anchor:hover {
  color: var(--gray);
}

.family-code {
  background: var(--off-white);
  color: var(--gray);
  font-family: 'Lato', sans-serif;
  font-size: 1em;
  padding: 0;
  border: none;
}

.family-plus,
.family-minus,
.family-plus code,
.family-minus code {
  position: relative;
  color: var(--orange);
  text-decoration: none;
}

.family-plus:hover,
.family-minus:hover {
  color: var(--orange);
}

.family-plus:after {
  content: '\002B';
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-size: 20px;
  top: 0;
  bottom: 0;
  left: -17px;
  height: 31px;
  width: 15px;
  z-index: 100;
}

.family-minus:after {
  content: '\2212';
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  font-size: 20px;
  top: 0;
  bottom: 0;
  left: -17px;
  height: 31px;
  width: 15px;
  z-index: 100;
}

.family-active,
.family-active * {
  position: relative;
  color: var(--white) !important;
  background: var(--gray) !important;
  height: 31px;
}

.family-active {
  display: inline-block;
  left: -70px;
  padding: 2px 30px 2px 70px !important;
  width: 402px !important;
  overflow-wrap: break-word;
}

.family-active:after {
  position: absolute;
  left: 53px;
  height: 31px;
}

.family-hide {
  display: none;
}

.family-ul-display {
  display: block !important;
}

.changelog-header {
  margin: 20px 0 10px 0;
  padding-top: 10px;
  border-top: 1px solid var(--dark-white);
  width: 100%;
}

h1 a {
  display: block;
  position: relative;
  top: -116px;
  visibility: hidden;
}

.preload {
  display: none;
}

.api-doc-header {
  position: relative;
}

.api-clipboardCheck {
  position: relative;
  display: inline-block;
  width: 17px;
  height: 17px;
  margin: 0 0 0 5px;
  opacity: 0.7;
  background: url('/img/clipboardCheck.png');
  background-size: contain;
  transition: all 0.2s;
}

.api-clipboard {
  position: relative;
  display: inline-block;
  width: 17px;
  height: 17px;
  margin: 0 0 0 5px;
  background: url('/img/clipboard.png');
  background-size: contain;
  opacity: 0.3;
  cursor: pointer;
  transition: all 0.2s;
}

.api-clipboard:hover {
  opacity: 0.7;
}

.tutorial-header {
  display: block !important;
}

@media screen and (max-width: 900px) {
  .ecosystem-title {
    margin: 20px 0 0 0;
    padding-bottom: 16px;
  }
}
</style>
