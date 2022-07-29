<template>
	<div class="hxb-icon ml-2">
		<ul class="icon-list-settings"
			:class="{
				'icon-keep-alive':keepAlive
			}"
		>
			<li class="li"></li>
			<li class="li"></li>
			<li class="li"></li>
			<li class="li"></li>
		</ul>
	</div>
</template>

<script setup>
const props = defineProps({
	keepAlive:{
		type: Boolean,
		default: false,
	},
})
</script>

<style lang="scss" scoped>
.hxb-icon {
	width: 1em;
	height: 1em;
	display: inline-block
	// background-color: rgb(148, 148, 148);
}
.icon-list-settings {
	@apply w-full h-full grid grid-cols-2 grid-rows-2 gap-0.5 transition-transform duration-300;
	&.icon-keep-alive,
	&:hover {
		transform: rotateZ(90deg);
        .li:nth-child(3) {
            @apply rotate-45 delay-200;
        }
	}
	.li {
		@apply transition-transform duration-300;
		background-color: var(--el-color-primary);
	}
}
</style>
