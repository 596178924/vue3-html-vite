<template>
	<!--
        @Reference to 'https://csscoco.com/inspiration/#/./3d/3d-text-debut'
     -->
	<div class="loading-view">
		<div class="box">
			<span data-txt="H">H</span>
			<span data-txt="X">X</span>
			<span data-txt="B">B</span>
			<span></span>
			<span data-txt="N">N</span>
			<span data-txt="B">B</span>
		</div>
	</div>
</template>
<style lang="scss" scoped>
$bright: #dd7c44;
$gold: #8ac4df;
$dark: #514596;

$duration: 2s;
.loading-view {
	width: 100%;
	height: 100%;
	display: flex;
	// background-color: var(--el-color-primary-dark-2,#000);
	// background: #000;
}
.box {
	margin: auto;
	perspective: 1000px;
	transform-style: preserve-3d;
	font: 10vw Righteous;
	animation: fade $duration 1;
}

span {
	position: relative;
	display: inline-block;
	min-width: 0.5em;
	text-align: center;
	transform-style: preserve-3d;
	transform: rotateY(25deg);
	animation: rotate $duration 1 ease-in-out;
	color: black;

	&:after,
	&:before {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		content: attr(data-txt);
		color: $gold;
		z-index: -1;
		animation: shadow $duration infinite;
	}

	&:before {
		transform: translateZ(-14px);
	}
	&:after {
		transform: translateZ(-7px);
	}
}

@keyframes fade {
	from {
		opacity: 0;
		transform: scale(1.2);
	}
	25% {
		opacity: 1;
	}
	100% {
		transform: scale(1);
	}
}

@keyframes rotate {
	from {
		transform: rotateY(65deg);
	}
	50%,
	100% {
		color: $dark;
		transform: rotateY(5deg);
	}
	100% {
		color: $gold;
	}
}

@keyframes shadow {
	from {
		color: shade($gold, 50%);
	}
	25% {
		color: $bright;
	}
	50%,
	100% {
		color: tint($gold, 100%);
	}
}
</style>
