<template>
  <Sidebar class="landing-sidebar">
    <template #header>
      <div class="family-nav-title">
        <a :href="`/module/${family}`">{{ family }}</a>
        <span v-if="page === 'api' && version && versions" class="family-span">
          <select
            class="family-version-select"
            :value="version"
            @change="onVersionChange($event)"
          >
            <option v-for="v in versions" :key="v" :value="v">
              {{ v }}
            </option>
          </select>
        </span>
        <Ads />
      </div>
    </template>

    <template #content>
      <div class="side-nav-inner-wrapper">
        <div class="side-nav-select-wrapper landing-nav-select-wrapper">
          <div
            id="install1"
            :class="{
              'landing-nav-api-title': true,
              'landing-active':
                page === '' || page === 'home' || page === 'install',
            }"
          >
            <a
              :href="page === 'home' ? '#install' : `/module/${family}#install`"
            >
              Installation
            </a>
          </div>
          <div
            id="status1"
            :class="{
              'landing-nav-api-title': true,
              'landing-active': page === 'status',
            }"
          >
            <a :href="page === 'home' ? '#status' : `/module/${family}#status`">
              Status
            </a>
          </div>
          <div
            v-if="getIntro"
            id="introduction1"
            :class="{
              'landing-nav-api-title': true,
              'landing-active': page === 'introduction',
            }"
          >
            <a
              :href="
                page === 'home'
                  ? '#introduction'
                  : `/module/${family}#introduction`
              "
            >
              Introduction
            </a>
          </div>
          <div
            v-if="getExample"
            id="example1"
            :class="{
              'landing-nav-api-title': true,
              'landing-active': page === 'example',
            }"
          >
            <a
              :href="page === 'home' ? '#example' : `/module/${family}#example`"
            >
              Example
            </a>
          </div>
          <div
            v-if="getUsage"
            id="usage1"
            :class="{
              'landing-nav-api-title': true,
              'landing-active': page === 'usage',
            }"
          >
            <a :href="page === 'home' ? '#usage' : `/module/${family}#usage`">
              Usage
            </a>
          </div>
          <div
            v-if="getAdvanced"
            id="advanced1"
            :class="{
              'landing-nav-api-title': true,
              'landing-active': page === 'advanced',
            }"
          >
            <a
              :href="
                page === 'home' ? '#advanced' : `/module/${header}#advanced`
              "
            >
              Advanced
            </a>
          </div>
          <div
            v-if="getFaq"
            id="faq1"
            :class="{
              'landing-nav-api-title': true,
              'landing-active': page === 'faq',
            }"
          >
            <a :href="page === 'home' ? '#faq' : `/module/${family}#faq`">
              F.A.Q.
            </a>
          </div>
          <hr v-if="family === 'joi'" class="landing-hr" />
          <ul
            v-if="page === 'examples' && version && versions"
            class="side-nav-select-list"
          >
            <FamilyNavItem
              :name="getFamily"
              :menu="menu"
              :page="page"
              :version="version"
              :versions="versions"
              @change="onVersionChange"
            />
          </ul>
          <hr class="landing-hr" />
          <div
            v-if="moduleInfo.api === true"
            :class="{
              'landing-nav-api-title': true,
              'landing-active': page === 'api',
            }"
          >
            <a :href="`/module/${family}/api`">API</a>
          </div>
          <ul
            v-if="page === 'api' && version && versions"
            class="side-nav-select-list"
          >
            <ApiNavList
              :ancestors="menuAncestors"
              :current="currentSection"
              :menu="menu"
              :folded="false"
            />
          </ul>
          <hr class="landing-hr" />
          <div
            :class="{
              'landing-nav-api-title': true,
              'landing-active': page === 'changelog',
            }"
          >
            <a :href="`/module/${family}/changelog`">Changelog</a>
          </div>
        </div>
      </div>
    </template>

    <template #footer>
      <SideFooter />
    </template>
  </Sidebar>
</template>

<script>
import ApiNavList from '@/components/api/ApiNavList.vue';
import Sidebar from '@/components/Sidebar.vue';
import { computeMenuAncestors } from '@/utils/menuAncestors';
import SideFooter from '~/components/Footers/SideFooter.vue';
import FamilyNavItem from '~/components/family/FamilyNavItem.vue';
import Ads from '~/components/Ads.vue';

