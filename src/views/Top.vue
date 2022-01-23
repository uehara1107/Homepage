<template>
<div class="top">
	<v-row justify="center" class="top-title">
		<v-col align="center">
			<img width="1000px" src="../../public/name.png">
		</v-col>
	</v-row>
	<v-row justify="center">
		<v-col align="center" class="top-msg">
			<img width="600px" src="../../public/message.png">
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