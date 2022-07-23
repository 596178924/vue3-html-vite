<template>
	<el-container class="layout-container">
		<el-header> </el-header>
		<el-scrollbar>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-scrollbar>
	</el-container>
</template>

<script setup>

import { sleep } from '@/utils/tools'
await sleep()

</script>
<style lang="scss" scoped></style>
