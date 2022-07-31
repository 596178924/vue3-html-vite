<template>
	<videoPlay
		v-bind="options"
		@play="onPlay"
		@pause="onPause"
		@timeupdate="onTimeupdate"
		@canplay="onCanplay"
	/>
</template>

<script setup>
import "vue3-video-play/dist/style.css";
import { videoPlay } from "vue3-video-play";
import { reactive } from "vue";
const src1 = "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"; //视频源
const m3u8_1 = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"; //视频源

const options = reactive({
	width: "100%", //播放器高度
	height: "450px", //播放器高度
	color: "#409eff", //主题色
	title: "", //视频名称
	src: src1,
	// type: "m3u8",
	muted: false, //静音
	webFullScreen: false,
	speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], //播放倍速
	autoPlay: false, //自动播放
	loop: false, //循环播放
	mirror: false, //镜像画面
	ligthOff: true, //关灯模式
	volume: 0.3, //默认音量大小
	control: true, //是否显示控制
	controlBtns: [
		"audioTrack",
		"quality",
		"speedRate",
		"volume",
		"setting",
		"pip",
		"pageFullScreen",
		"fullScreen",
	], //显示所有按钮,
});
const onPlay = (ev) => {
	console.log("播放");
};
const onPause = (ev) => {
	console.log(ev, "暂停");
};

const onTimeupdate = (ev) => {
	console.log(ev, "时间更新");
};
const onCanplay = (ev) => {
	console.log(ev, "可以播放");
};
</script>

<style lang="scss" scoped></style>
