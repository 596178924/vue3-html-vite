<template>
	<el-scrollbar style="height: auto;">
		<Menu
			:collapse="menuIsCollapse"
			:defaultIndex="currentRoutePath"
			:routes="allRoutes"
			mode="horizontal"
		></Menu>
	</el-scrollbar>
</template>

<script setup>
import Menu from "@Base/Menu/menu";

import { useRoute, useRouter } from "vue-router";
import { useRoutesStore } from "@/store/routes";
import { useLayoutStore } from "@/store/layout";
import { useStoreWindowResize } from "@/store/window";
import { storeToRefs } from "pinia";
import { computed } from "vue-demi";

const Route = useRoute();
const Router = useRouter();
const LayoutStore = useLayoutStore();
const { isCollapse } = storeToRefs(LayoutStore);
const StoreWindowResize = useStoreWindowResize();
const { screenIsCollapse } = storeToRefs(StoreWindowResize);
const RoutesStore = useRoutesStore();
const { allRoutes } = storeToRefs(RoutesStore);

const currentRoutePath = computed(() => Route.fullPath);
const currentSubRoutePath = computed(() => {
	return Route.matched[0].path;
});
const menuIsCollapse = computed(() =>
	screenIsCollapse.value ? true : isCollapse.value
);

function handleChange(path) {
	Router.push(path);
}
</script>

<style lang="scss" scoped>
.el-menu--horizontal {
	border-bottom: none;
}
// :deep() .el-scrollbar__wrap {
// 	border-bottom: solid 1px var(--el-menu-border-color);
// }
</style>
