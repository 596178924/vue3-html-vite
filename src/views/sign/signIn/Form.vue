<template>
	<el-form
		ref="ruleFormRef"
		:model="ruleForm"
		status-icon
		:rules="rules"
		size="small"
		label-position="top"
		label-width="120px"
	>
		<el-form-item label="Username" prop="username">
			<el-input
				v-model="ruleForm.username"
				type="text"
			/>
		</el-form-item>
		<el-form-item label="Password" prop="password">
			<el-input v-model="ruleForm.password" type="password" />
		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="submitForm(ruleFormRef)"
				>Submit</el-button
			>
			<el-button @click="resetForm(ruleFormRef)">Reset</el-button>
		</el-form-item>
	</el-form>
</template>

<script setup>
import { reactive, ref, shallowReactive } from "vue-demi";
import UserAxios from "@/apis/user";
import ToTest from "@/utils/Regexp.js";
import { useRoute , useRouter } from "vue-router"
import { useUserStore } from "@/store/user";

const Router = useRouter()
const Route = useRoute()
const UserStore = useUserStore();
const { setToken, setUserinfo,userSignOut } = UserStore;
userSignOut()

const ruleFormRef = ref();
const ruleForm = reactive({
	username: "海星吧",
	password: "123456qqq",
});
const validateUsername = (rule, value, callback) => {
	if (value === "" || value.length < 1) {
		callback(new Error("Please input the username"));
	} else {
		callback();
	}
};
const validatePassword = (rule, value, callback) => {
	if (value === "") {
		callback(new Error("Please input the password"));
	} else if (!ToTest.password(value)) {
		callback(new Error("Please input the right password"));
	} else {
		callback();
	}
};
const rules = shallowReactive({
	username: [{ validator: validateUsername, trigger: "blur" }],
	password: [{ validator: validatePassword, trigger: "blur" }],
});

function submitForm(formEl) {
	if (!formEl) return;
	formEl.validate(async (valid) => {
		if (valid) {
			console.log("submit!");
			try {
				const token = await userLogin();
				if (token) {
					setToken(token);
					const userInfo = await getUserInfor(token);
					setUserinfo(userInfo);
					if(Route.query && Route.query.replace) {
						Router.replace(Route.query.replace)
					} else {
						Router.replace('/')
					}
				}
			} catch (e) {
				console.error("submitForm error");
				console.error(e);
			}
		} else {
			console.log("error submit!");
			return false;
		}
	});
}

function userLogin() {
	return UserAxios.userSignIn({ ...ruleForm }).then((res) => {
		console.log("user", res.data.token);
		return res.data.token;
	});
}
function getUserInfor(token) {
	return UserAxios.getUserInfor(token).then((res) => {
		console.log("getUserInfor", res);
		return res.data;
	});
}

function resetForm(formEl) {
	if (!formEl) return;
	formEl.resetFields();
}
</script>

<style lang="scss" scoped></style>
