<template>
  <PoliciesContainer page="styleguide">
    <div class="markdown-wrapper" v-html="styleguide" />
  </PoliciesContainer>
</template>

<script>
import PoliciesContainer from '@/components/policies/PoliciesContainer.vue';
import { styleguide } from '../../static/lib/styleguide.json';

export default {
  components: {
    PoliciesContainer,
  },
  data() {
    return {
      styleguide,
    };
  },
  head() {
    return {
      title: 'Style Guide - joi.dev',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The official joi style guide',
        },
      ],
    };
  },
};
</script>
