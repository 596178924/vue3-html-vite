<template>
	<el-switch
		v-model="modelValue"
		class="mode-change-switch"
		inline-prompt
		:active-icon="moon"
		:inactive-icon="sun"
		@change="(v) => emits('update:modelValue', v)"
	/>
</template>

<script setup>
import moon from "./iconMoon.vue";
import sun from "./iconSun.vue";
const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
	modelValue: {
		type: Boolean,
		required: true,
	},
});
</script>
<style lang="scss" scoped>
.mode-change-switch {
	--el-switch-on-color: #13ce66;
	--el-switch-off-color: #c4c4c4;
	// margin-right: 10px;
	@apply mr-2;
}
</style>
