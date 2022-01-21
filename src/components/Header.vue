<template>
<div class="header-area">
	<v-row justify="end">
		<v-col cols="1">
			<router-link to='/about'><img width="100px" v-bind:src="aboutImg"></router-link>
		</v-col>
		<v-col cols="1">
			<router-link to='/skill'><img width="100px" v-bind:src="skillImg"></router-link>
		</v-col>
		<v-col cols="1">
			<router-link to='/product'><img width="100px" v-bind:src="productImg"></router-link>
		</v-col>
		<v-col cols="1">
			<router-link to='/contact'><img width="100px" v-bind:src="contactImg"></router-link>
		</v-col>
	</v-row>
  </div>
</template>

<script>
export default {
	data(){
		return{
			aboutImg: require('@/assets/about.png'),
			skillImg: require('@/assets/skill.png'),
			productImg: require('@/assets/product.png'),
			contactImg: require('@/assets/contact.png')
		}
	}
}
</script>

<style>

</style>