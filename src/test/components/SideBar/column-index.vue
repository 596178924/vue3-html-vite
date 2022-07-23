<template>
	<!-- <MainIndex>

	</MainIndex> -->
	<SubMenu
		:routes="filterAllRoutes"
		:subHandler="true"
		:collapse="isCollapse"
		:routeMatched="currentRouteMatched"
	>
		<template #default="{ currentRoutes }">
			<div class="sidebar-menu__body">
				<el-scrollbar height="100%">
					<Menu
						class="sidebar-menu"
						:collapse="isCollapse"
						:unique-opened="false"
						:routes="currentRoutes"
						:defaultIndex="currentRoutePath"
					></Menu>
				</el-scrollbar>
			</div>
		</template>
	</SubMenu>
</template>

<script setup>
import CollapseHandlerButton from "@/components/Handler/CollapseBtn";
import MainIndex from "./main-index.vue";
import SubMenu from "./sub-menu";
import Menu from "./menu";

import { useRouter, useRoute } from "vue-router";
import { computed } from "vue-demi";

import { useStoreWindowResize } from "@/store/window";
import { useLayoutStore } from "@/store/layout";
import { storeToRefs } from "pinia";

// import { getLayoutRoutesFilter, getCurrentRoute } from "./layoutRoutesFilter";
import { filterRoutes } from "./layoutRoutesFilter";

const useWindowResize = useStoreWindowResize();
const { screenWidth } = storeToRefs(useWindowResize);
const LayoutStore = useLayoutStore();
const { isCollapse } = storeToRefs(LayoutStore);

// const { filterAllRoutes } = getLayoutRoutesFilter();
// const { currentRoutePath, currentRouteMatched } = getCurrentRoute();
// console.log(filterAllRoutes);
// console.log(currentRoutePath.value, currentRouteMatched.value);

const Router = useRouter();
const Route = useRoute();

const filterAllRoutes = filterRoutes(Router.options.routes);
const currentRoutePath = computed(() => Route.fullPath);
const currentRouteMatched = computed(() => Route.matched);
</script>
<style lang="scss" scoped>
:deep() .base-sidebar__main,
.base-sidebar,
.sub-menu,
.sidebar-menu__body {
	@apply h-full;
}

.sidebar-menu__body {
	@apply flex-1;
	.sidebar-menu {
		@apply flex-1;
	}
	.collapse-handler {
		// border-top: 1px solid #000;
		@apply flex justify-center mt-auto shadow-inner h-8 text-xl rounded hover:bg-blue-100
			cursor-pointer;
	}
}
</style>
