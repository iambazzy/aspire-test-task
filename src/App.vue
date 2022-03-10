<template>
  <v-app>
    <v-main :class="['bg', $vuetify.breakpoint.smAndDown && 'bg--dark font--white']">
      <app-header />
      <div>
        <router-view/>
      </div>
      <bottom-menu />
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from './components/Header/AppHeader.vue';
import BottomMenu from './components/Home/BottomMenu.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    BottomMenu,
  },
  data: () => ({
    //
  }),
};
</script>


<style scoped>
  @import './assets/main.scss';
</style>