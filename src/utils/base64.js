import { isString } from "./validate"
/**
 * @description: 将转换字符串为base64
 * @param {String} str 需要校验的字符串
 * @return {String} 转换后的值
 */
export function encodeSTR(str) {
    // 对字符串进行编码
    const encode = encodeURI(str);
    // 对编码的字符串转化base64
    const base64 = window.btoa(encode);
    return base64;
}
/**
 * @description: 将转换base64为字符串
 * @param {String} base64 需要校验的字符串
 * @return {String} 转换后的值
 */
export function decodeBase64(base64) {
    // 对base64转编码
    const decode = window.atob(base64);
    // 编码转字符串
    const str = decodeURI(decode);
    return str;
}
/**
 * @description: 校验是否为base64字符串
 * @param {String} str 需要校验的字符串
 * @return {Boolean} 验证布尔值
 */
export function isBase64(str) {
    if (!isString(str)) {
        return false
    }
    if (str === "" || str.trim() === "") {
        return false;
    }
    try {
        return window.btoa(window.atob(str)) == str;
    } catch (err) {
        return false;
    }
}
