<template>
  <v-row class="white" :style="{ height: [0, 1].includes(panel) ? '70vh' : '30vh' }">
    <v-col cols="12">
      <v-expansion-panels accordion v-model="panel">
        <v-expansion-panel v-for="(item, i) in panels" :key="i">
          <!-- HEADER -->
          <v-expansion-panel-header>
            <div class="d-flex align-center">
              <img :src="item.img" height="20px" />
              <div class="pl-2 font--md font-weight-medium" v-text="item.name" />
            </div>
            <template v-slot:actions>
              <img src="../../assets/down.png" height="20px" />
            </template>
          </v-expansion-panel-header>
          <!-- HEADER -->

          <!-- CONTENT -->
          <v-expansion-panel-content>
            <expansion-content v-for="(item, index) in 3" :key="index" />
          </v-expansion-panel-content>
          <!-- CONTENT -->
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>

<script>
import ExpansionContent from '../Home/ExpansionContent.vue';

export default {
  components: {
    ExpansionContent
  },
  data: () => ({
    panel: [0],
    panels: [
      {
        name: 'Card details',
        img: require('../../assets/carddeet.svg')
      },
      {
        name: 'Recent Transactions',
        img: require('../../assets/trans.svg')
      },
    ]
  })
}
</script>