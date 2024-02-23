<template>
  <ul v-if="!folded" class="api-nav-list">
    <ApiNavListItem
      v-for="child in menu.children"
      :key="`menu-${depth}-${child.id}`"
      :item="child"
      :depth="depth"
      :current="current"
      :ancestors="ancestors"
    />
  </ul>
</template>

<script>
export default {
  components: {
    ApiNavListItem: () => import('@/components/api/ApiNavListItem.vue'),
  },
  props: {
    menu: {
      type: Object,
      required: true,
    },
    depth: {
      type: Number,
      default: 0,
    },
    folded: {
      type: Boolean,
      default: true,
    },
    current: {
      type: String,
      required: true,
    },
    ancestors: {
      type: Object,
      required: true,
    },
  },
  computed: {
    currentAncestors() {
      if (this.current) {
        return this.ancestors[this.current] || [];
      }

      return [];
    },
  },
  methods: {
    hasChildren(child) {
      return 'children' in child;
    },
    isHeader(child) {
      return this.hasChildren(child) && child.depth === 0;
    },
    linkClick(child) {
      if (this.hasChildren(child)) {
        child.folded = !child.folded;
      }
    },
    isFolded(child) {
      if (this.isActiveParent(child)) {
        return false;
      }

      if (typeof child.folded === 'boolean') {
        return child.folded;
      }

      return true;
    },
    isActive(child) {
      if (this.current) {
        return this.current === child.id;
      }

      if (this.$route.hash) {
        return this.$route.hash === `#${child.id}`;
      }

      return false;
    },
    isActiveParent(child) {
      if (this.currentAncestors.length) {
        return this.currentAncestors.includes(child.id);
      }

      return false;
    },
  },
};
</script>

<style lang="postcss" scoped>
.api-nav-list {
  padding: 0;
}
</style>
