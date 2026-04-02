<template>
  <div class="family-grid-wrapper">
    <div class="controls">
      <input v-model="search" placeholder="Search modules..." class="search-input" />
      <select v-model="sort" class="sort-select">
        <option value="name">Name</option>
        <option value="stars">Stars</option>
        <option value="forks">Forks</option>
        <option value="updated">Updated</option>
      </select>
    </div>

    <div class="family-grid">
      <div v-for="module in filteredModules" :key="module.name" class="family-grid-cell">
        <div class="family-grid-text-wrapper">
          <a :href="`/module/${module.name}/install`" class="family-grid-link">
            <div class="family-grid-cell-name">{{ module.name }}</div>
          </a>
          <div class="family-grid-cell-slogan">{{ module.slogan }}</div>
        </div>
        <div class="family-grid-cell-stats">
          <div class="stats-wrapper">
            <div class="family-stats">
              <a class="status-link" :href="module.link">
                <img class="stats-img-github" src="/img/githubLogo.png" alt="github logo" />
              </a>
            </div>
            <div class="family-stats">
              <img class="stats-img-star" src="/img/star.png" alt="star" />
              {{ module.stars }}
            </div>
            <div class="family-stats">
              <img class="stats-img-fork" src="/img/fork.png" alt="fork" />
              {{ module.forks }}
            </div>
          </div>
          <div class="family-updated">
            {{ new Date(module.updated).toDateString() }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

import modulesData from '../generated/metadata/modules.json' with { type: 'json' };

const search = ref('');
const sort = ref('name');
const moduleInfo = ref(modulesData);

const filteredModules = computed(() => {
  const searchTerm = search.value.trim().toLowerCase();
  const modules = Object.entries(moduleInfo.value)
    .filter(
      ([key, module]) =>
        key !== 'joi' && (!searchTerm || key.includes(searchTerm) || module.slogan.toLowerCase().includes(searchTerm)),
    )
    .map(([key, module]) => ({ ...module, name: key }));

  return modules.toSorted((a, b) => {
    if (sort.value === 'name') {
      return a.name.localeCompare(b.name);
    }
    if (sort.value === 'stars') {
      return b.stars - a.stars;
    }
    if (sort.value === 'forks') {
      return b.forks - a.forks;
    }
    if (sort.value === 'updated') {
      return new Date(b.updated) - new Date(a.updated);
    }
    return 0;
  });
});
</script>

<style scoped>
.family-grid-wrapper {
  padding: 20px 0;
}

.controls {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.search-input,
.sort-select {
  padding: 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}
.search-input {
  flex-grow: 1;
}
.family-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
}
.family-grid-cell {
  border: 1px solid var(--vp-c-divider);
  padding: 15px;
  background: var(--vp-c-bg-soft);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.family-grid-cell-name {
  color: var(--vp-c-brand-1);
  font-weight: bold;
  font-size: 1.2em;
}
.family-grid-link {
  text-decoration: none;
}
.family-grid-cell-stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  font-size: 0.9em;
}
.stats-wrapper {
  display: flex;
  gap: 15px;
}
.family-stats {
  display: flex;
  align-items: center;
  gap: 5px;
}
.stats-img-github,
.stats-img-star,
.stats-img-fork {
  height: 16px;
}
</style>
