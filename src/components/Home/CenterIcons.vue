<template>
  <v-row class="mt-4 curved-top d-flex justify-space-around">
    <v-col cols="2" class="px-1" v-for="(icon, index) in buttons" :key="index">
      <div class="d-flex flex-column align-center">
        <img :src="icon.img" height="25px" />
        <div class="black--text mt-1 font-size-name text-center">{{ icon.name }}</div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    value: false,
    buttons: [
      { name: 'Freeze card', img: require('../../assets/freeze.png') },
      { name: 'Set spend limit', img: require('../../assets/spend.png')},
      { name: 'Add to GPay', img: require('../../assets/gpay.png') },
      { name: 'Replace card', img: require('../../assets/replace.png') },
      { name: 'Cancel card', img: require('../../assets/deac.png') }
    ]
  })
}
</script>

<style scoped>
  .curved-top {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background: #EDF3FF;
  }
  .font-size-name {
    font-size: 11px;
  }
</style>