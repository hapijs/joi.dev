<template>
  <SlotLayout>
    <template #header>
      <TopNav class="header" />
    </template>

    <template #sidebar>
      <LandingNav
        v-if="info"
        :family="family"
        :version="version"
        :versions="versions"
        :page="page"
        :module-info="info"
        :intro="introHTML"
        :example="exampleHTML"
        :usage="usageHTML"
        :faq="faqHTML"
        :advanced="advancedHTML"
      />
    </template>

    <template #main>
      <div class="main landing-wrapper" v-if="info">
        <div class="landing-title-flex">
          <div class="landing-title-wrapper">
            <h1 class="landing-title">{{ family }}</h1>
            <div class="landing-slogan" v-html="info.slogan"></div>
            <div class="landing-latest-version">
              Latest Version:
              <span class="bold">{{ info.versionsArray[0] }}</span>
            </div>
          </div>
        </div>
        <Install :name="family" />
        <div class="landing-version-status-header">
          <a name="status" class="landing-link landing-anchor"></a>Module
          Status:
        </div>
        <LandingTable :module="info" />
        <div v-if="intro" class="intro-wrapper">
          <a name="introduction" class="landing-link2 landing-anchor"></a>
          <MarkdownContainer :md="intro" />
        </div>
        <div v-if="exampleHTML" class="intro-wrapper">
          <a name="example" class="landing-link2 landing-anchor"></a>
          <MarkdownContainer :md="exampleHTML" />
        </div>
        <div v-if="usageHTML" class="intro-wrapper">
          <a name="usage" class="landing-link2 landing-anchor"></a>
          <MarkdownContainer :md="usageHTML" />
        </div>
        <div v-if="advancedHTML" class="intro-wrapper">
          <a name="advanced" class="landing-link2 landing-anchor"></a>
          <MarkdownContainer :md="advancedHTML" />
        </div>
        <div v-if="faqHTML" class="intro-wrapper">
          <a name="faq" class="landing-link2 landing-anchor"></a>
          <MarkdownContainer :md="faqHTML" />
        </div>
      </div>
    </template>
  </SlotLayout>
</template>

<script>
import Install from '@/components/family/Install.vue';
import MarkdownContainer from '@/components/MarkdownContainer.vue';
import TopNav from '@/components/Navs/TopNav.vue';
import SlotLayout from '@/components/SlotLayout.vue';
import LandingNav from '~/components/family/LandingNav.vue';
import LandingTable from '~/components/family/LandingTable.vue';

export default {
  components: {
    MarkdownContainer,
    Install,
    TopNav,
    SlotLayout,
    LandingNav,
    LandingTable,
  },
  async asyncData({ params }) {
    try {
      const family = params.family;
      const { default: moduleInfo } = await import(
        `../../../static/lib/${family}/info.json`
      );

      return {
        info: moduleInfo,
        family,
      };
    } catch {
      return this.$nuxt.error({ statusCode: 404 });
    }
  },
  data() {
    return {
      page: 'home',
      family: '',
      info: null,
      intro: false,
      example: false,
      usage: false,
      faq: false,
      advanced: false,
    };
  },
  head() {
    return {
      title: `joi.dev - ${this.$route.params.family}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'View the APIs for the hapi modules',
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
    introHTML() {
      return this.info?.docs[this.version]?.intro;
    },
    exampleHTML() {
      return this.info?.docs[this.version]?.example;
    },
    usageHTML() {
      return this.info?.docs[this.version]?.usage;
    },
    faqHTML() {
      return this.info?.docs[this.version]?.faq;
    },
    advancedHTML() {
      return this.info?.docs[this.version]?.advanced;
    },
    versions() {
      return this.info?.versionsArray;
    },
  },
};
</script>

<style lang="postcss">
.bold {
  font-weight: 900;
}

.landing-wrapper {
  width: 100%;
  margin: 0;
  padding: 20px 40px;
}

.landing-title-flex {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: -10px;
}

.landing-title-wrapper {
  width: 100%;
  margin-bottom: 10px;
}

.landing-title {
  font-weight: 700;
  font-size: 2.3em;
  border-bottom: 1px solid var(--dark-white);
}

.landing-slogan {
  margin: 0;
  padding-top: 10px;
  font-size: 1.15em;
}

.landing-latest-version {
  padding: 10px 0 0 0;
}

.landing-version-status-header {
  font-size: 1.5em;
  margin: 30px 0 15px 0;
  display: inline-block;
  border-bottom: 1px solid var(--dark-white);
}

.intro-wrapper h1,
.intro-wrapper h2,
.intro-wrapper h3,
.intro-wrapper h4 {
  font-size: 1.5em;
  border-bottom: 1px solid var(--dark-white);
  display: inline-block;
  border-top: none;
  margin: 30px 0 15px 0;
}

.intro-wrapper > .markdown-wrapper {
  padding-left: 0;
  padding-right: 0;
}

.intro-wrapper p {
  margin: 0;
}

.landing-link {
  display: block;
  position: relative;
  top: -116px;
  visibility: hidden;
}

.landing-link2 {
  display: block;
  position: relative;
  top: -76px;
  visibility: hidden;
}

h5 {
  a {
    display: inline-block !important;
    position: relative !important;
    top: 0 !important;
    visibility: visible !important;
  }

  p {
    margin: 0 !important;
  }
}

@media screen and (max-width: 900px) {
  .landing-wrapper {
    padding: 10px;
    overflow-x: auto;
  }
}
</style>
