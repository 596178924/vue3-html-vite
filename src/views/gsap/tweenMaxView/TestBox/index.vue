<template>
  <div class="view">
	  <div ref="box" class="box"></div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { onMounted, ref } from "vue-demi";

const box = ref();
onMounted(() => {
	const timeline = new gsap.timeline();
	timeline.to(box.value,
    1, {
		x: 200,
		rotation: 90,
		// ease: gsap.Back.easeInOut, // Specify an ease
	});
	timeline.to(
		box.value,
		0.5,
		{
			background: "green",
		},
		"-=0.5" // Run the animation 0.5s early
	);
});
</script>

<style lang='scss' scoped>
.view {
  padding: 20px;
}
.box {
	height: 60px;
	width: 60px;
	background: red;
}
</style>
