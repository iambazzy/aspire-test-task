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
import { generateRandomNumber } from '../../Helpers/index.js';

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
    ]
  }),
  methods: {
    prepareDataForSubmission() {
      const data = {};
      this.formConfiguration.forEach(el => data[el.id] = el.value);
      data['lastDigits'] = generateRandomNumber(16);
      data['thru'] = generateRandomNumber(4);
      data['cvv'] = generateRandomNumber(3);
      return data;
    },
    submit() {
      if (this.$refs.add.validate()) {
        this.$emit('submitted-data', this.prepareDataForSubmission());
        this.$refs.add.reset();
      }
    }
  }
}
</script>