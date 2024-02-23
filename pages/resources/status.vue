<template>
  <SlotLayout>
    <template #header>
      <TopNav class="header" />
    </template>

    <template #sidebar>
      <ResourcesNav class="sidebar" page="status" />
    </template>

    <template #main>
      <div class="main module-status-wrapper">
        <h1 class="hapi-header">Module Status</h1>
        <div class="module-status-table-wrapper">
          <table class="status-table">
            <thead>
              <tr class="header-row">
                <th class="header-module">Module</th>
                <th class="version-header">Version</th>
                <th class="license-header">License</th>
                <th class="node-header">Node</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(descr, moduleName) in modules"
                :key="moduleName"
                class="module-row"
              >
                <td class="module-name">
                  {{ moduleName }}
                  <a
                    :id="moduleName"
                    class="module-name-link"
                    :href="`#${moduleName}`"
                  />
                </td>
                <td colspan="5" class="nested-td">
                  <table class="nested-table">
                    <tbody class="nested-tbody">
                      <tr
                        v-for="version in descr.versions"
                        :key="version.name + version.license"
                      >
                        <td class="module-version">
                          <div class="module-version-wrapper">
                            <div class="version-name">{{ version.name }}</div>
                            <a
                              target="_blank"
                              class="version-helmet"
                              :href="
                                moduleName === 'joi'
                                  ? `/api/?v=${version.name}`
                                  : `/module/${moduleName}/api?v=${version.name}`
                              "
                            >
                              <img
                                src="/img/joiTransparent.png"
                                alt="hapi helmet"
                                class="version-img"
                              />
                            </a>
                            <a
                              :href="`https://github.com/hapijs/${moduleName}/tree/${version.branch}`"
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
                        <td>{{ version.node.join(', ') }}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </SlotLayout>
</template>

<script>
import _ from 'lodash';
import TopNav from '@/components/Navs/TopNav.vue';
import SlotLayout from '@/components/SlotLayout.vue';
import { mapMutations } from 'vuex';
import ResourcesNav from '../../components/resources/ResourcesNav.vue';
import modules from '../../static/lib/modules.json';

export default {
  components: {
    SlotLayout,
    TopNav,
    ResourcesNav,
  },
  layout: 'default',
  data() {
    return {
      page: 'status',
      modules,
    };
  },
  head() {
    return {
      title: 'joi.dev - Module Status',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "View hapi's module status",
        },
      ],
    };
  },
  async created() {
    await this.setDisplay('resources');
  },
  methods: {
    ...mapMutations(['setDisplay']),

    camelName(name) {
      return _.camelCase(name);
    },
  },
};
</script>

<style lang="postcss">
.module-status-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px 100px;
  margin: 0;
  width: 100%;
}

.module-status-table-wrapper {
  margin: 0;
  width: 100%;
}

.license-header,
.node-header {
  width: 10.546875%;
  text-align: center !important;
  font-weight: 900;
}

.version-header {
  width: 18.75%;
  text-align: center !important;
  font-weight: 900;
}

.header-module {
  text-align: center !important;
}

.module-name {
  position: relative;
  width: 25%;
  border-right: 1px solid var(--dark-white);
  text-align: center !important;
  vertical-align: middle;
  font-size: 1.15em;
  font-weight: 700;
}

.module-row {
  background-color: var(--white);
}

.module-name-link {
  display: block;
  position: absolute;
  content: '';
  visibility: hidden;
  top: -150px;
  z-index: -5;
}

.module-row:nth-child(odd) {
  background-color: var(--off-white);
}

.nested-table {
  width: 100%;
}

.nested-table td {
  width: 14.0625%;
  text-align: center !important;
}

.module-license {
  width: 18.75%;
}

.module-version {
  width: 25% !important;
}

.status-table {
  width: 100%;
  margin-top: 16px;
  min-width: 800px;
  border-collapse: collapse;
  border-spacing: 0;

  tbody {
    border: 3px solid var(--dark-white);
  }

  th {
    padding: 10px;
    font-size: 1.15em;
    background-color: var(--white);
    z-index: 1;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 100%;
      border-bottom: 1px solid var(--dark-white);
      z-index: 1;
    }
  }

  td {
    padding: 10px;
    color: var(--black);
  }
}

.nested-tbody {
  border: none !important;

  td {
    vertical-align: middle;
  }

  tr:not(:last-child) {
    border-bottom: 1px solid var(--dark-white);
  }
}

.nested-td {
  box-sizing: border-box;
  padding: 0 !important;
}

.module-version-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.module-version-wrapper a {
  display: flex;
  justify-content: center;
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

@media screen and (max-width: 1500px) {
  .module-status-wrapper {
    padding: 20px 40px;
  }

  .status-table {
    th {
      font-size: 14px;
      padding: 10px 0px;
    }

    td {
      padding: 10px 5px;
    }
  }

  .module-name {
    font-size: 16px;
  }
}

@media screen and (max-width: 900px) {
  .module-status-wrapper {
    padding: 10px 10px 0 10px;
    overflow-x: auto;
  }

  .module-status-table-wrapper {
    overflow-x: auto;
  }

  .status-table {
    margin: 0 10px;

    th {
      padding: 5px;
      font-size: 16px;
    }
  }
}

@media (prefers-color-scheme: dark) {
  .status-table tbody {
    border-color: var(--blackest) !important;
  }

  .header-row th {
    background-color: var(--black);
  }

  .module-row {
    th,
    td {
      color: var(--gray);
      background-color: var(--black);
    }

    &:nth-child(odd) {
      th,
      td {
        color: var(--gray);
        background-color: var(--blacker);
      }
    }
  }

  .header-row,
  .module-row {
    border-color: var(--blackest) !important;
  }
}
</style>
