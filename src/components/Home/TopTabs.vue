<template>
  <v-row>
    <v-col cols="12">
      <v-tabs v-model="tab" height="32px" background-color="transparent" :dark="$vuetify.breakpoint.smAndDown">
        <v-tabs-slider color="#23CEFD"></v-tabs-slider>
        <v-tab>My debit cards</v-tab>
        <v-tab>All company cards</v-tab>
      </v-tabs>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'tab'
    ])
  }
}
</script>

<style>

</style>