<template>
	<SubMenu>
		<template #menu="{ currentSubChildren }">
			<el-scrollbar height="100vh" class="sidebar-menu__body">
				<Menu
					:collapse="isCollapse"
					:routes="currentSubChildren"
					:defaultIndex="currentRoutePath"
				></Menu>
			</el-scrollbar>
		</template>
	</SubMenu>
	<OnlyPhDrawer>
		<Menu
			:collapse="false"
			:routes="allRoutes"
			:defaultIndex="currentRoutePath"
		></Menu>
	</OnlyPhDrawer>
</template>

<script setup>
import Menu from "@Base/Menu/menu";
import SubMenu from "@Base/SubMenu";
import OnlyPhDrawer from "@Base/MenuDrawer/onlyPhDrawer.vue";

import { useRoute } from "vue-router";
import { useRoutesStore } from "@/store/routes";
import { useLayoutStore } from "@/store/layout";
// import { useStoreWindowResize } from "@/store/window";
import { storeToRefs } from "pinia";
import { computed } from "vue-demi";

const LayoutStore = useLayoutStore();
// const { triggerCollapse } = LayoutStore;
const { isCollapse } = storeToRefs(LayoutStore);
const RoutesStore = useRoutesStore();
const { allRoutes } = storeToRefs(RoutesStore);

const Route = useRoute();
const currentRoutePath = computed(() => Route.fullPath);

// const useWindowResize = useStoreWindowResize();
// const { screenIsCollapse } = storeToRefs(useWindowResize);
</script>
<style lang="scss" scoped>
.sidebar-menu__body {
	@apply flex-1 h-full;
}
</style>
