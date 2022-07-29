<template>
	<el-container class="layout-container">
		<el-aside >
			<!-- :class="asideBindClass" -->
			<Sidebar></Sidebar>
		</el-aside>
		<el-container>
			<el-header>
				<Header></Header>
			</el-header>
			<el-scrollbar>
				<el-main>
					<Main></Main>
				</el-main>
			</el-scrollbar>
		</el-container>
	</el-container>
</template>

<script setup>
import Sidebar from "@LC/SideBar/common.sidebar.vue";
import Header from "@LC/Header";
import Main from "@LC/Main";

import { useLayoutStore } from "@/store/layout";
import { storeToRefs } from "pinia";
import { computed } from "vue-demi";

import { sleep } from "@/utils/tools";
await sleep();

const LayoutStore = useLayoutStore();
const { isCollapse } = storeToRefs(useLayoutStore);
// const asideBindClass = computed(() => ({
	// "sidebar-menu-is-collapse": isCollapse.value,
// }));
</script>
<style lang="scss" scoped></style>
