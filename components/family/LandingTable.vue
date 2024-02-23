<template>
  <div class="landing-table-wrapper">
    <table class="landing-table">
      <thead>
        <tr class="header-row">
          <th class="version-header">Version</th>
          <th class="license-header">License</th>
          <th class="node-header">Node</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="version in module.versions"
          :key="version.name + version.license"
          class="landing-table-row"
        >
          <td>
            <div class="module-version-wrapper">
              <div class="version-name">{{ version.name }}</div>
              <a
                class="version-helmet"
                :href="
                  module.docs[version.name].api
                    ? `/module/${module.name}/api?v=${version.name}`
                    : `${module.link}/tree/${version.branch}`
                "
              >
                <img
                  src="/img/joiTransparent.png"
                  alt="joi logo"
                  class="version-img"
                />
              </a>
              <a
                :href="`https://github.com/hapijs/${module.name}/tree/${version.branch}`"
                target="_blank"
              >
                <img
                  src="/img/githubLogo.png"
                  alt="github logo"
                  class="version-img"
                />
              </a>
            </div>
          </td>
          <td class="module-license">{{ version.license }}</td>
          <td class="table-version">{{ version.node.join(', ') }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    module: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="postcss" scoped>
.landing-table-wrapper {
  width: 80%;
  min-width: 700px;
  margin: 0 auto;
}

.landing-table {
  width: 100%;
  margin: 0;
  border-collapse: collapse;
  border-spacing: 0;

  .license-header,
  .node-header {
    width: 16.6%;
    text-align: center;
    font-weight: 900;
  }

  .version-header {
    width: 16.6%;
  }
}

.landing-table > tbody {
  border: 3px solid var(--dark-white);
}

.landing-table-row {
  border-bottom: 3px solid var(--dark-white);
  background-color: var(--white);

  &:nth-child(odd) {
    background-color: var(--off-white);
  }

  td {
    padding: 10px;
  }
}

.landing-table-row .module-license,
.table-version {
  text-align: center !important;
}

.license-header,
.node-header {
  width: 10.546875%;
  text-align: center;
  font-weight: 900;
}

.version-header {
  width: 18.75%;
  text-align: center !important;
  font-weight: 900;
}

.landing-table-row {
  border-bottom: 3px solid var(--dark-white);
  background-color: var(--white);
}

.landing-table-row:nth-child(odd) {
  background-color: var(--off-white);
}

.module-license {
  width: 18.75%;
}

.module-version-wrapper,
.module-version-wrapper a {
  display: flex;
  justify-content: center;
  align-items: center;
}

.version-name {
  color: var(--orange);
  font-weight: 700;
}

.module-version-wrapper * {
  margin: 0;
}

.version-helmet {
  padding: 0 20px;
}

.version-img {
  width: 20px;
  min-width: 20px;
}

@media (prefers-color-scheme: dark) {
  .landing-table tbody {
    border-color: var(--blackest) !important;
  }

  .landing-table-row {
    background-color: var(--black);
  }
  .landing-table-row:nth-child(odd) {
    background-color: var(--blacker);
  }

  .landing-table-row {
    border-color: var(--blackest) !important;
  }

  .landing-table thead tr th {
    color: var(--gray) !important;
  }
}
</style>
