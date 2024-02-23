<template>
  <div>
    <div class="install-header">Installation:</div>
    <div class="install-wrapper">
      <template v-if="name !== 'joi-date'">
        <p v-if="name !== 'joi-date'" class="install-how">
          <a
            class="install-link"
            target="_blank"
            :href="`https://www.npmjs.com/package/@hapi/${name}`"
            >npm</a
          >:
          <span
            ><code>{{ `npm install @hapi/${name}` }}</code></span
          >
        </p>
        <p v-if="name !== 'joi-date'" class="install-how">
          <a
            class="install-link"
            target="_blank"
            :href="'https://yarnpkg.com/en/package/@hapi/' + name"
            >yarn</a
          >:
          <span
            ><code>{{ `yarn add @hapi/${name}` }}</code></span
          >
        </p>
      </template>
      <template v-else>
        <p class="install-how">
          <a
            class="install-link"
            target="_blank"
            :href="'https://www.npmjs.com/package/@joi/date'"
            >npm</a
          >:
          <span><code>npm install @joi/date</code></span>
        </p>
        <p class="install-how">
          <a
            class="install-link"
            target="_blank"
            :href="'https://yarnpkg.com/en/package/@joi/date'"
            >yarn</a
          >:
          <span><code>yarn add @joi/date</code></span>
        </p>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
  },
};
</script>

<style lang="postcss" scoped>
.install-wrapper {
  margin: 20px 100px 10px 100px;
  border: 1px solid var(--dark-white);
  padding: 10px;
  background: #f8f8f8;
}

.install-header {
  font-size: 1.5em;
  margin: 30px 0 15px 0;
  display: inline-block;
  border-bottom: 1px solid var(--dark-white);
}

.install-link {
  font-weight: 700;
  text-decoration: none;
  color: var(--orange);

  &:hover {
    text-decoration: underline;
  }
}

@media screen and (max-width: 1500px) {
  .install-wrapper {
    margin: 20px 40px 10px 40px;
  }
}

@media screen and (max-width: 900px) {
  .install-wrapper {
    margin: 20px 10px 0 10px;
  }

  .install-header {
    font-size: 24px;
  }
}

@media (prefers-color-scheme: dark) {
  .install-wrapper {
    background: var(--blacker);
    border-color: var(--blackest);
  }
}
</style>
