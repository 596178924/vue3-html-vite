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
@import "@/styles/hxbTabs.scss";

.contextmenu {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	box-shadow: 0 0 5px #f2f2f2;
}
</style>
