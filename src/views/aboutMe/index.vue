<template>
	<div>
		aboutMe
		<p class="theme-primary-color">文字</p>
	</div>
</template>

<script setup>
import VariablesModule from "@/styles/variables/variables.module.scss"
console.log(VariablesModule);
</script>
<style lang="scss" scoped>
@import "@/styles/variables/variables.module.scss";
.theme-primary-color {
	color: $base-color-primary;
}
</style>
