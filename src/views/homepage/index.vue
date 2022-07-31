<template>
	<div class="view">
		<el-button type="primary" @click="getUserInfor">
			获取用户信息
		</el-button>
	</div>
</template>

<script setup>
import UserAxios from "@/apis/user"
async function getUserInfor() {
	UserAxios.getUserInfor().then(res=> {
		console.log(res);
	})
}
</script>

<style lang="scss" scoped>
</style>
