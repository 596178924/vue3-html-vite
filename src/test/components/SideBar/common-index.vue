<template>
	<!-- <MainIndex>

	</MainIndex> -->
	<Menu
		class="sidebar-menu"
		:collapse="isCollapse"
		:unique-opened="true"
		:routes="filterAllRoutes"
		:defaultIndex="currentRoutePath"
	></Menu>
</template>

<script setup>
import MainIndex from "./main-index.vue";
import Menu from "./menu";

import { useLayoutStore } from "@/store/layout";
import { storeToRefs } from "pinia";

import { getLayoutRoutesFilter, getCurrentRoute } from "./layoutRoutesFilter";

const LayoutStore= useLayoutStore();
const { isCollapse } = storeToRefs(LayoutStore);
const { filterAllRoutes } = getLayoutRoutesFilter();
const { currentRoutePath } = getCurrentRoute();
</script>
<style lang="scss" scoped></style>
