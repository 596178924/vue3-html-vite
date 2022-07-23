<template>
	<el-drawer
		v-model="drawerHandler"
		direction="ltr"
		:with-header="false"
		:close-on-press-escape="false"
		:show-close="false"
		size="300px"
	>
		<slot></slot>
	</el-drawer>
</template>

<script setup>
import { useLayoutStore } from "@/store/layout";
import { storeToRefs } from "pinia";
import { computed } from "vue-demi";
const LayoutStore= useLayoutStore();
const { triggerDrawerCollapse } = LayoutStore;
const { isDrawerCollapse } = storeToRefs(LayoutStore);

// const drawerHandler = computed({
// 	get: () => isDrawerCollapse.value,
// 	set: (v) =>  {
// 		triggerDrawerCollapse(v)
// 	},
// });
const drawerHandler = computed({
	get: () => isDrawerCollapse.value,
	set: (v) =>  {
		// console.log(v);
		// triggerDrawerCollapse(v)
	},
});
</script>
<style lang="scss" scoped></style>
