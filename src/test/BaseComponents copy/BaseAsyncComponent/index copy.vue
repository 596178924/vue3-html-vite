<template>
	<!-- <Suspence>
		<myAsyncComponent />
	</Suspence> -->
	<Suspense>
		<!-- component with nested async dependencies -->
		<myAsyncComponent />
	</Suspense>
</template>

<script setup>
import { useWeb3 } from "@/hooks/useWeb3"
import { ref } from "vue";
import { defineAsyncComponent } from "vue";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";
// import ThenComponent from "./ThenComponent";
// 定义一个耗时执行的函数，t 表示延迟的时间， callback 表示需要执行的函数，可选
const time = (t, callback = () => {}) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			callback();
			resolve();
		}, t);
	});
};
// let count = 0;
const count = ref(0);
const myAsyncComponent = defineAsyncComponent({
	// 工厂函数
	loader: () =>
		new Promise((resolve, reject) => {
			(async function () {
				try {
					await time(300);
					// const res = await ThenComponent;
					const res = await import("./ThenComponent.vue");
					// if (count.value + 1 < 3) {
					// 	// 前两次加载手动设置加载失败
					// 	console.error("reject", count.value);
					// 	reject(res);
					// } else {
					// 	// 大于3次成功
					// 	console.log(count.value);
					resolve(res);
					// }
				} catch (e) {
					console.log(count.value);
					console.error(e);
					reject(count.value);
				}
			})();
		}),
	loadingComponent: LoadingComponent,
	errorComponent: ErrorComponent,
	delay: 0,
	timeout: 3000,
	suspensible: false,
	onError(error, retry, fail, attempts) {
		// 注意，retry/fail 就像 promise 的 resolve/reject 一样：
		// 必须调用其中一个才能继续错误处理。
		console.error("onError ---:", error, attempts);

		// if (attempts < 3) {
		// 	// 请求发生错误时重试，最多可尝试 3 次
		// 	console.error("onError",attempts);
		// 	retry();
		// } else {
		fail();
		// }
	},
});
</script>
<style lang="scss" scoped></style>
