<template>
	<div>
		<p v-for="item in weatherIcons" :key="item">
			<span>{{ item }}:</span>
			<i :class="`ri-${item}-line`"></i>
		</p>
	</div>
</template>

<script setup>
const weatherIcons = [
	"sun",
	"moon",
	"flashlight",
	"cloudy",
	"cloudy-2",
	"mist",
	"foggy",
	"cloud-windy",
	"windy",
	"rainy",
    'drizzle',
    'showers',
    'heavy-showers',
    'thunderstorms',
    'hail','snowy',
    'sun-cloudy',
    'moon-cloudy',
    'tornado',
    'typhoon',
    'haze',
    'haze-2',
    'sun-foggy',
    'moon-foggy',
    'moon-clear',
    'temp-hot',
    'temp-cold',
];
</script>
<style lang="scss" scoped></style>