export default {
  components: {
    ApiNavList,
    Sidebar,
    SideFooter,
    FamilyNavItem,
    Ads,
  },
  props: {
    family: { type: String, required: true },
    page: { type: String, required: true },
    moduleInfo: { type: Object, required: true },
    version: { type: String, required: true },
    versions: { type: Array, default: () => [] },
    menu: { type: Object, default: () => {} },
    getDocumentationRef: { type: Function },
    currentSection: { type: String, default: '' },
  },
  data() {
    return {
      header: this.$route.params.family,
      showAPI: false,
      hash: '',
    };
  },
  computed: {
    getHash() {
      return this.$route.hash;
    },
    getFamily() {
      return this.$store.getters.loadFamily;
    },
    getIntro() {
      return this.$store.getters.loadIntro;
    },
    getExample() {
      return this.$store.getters.loadExample;
    },
    getUsage() {
      return this.$store.getters.loadUsage;
    },
    getFaq() {
      return this.$store.getters.loadFaq;
    },
    getAdvanced() {
      return this.$store.getters.loadAdvanced;
    },
    menuAncestors() {
      return computeMenuAncestors(this.menu);
    },
  },
  created() {
    this.$data.family = this.getFamily;
  },
  mounted() {
    this.onScroll();
    this.$data.hash = this.getHash;
  },
  updated() {
    this.$data.hash = this.getHash;
    this.$data.family = this.getFamily;
  },
  methods: {
    async onVersionChange(event) {
      this.$store.commit('setVersion', event.target.value);
      await this.$router.push({
        path: this.$route.path,
        query: { v: event.target.value },
      });
      this.$emit('input', '');
      window.scrollTo(0, 0);
      this.$parent.setClasses();
      this.$emit('clipboards');
    },
    onScroll() {
      let links = [];
      links = document.querySelectorAll('.landing-nav-api-title a');
      let points = {};
      let offsets = [];
      for (let i = 0; i < links.length; i++) {
        let point = document.querySelector(
          `.landing-anchor[name*='${links[i].href.replace(/^[^_]*#/, '')}']`
        );
        if (point && point.name) {
          points[point.offsetTop - 20] = {
            name: '#' + point.name,
          };
          offsets.push(point.offsetTop - 20);
        }
      }
      offsets = [...new Set(offsets)];

      //Add active class to elements on scroll
      window.onscroll = function () {
        let location = document.documentElement.scrollTop;
        let locationBody = document.body.scrollTop;
        let actives = document.getElementsByClassName('bold');
        let i = 0;
        // for (i in offsets) {
        //   if (offsets[i] <= location || offsets[i] <= locationBody) {
        //     let aClass = points[offsets[i]].name;
        //     for (let active of actives) {
        //       active.classList.remove("bold");
        //     }

        //     let element = document.querySelector(aClass + "1");
        //     element.classList.add("bold");
        //   }
        // }
        if (
          window.innerHeight + window.scrollY <
          document.body.offsetHeight + 96
        ) {
          for (i in offsets) {
            if (offsets[i] <= location || offsets[i] <= locationBody) {
              let aClass = points[offsets[i]].name;
              for (let active of actives) {
                active.classList.remove('bold');
              }
              let element = document.querySelector(aClass + '1');
              element.classList.add('bold');
            }
          }
        }
      };
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../assets/styles/sideNav.css';

.landing-nav-api-title {
  display: inline-block;
  font-size: 1.1em;
  width: 100%;
  padding: 5px 0;
  margin: 0;
  cursor: pointer;

  a {
    color: var(--gray);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &.landing-active a {
    color: var(--orange);
    font-weight: 900;
    transition: all 0.2s ease;
  }
}

.family-nav-title {
  font-size: 1.5rem;
  color: var(--black);
  margin: 0;
}

.family-nav-title a {
  color: var(--black);
}

.family-nav-title a:hover {
  color: var(--black);
}

.family-version-select {
  width: 70px;
  padding: 0 5px 0 5px;
  border: none;
  height: 30px;
  font-size: 1em;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url(/img/down.png) 96% / 15% no-repeat var(--off-white);
  cursor: pointer;
}

.side-nav-select-list {
  margin: 0;
  padding: 0;
}

.landing-nav-select-wrapper {
  margin: 0 !important;
  overflow-x: hidden;
}

.landing-hr {
  position: relative;
  left: -30px;
  height: 1px;
  background-color: var(--dark-white);
  width: calc(100% - 10px);
  margin: 0;
  border: none;

  @media (prefers-color-scheme: dark) {
    background-color: var(--blacker);
  }
}

@media screen and (max-width: 900px) {
  .landing-nav-select-wrapper {
    display: none;
  }

  .family-span {
    font-size: 1.2rem;
  }

  .family-version-select {
    width: 80px;
  }

  .landing-hr {
    display: none;
  }

  .landing-sidebar {
    display: none;
  }
}

@media (prefers-color-scheme: dark) {
  .family-nav-title,
  .family-nav-title a,
  .family-nav-title a:hover {
    color: var(--white) !important;
  }
}
</style>
