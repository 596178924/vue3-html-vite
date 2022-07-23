<template>
	<div>Clock</div>
	<!-- <p>{{ timeData }}</p> -->
	<p v-for="(item, index) in timeData" :key="index">
		{{ index + ":" + item }}
	</p>
</template>

<script setup>
import { computed } from "vue-demi";
import { useNow } from "@vueuse/core";

const week = [
	"星期日",
	"星期一",
	"星期二",
	"星期三",
	"星期四",
	"星期五",
	"星期六",
];
const BaseDate = useNow({ interval: 100 });
const timeData = computed(() => {
	const _date = BaseDate.value;
	return !_date ? {} : formatTimeDate(_date);
});
function formatTimeDate(_date) {
	return {
		locale: _date.toLocaleString(),
		localeDate: _date.toLocaleDateString(),
		localeTime: _date.toLocaleTimeString(),
		dateString: _date.toDateString(),
		week: week[_date.getDay()],
		year: _date.getFullYear(),
		month: _date.getMonth() + 1,
		day: _date.getDate(),
		hours: _date.getHours(),
		minutes: _date.getMinutes(),
		seconds: _date.getSeconds(),
		milliSeconds: _date.getMilliseconds(),
	};
}
</script>
