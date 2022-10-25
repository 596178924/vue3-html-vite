<template>
	<div class="view">
		<el-button type="primary" @click="see"> 查看base64文本 </el-button>
		<el-button type="primary" @click="selectImageFile"> 查看base64图片 </el-button>
		<input
			class="file-select"
			ref="fileSelect"
			type="file"
			name="file"
			:accept="accept"
			@change="getFile"
		/>
		<p>
			{{text1}}
		</p>
		<p>
			{{image}}
		</p>
	</div>
</template>

<script setup>
import { ElMessage } from "element-plus"
import { ref, reactive, computed } from "vue-demi"
import { encodeSTR, decodeBase64 } from "@/utils/base64";
import {
	fileToBase64, getExtensionWithPoint,
	downloadName, getFileName
} from "@/utils/file"
const text1 = ref('')
function see() {
	text1.value = encodeSTR("哈哈哈");
	console.log(text1.value);
}
const accept = '.jpg,.jpeg,.png';
const acceptList = accept.slice(',');

const result = reactive({
	dataURL: '',
	fileData: '',
	fileName: '',
})
const image = ref('')
const fileSelect = ref(null);

function resetData() {
	result.dataURL = ''
	result.fileData = ''
	result.fileName =  ''
}
function selectImageFile() {
	let res = fileSelect.value.dispatchEvent(new MouseEvent('click'))
	console.log("selectImageFile", res)
}
const PlusElMessage = (option) => {
	return ElMessage({
		duration: option.type == 'error'? 0 : 3000,
		grouping: true,
		showClose: true,
		...option
	})
}
async function getFile(e) {
	console.log("成功", e);
	const eimageFiles = e.target.files[0];
	console.log(eimageFiles);
	const isLt2M = eimageFiles.size / 1024 / 1024 < 2;
	if (!isLt2M) {
		PlusElMessage({
			duration: 0,
			type: 'error',
			message: 'Avatar picture size can not exceed 2MB!'
		})
		clearFiles()
		return;
	}
	const filetype = getExtensionWithPoint(eimageFiles.name)
	const fileTypeValidator = acceptList.includes(filetype);
	if (fileTypeValidator) {
		resetData()
		result.fileName = getFileName(downloadName(eimageFiles))
		console.log(result.fileName)
		image.value = await fileToBase64(eimageFiles)
		clearFiles()
	} else {
		PlusElMessage({
			duration: 0,
			type: 'error',
			message: '类型错误'
		})
		clearFiles()
	}
}
function clearFiles() {
	fileSelect.value.value = '';
}
</script>

<style lang="scss" scoped></style>
