<template>
	<el-menu-item :index="route.path">
		<!-- <MenuItemTemplate :meta="route.meta"></MenuItemTemplate> -->
		<i class="menu-icon" :class="route.meta.icon"></i>
		<template #title>
			<span class="menu-item-title ml-2">{{
				route.meta && route.meta.title ? route.meta.title : route.name
			}}</span>
		</template>
	</el-menu-item>
</template>

<script>
export default {
	name: "hxb-menu-item",
};
</script>
<script setup>
// import MenuItemTemplate from "./menu-item-template.vue";
const props = defineProps({
	route: {
		type: Object,
		required: true,
	},
});
</script>
<style lang="scss" scoped>
.el-menu--collapse .menu-icon {
	@apply w-full text-center;
}
.menu-icon {
	@apply transition-all duration-1000;
}
</style>
