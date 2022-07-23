<template>
	<div class="view">
		<p>homepage</p>
		<p>当前布局类型：{{ currentLayoutType }}</p>
		<el-select v-model="currentThemeLayoutType" placeholder="Select">
			<el-option
				v-for="item in layoutTypeIds"
				:key="item"
				:value="item"
			/>
		</el-select>
		<p class="media-perfers-color-scheme">The quick brown fox</p>
		<el-button type="primary" @click="open"> 中文 </el-button>
		<p>themeMenuItemType:{{ themeMenuItemType }}</p>
		<p>menuType:{{ currentThemeMenuItemType }}</p>

		<el-select v-model="currentThemeMenuItemType" placeholder="Select">
			<el-option
				v-for="item in MenuItemTypes"
				:key="item"
				:value="item"
			/>
		</el-select>

		<p>themeColor:{{ themeColor }}</p>
		<el-select v-model="currentThemeColor" placeholder="Select">
			<el-option v-for="item in ThemeColors" :key="item" :value="item" />
		</el-select>
		<!-- <p class="color-primary">color-primary</p> -->
	</div>
</template>

<script setup>
import { useLayoutStore, layoutTypeIds } from "@/store/layout";
import { storeToRefs } from "pinia";
import { computed, ref, unref } from "vue-demi";
import { ElMessage } from "element-plus";

import { useThemeStore, MenuItemTypes, ThemeColors } from "@/store/theme";

const open = () => {
	ElMessage("This is a message.");
};

const LayoutStore = useLayoutStore();
const { updateLayoutType } = LayoutStore;
const { currentLayoutType } = storeToRefs(LayoutStore);
const ThemeStore = useThemeStore();
const { updateThemeMenuItemType, updateThemeColor } = ThemeStore;
const { themeMenuItemType, themeColor, themeMode} = storeToRefs(ThemeStore);

const currentThemeLayoutType = computed({
	get: () => currentLayoutType.value,
	set: (v) => updateLayoutType(v),
});
const currentThemeMenuItemType = computed({
	get: () => themeMenuItemType.value,
	set: (v) => updateThemeMenuItemType(v),
});
const currentThemeColor = computed({
	get: () => themeColor.value,
	set: (v) => updateThemeColor(v),
});

</script>

<style lang="scss" scoped>
// @use "sass:color";
// .view {
// /* Light mode */
// @media (prefers-color-scheme: light) {
// 	color: green;
// }

// /* Dark mode */
// @media (prefers-color-scheme: dark) {
// 	color: yellow;
// }
// }
.media-perfers-color-scheme {
	@apply dark:text-yellow-400 text-blue-400;
}

// .color-primary {
// 	$primary-color: #f56c6c;
// 	color: $primary-color;
// 	border: 1px solid color.mix(#fff, $primary-color, 50%);
// }
</style>
