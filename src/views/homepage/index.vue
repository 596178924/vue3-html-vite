<template>
	<div class="view">
		<p>homepage</p>
		<p class="media-perfers-color-scheme">tailwind css dark or light</p>
		<el-input v-model="data"></el-input>
	</div>
</template>

<script setup>
import { ref } from "vue-demi";
const data = ref("");
</script>

<style lang="scss" scoped>
.media-perfers-color-scheme {
	@apply dark:text-yellow-400 text-blue-400;
}
</style>
