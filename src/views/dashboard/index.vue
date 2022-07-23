<template>
	<div>
		<div>看板</div>
		<div>
			<p>天气</p>
			<div>
				{{ WeatherInfo }}
			</div>
		</div>
		<Weather></Weather>
	</div>
</template>

<script setup>
import Axios from "axios";
import Weather from "@/components/Weather";
import { onMounted, ref } from "vue-demi";
onMounted(() => {
	// console.log('getWeather');
	console.log(window.location.host);
	getWeather();
});
const sleep = (delay = 2000) =>
	new Promise((resp) => setTimeout(() => resp(), delay));
await sleep(5000);

const WeatherInfo = ref({});
async function getWeather() {
	const LocationId = window.location.host;
	const res = await Axios.get(
		// "https://v0.yiketianqi.com/api?unescape=1&version=v91&appid=43656176&appsecret=I42og6Lm&ext=&cityid=&city="
		// `https://devapi.qweather.com/v7/weather/now?lang=zh&location=${LocationId}&key=40b27e75c0e6483996d3785e427a2f89`
		"https://v0.yiketianqi.com/api?unescape=1&version=v61&appid=56428855&appsecret=Lb9xElRG"
	);
	console.log(res.data);
	WeatherInfo.value = res.data;
}
</script>
<style lang="scss" scoped></style>
