<template>
	<!-- 综合布局comprehensive -->
	<el-container class="layout-container">
		<el-aside :class="asideBindClass">
			<Sidebar></Sidebar>
		</el-aside>
		<el-container>
			<el-header>
				<Header></Header>
			</el-header>
			<el-scrollbar>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-scrollbar>
		</el-container>
	</el-container>
</template>

<script setup>
import Header from "@LC/Header";
import Sidebar from "@LC/SideBar/common.sidebar.vue";

import { useLayoutStore } from "@/store/layout";
import { storeToRefs } from "pinia";
import { computed } from "vue-demi";

import { sleep } from "@/utils/tools";
await sleep();

const LayoutStore = useLayoutStore();
const { isCollapse } = storeToRefs(LayoutStore);
const asideBindClass = computed(() => ({
	"sidebar-menu-is-collapse": isCollapse.value,
}));
</script>
<style lang="scss" scoped></style>
