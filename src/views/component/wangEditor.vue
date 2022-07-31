<template>
	<div>
		<el-alert
			title="这插件现在有BUG"
			type="error">
		</el-alert>
		{{ valueHtml }}
		<div style="border: 1px solid #ccc">
			<Toolbar
				style="border-bottom: 1px solid #ccc"
				:editor="editorRef"
			/>
			<Editor
				style="height: 500px; overflow-y: hidden"
				v-model="valueHtml"
				@onCreated="handleCreated"
			/>
		</div>
	</div>
</template>

<script setup>
import "@wangeditor/editor/dist/css/style.css"; // 引入 css

import { onBeforeUnmount, onMounted, ref, shallowRef } from "vue-demi";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";

const editorRef = shallowRef();

// 内容 HTML
const valueHtml = ref("");

const toolbarConfig = {};
const editorConfig = { placeholder: "请输入内容..." };

//
onMounted(() => {});
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
	destoryEditor();
});

function destoryEditor() {
	const editor = editorRef.value;
	if (editor == null) return;
	console.log("销毁");
	editor.destroy();
	editorRef.value = null;
}

const handleCreated = (editor) => {
	editorRef.value = editor; // 记录 editor 实例，重要！
	console.log("实例", editorRef.value);
};
</script>

<style lang="scss" scoped></style>
