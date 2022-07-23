<template>
	<button>
		<i class="ri-icon" :class="collapseIcon"></i>
	</button>
</template>

<script setup>
import { computed, toRefs } from "@vue/runtime-core";
const props = defineProps({
	collapse: {
		type: Boolean,
		required: true,
	},
	icon: {
		type: String,
		default: "ri-indent-increase",
	},
	activeIcon: {
		type: String,
		default: "ri-indent-decrease",
	},
});
const { collapse } = toRefs(props);
const collapseIcon = computed(() =>
	collapse.value ? props.icon : props.activeIcon
);
</script>

<style lang="scss" scoped>
.ri-icon {
	@apply  text-2xl;
}
</style>
