import { onMounted, onUnmounted, ref } from "vue";

export function useSafeHook(run,clear) {
	onMounted(() => {
		clear()
		run()
	});
	onUnmounted(() => {
		clear()
	});
}

//获得一个安全的定时器
export function useSafeInterval(fn, wait = 1000) {
	const timer = ref(null);
	function runTimer() {
		timer.value = setInterval(fn, wait)
	}
	function clearTimer() {
		clearInterval(timer.value)
	}
	useSafeHook(runTimer,clearTimer)
	return { runTimer, clearTimer };
}

//获得一个安全的window绑定事件
export function useSafeListener(eventType, fn, useCapture = false) {
	function add() {
		window.addEventListener(eventType, fn, useCapture);
		fn();
	}
	function remove() {
		window.removeEventListener(eventType, fn, useCapture);
	}
	useSafeHook(add,remove)
	return { add, remove };
}
