<template>
	<HandlerBtn :collapse="collapse" @click="trigger"></HandlerBtn>
</template>

<script setup>
import HandlerBtn from "./index";
import { useLayoutStore } from "@/store/layout";
import { storeToRefs } from "pinia";
import { computed } from "vue-demi";
import { useStoreWindowResize } from "@/store/window";

const LayoutStore = useLayoutStore();
const { triggerCollapse, triggerDrawerCollapse } = LayoutStore;
const { isCollapse, isDrawerCollapse } = storeToRefs(LayoutStore);
const useWindowResize = useStoreWindowResize();
const { screenWidth } = storeToRefs(useWindowResize);

const collapse = computed(
	() => (screenWidth.value > 768 ? isCollapse.value : isDrawerCollapse.value)
	// isCollapse.value
);
function trigger() {
	console.log("切换");
	screenWidth.value > 768 ? triggerCollapse() : triggerDrawerCollapse();
	// triggerCollapse()
}
</script>
