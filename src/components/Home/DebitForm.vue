<template>
  <v-form ref="add" lazy-validation v-model="valid">
    <v-row>
      <v-col cols="12" md="6" class="py-0" v-for="(item, index) in formConfiguration" :key="index">
        <v-text-field  
          v-model="item.value"
          outlined
          :type="item.type"
          :label="item.label"
          :hint="item.hint ? item.hint : null"
          required
          :rules="item.rules"
          color="#01D167"
        />
      </v-col>
    </v-row>
    <v-btn 
      color="#01D167" 
      class="white--text mt-2"
      :disabled="!valid" 
      depressed 
      block 
      @click="submit"
    >
      Add Card
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    formConfiguration: [
      { 
        id: 'name',
        label: 'Name',
        type: 'text',
        value: '',
        rules: [v => !!v || 'Please enter your name']
      },
      { 
        id: 'lastDigits',
        label: 'Card Number',
        type: 'number',
        value: '',
        rules: [
          v => !!v || 'Please enter your card number',
          v => v.length === 16 || 'Invalid number - has to be 16 digit long'
        ]
      },
      { 
        id: 'thru',
        label: 'Expiry',
        type: 'number',
        value: '',
        hint: '1223 means 12/23',
        rules: [
          v => !!v || 'Please enter your expiry date',
          v => v.length === 4 || 'Invalid expiry date'
        ]
      },
      { 
        id: 'cvv',
        label: 'CVV',
        type: 'password',
        value: '',
        rules: [
          v => !!v || 'Please enter your cvv',
          v => v.length === 3 || 'Invalid cvv - has to be 3 digit'
        ]
      },
    ]
  }),
  methods: {
    submit() {
      if (this.$refs.add.validate()) {
        const data = {};
        this.formConfiguration.forEach(el => data[el.id] = el.value);
        this.$emit('submitted-data', data);
      }
    }
  }
}
</script>