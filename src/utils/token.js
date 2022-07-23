import { tokenTableName } from '@/config'
import {
    getStorage,
    setStorage,
    removeStorage,
} from "./applyStorage"
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
    return setStorage(tokenTableName)
}

/**
 * @description 移除token
 */
export function removeToken() {
    return removeStorage(tokenTableName)
}
