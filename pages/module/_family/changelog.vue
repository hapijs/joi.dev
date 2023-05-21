<template>
  <SlotLayout>
    <template #header>
      <TopNav class="header" />
    </template>

    <template #sidebar>
      <LandingNav
        v-if="info"
        page="changelog"
        :family="family"
        :intro="intro"
        :example="example"
        :usage="usage"
        :faq="faq"
        :advanced="advanced"
        :module-info="info"
      />
    </template>

    <template #main>
      <div class="main community-wrapper" v-if="changelog">
        <Changelog :milestones="changelog" />
      </div>
    </template>
  </SlotLayout>
</template>

<script>
import TopNav from '@/components/Navs/TopNav.vue';
import SlotLayout from '@/components/SlotLayout.vue';
import Changelog from '../../../components/resources/Changelog.vue';
import LandingNav from '../../../components/family/LandingNav.vue';

export default {
  components: {
    TopNav,
    SlotLayout,
    Changelog,
    LandingNav,
  },
  async asyncData({ params }) {
    const family = params.family;
    const [{ default: info }, { default: changelog }] = await Promise.all([
      import(`../../../static/lib/${family}/info.json`),
      import(`../../../static/lib/${family}/changelog.json`),
    ]);
    return {
      info,
      changelog,
      family,
    };
  },
  data() {
    return {
      page: 'changelog',
      info: null,
      family: '',
      changelog: null,
      intro: false,
      example: false,
      usage: false,
      faq: false,
      advanced: false,
    };
  },
  head() {
    return {
      title:
        'joi.dev - ' +
        this.page.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
          return str.toUpperCase();
        }),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `View ${this.$route.params.family}'s version history`,
        },
      ],
    };
  },
  computed: {
    getCommunity() {
      return this.$store.getters.loadCommunity;
    },
  },
  created() {
    const module = this.$route.params.family;
    const versionsArray = this.info.versionsArray;
    this.$store.commit('setDisplay', 'family');
    this.$store.commit('setFamily', module);
    if (this.info.docs[versionsArray[0]].intro) {
      this.$store.commit('setIntro', true);
    }
    if (this.info.docs[versionsArray[0]].example) {
      this.$store.commit('setExample', true);
    }
    if (this.info.docs[versionsArray[0]].usage) {
      this.$store.commit('setUsage', true);
    }
    if (this.info.docs[versionsArray[0]].faq) {
      this.$store.commit('setFaq', true);
    }
    if (this.info.docs[versionsArray[0]].advanced) {
      this.$store.commit('setAdvanced', true);
    }
  },
  methods: {
    changePage(value) {
      this.$data.page = value;
      this.$store.commit('setCommunity', value);
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="postcss">
.community-wrapper {
  margin: 0;
  width: 100%;
}

.changelog-header {
  margin: 20px 0 10px 0;
  border-bottom: 1px solid var(--dark-white);
  border-top: none;
  padding-bottom: 10px;
  width: auto;
  display: inline-block;
}

@media screen and (max-width: 900px) {
  .community-wrapper {
    padding: 0 20px;
  }
}
</style>
