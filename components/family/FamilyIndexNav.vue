<template>
  <Sidebar>
    <template #header>
      <div class="side-nav-title">Modules</div>
      <Ads />
    </template>

    <template #content>
      <div class="side-nav-inner-wrapper">
        <div class="family-sort-wrapper">
          <div>Sort By:</div>
          <select
            class="family-sort"
            :value="sort"
            @change="onSortChange($event)"
          >
            <option value="name">Name</option>
            <option value="stars">Stars</option>
            <option value="forks">Forks</option>
            <option value="updated">Updated</option>
          </select>
        </div>
        <div class="family-module-search">
          <input
            class="family-module-search-box"
            :value="search"
            placeholder="Search Modules"
            @input="onInput($event)"
          />
          <div class="family-module-search-img" @click="onSearch"></div>
        </div>
        <button v-if="search" class="module-clear-button" @click="onClear">
          Clear
        </button>
      </div>
    </template>

    <template #footer>
      <SideFooter />
    </template>
  </Sidebar>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import SideFooter from '~/components/Footers/SideFooter.vue';
import Ads from '~/components/Ads.vue';

export default {
  components: {
    Sidebar,
    SideFooter,
    Ads,
  },
  props: {
    search: { type: String, required: true },
    sort: { type: String, required: true },
  },
  methods: {
    onInput(event) {
      this.$emit('input', event);
    },
    onSearch() {
      const searchTerm = this.search.trim();
      if (searchTerm !== '') {
        this.$emit('search');
      }
    },
    onClear() {
      this.$emit('clear');
    },
    onSortChange(event) {
      this.$emit('change', event.target.value);
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../assets/styles/sideNav.css';

.family-sort-wrapper {
  display: flex;
  align-items: center;
  margin: 10px 0 0 0;
}

.family-sort {
  width: 90px;
  padding: 0 5px;
  margin-left: 10px;
  height: 30px;
  font-size: 0.91em;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url(/img/down.png) 96%/12% no-repeat var(--white);
  border: 1px solid var(--dark-white);
  cursor: pointer;
}

.family-module-search {
  position: relative;
  width: 100%;
  margin-top: 20px;
}

.family-module-search-box {
  height: 30px;
  outline: none;
  padding: 10px;
  border: 1px solid var(--dark-white);
  width: 100%;
  font-size: 0.85rem;
  border-radius: 0;
  -webkit-appearance: none;
}

.family-module-search-img {
  position: absolute;
  background: url('/img/search.png') no-repeat;
  background-position: center;
  background-color: var(--white);
  background-size: contain;
  padding: 10px;
  right: 0;
  top: 0px;
  border-top: 1px solid var(--dark-white);
  border-right: 1px solid var(--dark-white);
  border-bottom: 1px solid var(--dark-white);
  height: 30px;
  width: 30px;
  z-index: 25;
  cursor: pointer;
}

.module-clear-button {
  outline: 0;
  border: 1px solid var(--dark-white);
  background: var(--white);
  padding: 4px 10px;
  color: #333;
  cursor: pointer;
  margin: 10px 0 0 0;
}

@media (prefers-color-scheme: dark) {
  .family-sort,
  .family-module-search-box {
    background: var(--black);
    border-color: var(--blackest);
    color: var(--light-gray);
  }

  .family-module-search-img {
    background-color: var(--blackest);
    border-color: var(--blackest);
  }
}
</style>
