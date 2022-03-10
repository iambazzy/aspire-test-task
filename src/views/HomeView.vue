<template>
  <v-container>
    <top-bar @add-card="handleModal(true)" />
    <top-tabs />
    <card-section />
    <app-modal modalTitle="Add Card" @close-modal="handleModal(false)">
      <debit-form @submitted-data="addCard" class="py-4" />
    </app-modal>
    <center-icons />
    <home-menu />
  </v-container>
</template>

<script>
  import TopBar from '../components/Home/TopBar.vue';
  import TopTabs from '../components/Home/TopTabs.vue';
  import CardSection from '../components/Home/CardSection.vue';
  import AppModal from '../components/Base/Dialog.vue';
  import DebitForm from '../components/Home/DebitForm.vue';
  import CenterIcons from '../components/Home/CenterIcons.vue';
  import HomeMenu from '../components/Home/HomeMenu.vue';

  import { mapGetters } from 'vuex';

  export default {
    name: 'Home',
    components: {
      TopBar,
      TopTabs,
      CardSection,
      AppModal,
      DebitForm,
      CenterIcons,
      HomeMenu
    },
    computed: {
      ...mapGetters([
        'cards'
      ])
    },
    methods: {
      handleModal(value) {
        this.$store.commit('setState', { key: 'modalVisible', value });
      },
      addCard(data) {
        this.$store.commit('setState', { key: 'cards', value: [data, ...this.cards] });
        this.handleModal(false);
      }
    }
  }
</script>