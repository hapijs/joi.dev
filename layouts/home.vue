<template>
  <div class="container">
    <TopNav class="header" />
    <nuxt class="main" />
    <MainFooter class="footer" />
  </div>
</template>

<script>
import TopNav from '@/components/Navs/TopNav.vue';
import MainFooter from '~/components/Footers/MainFooter.vue';

export default {
  components: {
    TopNav,
    MainFooter,
  },
};
</script>

<style lang="postcss" scoped>
.container {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 150px 1fr 1fr;
  grid-template-areas:
    'header'
    'main'
    'footer';

  > .header {
    grid-area: header;
    width: 100%;
  }

  > .main {
    grid-area: main;
  }

  > .footer {
    grid-area: footer;
    padding-bottom: 100px;
  }
}

::v-deep .logo {
  height: 150px;
  width: 200px;
}

@media screen and (max-width: 900px) {
  .container {
    grid-template-rows: 60px 1fr 1fr;
  }

  ::v-deep .logo {
    height: 60px !important;
    width: calc(100px * (2 / 3)) !important;
    margin: 0 auto;
  }
}
</style>
