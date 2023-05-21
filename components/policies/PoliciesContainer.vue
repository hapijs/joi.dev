<template>
  <SlotLayout>
    <template #header>
      <TopNav class="header" />
    </template>

    <template #sidebar>
      <PoliciesNav class="sidebar" :page="page" />
    </template>

    <template #main>
      <div class="main community-wrapper">
        <slot />
      </div>
    </template>
  </SlotLayout>
</template>

<script>
import TopNav from '@/components/Navs/TopNav.vue';
import PoliciesNav from '@/components/policies/PoliciesNav.vue';
import SlotLayout from '@/components/SlotLayout.vue';

export default {
  components: {
    TopNav,
    PoliciesNav,
    SlotLayout,
  },
  props: {
    page: { type: String, required: true },
  },
  async created() {
    await this.$store.commit('setDisplay', 'policies');
  },
};
</script>

<style scoped lang="postcss">
.community-wrapper {
  margin: 0;
  width: 100%;
}

@media screen and (max-width: 900px) {
  .community-wrapper {
    padding: 0 20px;
  }
}
</style>
