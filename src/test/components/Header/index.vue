<template>
	<div class="base-header">
		<CollapseHandlerBtn></CollapseHandlerBtn>
	</div>
</template>

<script setup>
import CollapseHandlerBtn from "@/components/Handler/CollapseBtn";
</script>
<style lang="scss" scoped>
.base-header {
	@apply flex items-center h-full;
}
</style>
