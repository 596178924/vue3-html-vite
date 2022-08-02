<template>
	<div class="view sign-in">
		登录页
		<div class="form-box">
			<Form></Form>
			<!-- <el-form
				status-icon
				size="small"
				label-position="top"
				label-width="120px"
			>
				<el-form-item label="Username" prop="username">
					<el-input type="text" autocomplete="off" />
				</el-form-item>
				<el-form-item label="Password" prop="password">
					<el-input autocomplete="off" />
				</el-form-item>
				<el-form-item>
					<el-button type="primary">Submit</el-button>
					<el-button>Reset</el-button>
				</el-form-item>
			</el-form> -->
		</div>
	</div>
</template>

<script setup>
import Form from './Form'
</script>

<style lang="scss" scoped>
.view {
	width: 100%;
	min-height: 100vh;
}
.sign-in {
    background-color: #333;
}
.form-box {
	width: 300px;

}
</style>
