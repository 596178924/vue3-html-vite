import request from "@/utils/request"
const Api = {}
export default Api

Api.getUserInfor = (param) =>
    request({
        url: '/api/getUserInfor',
        method: 'get',
    })
