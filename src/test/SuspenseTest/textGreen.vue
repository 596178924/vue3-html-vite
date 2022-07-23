<template>
    <div class="text-green-400">
        文字2
    </div>
</template>
<script setup>
const sleep = (delay = 2000) =>
	new Promise((resp) => setTimeout(() => resp(), delay));
await sleep(2000);
</script>
