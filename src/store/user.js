import { defineStore } from "pinia"
import { setToken, getToken, removeToken } from "@/utils/token"
const Token = getToken() || ''
export const useUserStore = defineStore('userStore', {
    state: () => ({
        _userinfo: {
            _username: '',
        },
        _token: Token
    }),
    getters: {
        username: ({ _userinfo }) => _userinfo['_username'],
        token: ({ _token }) => _token
    },
    actions: {
        setToken(_token) {
            removeToken()
            this._token = _token;
            setToken(_token)
        },
        setUserinfo(_userinfo) {
            console.log("set-user-info",_userinfo);
            this._userinfo._username = _userinfo.username
        },
        userSignOut() {
            this._token = '';
            removeToken()
        }
    },
})
