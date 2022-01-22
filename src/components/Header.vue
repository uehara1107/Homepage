<template>
<div class="header-area">
	<v-row justify="center">
		<v-col lg="2" md="2" sm="3" xs="3">
			<router-link to='/about'><v-img max-width="200px" v-bind:src="aboutImg" /></router-link>
		</v-col>
		<v-col lg="2" md="2" sm="3" xs="3">
			<router-link to='/skill'><v-img max-width="200px" v-bind:src="skillImg" /></router-link>
		</v-col>
		<v-col lg="2" md="2" sm="3" xs="3">
			<router-link to='/product'><v-img max-width="200px" v-bind:src="productImg" /></router-link>
		</v-col>
		<v-col lg="2" md="2" sm="3" xs="3">
			<router-link to='/contact'><v-img max-width="200px" v-bind:src="contactImg" /></router-link>
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