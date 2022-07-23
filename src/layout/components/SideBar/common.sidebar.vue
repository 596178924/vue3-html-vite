<template>
	<el-scrollbar height="100%" class="sidebar-menu__body">
		<OnlyPhDrawer auto>
			<Menu
				:defaultIndex="currentRoutePath"
				:routes="allRoutes"
				:collapse="isCollapse"
			>
			</Menu>
		</OnlyPhDrawer>
	</el-scrollbar>
</template>

<script setup>
import Menu from "@Base/Menu/menu";
// import MenuDrawer from "@/Base/MenuDrawer";
import OnlyPhDrawer from "@Base/MenuDrawer/onlyPhDrawer.vue";

import { useRoute } from "vue-router";
import { useRoutesStore } from "@/store/routes";
import { useLayoutStore } from "@/store/layout";
import { storeToRefs } from "pinia";
import { computed } from "vue-demi";
import { useStoreWindowResize } from "@/store/window";

const LayoutStore = useLayoutStore();
const { triggerCollapse } = LayoutStore;
const { isCollapse } = storeToRefs(LayoutStore);
const RoutesStore = useRoutesStore();
const { allRoutes } = storeToRefs(RoutesStore);

const Route = useRoute();
const currentRoutePath = computed(() => Route.fullPath);
</script>
<style lang="scss" scoped>
.sidebar-menu__body {
	@apply h-full;
}
</style>
