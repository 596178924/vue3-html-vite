<template>
	<el-drawer
		title="系统设置"
		size="300px"
		:append-to-body="true"
		@close="emits('update:modelValue', false)"
		v-model="modelValue"
	>
		<el-scrollbar>
			<p>当前布局类型：{{ currentLayoutType }}</p>
			<el-select v-model="currentThemeLayoutType" placeholder="Select">
				<el-option
					v-for="item in layoutTypeIds"
					:key="item"
					:value="item"
				/>
			</el-select>
			<el-row class="mt-4">
				<el-col
					:span="4"
					v-for="layoutItem in layouts"
					:key="layoutItem.type"
					class="mb-4"
				>
					<el-button
						type="primary"
						circle
						@click="updateLayoutType(layoutItem.type)"
					>
						<i :class="layoutItem.icon"></i>
					</el-button>
				</el-col>
			</el-row>
			<p>当前菜单类型: {{ themeMenuItemType }}</p>
			<el-select v-model="currentThemeMenuItemType" placeholder="Select">
				<el-option
					v-for="item in MenuItemTypes"
					:key="item"
					:value="item"
				/>
			</el-select>
			<p>
				当前主题颜色: <span class="theme-color">{{ themeColor }}</span>
			</p>
			<el-color-picker
				v-model="currentThemeColor"
				color-format="hex"
				:predefine="ThemeColors"
			/>
			<!-- <el-select v-model="currentThemeColor" placeholder="Select">
				<el-option
					v-for="item in ThemeColors"
					:key="item"
					:value="item"
				/>
			</el-select> -->
			<p>当前表头页签类型: {{ themeTabType }}</p>
			<el-select v-model="currentThemeTabType" placeholder="Select">
				<el-option
					v-for="item in TabTypes"
					:key="item"
					:value="item.value"
					:label="item.label"
				/>
			</el-select>
		</el-scrollbar>
	</el-drawer>
</template>

<script setup>
import { useLayoutStore, layoutTypeIds } from "@/store/layout";
import { storeToRefs } from "pinia";
import { computed, ref, unref } from "vue-demi";

import {
	useThemeStore,
	MenuItemTypes,
	ThemeColors,
	TabTypes,
} from "@/store/theme";

const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
	modelValue: {
		type: Boolean,
	},
});
// ** 获取store
// 布局
const LayoutStore = useLayoutStore();
const { updateLayoutType } = LayoutStore;
const { currentLayoutType } = storeToRefs(LayoutStore);
// 主题
const ThemeStore = useThemeStore();
const { updateThemeMenuItemType, updateThemeColor, updateThemeTabType } =
	ThemeStore;
const { themeMenuItemType, themeColor, themeTabType } = storeToRefs(ThemeStore);

// ** 当前绑定的v-model
// 当前布局类型：
const currentThemeLayoutType = computed({
	get: () => currentLayoutType.value,
	set: (v) => updateLayoutType(v),
});
// 当前菜单类型：
const currentThemeMenuItemType = computed({
	get: () => themeMenuItemType.value,
	set: (v) => updateThemeMenuItemType(v),
});
// 当前主题颜色：
const currentThemeColor = computed({
	get: () => themeColor.value,
	set: (v) => updateThemeColor(v),
});
// 当前表头页签类型：
const currentThemeTabType = computed({
	get: () => themeTabType.value,
	set: (v) => updateThemeTabType(v),
});

//  ['horizontal', 'vertical', 'column', 'comprehensive', 'common']

const layouts = [
	{
		icon: "ri-layout-row-line",
		type: "horizontal",
	},
	{
		icon: "ri-layout-left-line",
		type: "vertical",
	},
	{
		icon: "ri-layout-column-line",
		type: "column",
	},
	{
		icon: "ri-layout-2-line",
		type: "comprehensive",
	},
	{
		icon: "ri-layout-5-line",
		type: "common",
	},
];
</script>
<style lang="scss" scoped>
.theme-color {
	color: var(--el-color-primary);
}
</style>
