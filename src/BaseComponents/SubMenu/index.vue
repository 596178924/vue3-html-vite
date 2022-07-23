<template>
	<div class="sub-menu">
		<el-scrollbar height="100%" class="sub-menu__scrollbar">
			<div class="sub-menu__scrollbar__view">
				<SubMenuItem
					v-for="item in allRoutes"
					:key="item.name || item.path"
					:icon="item.meta.icon"
					:title="item.meta.title"
					:path="item.path"
				></SubMenuItem>
			</div>
		</el-scrollbar>
		<slot name="menu" :currentSubChildren="currentSubChildren"></slot>
	</div>
</template>

<script setup>
import SubMenuItem from "./sub-menu-item.vue";

import { computed } from "vue-demi";
import { useRoute } from "vue-router";
import { useRoutesStore } from "@/store/routes";
import { storeToRefs } from "pinia";

const Route = useRoute();
const RoutesStore = useRoutesStore();
const { allRoutes } = storeToRefs(RoutesStore);

// 当前父类路由
const currentRouteSubPath = computed(() => getCurrentSubPath());
function getCurrentSubPath() {
	const _matched = Route.matched;
	console.log(_matched);
	return _matched.length > 0 ? _matched[0].path : "";
}
const currentSub = computed(() =>
	allRoutes.value.find((item) => item.path == currentRouteSubPath.value)
);
const currentSubChildren = computed(
	() => getCurrentRouteChildren()
	//() => []
);
function getCurrentRouteChildren() {
	const _currentRoute = currentSub.value;
	return _currentRoute.children && _currentRoute.children.length > 0
		? _currentRoute.children
		: [_currentRoute];
}
</script>
<style lang="scss" scoped>
.sub-menu,
.el-scrollbar__view,
.sub-menu__scrollbar {
	@apply h-full;
}
.sub-menu {
	@apply flex;
}
.sub-menu__scrollbar {
	background-color: var(--el-bg-color-page, #0a0a0a)
}
.sub-menu__scrollbar__view {
	@apply flex flex-col;
	min-width: 50px;
	max-width: 88px;
}
</style>
