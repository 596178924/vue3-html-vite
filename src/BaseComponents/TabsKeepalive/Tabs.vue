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
				<i class="hxb-tab-pane__icon" :class="item.meta.icon"></i>
				<span class="hxb-tab-pane__title">
					{{ item.meta.title }}
				</span>
			</template>
		</el-tab-pane>
	</el-tabs>
</template>

<script setup>
import { computed } from "vue-demi";
import { storeToRefs } from "pinia";
import { useThemeStore } from "@/store/theme";
import { useRoute, useRouter } from "vue-router";
import { isBlank } from "@/utils/validate";
import { useRouteTabStore } from "@/store/routeTab";

const ThemeStore = useThemeStore();
const { updateThemeTabType } = ThemeStore;
const { themeTabType } = storeToRefs(ThemeStore);
const RouteTabStore = useRouteTabStore();
const { removeRouteTab } = RouteTabStore;
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

// const currentActiveRoute = computed({
// 	get: () => Route.fullPath,
// 	set: (v) => console.log(v),
// });
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
</script>
<style lang="scss" scoped>
@import "@/styles/hxbTabs.scss";
</style>
