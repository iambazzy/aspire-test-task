<template>
  <v-row>
    <v-col cols="12" class="py-2 d-flex justify-center">
      <v-card flat color="transparent" width="360px">
        <v-window v-model="onboarding" reverse>
          <v-window-item v-for="(card, index) in cards" :key="index">
            <card :cardData="card" />
          </v-window-item>
        </v-window>

        <v-card-actions class="py-2 d-flex justify-center">
          <v-item-group v-model="onboarding" mandatory>
            <v-item v-for="(n, index) in cards" :key="`btn-${index}`" v-slot="{ active, toggle }">
              <v-btn color="#01D167" :input-value="active" icon x-small @click="toggle">
                <v-icon>mdi-record</v-icon>
              </v-btn>
            </v-item>
          </v-item-group>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Card from '../Home/Card.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    Card
  },
  data: () => ({
    length: 3,
    onboarding: 0
  }),
  computed: {
    ...mapGetters([
      'cards'
    ])
  },
  watch: {
    onboarding: function(val) {
      this.setSelectedCard(val);
    }
  },
  methods: {
    setSelectedCard(index = this.onboarding) {
      this.$store.commit('setState', { key: 'selectedCard', value: this.cards[index] });
    }
  },
  mounted() {
    this.setSelectedCard();
  }
}
</script>
