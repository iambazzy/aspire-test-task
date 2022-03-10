<template>
  <v-bottom-navigation v-model="value" fixed>
    <v-sheet>
      <v-btn height="100%" v-for="(button, index) in buttons" :key="index">
        <span class="mt-2 font--sm grey--text">{{ button.name }}</span>
        <img :src="button.img" height="17px" />
      </v-btn>
    </v-sheet>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({
    value: false,
    buttons: [
      { name: 'Home', img: require('../../assets/logoo.png') },
      { name: 'Cards', img: require('../../assets/pay.png')},
      { name: 'Payments', img: require('../../assets/payments.png') },
      { name: 'Credit', img: require('../../assets/credit.png') },
      { name: 'Profile', img: require('../../assets/user.png') }
    ]
  })
}
</script>