<template>
	<el-menu-item :index="route.path">
		<MenuItemTemplate :meta="route.meta"></MenuItemTemplate>
	</el-menu-item>
</template>

<script>
export default {
	name: "hxb-menu-item",
};
</script>
<script setup>
import MenuItemTemplate from "./menu-item-template.vue";
const props = defineProps({
	route: {
		type: Object,
		required: true,
	},
});
</script>

<style lang="scss" scoped>
.hxb-menu:not(.hxb-menu__arrow) {
	--active-menu-item-bg-color: var(--el-color-primary-light-3, #213d5b);
	.el-menu-item {
		&.is-active {
			background-color: var(--el-color-primary-light-7, #6fa6e0);
			color: var(--el-color-primary, #213d5b);
		}
	}
}
.hxb-menu__card {
	.el-menu-item {
		margin: 0 4px 4px ;
		border-radius: 4px;
	}
}
</style>
