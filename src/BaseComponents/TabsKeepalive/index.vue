<template>
	<div class="hxb-tabs--menu">
        <Tabs></Tabs>
		<DropDown></DropDown>
	</div>
</template>

<script setup>
import DropDown from './DropDown'
import Tabs  from "./Tabs.vue"
</script>

<style lang="scss" scoped>
.hxb-tabs--menu {
	max-width: 100%;
	border-top: 1px solid var(--el-fill-color, #f2f2f2);
	display: grid;
	grid-template-columns: 1fr 30px;
	align-content: center;
	align-items: center;
	.hxb-icon {
		margin: 0 auto;
	}
}
</style>
