import config from '@/config'
import cookie from 'js-cookie'
const { storage } = config
export function getStorage(name) {
    if (storage) {
        if ('localStorage' === storage) {
            return localStorage.getItem(name)
        } else if ('sessionStorage' === storage) {
            return sessionStorage.getItem(name)
        } else if ('cookie' === storage) {
            return cookie.get(name)
        } else {
            return localStorage.getItem(name)
        }
    } else {
        return localStorage.getItem(name)
    }
}
export function setStorage(name,value) {
    if (storage) {
        if ('localStorage' === storage) {
            return localStorage.setItem(name, value)
        } else if ('sessionStorage' === storage) {
            return sessionStorage.setItem(name, value)
        } else if ('cookie' === storage) {
            return cookie.set(name, value)
        } else {
            return localStorage.setItem(name, value)
        }
    } else {
        return localStorage.setItem(name, value)
    }
}

export function removeStorage(name) {
    if (storage) {
        if ('localStorage' === storage) {
            return localStorage.removeItem(name)
        } else if ('sessionStorage' === storage) {
            return sessionStorage.clear()
        } else if ('cookie' === storage) {
            return cookie.remove(name)
        } else {
            return localStorage.removeItem(name)
        }
    } else {
        return localStorage.removeItem(name)
    }
}
