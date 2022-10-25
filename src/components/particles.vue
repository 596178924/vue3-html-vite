<template>
	<vue-particles
		id="particles-js"
		color="#fff"
		:particleOpacity="0.7"
		:particlesNumber="60"
		shapeType="circle"
		:particleSize="4"
		linesColor="#fff"
		:linesWidth="1"
		:lineLinked="true"
		:lineOpacity="0.4"
		:linesDistance="150"
		:moveSpeed="2"
		:hoverEffect="true"
		:clickEffect="true"
		hoverMode="repulse"
		clickMode="repulse"
	>
	</vue-particles>
</template>
<style lang="scss" scoped>
#particles-js {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
    height: 100%;
    overflow: hidden;
	pointer-events: none;
	// max-height: 100vh;
	// z-index: 1;
}
</style>
