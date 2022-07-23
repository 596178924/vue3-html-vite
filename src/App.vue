<template>
	<el-config-provider
		:button="btnConfig"
		:message="messageConfig"
		:locale="elementPlusMessage"
	>
		<router-view />
	</el-config-provider>
</template>

<script setup>
import { computed, reactive } from "vue-demi";
import { useLanguageStore } from "@/store/language";
import { elementPluslocales } from "@/i18n/elementPluslocales";
import { storeToRefs } from "pinia";

const LanguageStore = useLanguageStore();
const { LanguageType } = storeToRefs(LanguageStore);

const elementPlusMessage = computed(
	() => elementPluslocales[LanguageType.value]
);
const btnConfig = reactive({
	autoInsertSpace: true,
});
const messageConfig = reactive({
	max: 10,
});
</script>
