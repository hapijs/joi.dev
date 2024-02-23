<template>
  <PoliciesContainer page="support">
    <div class="markdown-wrapper" v-html="support" />
  </PoliciesContainer>
</template>

<script>
import PoliciesContainer from '@/components/policies/PoliciesContainer.vue';
import { support } from '../../static/lib/support.json';

export default {
  components: {
    PoliciesContainer,
  },
  data() {
    return {
      support,
    };
  },
  head() {
    return {
      title: 'Support Policy - joi.dev',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The official joi support policy',
        },
      ],
    };
  },
};
</script>
