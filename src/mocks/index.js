import Mock from 'mockjs'
import Example from "./example"
const localhost = 'http://localhost:14140/api'
Mock.mock(`${localhost}/userSignIn`, "post", Example.userSignIn)
Mock.mock(`${localhost}/getUserInfor`, "get", Example.getUserInfor)

export default Mock;
