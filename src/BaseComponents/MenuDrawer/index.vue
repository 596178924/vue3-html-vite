<template>
	<el-drawer
		:append-to-body="true"
		custom-class="hxb-menu-drawer"
		v-model="handler"
		direction="ltr"
		:with-header="false"
		:close-on-press-escape="false"
		:show-close="false"
		size="300px"
		v-bind="$attrs"
	>
		<el-scrollbar height="100%" class="sidebar-menu__body">
			<slot></slot>
		</el-scrollbar>
	</el-drawer>
</template>

<script setup>
import { computed } from "vue-demi";
import { storeToRefs } from "pinia";
import { useLayoutStore } from "@/store/layout";

const LayoutStore = useLayoutStore();
const { triggerDrawerCollapse } = LayoutStore;
const { isDrawerCollapse } = storeToRefs(LayoutStore);

const handler = computed({
	get: () => isDrawerCollapse.value,
	set: () => triggerDrawerCollapse(),
});
</script>
<style lang="scss" scoped>
.hxb-menu-drawer {
	--el-dialog-padding-primary: 0;
}
</style>
