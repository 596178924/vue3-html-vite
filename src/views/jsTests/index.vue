<template>
	<div>
		<el-button type="primary" @click="copy(textVal)"> 复制 </el-button>
	</div>
</template>

<script setup>
const textVal = "复制内容。。。";
async function copy(text) {
	let res = false;
	if (navigator.clipboard) {
		console.log("能够复制");
		res = await navigator.clipboard.writeText(text).then((res) => res);
		console.log(res);
	} else {
		const textareaEl = document.createElement("textarea");
		textareaEl.setAttribute("readonly", "readonly"); // 防止手机上弹出软键盘
		textareaEl.style.position = "absolute";
		textareaEl.style.left = "-100vw";
		textareaEl.value = text;
		document.body.appendChild(textareaEl);
		textareaEl.select();
		res = document.execCommand("copy");
		document.body.removeChild(textareaEl);
	}
    return res
}
</script>

<style lang="scss" scoped></style>
