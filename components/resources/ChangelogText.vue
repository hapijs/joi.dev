<template>
  <div class="log-info-wrapper">
    <a :href="issueUrl" target="_blank" class="log-link">#{{ issueNumber }}</a>
    <div class="log-text">{{ issueText }}</div>
  </div>
</template>

<script>
export default {
  props: {
    issueUrl: { type: String, required: true },
    issueNumber: { type: Number, required: true },
    issueText: { type: String, required: true },
  },
};
</script>

<style lang="postcss" scoped>
.log-info-wrapper {
  display: flex;
  margin-bottom: 5px;
  line-height: 1.5rem;
}

.log-link {
  margin: 0 10px 0 0;
  color: var(--orange);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.log-text {
  margin: 0;
}
</style>
