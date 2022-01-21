<template>
  <v-app>
    <v-container>
      <router-view />
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data(){
    return{
    }
  },
  components:{

  },
  beforeCreate: function(){
    this.$router.replace({
    path: '/top'
    })
  },
  mounted(){
		window.addEventListener('scroll', this.scrollSencer);
	},
	methods:{
		scrollSencer(){
			if(window.scrollY >= 100){
				this.$router.replace({
					path: '/body'
				})
      }
    }
	}
});
</script>

<style>
.v-application{
  background-color: #EDE7F6 !important;
}
</style>