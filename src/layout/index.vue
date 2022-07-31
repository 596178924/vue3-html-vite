<template>
	<div id="layout" ref="layoutRef">
		<!-- :class="layoutBindClass" -->
		<Suspense :timeout="0">
			<component :is="currentLayout" :key="currentLayoutType.value" />
			<template #fallback>
				<MainLoading></MainLoading>
			</template>
		</Suspense>
	</div>
</template>

<script setup>
import MainLoading from "./mainLoading.vue";

import column from "./modules/column";
import common from "./modules/common";
import horizontal from "./modules/horizontal";
import vertical from "./modules/vertical";
import comprehensive from "./modules/comprehensive";

// import { startLayout } from "./layout";
import { useRoute, useRouter } from "vue-router";
import { filterRoutes } from "@/router/layoutRoutesFilter";

import { useResizeObserver } from "@vueuse/core";
import { useStoreWindowResize } from "@/store/window";

import { useRoutesStore } from "@/store/routes";
import { useLayoutStore } from "@/store/layout";
import { useRouteTabStore } from "@/store/routeTab";

// import { useThemeStore } from "@/store/theme";

import { ref, computed } from "vue-demi";
import { storeToRefs } from "pinia";

// const { currentLayout, currentLayoutType } = startLayout();
const StoreWindowResize = useStoreWindowResize();
const { resizeChange } = StoreWindowResize;
const RoutesStore = useRoutesStore();
const { startRoutes } = RoutesStore;
const LayoutStore = useLayoutStore();
const { triggerCollapse } = LayoutStore;
const { currentLayoutType } = storeToRefs(LayoutStore);
const RouteTabStore = useRouteTabStore();
const { startRouteTab } = RouteTabStore;
const Route = useRoute();
const Router = useRouter();
const Routes = Router.options.routes;
const allRoutes = filterRoutes(Routes);

console.log("filter_routes", allRoutes);

startRoutes(allRoutes);
startRouteTab(allRoutes, Route.fullPath);

const layoutRef = ref(null);
useResizeObserver(layoutRef, async (entries) => {
	const entry = entries[0];
	const { width, height } = entry.contentRect;
	resizeChange(width, height);
});

const modules = {
	column: column,
	common: common,
	horizontal: horizontal,
	vertical: vertical,
	comprehensive: comprehensive,
};
const currentLayout = computed(() => modules[currentLayoutType.value]);
</script>
<style lang="scss" scoped>
#layout {
	@apply text-sm h-screen;
	// background-image: url("https://picsum.photos/1280/750");
	// background-size: cover;
	// background-repeat: no-repeat;
}
</style>
