import Mock from 'mockjs'
import Example from "./example"
Mock.mock(`http://localhost:14140/api/getUserInfor`, "get", Example.getUserInfor)
export default Mock;
