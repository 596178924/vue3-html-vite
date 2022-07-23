<template>
	<button>
		<i :class="collapseIcon"></i>
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
// .collapse-handler-btn {
// 	@apply w-8 h-8 text-xl rounded  hover:bg-blue-100;
// }
</style>
