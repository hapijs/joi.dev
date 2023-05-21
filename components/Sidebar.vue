<template>
  <div class="api-nav">
    <div class="api-nav-header">
      <slot name="header" />
    </div>
    <div ref="content" class="api-nav-content">
      <slot name="content" />
    </div>
    <div v-if="$slots.footer" class="api-nav-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<style lang="postcss" scoped>
@import '../assets/styles/sideNav.css';

.api-nav {
  overflow: hidden;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;

  padding: 20px 20px 5px;
  border-right: 1px solid var(--dark-white);
  background-color: var(--off-white);

  .api-nav-header {
    width: 100%;
    color: var(--gray);
    font-size: 1rem;
    padding: 2px 0;

    &:hover {
      color: var(--gray);
    }

    & * {
      text-decoration: none;
    }
  }

  .api-nav-content {
    width: 100%;
    overflow-y: auto;
    position: relative;
  }

  .api-nav-footer {
    width: 100%;
    border-top: 1px solid var(--dark-white);
  }

  @media (prefers-color-scheme: dark) {
    background-color: var(--blacker);
  }
}
</style>
