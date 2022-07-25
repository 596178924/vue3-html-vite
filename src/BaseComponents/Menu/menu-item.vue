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

</style>
