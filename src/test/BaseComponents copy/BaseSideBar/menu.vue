<template>
	<el-menu :default-active="defaultIndex" :collapse="collapse"
		:mode="mode"
	router>
		<MenuItems :menuRoutes="routes"></MenuItems>
	</el-menu>
</template>
<script setup>
import MenuItems from "./menu-items.vue";
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
	mode:{
		type: String,
		default: 'vertical',
		validator:(v)=> ['horizontal','vertical'].includes(v)
	},
});

// console.log(props.routes);
</script>
<style scoped>
.el-menu {
	--el-menu-border-color: transparent;
}
</style>
