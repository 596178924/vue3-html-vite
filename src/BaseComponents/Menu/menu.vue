<template>
	<el-menu
		class="hxb-menu"
		:class="themeMenuItemTypeClass"
		:default-active="defaultIndex"
		:collapse="collapse"
		:mode="mode"
		:unique-opened="true"
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
import { useThemeStore } from "@/store/theme";

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

const useWindowResize = useStoreWindowResize();
const { screenWidth } = storeToRefs(useWindowResize);
const ThemeStore = useThemeStore();
// const { updateThemeMenuItemType } = ThemeStore;
const { themeMenuItemType } = storeToRefs(ThemeStore);
const themeMenuItemTypeClass = computed(
	() => `hxb-menu__${themeMenuItemType.value}`
);
</script>
<style lang="scss" scoped>
.el-menu {
	border-right: none;
	&.el-menu--vertical {
		height: 100%;
	}
}
.hxb-menu__card {
	padding-top: 4px ;
}
.hxb-menu__default ,
.hxb-menu__card ,
.hxb-menu__arrow {
	--el-menu-item-height: 61px;
	--el-menu-sub-item-height: 61px;
}
.hxb-menu__vertical,
.hxb-menu__horizontal {
	--el-menu-item-height: 49px;
	--el-menu-sub-item-height: 49px;
}
</style>
