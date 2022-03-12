<template>
  <v-navigation-drawer class="py-14 px-8" v-model="drawer" app color="#0C365A" width="300px">
    <img src="../../assets/mainlogo.svg" />
    <div class="font--lg grey--text pt-4 text-box">
      Trusted way of banking for 3,000+ SMEs and startups in Singapore
    </div>

    <v-list flat color="mt-8">
      <v-list-item-group v-model="selectedItem">
        <v-list-item v-for="(item, i) in menuItems" :key="i" class="px-0 mb-6">
          <v-list-item-icon>
            <img :src="item.img" height="20px" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text font--lg" v-text="item.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { menuItems } from '../../Helpers/index';

export default {
  data: () => ({
    drawer: true,
    selectedItem: 1,
    menuItems: [ ...menuItems ]
  })
}
</script>

<style scoped>
  .text-box {
    width: 220px;
  }
</style>