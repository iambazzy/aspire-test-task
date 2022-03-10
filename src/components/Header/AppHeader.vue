<template>
  <div>
    <web-header v-if="$vuetify.breakpoint.mdAndUp" />
    <mobile-header v-else />
  </div>
</template>

<script>
  import MobileHeader from './MobileHeader.vue';
  import WebHeader from './WebHeader.vue';

  export default {
    components: {
      MobileHeader,
      WebHeader
    },
    data: () => ({ drawer: null }),
  }
</script>