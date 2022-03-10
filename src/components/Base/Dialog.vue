<template>
  <v-dialog :transition="`dialog-${transition}-transition`" v-model="modalVisible" persistent>
    <v-card>
      <!-- TITLE -->
      <v-card-title class="green-box font--white align-center d-flex justify-space-between pa-1">
        <h5 class="pl-3">{{ modalTitle }}</h5>
        <v-btn dark icon @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <!-- BODY -->
      <v-card-text class="px-4 py-2">
        <slot></slot>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    transition: 'top',
  }),
  props: {
    modalTitle: {
      type: String,
      default: () => 'Title'
    },
  },
  computed: {
    ...mapGetters([
      'modalVisible'
    ])
  },
  methods: {
    close() {
      this.$emit('close-modal');
    }
  }
}
</script>