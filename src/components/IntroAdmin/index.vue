<template>
	<el-button type="primary" @click="start">开始导航</el-button>
</template>

<script setup>
import IntroJs from "intro.js"; // introjs库
import "intro.js/introjs.css"; // introjs默认css样式
// introjs还提供了多种主题，可以通过以下方式引入
// import "intro.js/themes/introjs-modern.css";

function start() {
	IntroJs()
		.setOptions({
			prevLabel: "上一步",
			nextLabel: "下一步",
			// skipLabel: "跳过",
			doneLabel: "完成",
			/* 引导说明框相对高亮说明区域的位置 */
			tooltipPosition: "bottom",
			/* 引导说明文本框的样式 */
			tooltipClass: "intro-tooltip", // 用于设置全局的样式
			/* 说明高亮区域的样式 */
			highlightClass: "intro-highlight",
			/* 引导说明框相对高亮说明区域的位置 */
			/* 是否使用键盘Esc退出 */
			exitOnEsc: true,
			/* 是否允许点击空白处退出 */
			exitOnOverlayClick: false,
			/* 提示边框的padding */
			helperElementPadding: 2,
			/* 是否显示说明的数据步骤 */
			showStepNumbers: false,
			/* 是否允许键盘来操作 */
			keyboardNavigation: true,
			/* 是否按键来操作 */
			showButtons: true,
			/* 是否使用点显示进度 */
			showBullets: false,
			/* 是否显示进度条 */
			showProgress: false,
			/* 是否滑动到高亮的区域 */
			scrollToElement: true,
			/* 遮罩层的透明度 */
			overlayOpacity: 0.9,
			/* 当位置选择自动的时候，位置排列的优先级 */
			positionPrecedence: ["bottom", "top", "right", "left"],
			/* 是否禁止与元素的相互关联 */
			disableInteraction: true,
			/* 是否在第一步隐藏上一步 */
			// hidePrev: true,
			/* 是否在最后一步隐藏下一步 */
			// hideNext: true,
			/* steps步骤，可以写个工具类保存起来 */
			steps: [
				{
					element: ".el-main",
					intro: "页面内容",
					position: "top",
				},
				{
					element: ".el-header",
					intro: "头部导航",
					position: "top",
				},
				{
					element: ".el-aside",
					intro: "菜单栏",
					position: "right",
				},
			],
		})
		.start();
}
</script>

<style lang="scss" scoped></style>
