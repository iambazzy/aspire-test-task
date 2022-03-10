<template>
  <v-row>
    <v-col cols="12" class="horizontal-scroll">
      <card v-for="(card, index) in cards" :key="index" :cardData="card" />
    </v-col>
  </v-row>
</template>

<script>
import Card from '../Home/Card.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    Card
  },
  computed: {
    ...mapGetters([
      'cards'
    ])
  }
}
</script>

<style scoped>
  .horizontal-scroll {
    display: flex;
    overflow-x: auto;
  }
</style>
