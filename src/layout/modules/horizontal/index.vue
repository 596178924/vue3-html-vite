<template>
	<el-container class="layout-container">
		<el-header>
			<Header></Header>
		</el-header>
		<el-scrollbar>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-scrollbar>
	</el-container>
</template>

<script setup>
import Header from "@LC/Header/horizontal.header.vue";
import Main from "@LC/Main";
import { sleep } from '@/utils/tools'
// await sleep()
</script>
<style lang="scss" scoped></style>
