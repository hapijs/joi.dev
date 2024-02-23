<template>
  <PoliciesContainer page="contributing">
    <div class="markdown-wrapper" v-html="contributing" />
  </PoliciesContainer>
</template>

<script>
import PoliciesContainer from '@/components/policies/PoliciesContainer.vue';
import { contributing } from '../../static/lib/contributing.json';

export default {
  components: {
    PoliciesContainer,
  },
  data() {
    return {
      contributing,
    };
  },
  head() {
    return {
      title: 'Contributing - joi.dev',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Contributing to joi',
        },
      ],
    };
  },
};
</script>
