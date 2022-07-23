import {
	getCurrentInstance,
	// defineEmits,
	computed, unref
} from 'vue-demi';
export function useVModel(props, name) {
	const emits = getCurrentInstance().emit;
	const emitFnType = name == "" || name == 'modelValue' ? `update:modelValue` : `update:${name}`
	// const emits = defineEmits([emitFnType])
	return computed({
		get() {
			return props[name];
		},
		set: (v) => emits(emitFnType, unref(v)),
	});
}

/*
父组件
	<template>
		<Son v-model:inputValue="inputValue"></Son>
	</template>
	<script setup>
		import {
			ref
		} from 'vue'
		import Son from "@/components/son"
		const inputValue = ref('0')
	</script>
子组件
	<template>
		<input type="text" v-model="value">
	</template>
	<script setup>
		import {defineProps} from 'vue'
		import { useVModel } from '@/hooks/useVModel';
		const props = defineProps({
			inputValue: {
				type: String
			}
		})
		const value = useVModel(props, 'inputValue')
	</script>

*/
