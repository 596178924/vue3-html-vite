
import { defineStore } from "pinia"
// import { useRouteTabStore } from "./routeTab"
function _formatSubRoute(_route) {
	return {
		path: _route.path,
		name: _route.name,
		meta: _route.meta,
	}
}

export const useRoutesStore = defineStore('routes', {
    state: () => ({
        _routes: [],
    }),
    getters: {
        allRoutes: ({ _routes }) => _routes,
        subRoutes: ({ _routes }) => _routes.map(item => _formatSubRoute(item)),
        // currentSubChildren: ({ _routes }) => _routes.children
    },
    actions: {
        clearRoutes() {
            this._routes = []
        },
        startRoutes(_routes) {
            if (this._routes.length <= 0 && _routes.length > 0) {
                this._routes = _routes
                // const { startRouteTab } = useRouteTabStore()
                // startRouteTab(_routes)
            }
        }
    },
})
