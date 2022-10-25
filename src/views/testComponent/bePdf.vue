<template>
	<div class="view">
		<!-- <el-button type="primary" @click="getUserInfor">
			获取用户信息
		</el-button> -->
		<div class="pdf-preview">
			<vue-pdf-embed
				:source="state.source"
				:style="scaleFun"
				class="vue-pdf-embed"
				:page="state.pageNum"
			/>
		</div>
	</div>
</template>

<script setup>
import { reactive, onMounted, computed } from "vue-demi";
import VuePdfEmbed from "vue-pdf-embed";
import { createLoadingTask } from "vue3-pdfjs/esm"; // 获得总页数
// import UserAxios from "@/apis/user"
// async function getUserInfor() {
// 	UserAxios.getUserInfor().then(res=> {
// 		console.log(res);
// 	})
// }
const Url = "http://yaboworld.in/yabo-world__zh.pdf";
const state = reactive({
	source: Url,
	pageNum: 1, //当前页面
	scale: 1, // 缩放比例
	numPages: 0, // 总页数
});
const loadingTask = createLoadingTask(state.source);
loadingTask.promise.then((pdf) => {
	state.numPages = pdf.numPages;
});
</script>

<style lang="scss" scoped>
.pdf-preview {
    position: relative;
    height: 100vh;
    padding: 20px 0;
    box-sizing: border-box;
    background-color: e9e9e9;
}
.pdf-wrap{
    overflow-y:auto ;
}
.vue-pdf-embed {
    text-align: center;
    width: 515px;
    border: 1px solid #e5e5e5;
    margin: 0 auto;
    box-sizing: border-box;
}

.page-tool {
    position: absolute;
    bottom: 35px;
    padding-left: 15px;
    padding-right: 15px;
    display: flex;
    align-items: center;
    background: rgb(66, 66, 66);
    color: white;
    border-radius: 19px;
    z-index: 100;
    cursor: pointer;
    margin-left: 50%;
    transform: translateX(-50%);
}
.page-tool-item {
    padding: 8px 15px;
    padding-left: 10px;
    cursor: pointer;
}
</style>
