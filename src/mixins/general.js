import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'selectedCard',
      'cards'
    ])
  },
  methods: {
    handleModal(value) {
      console.log(value)
      this.$store.commit('setState', { key: 'modalVisible', value });
    },
    addCard(data) {
      this.$store.commit('setState', { key: 'cards', value: [data, ...this.cards] });
      this.handleModal(false);
    },
    deleteCard() {
      const filtered = [...this.cards].filter((card) => card.lastDigits !== this.selectedCard.lastDigits);
      this.$store.commit('setState', { key: 'cards', value: filtered });
      this.$store.commit('setState', { key: 'selectedCard', value: { ...this.cards[0] }});
    },
    handleFreeze() {
      const modified = [...this.cards].map((card) => 
        (card.lastDigits === this.selectedCard.lastDigits ? { ...card, disabled: !this.selectedCard.disabled } : card)
      );
      this.$store.commit('setState', { key: 'cards', value: modified });
      this.$store.commit('setState', { key: 'selectedCard', value: { ...this.selectedCard, disabled: !this.selectedCard.disabled } });
    },
  }
}