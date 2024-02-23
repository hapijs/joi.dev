<template>
  <div
    :class="{
      container: true,
      'no-sidebar': !$slots.sidebar,
    }"
  >
    <slot class="header" name="header" />
    <slot class="sidebar" name="sidebar" />
    <slot class="main" name="main" />
  </div>
</template>

<style lang="postcss" scoped>
.container {
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 370px 1fr;
  grid-template-rows: 96px 1fr;
  grid-template-areas:
    'header  header'
    'sidebar main';

  &.no-sidebar {
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'main';
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 0 100%;
    grid-template-rows: 60px 1fr;

    > .sidebar {
      display: none;
    }
  }
}

.container > .header {
  grid-area: header;
  padding: 10px 50px;
  border-bottom: 1px solid var(--dark-white);
  width: 100%;

  @media screen and (max-width: 900px) {
    padding: 0;

    .logo {
      max-height: 50px;
    }
  }
}

.container > .sidebar {
  grid-area: sidebar;
}

.container > .main {
  grid-area: main;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
}

@media screen and (max-width: 900px) {
  .header :deep(.logo) {
    position: relative;
    top: 0;
    height: 60px !important;
    width: calc(100px * (2 / 3)) !important;
    margin: 0 auto;
  }

  .nav-container {
    min-height: 39px;
  }
}
</style>
