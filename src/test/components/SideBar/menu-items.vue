<template>
	<div v-if="menuRoutes.length <= 0">
		<el-alert
			title="无子集菜单"
			center
			type="info"
			:closable="false"
		></el-alert>
	</div>
	<template v-for="_routeItem in menuRoutes" :key="_routeItem.name">
		<el-sub-menu v-if="hadChildren(_routeItem)" :index="_routeItem.path">
			<template #title>
				<MenuItemTemplate :meta="_routeItem.meta"></MenuItemTemplate>
			</template>
			<hxb-menu-items :menuRoutes="_routeItem.children"></hxb-menu-items>
		</el-sub-menu>
		<MenuItem v-else :route="_routeItem"></MenuItem>
	</template>
</template>

<script>
export default {
	name: "hxb-menu-items",
};
</script>
<script setup>
import Fragment from "vue-fragment";
import MenuItem from "./menu-item.vue";
import MenuItemTemplate from "./menu-item-template.vue";

const props = defineProps({
	menuRoutes: {
		type: Array,
		required: true,
	},
});
function hadChildren(_route) {
	return _route.children && _route.children.length > 0;
}
function routeTitle(_route) {
	return _route.meta && _route.meta.title ? _route.meta.title : _route.name;
}
</script>
<style lang="scss" scoped>
// .el-sub-menu {
// 	transition: all 0.3s;
// }
:deep() .menu-icon {
	font-size: 22px;
}
</style>
