<template>
	<el-tabs
		class="hxb-tabs"
		:class="['hxb-tabs__' + tabBindClass]"
		:model-value="Route.fullPath"
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
				<div
					style="display: inline-flex; align-items: center"
					@contextmenu.prevent="openContextmenu($event, item)"
				>
					<i class="hxb-tab-pane__icon" :class="item.meta.icon"></i>
					<span class="hxb-tab-pane__title">
						{{ item.meta.title }}
					</span>
				</div>
			</template>
		</el-tab-pane>
	</el-tabs>
	<ul
		v-if="visible"
		class="contextmenu el-dropdown-menu el-dropdown-menu--small"
		:style="bindContextmenuStyle"
		@click="closeContextmenu"
	>
		<li class="el-dropdown-menu__item" @click="removeOtherRouteTabs">
			<!-- <vab-icon icon="close-line" /> -->
			<span>关闭其他</span>
		</li>
		<li class="el-dropdown-menu__item" @click="removeLeftRouteTabs">
			<!-- <vab-icon icon="arrow-left-line" /> -->
			<span>关闭左侧</span>
		</li>
		<li class="el-dropdown-menu__item" @click="removeRightRouteTabs">
			<!-- <vab-icon icon="arrow-right-line" /> -->
			<span>关闭右侧</span>
		</li>
		<li class="el-dropdown-menu__item" @click="removeAllRouteTabs">
			<!-- <vab-icon icon="close-line" /> -->
			<span>关闭全部</span>
		</li>
	</ul>
</template>

<script setup>
import { computed, reactive, ref, watchEffect } from "vue-demi";
import { storeToRefs } from "pinia";
import { useThemeStore } from "@/store/theme";
import { useRoute, useRouter } from "vue-router";
import { isBlank } from "@/utils/validate";
import { useRouteTabStore } from "@/store/routeTab";
import { useMouse } from "@vueuse/core";

const ThemeStore = useThemeStore();
const { updateThemeTabType } = ThemeStore;
const { themeTabType } = storeToRefs(ThemeStore);
const RouteTabStore = useRouteTabStore();
const {
	removeRouteTab,
	removeRightRouteTabs,
	removeLeftRouteTabs,
	removeOtherRouteTabs,
	removeAllRouteTabs,
} = RouteTabStore;
const { routeTabs, keepAliveRoutes } = storeToRefs(RouteTabStore);
// console.log(routeTabs.value);
const Route = useRoute();
const Router = useRouter();
const currentThemeTabType = computed({
	get: () => themeTabType.value,
	set: (v) => updateThemeTabType(v),
});
const tabBindClass = computed(() =>
	isBlank(themeTabType.value) ? "default" : themeTabType.value
);

function handleChange(path) {
	Router.push(path);
}
function handleRemove(path) {
	removeRouteTab(path);
	Removed();
}
function Removed() {
	if (keepAliveRoutes.value.length > 0) {
		const lastPathIndex = keepAliveRoutes.value.length - 1;
		const lastKeepsIndex = lastPathIndex < 0 ? 0 : lastPathIndex;
		const lastPath = keepAliveRoutes.value[lastKeepsIndex];
		console.log(lastPath);
		handleChange(lastPath);
	}
}
const visible = ref(false);
const Mouse = useMouse();
const contextmenuPosition = reactive({
	left: 0,
	top: 0,
});
const bindContextmenuStyle = computed(() => {
	return {
		left: contextmenuPosition.left + "px",
		top: contextmenuPosition.top + "px",
	};
});
function openContextmenu(event, tab) {
	console.log(event, tab);
	const { x, y } = Mouse;
	contextmenuPosition.left = x.value;
	contextmenuPosition.top = y.value;
	visible.value = true;
}
function closeContextmenu() {
	visible.value = false;
}
watchEffect(() => {
	if (visible.value)
		document.body.addEventListener("click", closeContextmenu);
	else document.body.removeEventListener("click", closeContextmenu);
});
</script>
<style lang="scss" scoped>

.hxb-tabs {
	--el-tabs-header-height: 30px;
	--el-tabs-header-nav-line-height: 34px;
	// --el-border-color-light: transparent;
	overflow: hidden;
	max-width: 100%;
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
		margin: 8px 0;
	}
	:deep() .el-tabs__nav-next,
	:deep() .el-tabs__nav-prev {
		line-height: var(--el-tabs-header-nav-line-height, 34px);
	}
	.hxb-tab-pane__icon {
		margin-left: 4px;
	}
	.hxb-tab-pane__title {
		padding: 0 6px;
	}
}
.hxb-tabs__default {
	:deep() .el-tabs__nav-wrap::after {
		content: none;
	}
	:deep() .el-tabs__item {
		padding: 0;
		background-color: var(--el-fill-color);
		margin-right: 4px;
	}
	:deep() .el-icon {
		margin-bottom: 2px;
		svg {
			margin-left: -8px;
		}
	}
	:deep() .el-tabs__active-bar {
		pointer-events: none;
		height: 100%;
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
		background: var(--el-fill-color, #ecf5ff);
		mask: url("@/assets/tabs-border-card-mask.png");
		mask-size: 100% 100%;
		&:hover + div {
			margin-left: 6px;
		}
		&:not(:first-child):hover {
			margin-left: 6px;
		}
		&.is-active {
			background: var(--el-color-primary-light-7, #ecf5ff);
		}
	}

	:deep() .el-icon {
		margin-bottom: 2px;
	}
}

.contextmenu {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	box-shadow: 0 0 5px #f2f2f2;
}
</style>
