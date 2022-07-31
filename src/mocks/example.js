import Mock from "mockjs";

export default {
    getUsers: () => {
        return Mock.mock({
            status: "200",
            msg: "请求成功",
            "data|3": [
                {
                    name: "@cname", // Mock.Random.cname(),
                    age: "@integer(20,50)",
                },
            ],
        });
    },
    getUserInfor: () => Mock.mock({
        status: 200,
        message: 'success',
        'data|3': {
            name: '海星吧',
            age: '@integer(18,50)'
        },
    })
};
