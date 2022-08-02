<template>
	<el-scrollbar id="view">
		<div
			class="reveal-top"
			v-for="(item, index) in 10"
			:key="item"
			:ref="
				(e) => {
					if (e) listRefs[index] = e;
				}
			"
		>
			你好
		</div>
	</el-scrollbar>
</template>

<script setup>
import ScrollReveal from "scrollreveal";
import { onMounted, shallowRef } from "vue-demi";

const listRefs = shallowRef([]);
const containerDom = "#view .el-scrollbar__wrap";
/*
	scrollreveal 这个插件用在 el-scrollbar 下无法滚动触发动画
	要指定他的 .el-scrollbar > .el-scrollbar__wrap才行
*/
onMounted(() => {
	// 6.启动scrollReveal的方法
	// listRefs.value
	ScrollReveal().reveal(listRefs.value, {
		reset: true, // 元素离开视口后返回初始位置, 等待下一次触发, 值为false时动画值触发一次
		delay: 0, // 动画开始前的延迟时间, 触发的动画 reset 永远不会使用延迟。
		useDelay: "once", // 设置延迟 ， always 延迟所有动画、 once 延迟一次、 onload 只在页面完成加载后延迟一次
		distance: "-50px", // 控制元素在显示时移动多远。接受的单位 px|em|%
		duration: 500, // 控制动画持续时间, 单位为 ms
		easing: "ease-in-out", // 控制动画如何在起始值和结束值之间转换
		interval: 10, // 动画间隔
		opacity: 0.3, //指定在显示之前它们具有的不透明度。
		origin: "right", //指定元素在显示时的方向, 需要给options指定非零值才能对origin动画产生明显影响。
		//    接受的参数 'top' 'right' 'bottom' 'left'
		rotate: { x: 0, y: 0, z: 0 }, // number单位为角度
		scale: 0.9, //指定在显示之前元素的大小。
		cleanup: false, //是否清理事件监听
		container: containerDom, // 监听的滚动对象
		// desktop: false, //禁用桌面端浏览器动画
		// mobile: false, //禁用移动端浏览器动画
		// viewFactor: 0.1, //指定元素的哪个部分必须在视口内才能被视为可见。
		// 在计算元素可见性时扩展/收缩视口的活动边界。
		// viewOffset: {
		// 	top: 0,
		// 	right: 0,
		// 	bottom: 0,
		// 	left: 0,
		// },
	});
});

/*
	delay: 0,                                // 延时时间
	distance: '0px',                         // 执行距离
	duration: 600,                           // 执行时长
	easing: 'cubic-bezier(0.5, 0, 0, 1)',    // 执行速度
	interval: 0,                             // 执行间隔（时间）
	opacity: 0,                              // 执行方式（透明度）
	origin: 'bottom',                        // 执行方式（偏移 top:自上而下,bottom:自下而上,left:自左往右,right:自右往左.）
	rotate: {                                // 执行方式（旋转）
	    x: 0,                                // x
	    y: 0,                                // y
	    z: 0,                                // z
	},
	scale: 1,                                // 执行方式（缩放）
	cleanup: false,                          // 暂时不知道是什么东西
	container: document.documentElement,     // 执行容器（后跟元素，填写后只有容器内的元素执行动画）
	desktop: true,                           // 是否在电脑上面执行
	mobile: true,                            // 是否在手机上面执行
	reset: false,                            // 是否重复执行（）
	useDelay: 'always',                      // 延时执行方式（always（一直延时执行），once（只延时执行一次），onload（只在加载时延时执行））
	viewFactor: 0.0,                         // 视图显示元素百分之多少的时候执行动画（单位：小数，例：0.50 在元素展示超过百分之五十的时候，执行动画）
	viewOffset: {                            // 视图偏移（把视图抽象成元素移动）
	    top: 0,
	    right: 0,
	    bottom: 0,
	    left: 0,
	},
	afterReset: function (el) {},            // 重置之后（视图内看不到元素之后，退场动画执行结束之后）
	afterReveal: function (el) {},           // 执行之后（动画已经执行完毕（已完成））
	beforeReset: function (el) {},           // 重置之前（视图内看不到元素之后，退场动画执行结束之前）
	beforeReveal: function (el) {},          // 执行之前（动画开始执行（未完成时））　
　　
*/
</script>

<style lang="scss" scoped>
.reveal-top {
	background-color: #9b5f5f;
	height: 200px;
}
#view {
	max-height: 100%;
	overflow: auto;
}
</style>
