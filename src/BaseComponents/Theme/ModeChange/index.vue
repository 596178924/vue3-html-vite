<template>
	<div class="mode-change">
		<component
			:is="currentModule"
			:modelValue="isDark"
			@update:modelValue="debounTriggerThemeMode"
		></component>
	</div>
</template>

<script setup>
import { _debounceFn } from "@/utils/tools";
import Button from "./Button";
import Switch from "./Switch";

import { useDark,useToggle } from "@vueuse/core";
import { computed } from "vue-demi";

import { useThemeStore } from "@/store/theme";

const ThemeStore = useThemeStore();
const { triggerThemeMode } = ThemeStore;
const props = defineProps({
	type: {
		type: String,
		default: "Switch",
		validator: (v) => ["Button", "Switch"].includes(v),
	},
});
const moduleComponents = {
	Button: Button,
	Switch: Switch,
};

const currentModule = computed(() => moduleComponents[props.type]);

const isDark = useDark({
	selector: "html",
	// attribute: "color-scheme",
	// attribute: "perfers-color-scheme",
	attribute: "class",
	valueDark: "dark",
	valueLight: "light",
});
const toggleDark = useToggle(isDark)
triggerThemeMode(isDark.value);
const debounTriggerThemeMode = _debounceFn((v) => {
	console.log("节流:isDark:", v);
	toggleDark()
	// .value = v;
	triggerThemeMode(v);
});

</script>
<style lang="scss" scoped></style>
