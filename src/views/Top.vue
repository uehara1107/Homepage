<template>
<div class="top">
	<v-row justify="center" class="top-title">
		<v-col align="center">
			<img width="1000px" v-bind:src="nameImg">
		</v-col>
	</v-row>
	<v-row justify="center">
		<v-col align="center" class="top-msg">
			<img width="600px" v-bind:src="msgImg">
		</v-col>
	</v-row>
	<v-row justify="center" class="scl-msg">
		<p>↓ ↓ scroll ↓ ↓</p>
	</v-row>

</div>
</template>

<script>
export default {
	data(){
		return{
			nameImg: require('@/assets/name.png'),
			msgImg: require('@/assets/message.png'),
		}
	},
	components:{
	},
}
</script>

<style scoped>
.top-title{
	margin-top: 100px;
}
.top-msg{
	margin-bottom: 100px;
}
.scl-msg{
	margin-bottom: 300px;
}
</style>