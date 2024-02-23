<template>
  <PoliciesContainer page="conduct">
    <div class="markdown-wrapper" v-html="conduct" />
  </PoliciesContainer>
</template>

<script>
import PoliciesContainer from '~/components/policies/PoliciesContainer.vue';
import { coc } from '../../static/lib/coc.json';

export default {
  components: {
    PoliciesContainer,
  },
  data() {
    return {
      conduct: coc,
    };
  },
  head() {
    return {
      title: 'Code of Conduct - joi.dev',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'The joi code of conduct',
        },
      ],
    };
  },
};
</script>
