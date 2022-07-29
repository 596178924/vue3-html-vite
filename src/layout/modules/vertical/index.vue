<template>
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

import { sleep } from "@/utils/tools";

import { useLayoutStore } from "@/store/layout";
import { storeToRefs } from "pinia";
import { computed } from "vue-demi";

const LayoutStore = useLayoutStore();
const { isCollapse } = storeToRefs(LayoutStore);
const asideBindClass = computed(() => ({
	"sidebar-menu-is-collapse": isCollapse.value,
}));
await sleep();
</script>
<style lang="scss" scoped></style>
