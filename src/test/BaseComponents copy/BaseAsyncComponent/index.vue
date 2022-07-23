<template>
	<Suspense>
		<StateWeb3Component></StateWeb3Component>
	</Suspense>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";
import { useWeb3 } from "@/hooks/useWeb3";
// 定义一个耗时执行的函数，t 表示延迟的时间， callback 表示需要执行的函数，可选
const time = (t, callback = () => {}) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			callback();
			resolve();
		}, t);
	});
};
const StateWeb3Component = defineAsyncComponent({
	// 工厂函数
	loader: async () => {
		const web3 = await useWeb3();
		console.log(web3);
		if (web3) {
			return import("./ThenComponent.vue");
		}
		return;
	},
	loadingComponent: LoadingComponent,
	errorComponent: ErrorComponent,
	delay: 3,
	timeout: 1000,
	suspensible: false,
	onError(error, retry, fail, attempts) {
		// 注意，retry/fail 就像 promise 的 resolve/reject 一样：
		// 必须调用其中一个才能继续错误处理。
		// if (attempts < 3) {
		// 	// 请求发生错误时重试，最多可尝试 3 次
		// 	console.log(attempts);
		// 	retry();
		// } else {
			fail();
		// }
	},
});
</script>
<style lang="scss" scoped></style>
