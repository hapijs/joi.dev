<template>
  <PoliciesContainer page="security">
    <div class="markdown-wrapper" v-html="security" />
  </PoliciesContainer>
</template>

<script>
import PoliciesContainer from '@/components/policies/PoliciesContainer.vue';
import { security } from '../../static/lib/security.json';

export default {
  components: {
    PoliciesContainer,
  },
  data() {
    return {
      security,
    };
  },
  head() {
    return {
      title: 'Security Policy - joi.dev',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The official joi security policy',
        },
      ],
    };
  },
};
</script>
