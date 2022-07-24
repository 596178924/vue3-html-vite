import { defineStore } from 'pinia';
import config from "@/config"
const maxKeepAmount = config.maxKeepAliveRouteAmount || '10'
export const useRouteTabStore = defineStore('routeTab', {
    state: () => ({
        _routeTabs: [],
    }),
    getters: {
        routeTabs: ({ _routeTabs }) => _routeTabs,
        keepAliveRoutes: ({ _routeTabs }) => _routeTabs.map(route => route.path)
        // .fliter(item => (!item.hidden || !item.meta.hidden))
    },
    actions: {
        startRouteTab(_routes, _currentPath) {
            this.removeAllRouteTabs()
            console.log('初始化routeTab');
            const __routes = startRouteReduce(_routes)
            const currentTab = __routes.find(item => item.meta && item.meta.noClosable)

            const findNoClosable = __routes.find(item => item.meta && item.meta.noClosable)
            this.addRouteTab(findNoClosable)
            console.log('初始化routeTab', this._routeTabs);
        },
        addRouteTab(_route) {
            if (this._routeTabs.find(route => route.path == _route.path)) {
                console.log('已有了');
            } else if (this._routeTabs.length >= maxKeepAmount) {
                this._routeTabs = ifAddTimeIsMax(this._routeTabs, _route)
            } else if (_route.meta.noClosable) {
                this._routeTabs.unshift(_route)
            } else {
                this._routeTabs.push(_route)
            }
        },
        removeRouteTab(_route_path) {
            this._routeTabs = this._routeTabs.filter(route => route.meta.noClosable ? true : route.path != _route_path)
        },
        removeAllRouteTabs() {
            if (this._routeTabs.length > 0) {
                const keeps = this._routeTabs.filter(_route =>
                    !_route.meta.noClosable
                )
                if (keeps.length <= 0) {
                    this._routeTabs = [this._routeTabs[0]]
                } else {
                    this._routeTabs = keeps
                }
            }
        }
    },
});

// 初始化时 扁平化路由
function startRouteReduce(_routes) {
    return _routes.reduce((pre, current) => {
        return pre.concat(current.children && Array.isArray(current.children) ? startRouteReduce(current.children) : current)
    }, [])
}

// 添加时超出长度
function ifAddTimeIsMax(_routeTabs, _route) {
    const keeps = _routeTabs.filter(route =>
        !route.meta.noClosable
    )
    const isNoClosable = _routeTabs.find(route =>
        route.meta.noClosable
    )
    keeps.shift()
    keeps.push(_route)
    keeps.unshift(isNoClosable)
    console.log("ifAddTimeIsMax:return:", keeps);
    return keeps
}
