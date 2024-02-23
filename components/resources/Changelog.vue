<template>
  <div class="changelog-wrapper">
    <h2 class="hapi-header">
      <a id="changelog" href="#changelog" class="anchor" aria-hidden="true"></a
      >Changelog
    </h2>
    <ChangelogVersion
      v-for="milestone in milestones"
      :key="milestone.id"
      :version="milestone.version"
      :version-url="milestone.url"
      :issues="milestone.issues"
    />
  </div>
</template>

<script>
import ChangelogVersion from './ChangelogVersion.vue';
export default {
  components: {
    ChangelogVersion,
  },
  props: {
    milestones: { type: Array, required: true },
  },
};
</script>

<style lang="postcss">
.changelog-wrapper {
  width: 100%;
  padding: 20px 100px 10px 100px;
}

.changelog-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 1500px) {
    padding: 20px 40px;
  }

  @media screen and (max-width: 900px) {
    padding: 0;
  }
}
</style>
