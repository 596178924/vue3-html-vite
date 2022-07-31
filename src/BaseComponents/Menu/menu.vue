<template>
	<el-menu
		class="hxb-menu"
		:class="themeMenuItemTypeClass"
		:default-active="defaultIndex"
		:collapse="isCollapse"
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

const themeMenuItemTypeClass = computed(() =>
	props.mode == "horizontal"
		? "hxb-menu__horizontal"
		: `hxb-menu__${themeMenuItemType.value}`
);
const isCollapse = computed(() => props.collapse);
//  props.mode == "horizontal"? false:
</script>
<style lang="scss" scoped>
.el-menu {
	border-right: none;
	&.el-menu--vertical {
		height: 100%;
	}
}

.hxb-menu__card {
	padding-top: 4px;
}
.hxb-menu__default,
.hxb-menu__card,
.hxb-menu__arrow {
	--el-menu-item-height: 61px;
	--el-menu-sub-item-height: 61px;
}
.hxb-menu__vertical,
.hxb-menu__horizontal {
	--el-menu-item-height: 49px;
	--el-menu-sub-item-height: 49px;
}

.hxb-menu:not(.hxb-menu__arrow) {
	--active-menu-item-bg-color: var(--el-color-primary-light-3, #213d5b);
	:deep() .el-menu-item.is-active {
		background-color: var(--el-color-primary-light-7, #6fa6e0);
		color: var(--el-color-primary, #213d5b);
	}
	:deep() .el-sub-menu.is-active .el-sub-menu__title {
		// background-color: var(--el-color-primary-light-7, #6fa6e0);
		color: var(--el-color-primary, #213d5b);
	}
}
.hxb-menu__card {
	:deep() .el-sub-menu .el-sub-menu__title,
	:deep() .el-menu-item {
		margin: 0 4px 4px;
		border-radius: 4px;
	}
}
</style>
