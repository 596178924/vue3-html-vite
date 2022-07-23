<template>
	<!-- <MenuIcon :icon="meta.icon"></MenuIcon> -->
	<i class="menu-icon" :class="meta.icon"></i>
	<span class="menu-item-title ml-2 flex-1">{{
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
// 菜单 缩放的时候 除了第一个下面的icon 其他的透明度全部 0
// .el-menu--collapse .menu-item-title,
// .el-menu.horizontal-collapse-transition .menu-item-title,
// .el-menu.horizontal-collapse-transition
// 	.el-sub-menu__title
// 	+ .el-menu
// 	.menu-icon,
// .el-menu.el-menu--collapse .el-sub-menu__title + .el-menu .menu-icon {
// 	@apply opacity-0;
// }
.el-menu--collapse .menu-item-title,
.el-menu.horizontal-collapse-transition .menu-item-title,
.el-menu.horizontal-collapse-transition
	.el-sub-menu__title +
	.el-menu--inline
	.menu-icon,
.el-menu.el-menu--collapse .el-sub-menu__title + .el-menu--inline .menu-icon {
	@apply opacity-0;
}

// .el-menu .el-sub-menu__title +
.el-menu--inline  {
	// background-color: red;
	--el-menu-bg-color: red;
}

// 透明度 过度
.menu-icon,
.menu-item-title {
	transition: opacity 0.1s;
}

// 菜单 缩放的时候 icon 加上边距
// .el-menu--collapse .menu-icon,
// .el-menu.horizontal-collapse-transition
// 	> .el-sub-menu
// 	.el-sub-menu__title
// 	.menu-icon {
// 	margin: 0 4px;
// }
.el-menu--collapse .menu-icon,
.el-menu.horizontal-collapse-transition
	> .el-sub-menu
	.el-sub-menu__title
	.menu-icon {
	margin: 0 4px;
}
</style>
