<template>
  <SlotLayout>
    <template #header>
      <TopNav class="header" />
    </template>

    <template #sidebar>
      <FamilyIndexNav
        :search="search"
        :sort="sort"
        class="sidebar"
        @input="onChildInput"
        @clear="onChildClear"
        @change="changeSort"
      />
    </template>

    <template #main>
      <div class="main family-grid-wrapper">
        <h1 class="hapi-header">joi Modules</h1>
        <div class="family-grid">
          <div
            v-for="module in filteredModules"
            :id="module.name + 1"
            :key="module.name"
            class="family-grid-cell"
          >
            <div class="family-grid-text-wrapper">
              <a :href="`/module/${module.name}`" class="family-grid-link">
                <div class="family-grid-cell-name">{{ module.name }}</div>
              </a>
              <div class="family-grid-cell-slogan" v-html="module.slogan"></div>
            </div>
            <div class="family-grid-cell-stats">
              <div class="stats-wrapper">
                <div class="family-stats">
                  <a class="status-link" :href="module.link">
                    <img
                      class="stats-img-github"
                      src="/img/githubLogo.png"
                      alt="github logo"
                    />
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
              <div class="family-updated">Updated: {{ module.updated }}</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </SlotLayout>
</template>

<script>
import TopNav from '@/components/Navs/TopNav.vue';
import SlotLayout from '@/components/SlotLayout.vue';
import _ from 'lodash';
import FamilyIndexNav from '~/components/family/FamilyIndexNav.vue';
import moduleInfo from '../../static/lib/modules.json';

export default {
  components: {
    TopNav,
    SlotLayout,
    FamilyIndexNav,
  },
  data() {
    return {
      modules: this.$store.getters.loadModules,
      moduleInfo,
      search: '',
      core: true,
      sortDirections: {
        name: 'asc',
        stars: 'desc',
        forks: 'desc',
        updated: 'desc',
      },
    };
  },
  head() {
    return {
      title: 'joi.dev - Modules',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'View the APIs for the hapi modules',
        },
      ],
    };
  },
  computed: {
    sort() {
      return this.$route.query.sort || 'name';
    },
    filteredModules() {
      const searchTerm = this.search.trim().toLowerCase();
      return _(moduleInfo)
        .pickBy(
          (module, key) =>
            key !== 'joi' &&
            (!searchTerm ||
              key.includes(searchTerm) ||
              module.slogan.toLowerCase().includes(searchTerm))
        )
        .map((module, key) => ({ ...module, name: key }))
        .orderBy(this.sort, this.sortDirections[this.sort])
        .value();
    },
  },
  created() {
    this.$store.commit('setDisplay', 'family');
    const sortedBy = Object.keys(this.sortDirections);
    if (!sortedBy.includes(this.sort)) {
      this.changeSort('name');
    }
  },
  methods: {
    onChildInput(event) {
      this.search = event.target.value;
    },
    onChildClear() {
      this.search = '';
    },
    changeSort(value) {
      this.$router.push({
        query: { sort: value },
      });
    },
  },
};
</script>

<style lang="postcss" scoped>
.family-grid-wrapper {
  padding: 20px 100px;
  width: 100%;
}
.family-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 20px;
  margin-top: 1.5em;
}
.family-grid-cell {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid var(--dark-white);
  padding: 10px 15px;
  margin: 0;
  background: var(--off-white);
}
.family-grid-text-wrapper {
  margin: 0;
}
.family-grid-cell-name {
  color: var(--orange);
  font-size: 1.2em;
  font-weight: 700;
}
.family-grid-link {
  line-height: 1.5em;
  text-decoration: none;

  &:hover {
    color: var(--orange);
  }
}
.family-grid-cell-slogan {
  font-size: 0.95em;
}
.family-grid-cell-slogan p {
  margin: 0;
}
.family-grid-cell-stats {
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 0 0;
  width: 100%;
}
.stats-wrapper {
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 0.9em;
}
.family-stats {
  display: flex;
  align-items: center;
}
.family-stats:nth-child(-n + 2) {
  padding-right: 20px;
}
.status-link {
  display: inline-block;
  height: 18px;
  margin: 0;
}
.stats-img-github {
  height: 18px;
}
.stats-img-star {
  height: 16px;
  margin-right: 5px;
}
.stats-img-fork {
  height: 14px;
  margin-right: 5px;
}
.family-updated {
  font-size: 0.8em;
  font-style: italic;
  justify-self: flex-end;
  margin: 0;
}
@media screen and (max-width: 1500px) {
  .family-grid-wrapper {
    padding: 20px 40px;
  }
}
@media screen and (max-width: 900px) {
  .family-grid-wrapper {
    padding: 20px;
  }
  .family-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  .family-grid-cell-slogan p {
    font-size: 0.97em;
  }
}

@media (prefers-color-scheme: dark) {
  .family-grid-cell {
    background: var(--blacker);
    border: 1px solid #000;
  }
}
</style>
