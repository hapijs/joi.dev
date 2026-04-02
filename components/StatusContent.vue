<template>
  <div class="module-status-table-wrapper">
    <table class="status-table">
      <thead>
        <tr class="header-row">
          <th class="header-module">Module</th>
          <th class="version-header">Version</th>
          <th class="license-header">License</th>
          <th class="node-header">Node.js</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(descr, moduleName) in filteredModules" :key="moduleName" class="module-row">
          <td class="module-name">
            {{ moduleName }}
          </td>
          <td colspan="3" class="nested-td">
            <table class="nested-table">
              <tbody class="nested-tbody">
                <tr v-for="version in descr.versions" :key="version.name">
                  <td class="module-version">
                    <div class="module-version-wrapper">
                      <div class="version-name">{{ version.name }}</div>
                      <a
                        target="_blank"
                        class="version-link"
                        title="Documentation"
                        :href="
                          moduleName === 'joi'
                            ? `/api/${version.name.split('.')[0]}.x.x`
                            : `/module/${moduleName}/api/${version.name.split('.')[0]}.x.x`
                        "
                      >
                        <span class="version-icon">📖</span>
                      </a>
                      <a :href="`https://github.com/hapijs/${moduleName}/tree/${version.branch}`" target="_blank">
                        <img src="/img/githubLogo.png" alt="github logo" class="version-img" />
                      </a>
                    </div>
                  </td>
                  <td class="module-license">{{ version.license }}</td>
                  <td class="module-node">{{ version.node }}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

import modulesData from '../generated/metadata/modules.json' with { type: 'json' };

const modules = ref(modulesData);

const filteredModules = computed(() => modules.value);
</script>

<style scoped>
.module-status-table-wrapper {
  margin: 0;
  width: 100%;
  overflow-x: auto;
}

.status-table {
  display: table;
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.header-row th {
  padding: 10px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}

.header-module {
  width: 25%;
}

.version-header {
  width: 30%;
}

.license-header {
  width: 20%;
}

.node-header {
  width: 25%;
}

.module-row td {
  border: 1px solid var(--vp-c-divider);
  padding: 0;
}

.module-name {
  width: 25%;
  text-align: center;
  font-weight: bold;
  vertical-align: middle;
  padding: 10px;
}

.nested-table {
  display: table;
  width: 100%;
  border-collapse: collapse;
  margin: 0;
}

.nested-table td {
  border: none;
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 10px;
  text-align: center;
}

.nested-table tr:last-child td {
  border-bottom: none;
}

.module-version {
  width: 40%;
}

.module-license {
  width: 26.66%;
}

.module-node {
  width: 33.34%;
}

.module-version-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.version-name {
  color: var(--vp-c-brand-1);
  font-weight: bold;
}

.version-link {
  text-decoration: none;
}

.version-icon {
  font-size: 1.2rem;
  line-height: 1;
}

.version-img {
  width: 20px;
}
</style>
