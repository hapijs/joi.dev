<template>
  <Sidebar>
    <template #header>
      <div class="side-nav-title">Policies</div>
      <Ads />
    </template>

    <template #content>
      <ul class="side-nav-select-list">
        <li class="policies-header-link">
          <a
            :class="{
              'side-nav-select-link': true,
              'policies-active': page === 'conduct',
            }"
            href="/policies/coc"
            >Code of Conduct</a
          >
        </li>
        <li class="policies-header-link">
          <a
            :class="{
              'side-nav-select-link': true,
              'policies-active': page === 'contributing',
            }"
            href="/policies/contributing"
            >Contributing</a
          >
        </li>
        <li class="policies-header-link">
          <a
            :class="{
              'side-nav-select-link': true,
              'policies-active': page === 'license',
            }"
            href="/policies/license"
            >License</a
          >
        </li>
        <li class="policies-header-link">
          <a
            :class="{
              'side-nav-select-link': true,
              'policies-active': page === 'security',
            }"
            href="/policies/security"
            >Security</a
          >
        </li>
        <li class="policies-header-link">
          <a
            :class="{
              'side-nav-select-link': true,
              'policies-active': page === 'styleguide',
            }"
            href="/policies/styleguide"
            >Style Guide</a
          >
        </li>

        <li class="policies-header-link">
          <a
            :class="{
              'side-nav-select-link': true,
              'policies-active': page === 'support',
            }"
            href="/policies/support"
            >Support</a
          >
        </li>
      </ul>
    </template>

    <template #footer>
      <SideFooter />
    </template>
  </Sidebar>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue';
import SideFooter from '~/components/Footers/SideFooter.vue';
import Ads from '~/components/Ads.vue';

export default {
  components: {
    Sidebar,
    SideFooter,
    Ads,
  },
  props: ['page'],
};
</script>

<style lang="postcss" scoped>
@import '../../assets/styles/sideNav.css';

.side-nav-select-list {
  margin: 0;
  padding: 0;
  padding-top: 10px;
  display: flex;
  flex-direction: column;

  li {
    margin: 0;
  }
}

.policies-header-link {
  display: inline-block;
  font-size: 1.1em;
  width: 100%;
  padding: 5px 0;
  color: var(--gray);
  margin: 0;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &.policies-active {
    position: relative;
    color: var(--orange);
    font-weight: 900;
    transition: all 0.2s ease;
  }
}

.side-nav-select-link {
  display: inline-block;
  font-size: 1.1em;
  width: 100%;
  padding: 5px 0;
  color: var(--gray);
  margin: 0;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &.policies-active {
    position: relative;
    color: var(--orange);
    font-weight: 900;
    transition: all 0.2s ease;
  }
}
</style>
