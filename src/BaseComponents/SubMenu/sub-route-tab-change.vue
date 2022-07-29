<template>
	<el-tabs :model-value="currentRoutePath" @tab-change="handleChange">
		<el-tab-pane
			v-for="item in subRoutes"
			:key="item.path"
			:closable="false"
			:name="item.path"
		>
			<template #label>
				<i class="hxb-tab-pane__icon" :class="item.meta.icon"></i>
				<span class="hxb-tab-pane__title">
					{{ item.meta.title }}
				</span>
			</template>
		</el-tab-pane>
	</el-tabs>
</template>

<script setup>
import { computed, ref } from "vue-demi";
import { useRoute, useRouter } from "vue-router";
import { useRoutesStore } from "@/store/routes";
import { storeToRefs } from "pinia";
const Route = useRoute();
const Router = useRouter();
const RoutesStore = useRoutesStore();
const { subRoutes } = storeToRefs(RoutesStore);
console.log("综合布局头部", subRoutes);
const currentRoutePath = computed(()=> {
    return Route.matched[0].path
});
function handleChange(path) {
	Router.push(path);
}
</script>

<style lang="scss" scoped>
.hxb-tab-pane__icon {
	margin-left: 4px;
}
.hxb-tab-pane__title {
	padding: 0 6px;
}
:deep() .el-tabs__item {
	display: inline-flex;
	align-items: center;
}
</style>
