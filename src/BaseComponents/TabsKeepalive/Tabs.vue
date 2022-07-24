<template>
	<!-- <p>{{routeTabs}}</p> -->
	<el-tabs
		class="hxb-tabs"
		:class="['hxb-tabs__' + tabBindClass]"
		v-model="activeName"
		:type="currentThemeTabType"
		tab-position="top"
		@tab-change="handleChange"
		@tab-remove="handleRemove"
	>
		<el-tab-pane
			:name="item.path"
			v-for="item in routeTabs"
			:key="item.name"
			:closable="item.meta && !item.meta.noClosable"
		>
			<!-- item.meta.noClosable -->
			<template #label>
				<i class="hxb-tab-pane_icon" :class="item.meta.icon"></i>
				<span class="hxb-tab-pane__title"> {{ item.meta.title }} </span>
			</template>
		</el-tab-pane>
	</el-tabs>
</template>

<script setup>
import { ref, computed, watch } from "vue-demi";
import { storeToRefs } from "pinia";
import { useThemeStore } from "@/store/theme";
import { useRouteTabStore } from "@/store/routeTab";
import { useRoute, useRouter } from "vue-router";
import { isBlank } from "@/utils/validate";

const ThemeStore = useThemeStore();
const { updateThemeTabType } = ThemeStore;
const { themeTabType } = storeToRefs(ThemeStore);
const RouteTabStore = useRouteTabStore();
const { removeRouteTab } = RouteTabStore;
const { routeTabs } = storeToRefs(RouteTabStore);
console.log(routeTabs.value);
const Route = useRoute();
const Router = useRouter();
const currentThemeTabType = computed({
	get: () => themeTabType.value,
	set: (v) => updateThemeTabType(v),
});
const tabBindClass = computed(() =>
	isBlank(themeTabType.value) ? "default" : themeTabType.value
);

const activeName = computed({
	get: () => Route.fullPath,
	set: (v) => console.log(v),
});
// const activeName = ref(Route.fullPath);
function handleChange(path) {
	Router.push(path);
}
function handleRemove(path) {
	removeRouteTab(path);
}
</script>
<style lang="scss" scoped>
.hxb-tabs {
	--el-tabs-header-height: 30px;
	--el-tabs-header-nav-line-height: 34px;
	// --el-border-color-light: transparent;
	// background-color: #a3c4a3;
	:deep() .el-icon {
		transition: unset;
		&:hover {
			background-color: transparent;
			color: inherit;
		}
	}
	:deep() .el-tabs__item {
		display: inline-flex;
		align-items: center;
		// background-color: #da8f8f;
	}
	:deep() .el-tabs__header {
		margin: 0 0 10px;
	}
	:deep() .el-tabs__nav-next,
	:deep() .el-tabs__nav-prev {
		line-height: var(--el-tabs-header-nav-line-height, 34px);
	}
	.hxb-tab-pane_icon {
		margin-left: 4px;
	}
	.hxb-tab-pane__title {
		padding: 0 6px;
	}
}
.hxb-tabs__default {
	:deep() .el-tabs__nav-wrap::after {
		content: none;
		background-color: red;
	}
	:deep() .el-tabs__item {
		padding: 0 10px 0 8px;
	}
	:deep() .el-icon {
		// margin-left: 0;
		margin-bottom: 2px;
		svg {
			margin-left: -8px;
		}
	}
	:deep() .el-tabs__active-bar {
		pointer-events: none;
		height: 100%;
		// background-color: rbga(var(--el-color-primary-light-9), 0.3);
		background: var(--el-color-primary-light-3);
		opacity: 0.3;
	}
}
.hxb-tabs__card {
	--el-border-color-light: transparent;
	:deep() .el-tabs__item {
		--hxb-border-un-active: 1px solid var(--el-fill-color, #409eff);
		--hxb-border-is-active: 1px solid var(--el-color-primary, #409eff);
		border: var(--hxb-border-un-active);
		border-radius: 3px;
		&:not(:last-child) {
			margin-right: 4px;
		}
		&:first-child {
			border-left: var(--hxb-border-un-active);
		}
		&.is-active {
			background: var(--el-color-primary-light-9, #ecf5ff);
			border: var(--hxb-border-is-active);
		}
		&:last-child:hover,
		&:hover {
			padding: 0 20px;
			// padding: 0 ;
		}
	}
}
.hxb-tabs__border-card {
	--el-fill-color-light: transparent;
	--el-border-color: transparent;
	--el-border-color-light: transparent;
	--el-bg-color-overlay: transparent;

	:deep() .el-tabs__content {
		padding: 0;
	}
	:deep() .el-tabs__header {
		margin-bottom: 0;
	}
	:deep() .el-tabs__item {
		// display: inline-block;
		background: var(--el-fill-color, #ecf5ff);
		mask: url("@/assets/tabs-border-card-mask.png");
		mask-size: 100% 100%;
		// margin-right: -6px;
		// &:hover {
		// 	margin-right: 0;
		// }
		// &:not(:first-child):hover {
		// 	margin-left: 6px;
		// }

		&:hover + div {
			margin-left: 6px;
		}
		&:not(:first-child):hover {
			margin-left: 6px;
		}
		&.is-active {
			background: var(--el-color-primary-light-7, #ecf5ff);
		}
		// &:hover{
		// pd
		// }
	}

	:deep() .el-icon {
		margin-bottom: 2px;
	}
}
</style>