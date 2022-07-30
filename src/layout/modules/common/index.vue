<template>
	<!-- 常规布局common -->
	<el-container class="layout-container">
		<el-header>
			<Header></Header>
		</el-header>
		<el-container>
			<el-aside :class="asideBindClass">
				<Sidebar></Sidebar>
			</el-aside>
			<el-main>
				<Main></Main>
			</el-main>
		</el-container>
	</el-container>
</template>

<script setup>
import Main from "@LC/Main";
import Sidebar from "@LC/SideBar/common.sidebar.vue";
import Header from "@LC/Header";
import config from "@/config"
import { sleep } from "@/utils/tools";

import { useLayoutStore } from "@/store/layout";
import { storeToRefs } from "pinia";
import { computed } from "vue-demi";

const LayoutStore = useLayoutStore();
const { isCollapse } = storeToRefs(LayoutStore);
const asideBindClass = computed(() => ({
	"sidebar-menu-is-collapse": isCollapse.value,
}));

await sleep(config.layoutWiteTime || 2000)
</script>
<style lang="scss" scoped></style>
