<template>
	<router-link
		class="sub-menu-item"
		:class="[themeMenuItemTypeClass]"
		:to="path"
	>
		<div class="sub-menu-item__icon">
			<i :class="icon"></i>
			<!-- <el-tooltip :effect="themeMode" :content="title" placement="right">
				<i :class="icon"></i>
			</el-tooltip> -->
		</div>
		<p class="sub-menu-item__title">{{ title }}</p>
	</router-link>
</template>

<script setup>
import { useThemeStore } from "@/store/theme";
import { storeToRefs } from "pinia";
import { computed } from "vue-demi";
const props = defineProps({
	icon: {
		type: String,
	},
	title: {
		type: String,
	},
	path: {
		type: String,
	},
});
const ThemeStore = useThemeStore();

const { themeMenuItemType, themeMode } = storeToRefs(ThemeStore);
const themeMenuItemTypeClass = computed(
	() => `sub-menu-item__${themeMenuItemType.value}`
);
</script>

<style lang="scss" scoped>
// 'default', 'card', 'arrow', 'horizontal', 'vertical'

.sub-menu-item {
	@apply transition-all text-center;
	width: 70px;
}
.sub-menu-item__arrow,
.sub-menu-item__default {
	@apply py-3;
}
// .sub-menu-item__card,
.sub-menu-item__horizontal {
	@apply py-1.5;
}
.sub-menu-item__card {
	@apply rounded m-1 py-3;
}

.sub-menu-item__arrow {
	@apply relative;
	&::after {
		content: "";
		@apply absolute top-1/2 right-0 -translate-y-1/2;
	}
}

.sub-menu-item__horizontal {
	width: 88px;
}

.sub-menu-item__vertical {
	padding: 14px 0 10px;
	width: 50px;
	.sub-menu-item__title {
		@apply hidden;
	}
}

.sub-menu-item__title {
	@apply text-xs leading-3;
}
.sub-menu-item__icon {
	font-size: 22px;
	line-height: 22px;
	// @apply bg-yellow-500;
}
.router-link-active {
	// @apply bg-blue-500 text-white;
	color: var(--el-color-white,#fff);
	background-color: var(--el-color-primary,rgb(59 130 246 / var(--tw-bg-opacity)));
}

.router-link-active.sub-menu-item__arrow {
	// $theme-bg-color: #fff;
	$theme-bg-color: var(--el-bg-color, #fff);
	$border-size: 8px;
	&::after {
		border-top: solid $border-size transparent;
		border-right: solid $border-size $theme-bg-color; /* 黑色大三角形 */
		border-bottom: solid $border-size transparent;
	}
}
</style>
