<template>
	<el-result icon="error" :title="ErrorTitle" :sub-title="message">
		<template #extra>
			<el-button type="primary" @click="$router.push('/')">
				Back Home
			</el-button>
		</template>
	</el-result>
</template>

<script setup>
import { computed } from "vue-demi";
import { isBlank } from "@/utils/validate";
const props = defineProps({
	title: {
		type: String,
		default: "",
	},
	message: {
		type: String,
		default: "",
	},
});
const ErrorTitle = computed(
	() => "Error" + (isBlank(props.title) ? "" : `: ${props.title}`)
);
</script>
