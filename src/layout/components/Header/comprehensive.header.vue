<template>
	<div class="comprehensive-header">
		<SubRouteTabChange v-show="!isPh" class="flex-1 overflow-hidden"></SubRouteTabChange>
		<CollapseHandlerBtn class="mr-auto"></CollapseHandlerBtn>
		<Avatar></Avatar>
		<SettingDrawer></SettingDrawer>
	</div>
	<Tabs></Tabs>
</template>

<script setup>
import SubRouteTabChange from "@Base/SubMenu/sub-route-tab-change";
import SettingDrawer from "@Base/Theme/SettingDrawer";
import CollapseHandlerBtn from "@/components/Handler/CollapseBtn";
import Tabs from "@/BaseComponents/TabsKeepalive/index";
import Avatar from "@/components/Avatar";
import ModeChange from "@Base/Theme/ModeChange";

const props = defineProps({
	isPh: {
		type: Boolean,
		default: false,
	},
});
</script>

<style lang="scss" scoped>
.comprehensive-header {
	display: flex;
	align-items: center;
}
</style>
