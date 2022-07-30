<template>
	<!-- 分栏布局 -->
	<el-container class="layout-container">
		<el-aside :class="asideBindClass">
			<Sidebar></Sidebar>
		</el-aside>
		<el-container>
			<el-header>
				<Header></Header>
			</el-header>
			<el-main>
				<Main></Main>
			</el-main>
		</el-container>
	</el-container>
</template>

<script setup>
import Sidebar from "@LC/SideBar/column.sidebar.vue";
import Header from "@LC/Header";
import Main from "@LC/Main";

import config from "@/config"

import { useLayoutStore } from "@/store/layout";
import { storeToRefs } from "pinia";
import { computed } from "vue-demi";

import { sleep } from '@/utils/tools'

const LayoutStore = useLayoutStore();
const { isCollapse } = storeToRefs(LayoutStore);
const asideBindClass = computed(() => ({
	"sidebar-menu-is-collapse": isCollapse.value,
}));
await sleep(config.layoutWiteTime || 2000)
</script>
<style lang="scss" scoped></style>
