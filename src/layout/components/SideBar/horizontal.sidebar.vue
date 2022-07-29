<template>
	<el-scrollbar height="100%" class="sidebar-menu__body">
		<OnlyPhDrawer auto>
			<Menu
				:defaultIndex="currentRoutePath"
				:routes="routes"
				:collapse="isCollapse"
			>
			</Menu>
		</OnlyPhDrawer>
	</el-scrollbar>
</template>

<script setup>
import Menu from "@Base/Menu/menu";
import OnlyPhDrawer from "@Base/MenuDrawer/onlyPhDrawer.vue";

import { useRoute } from "vue-router";
import { useLayoutStore } from "@/store/layout";
import { storeToRefs } from "pinia";
import { computed } from "vue-demi";

const props = defineProps({
	routes: {
		type: Array,
		required: true,
	},
});

const LayoutStore = useLayoutStore();
const { triggerCollapse } = LayoutStore;
const { isCollapse } = storeToRefs(LayoutStore);
const Route = useRoute();
const currentRoutePath = computed(() => Route.fullPath);
</script>
<style lang="scss" scoped>
.sidebar-menu__body {
	@apply h-full;
}
</style>
