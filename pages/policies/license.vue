<template>
  <PoliciesContainer page="license">
    <div class="markdown-wrapper" v-html="license" />
  </PoliciesContainer>
</template>

<script>
import PoliciesContainer from '@/components/policies/PoliciesContainer.vue';
import { license } from '../../static/lib/license.json';

export default {
  components: {
    PoliciesContainer,
  },
  data() {
    return {
      license,
    };
  },
  head() {
    return {
      title: 'License - joi.dev',
      meta: [
        { hid: 'description', name: 'description', content: 'The joi license' },
      ],
    };
  },
};
</script>
