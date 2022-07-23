<template>
	<div class="base-sidebar">
		<div class="base-sidebar__main">
			<slot></slot>
		</div>
		<div class="base-sidebar__drawer">
			<MenuDrawer>
				<slot></slot>
			</MenuDrawer>
		</div>
	</div>
</template>

<script setup>
import MenuDrawer from "./menu-drawer.vue";
</script>
<style lang="scss" scoped>
.base-sidebar__main {
	@apply md-min:block md-max:hidden;
}
.base-sidebar__drawer {
	@apply md-max:block md-min:hidden;
}
</style>
