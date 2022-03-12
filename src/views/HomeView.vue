<template>
  <v-container :class="[$vuetify.breakpoint.mdAndUp ? 'pa-12' : '']">
    <top-bar @add-card="handleModal(true)" />
    <top-tabs />
    
    <template v-if="$vuetify.breakpoint.smAndDown">
      <card-section />
      <center-icons @delete-card="deleteCard" @handle-freeze="handleFreeze" />
      <home-menu />
    </template>

    <template v-else>
      <web-layout />
    </template>

    <app-modal modalTitle="Add Card" @close-modal="handleModal(false)">
      <debit-form @submitted-data="addCard" class="py-4" />
    </app-modal>
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
  import WebLayout from '../components/Home/WebLayout.vue';
  import generalMixin from '../mixins/general';

  export default {
    name: 'Home',
    mixins: [generalMixin],
    components: {
      TopBar,
      TopTabs,
      CardSection,
      AppModal,
      DebitForm,
      CenterIcons,
      HomeMenu,
      WebLayout
    },
  }
</script>