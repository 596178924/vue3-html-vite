<template>
	<el-button
		type="primary"
		class="mx-2"
		size="small"
		circle
		@click="emits('update:modelValue', !modelValue)"
	>
		<i class="ri-settings-3-line text-xl"></i>
	</el-button>
</template>

<script setup>
const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
	modelValue: {
		type: Boolean,
	},
});
</script>
<style lang="scss" scoped></style>
