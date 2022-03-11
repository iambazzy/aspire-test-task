<template>
  <v-row class="mt-4 curved-top d-flex justify-space-around">
    <v-col cols="2" class="px-1" v-for="(icon, index) in buttons" :key="index">
      <div class="d-flex flex-column align-center" @click="handleClick(icon.id)">
        <img :src="icon.img" height="25px" />
        <div class="black--text mt-1 font-size-name text-center" v-if="selectedCard">
          {{ icon.id === 'freeze' && selectedCard.disabled ? icon.secondary : icon.name }}
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'selectedCard',
      'cards',
    ])
  },
  data: () => ({
    value: false,
    buttons: [
      { id: 'freeze', name: 'Freeze card', secondary: 'Unfreeze', img: require('../../assets/freeze.png') },
      { id: 'limit', name: 'Set spend limit', img: require('../../assets/spend.png')},
      { id: 'gpay', name: 'Add to GPay', img: require('../../assets/gpay.png') },
      { id: 'replace', name: 'Replace card', img: require('../../assets/replace.png') },
      { id: 'cancel', name: 'Cancel card', img: require('../../assets/deac.png') }
    ]
  }),
  methods: {
    handleClick(val) {
      switch(val) {
        case 'freeze':
          return this.$emit('handle-freeze', val);
        case 'cancel':
          return this.$emit('delete-card', val);
      }
    },
  }
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