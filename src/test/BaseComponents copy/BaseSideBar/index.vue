<template>
	<div class="base-sidebar">
		<SubMenu
			:routes="FilterRoutes"
			:subHandler="isSubMenuHandler"
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
					<div class="collapse-handler" @click="triggerCollapse()">
						<CollapseHandlerButton :collapse="isCollapse" />
					</div>
				</div>
			</template>
		</SubMenu>
	</div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import Menu from "./menu";
import SubMenu from "./sub-menu";
import CollapseHandlerButton from "./collapse-handler-button";
import { useLayoutStore } from "@/store/layout";
import { storeToRefs } from "pinia";

import { useRouter, useRoute } from "vue-router";

const LayoutStore = useLayoutStore();
const { triggerCollapse } = LayoutStore;
const { isCollapse } = storeToRefs(LayoutStore);

const isSubMenuHandler = ref(true);

const Router = useRouter();
const Route = useRoute();
const currentRoutePath = computed(() => Route.fullPath);
const currentRouteMatched = computed(() => Route.matched);
const AllRoutes = computed(() => Router.options.routes);
const FilterRoutes = computed(() => filterRoutes(AllRoutes.value));

function formatRoute(_route) {
	const obj = {
		path: _route.path,
		name: _route.name,
		meta: _route.meta,
		children: null,
	};
	if (_route.children && _route.children.length > 0) {
		obj.children = _route.children;
	}
	return obj;
}
function filterRoutes(_routes) {
	const _filter_routes = _routes.filter(
		(_route) => _route.meta && _route.meta.title
	);
	const _filter = _filter_routes.map((item) => {
		const _item = formatRoute(item);
		if (_item.children && _item.children.length > 0) {
			_item.children = filterRoutes(_item.children);
		}
		return _item;
	});
	return _filter;
}
</script>
<style lang="scss" scoped>
.base-sidebar,
.sub-menu,
.sidebar-menu__body {
	@apply h-full;
}

.sidebar-menu__body {
	@apply flex flex-col flex-1;
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
