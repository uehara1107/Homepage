<template>
  <div class="product">
    <Header />
    <div class="product-area">    
      <v-row justify="center">
        <v-img max-width="800px" v-bind:src="preImg" />
      </v-row>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components: { Header },
  data(){
    return{
      preImg: require('@/assets/preparation.png')
    }
  }
}
</script>

<style>
.product-area{
  padding: 80px;
}
</style>