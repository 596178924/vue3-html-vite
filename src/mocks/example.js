import Mock from "mockjs";

export default {
    userSignIn: () => {
        return Mock.mock({
            status: 200,
            message: 'success',
            'data': {
                'token|5':'@guid',
            },
        })
    },
    getUserInfor: () => Mock.mock({
        status: 200,
        message: 'success',
        'data|3': {
            name: '海星吧',
            age: '24'
        },
    }),
};
