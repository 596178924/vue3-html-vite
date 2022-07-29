<template>
	<!-- 综合布局 comprehensive -->
	<el-container class="layout-container">
		<el-aside :class="asideBindClass">
			<SideBar :routes="currentSubRouteChild"></SideBar>
		</el-aside>
		<el-container>
			<el-header>
				<Header :isPh="screenIsCollapse"></Header>
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
// import SubTabsMenu from "@Base/SubMenu/sub-tabs-menu.vue"
import SideBar from "@LC/SideBar/horizontal.sidebar.vue";
import Header from "@LC/Header/comprehensive.header.vue";

import { computed, ref } from "vue-demi";
import { sleep } from "@/utils/tools";
import { storeToRefs } from "pinia";
import { useLayoutStore } from "@/store/layout";
import { useRoutesStore } from "@/store/routes";
import { useStoreWindowResize } from "@/store/window";
import { useRoute } from "vue-router";

const Route = useRoute();
const RoutesStore = useRoutesStore();
const { allRoutes } = storeToRefs(RoutesStore);
const LayoutStore = useLayoutStore();
const { isCollapse } = storeToRefs(LayoutStore);
const useWindowResize = useStoreWindowResize();
const { screenIsCollapse } = storeToRefs(useWindowResize);
const asideBindClass = computed(() => ({
	"sidebar-menu-is-collapse": isCollapse.value,
}));

// 当前路由的全子集
const currentSubRouteChild = computed(() => {
	if (screenIsCollapse.value) return allRoutes.value;
	const currentSubRoutePath = Route.matched[0].path;
	const currentSub = allRoutes.value.find(
		(item) => item.path == currentSubRoutePath
	);
	return currentSub.children.length > 0 ? currentSub.children : [];
});

// await sleep();
</script>
<style lang="scss" scoped></style>
