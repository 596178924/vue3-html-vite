<template>
	<!-- <div>homepage</div> -->
	<div class="card">
		<p>测试切换组件</p>
		<p>{{ componentType }}</p>
		<el-radio-group v-model="componentType">
			<el-radio
				v-for="item in types"
				:label="item.label"
				:key="item.label"
			></el-radio>
		</el-radio-group>
		<p>Suspense : </p>
		<transition mode="out-in" name="el-fade-in-linear">
			<Suspense
				@pending="pendingEnv"
				@resolve="resolveEnv"
				@fallback="fallbackEnv"
				:timeout="0"
			>
				<template #default >
					<component :is="componentIs" :key="componentIsKey"></component>
				</template>
				<template #fallback>
					<loadingCmd></loadingCmd>
				</template>
			</Suspense>
		</transition>
	</div>
</template>

<script setup>
import textBlue from "./textBlue";
import textGreen from "./textGreen";
import loadingCmd from "./loading";
import errorCmd from "./error";
import { ref, defineAsyncComponent, computed } from "vue-demi";

const componentType = ref("textBlue");
const componentIs = computed(
	() =>
		types.find((a) => a.label == componentType.value).component || errorCmd
);
const componentIsKey = computed(() => componentType.value || "error");
const types = [
	{
		label: "textBlue",
		component: textBlue,
	},
	{
		label: "textGreen",
		component: textGreen,
	},
];

function pendingEnv() {
	console.log("发生变化");
}
function resolveEnv() {
	console.log("加载完成");
}
function fallbackEnv() {
	console.log("加载 loading");
}

const sleep = (delay = 2000) =>
	new Promise((resp) => setTimeout(() => resp(), delay));

const AsyncComponent = defineAsyncComponent({
	// 工厂函数
	loader: async () => {
		await sleep(2000);
		return types.find((a) => a.label == componentType.value).component;
	},
	loadingComponent: loadingCmd,
	errorComponent: errorCmd,
	delay: 0,
	timeout: 3000,
	suspensible: true,
	onError(error, retry, fail, attempts) {
		fail();
	},
});

</script>
<style lang="scss" scoped></style>
