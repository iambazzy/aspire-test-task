<template>
  <v-row>
    <v-col cols="9" class="d-flex pr-0">
      <div class="large d-flex align-center justify-center">
        <img src="../../assets/storage.svg" height="16px" />
      </div>
      <div class="pl-2 d-flex flex-column">
        <div class="font--lg font-weight-medium">Hamleys</div>
        <div class="font--md grey--text">20 May 2020</div>

        <div class="font--md mt-4 d-flex">
          <div class="small d-flex align-center justify-center">
            <img src="../../assets/fianance.svg" height="8px" />
          </div>
          <div class="pl-1 sub-text font-weight-medium">Refund on debit card</div>
        </div>
      </div>
    </v-col>

    <v-col cols="3" class="pl-0">
      <div class="d-flex">
        <div class="font-weight-bold green--text d-flex">+S$ <span class="pl-1">120</span></div>
        <div class="d-flex justify-start flex-column">
          <v-icon color="grey">mdi-chevron-right</v-icon>
        </div>
      </div>  
    </v-col>
  </v-row>
</template>

<script>
export default { }
</script>

<style scoped>
  .large {
    background-color: #009DFF1A;
    height: 50px;
    width: 50px;
    border-radius: 50px;
  }

  .small {
    background-color: #325BAF;
    height: 18px;
    width: 24px;
    border-radius: 10px;
  }

  .sub-text {
    color: #325BAF
  }
</style>