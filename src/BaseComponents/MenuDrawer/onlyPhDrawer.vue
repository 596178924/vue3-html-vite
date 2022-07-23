<template>
	<section :class="bindClass" v-show="auto || screenIsCollapse">
		<component :is="isDrawer" >
			<slot :screenIsCollapse="screenIsCollapse"></slot>
		</component>
	</section>
</template>

<script setup>
import Drawer from "./index.vue";
import { useStoreWindowResize } from "@/store/window";
import { storeToRefs } from "pinia";
import {
	computed,
	//  Fragment
} from "vue-demi";

const props = defineProps({
	auto: {
		type: Boolean,
		default: false
	}
})

const useWindowResize = useStoreWindowResize();
const { screenIsCollapse } = storeToRefs(useWindowResize);
// const isDrawer = computed(() => (screenIsCollapse.value ? Drawer : Fragment));
const isDrawer = computed(() => (screenIsCollapse.value ? Drawer : "div"));
const bindClass = computed(() => ({
	"h-full": screenIsCollapse.value != true,
}));
</script>

<style lang="scss" scoped>
section.h-full > div {
	height: inherit;
}
</style>
