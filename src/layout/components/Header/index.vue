<template>
	<div class="py-2 h-16 flex items-center">
		<CollapseHandlerBtn />
		<ModeChange type="Button"></ModeChange>
		<Avatar />
		<SettingDrawer></SettingDrawer>
	</div>
	<Tabs></Tabs>
</template>

<script setup>
import Tabs from "@/BaseComponents/TabsKeepalive/Tabs";
import CollapseHandlerBtn from "@/components/Handler/CollapseBtn";
import Avatar from "@/components/Avatar";
import ModeChange from "@Base/Theme/ModeChange";
import SettingDrawer from "@/BaseComponents/Theme/SettingDrawer";
</script>
<style lang="scss" scoped></style>
