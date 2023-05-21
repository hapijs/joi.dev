<template>
  <li
    :class="{
      'api-nav-list-item': true,
      'api-nav-parent': hasChildren,
      'api-active': isActive,
    }"
  >
    <div
      :class="{
        'api-nav-node': true,
        'api-header': isHeader,
      }"
    >
      <a :href="`#${item.id}`" @click="linkClick">
        <span v-if="hasChildren" class="plus-sign">{{
          isFolded ? '+' : '−'
        }}</span>
        <span class="api-nav-node-content" v-html="item.text" />
      </a>
    </div>

    <ApiNavList
      v-if="hasChildren"
      class="api-nav-child"
      :menu="item"
      :depth="depth + 1"
      :folded="isFolded"
      :current="current"
      :ancestors="ancestors"
    />
  </li>
</template>

<script>
import Vue from 'vue';

export default {
  components: { ApiNavList: () => import('@/components/api/ApiNavList.vue') },
  data() {
    return { forceFolding: false };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    depth: {
      type: Number,
      default: 0,
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
    hasChildren() {
      return 'children' in this.item;
    },
    isHeader() {
      return this.hasChildren && this.item.depth === 0;
    },

    isFolded() {
      if (this.isActiveParent) {
        return false;
      }

      if (typeof this.item.folded === 'boolean') {
        return this.item.folded;
      }

      return true;
    },
    isActive() {
      const active = this.current ? this.current === this.item.id : false;

      if (active) {
        // eslint-disable-next-line vue/no-async-in-computed-properties -- We need to act on next tick to focus the element
        Vue.nextTick(() => {
          this.$el.scrollIntoView();
        });
      }

      return active;
    },
    isActiveParent() {
      if (this.currentAncestors.length) {
        return this.currentAncestors.includes(this.item.id);
      }

      return false;
    },
  },
  methods: {
    linkClick() {
      if (this.hasChildren) {
        this.item.folded = !this.isFolded;
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.api-nav-list-item {
  padding: 0;
  list-style-type: none;
  padding-left: 24px;
  line-height: 1.7rem;
}

.api-nav-node {
  padding-left: 100%;
  margin-left: -100%;

  > a {
    position: relative;
    text-decoration: none;
    color: var(--gray);
    font-size: 1rem;

    .api-nav-node-content {
      display: inline-block;

      :deep(code) {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
    }
  }
}

.api-nav-parent > .api-nav-node {
  > a {
    color: var(--orange);
  }
}

.plus-sign {
  margin-left: -16px;
}

.api-active {
  > .api-nav-node {
    background-color: var(--gray);

    > a {
      color: white;
    }
  }
}
</style>
