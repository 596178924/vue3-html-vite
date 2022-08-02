const Regexp = {
    password: /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*()_.]+)$)^[\w~!@#$%^&*()_.]{8,16}$/
}

const toTest = {
    // "密码应为字母，数字，特殊符号(~!@#$%^&*()_.)，两种及以上组合，8-16位字符串，如：xyl37@baa"
    password: (str) => new RegExp(Regexp['password']).test(str),
}

export default toTest
