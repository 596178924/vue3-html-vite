<template>
	<SettingTriggerBtn v-model="settingDrawerHandler" />
	<SettingDrawer v-model="settingDrawerHandler"> </SettingDrawer>
</template>

<script setup>
import SettingTriggerBtn from "./SettingTriggerBtn";
import SettingDrawer from "./SettingDrawer";
import { ref } from "vue-demi";

const settingDrawerHandler = ref(false);
</script>
<style lang="scss" scoped></style>
