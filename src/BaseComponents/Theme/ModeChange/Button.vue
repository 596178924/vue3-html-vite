<template>
	<el-button type="primary" class="mx-2" size="small" circle @click="change">
		<i class="text-xl" :class="bindClass"></i>
	</el-button>
</template>

<script setup>
import { computed, toRefs } from "vue-demi";

const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
	modelValue: {
		type: Boolean,
		required: true,
	},
});
const { modelValue } = toRefs(props);
const bindClass = computed(() =>
	modelValue.value ? "ri-lightbulb-line" : "ri-lightbulb-flash-line"
);
function change() {
	emits("update:modelValue", !modelValue.value);
}
</script>
