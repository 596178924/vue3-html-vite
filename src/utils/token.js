import config from '@/config'
import {
    getStorage,
    setStorage,
    removeStorage,
} from "./applyStorage"
const { tokenTableName } = config
/**
 * @description 获取token
 */
export function getToken() {
    return getStorage(tokenTableName)
}

/**
 * @description 存储token
 * @param token
 */
export function setToken(token) {
    return setStorage(tokenTableName, token)
}

/**
 * @description 移除token
 */
export function removeToken() {
    return removeStorage(tokenTableName)
}
