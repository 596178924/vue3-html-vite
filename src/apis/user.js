import request from "@/utils/request"
const Api = {}
export default Api

Api.userSignIn = ({ username, password }) =>
    request({
        url: '/api/userSignIn',
        method: 'post',
        data: {
            username,
            password,
        }
    })

Api.getUserInfor = (token) =>
    request({
        url: '/api/getUserInfor',
        method: 'get',
        data: {
            token
        }
    })
