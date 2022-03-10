<template>
  <v-row>
    <v-col cols="12" md="12" class="py-0">
      <div class="font-lg font-weight-medium">Account balance</div>
    </v-col>

    <v-col cols="12" md="12">
      <div class="d-flex justify-space-between">
        <div class="d-flex align-center">
          <div class="pill-box green-box font--md font-weight-bold">S$</div>
          <div class="font--xl font-weight-bold pl-2">3,000</div>
        </div>

        <div class="d-flex align-center" @click="$emit('add-card')">
          <v-icon color="#23CEFD" small>mdi-plus-circle</v-icon>
          <span class="font--link font--md--two font-weight-medium pl-1">New card</span>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {

}
</script>

<style>

</style>