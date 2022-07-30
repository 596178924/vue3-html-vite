<template>
	<el-container class="layout-container">
		<el-header>
			<Header></Header>
		</el-header>
		<el-scrollbar>
			<el-main>
				<Main></Main>
			</el-main>
		</el-scrollbar>
	</el-container>
</template>

<script setup>
import Header from "@LC/Header/horizontal.header.vue";
import Main from "@LC/Main";
import config from "@/config"
import { sleep } from '@/utils/tools'
await sleep(config.layoutWiteTime || 2000)
</script>
<style lang="scss" scoped></style>
