<template>
  <Sidebar>
    <template #header>
      <ApiNavHeader
        :version="version"
        :versions="versions"
        @version-change="onVersionChange"
      />
    </template>

    <template #content>
      <ApiNavList
        :menu="menu"
        :current="current"
        :folded="false"
        :ancestors="menuAncestors"
      />
    </template>

    <template #footer>
      <SideFooter />
    </template>
  </Sidebar>
</template>

<script>
import ApiNavHeader from '@/components/api/ApiNavHeader.vue';
import ApiNavList from '@/components/api/ApiNavList.vue';
import Sidebar from '@/components/Sidebar.vue';
import { computeMenuAncestors } from '@/utils/menuAncestors';
import SideFooter from '~/components/Footers/SideFooter.vue';

export default {
  components: {
    ApiNavHeader,
    ApiNavList,
    SideFooter,
    Sidebar,
  },
  props: {
    menu: { type: Object, required: true },
    current: { type: String, required: true },
    version: { type: String, required: true },
    versions: { type: Array, required: true },
  },
  data: function () {
    return {
      uls: {},
      links: {},
      points: {},
      offsets: [],
    };
  },
  computed: {
    menuAncestors() {
      return computeMenuAncestors(this.menu);
    },
  },
  methods: {
    onVersionChange(version) {
      this.$emit('version-change', version);
    },
  },
};
</script>
