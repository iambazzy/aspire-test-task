<template>
  <v-card elevation="3" class="my-4 rounded-lg">
    <v-card-text>
      <v-row class="my-3">
        <v-col cols="6" class="pt-4 px-0">
          <v-row class="px-0">
            <v-col cols="12" class="px-0">
              <card-section />
            </v-col>
            <v-col cols="12" class="d-flex justify-center px-0">
              <div>
                <center-icons @delete-card="deleteCard" @handle-freeze="handleFreeze" />
              </div>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="6">
          <home-menu />
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import CardSection from '../Home/CardSection.vue';
import CenterIcons from '../Home/CenterIcons.vue';
import HomeMenu from '../Home/HomeMenu.vue';
import generalMixin from '../../mixins/general';

export default {
  mixins: [generalMixin],
  components: {
    CardSection, 
    CenterIcons,
    HomeMenu
  }
}
</script>