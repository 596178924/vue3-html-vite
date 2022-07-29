<template>
	<div class="horizontal-header">
		<SubTabsMenu class="flex-1"></SubTabsMenu>
		<CollapseHandlerBtn v-show="!screenIsCollapse"></CollapseHandlerBtn>
		<SettingDrawer></SettingDrawer>
	</div>
	<Tabs></Tabs>
</template>

<script setup>
import Tabs from "@Base/TabsKeepalive/index";
import SubTabsMenu from "@Base/SubMenu/sub-tabs-menu";
import SettingDrawer from "@Base/Theme/SettingDrawer";
import CollapseHandlerBtn from "@/components/Handler/CollapseBtn";
import { storeToRefs } from "pinia";
import { useStoreWindowResize } from "@/store/window";
const useWindowResize = useStoreWindowResize();
const { screenIsCollapse } = storeToRefs(useWindowResize);


</script>

<style lang="scss" scoped>
.horizontal-header {
	display: flex;
	align-items: center;
}
</style>
