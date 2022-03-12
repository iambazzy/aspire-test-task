<template>
  <v-bottom-navigation v-model="value" fixed>
    <v-sheet>
      <v-btn height="100%" color="white" v-for="(button, index) in buttons" :key="index">
        <span class="mt-2 font--sm grey--text">{{ button.name }}</span>
        <img :src="button.img" height="17px" />
      </v-btn>
    </v-sheet>
  </v-bottom-navigation>
</template>

<script>
import { menuItems } from '../../Helpers/index';

export default {
  data: () => ({
    value: false,
    buttons: [ ...menuItems ]
  })
}
</script>