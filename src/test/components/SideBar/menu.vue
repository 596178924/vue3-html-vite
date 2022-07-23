<template>
	<el-menu
		:default-active="defaultIndex"
		:collapse="collapse"
		:mode="mode"
		router
	>
		<MenuItems :menuRoutes="routes"></MenuItems>
	</el-menu>
</template>
<script setup>
import MenuItems from "./menu-items.vue";
import { useStoreWindowResize } from "@/store/window";
import { storeToRefs } from "pinia";
import { computed } from "vue-demi";
const useWindowResize = useStoreWindowResize();
const { screenWidth } = storeToRefs(useWindowResize);

const props = defineProps({
	collapse: {
		type: Boolean,
		required: true,
	},
	defaultIndex: {
		type: String,
		default: "",
	},
	routes: {
		type: Array,
		required: true,
	},
	mode: {
		type: String,
		default: "vertical",
		validator: (v) => ["horizontal", "vertical"].includes(v),
	},
});
// const _collapse = computed(() => (screenWidth <= 768 ? props.collapse : false));

// console.log(props.routes);
</script>
<style scoped>
.el-menu {
	--el-menu-bg-color:none;
	--el-menu-border-color: transparent;
}
</style>
