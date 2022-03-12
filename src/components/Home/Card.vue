<template>
  <div>
    <!-- TOP EYE VIEW -->
    <div class="d-flex justify-end z-1">
      <div :class="['show-card px-4 d-flex justify-space-between', cardData.disabled ? 'disabled' : '']" @click="showLastFour = !showLastFour">
        <v-icon class="eye-icon pt-md-1" small>mdi-eye</v-icon>
        <span class="font--md font--green font-weight-medium mt-1 cursor-pointer">Show card number</span>
      </div>
    </div>

    <!-- MAIN CARD BODY -->
    <v-card :disabled="cardData.disabled" color="#01D167" class="card-structure rounded-lg">
      <v-card-title class="d-flex justify-end">
        <img src="../../assets/name_logo.png" height="21px" />
      </v-card-title>

      <v-card-text :class="['card', 'px-xs-8', 'white--text']">
        <h1 class="font--xl--md pt-xs-5">{{ cardData.name }}</h1>

        <div class="d-flex align-center pt-2 pt-sm-2">
          <template v-if="showLastFour"> 
            <div class="card-code mr-2 pt-xs-4 mr-xs-4" v-for="(item, index) in 3" :key="index">
              <v-icon class="pl-0" small color="white" v-for="(item, index) in 4" :key="index">mdi-circle-medium</v-icon>
            </div>

            <div class="font-weight-bold">{{ cardData.lastDigits | getLastFour }}</div>
          </template>

          <template v-else>
            <div class="d-flex">
              <div 
                v-for="(num, index) in getCardNumber(cardData.lastDigits)" 
                :key="index"
                class="mr-9 font-weight-bold"
              >
                {{ num }}
              </div>
            </div>
          </template>
        </div>

        <div class="pt-3 d-flex align-center">
          <span class="font-weight-bold">Thru: {{ cardData.thru | makeThru }}</span>
          <span class="d-flex align-center font-weight-bold pl-8">CVV: <span class="font--xl pt-1 pl-1">{{ cardData.cvv | maskCvv }}</span></span>
        </div>
      </v-card-text>

      <v-card-actions class="d-flex justify-end pa-4">
        <img src="../../assets/visa.png" height="21px" />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    showLastFour: true,
  }),
  props: {
    cardData: {
      type: Object,
      default: () => ({
        name: 'Mark',
        lastDigits: '1222111111111111',
        thru: '12/22',
        cvv: '123',
      })
    }
  },
  filters: {
    maskCvv(val) {
      return '*'.repeat(val.length);
    },
    getLastFour(val) {
      console.log(val);
      return val.substr(-4);
    },
    makeThru(val) {
      const split = val.match(/..?/g);
      return `${split[0]}/${split[1]}`;
    }
  },
  computed: {
    getCardNumber() {
      return (val) => {
        return val.match(/....?/g);
      }
    },
  }
}
</script>

<style scoped lang="scss">
  .show-card {
    width: 151px;
    height: 33px;
    background: white;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    .eye-icon {
      margin-top: -7px;
    }
  }

  .card-structure {
    z-index: 2;
    margin-top: -7px;
    .card {
      width: 320px;
      height: 80px;

      .card-code {
        margin-left: -4px;
      }
    } 
  }

  .disabled {
    pointer-events: none;
    cursor: not-allowed;
  }
  
  // Just in case we have a very small screen (maybe an iphone 5s)
  @media only screen and (max-width: 350px) {
    .card-structure {
      .card {
        width: 300px;
      }
    }
  }

</style>