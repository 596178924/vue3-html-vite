<template>
	<!-- <MenuIcon :icon="meta.icon"></MenuIcon> -->
	<i class="menu-icon" :class="meta.icon"></i>
	<span class="menu-item-title ml-2">{{
		meta && meta.title ? meta.title : name
	}}</span>
</template>

<script setup>
// import MenuIcon from "./menu-icon.vue";
const props = defineProps({
	meta: {
		type: Object,
		required: true,
	},
});
</script>
<style lang="scss" scoped>
.el-menu.horizontal-collapse-transition .menu-item-title,
.el-menu.horizontal-collapse-transition .menu-icon {
	@apply invisible;
}

// .el-menu--collapse .menu-item-title {
// 	// @apply hidden;
// 	@apply  opacity-0;
// }

// .el-menu--collapse .menu-icon {
//     @apply text-xl;
// }
// .menu-icon {
// @apply transition-all duration-1000;
// }
</style>
