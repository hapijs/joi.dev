<template>
  <SlotLayout>
    <template #header>
      <TopNav class="header" />
    </template>

    <template #sidebar>
      <ResourcesNav class="sidebar" page="changelog" />
    </template>

    <template #main>
      <Changelog class="main" :milestones="milestones" />
    </template>
  </SlotLayout>
</template>

<script>
import TopNav from '@/components/Navs/TopNav.vue';
import SlotLayout from '@/components/SlotLayout.vue';
import { mapMutations } from 'vuex';
import Changelog from '../../components/resources/Changelog.vue';
import ResourcesNav from '../../components/resources/ResourcesNav.vue';
import changelog from '../../static/lib/joi/changelog.json';

export default {
  components: {
    SlotLayout,
    TopNav,
    Changelog,
    ResourcesNav,
  },
  data() {
    return {
      page: 'changelog',
      milestones: changelog,
    };
  },
  head() {
    return {
      title:
        'joi.dev - ' +
        this.page
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, (str) => str.toUpperCase()),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "View joi's version history",
        },
      ],
    };
  },
  async created() {
    await this.setDisplay('resources');
  },
  methods: {
    ...mapMutations(['setDisplay']),

    changePage(value) {
      this.$data.page = value;
      this.$store.commit('setCommunity', value);
      window.scrollTo(0, 0);
    },
  },
};
</script>
