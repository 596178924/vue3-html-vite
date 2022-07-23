<template>
	<div class="base-header base-flex">
		<CollapseHandlerBtn/>
		<!-- <div class="base-flex"> -->
			<ModeChange type="Button"></ModeChange>
			<Avatar/>
		<!-- </div> -->
	</div>
</template>

<script setup>
import CollapseHandlerBtn from "@/components/Handler/CollapseBtn";
import Avatar from "@/components/Avatar";
import ModeChange from "@Base/Theme/ModeChange"

</script>
<style lang="scss" scoped>
.base-header {
	@apply h-full;
}
.base-flex {
	@apply flex  items-center;
	// justify-between
}
</style>
