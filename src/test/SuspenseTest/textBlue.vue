<template>
	<div class="text-blue-400">文字1</div>
</template>
<script setup>
const sleep = (delay = 2000) =>
	new Promise((resp) => setTimeout(() => resp(), delay));
await sleep(2000);
</script>
