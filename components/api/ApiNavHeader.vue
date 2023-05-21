<template>
  <div class="api-nav-title-wrapper">
    <div class="api-nav-header">
      <div class="api-nav-title">API</div>
      <div class="api-lang-wrapper">
        <select
          class="api-lang-select"
          :value="version"
          @change="onVersionChange"
        >
          <option v-for="v in versions" :key="v" :value="v">
            {{ v }}
          </option>
        </select>
      </div>
    </div>
    <Ads />
  </div>
</template>

<script>
import Ads from '~/components/Ads.vue';

export default {
  name: 'ApiNavHeader',
  components: {
    Ads,
  },
  props: {
    version: { type: String, required: true },
    versions: { type: Array, required: true },
  },
  methods: {
    onVersionChange(event) {
      this.$emit('version-change', event.target.value);
    },
  },
};
</script>

<style lang="postcss" scoped>
@import '../../assets/styles/sideNav.css';

.api-nav-title-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding-bottom: 10px;
}

.api-nav-header {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
}

.api-nav-title {
  font-size: 1.5rem;
  color: var(--black);
  margin: 0;
}

.api-lang-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 0 0 0 10px;
}

.api-lang-select {
  width: 70px;
  padding: 0 5px 0 5px;
  border: none;
  height: 30px;
  font-size: 1em;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url(/img/down.png) 96% / 15% no-repeat var(--off-white);
  cursor: pointer;
}

@media screen and (max-width: 900px) {
  .api-nav-header {
    justify-content: space-between;
  }
}

@media (prefers-color-scheme: dark) {
  .api-nav-title {
    color: var(--ash);
  }

  .api-lang-select {
    background-color: var(--blackest);
    border-color: var(--black);
  }
}
</style>
