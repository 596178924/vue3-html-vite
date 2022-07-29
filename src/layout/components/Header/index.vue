<template>
	<div class=" h-12 flex items-center">
		<CollapseHandlerBtn />
		<ModeChange type="Button"></ModeChange>
		<Avatar />
		<SettingDrawer></SettingDrawer>
	</div>
	<Tabs v-if="!tabsHidden"></Tabs>
</template>

<script setup>
import Tabs from "@/BaseComponents/TabsKeepalive/index";
import CollapseHandlerBtn from "@/components/Handler/CollapseBtn";
import Avatar from "@/components/Avatar";
import ModeChange from "@Base/Theme/ModeChange";
import SettingDrawer from "@/BaseComponents/Theme/SettingDrawer";
const props = defineProps({
	tabsHidden: {
		type: Boolean,
		default: false,
	},
});
</script>
<style lang="scss" scoped></style>
