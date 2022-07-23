
// 过滤路由
function _formatRoute(_route) {
	const obj = {
		path: _route.path,
		name: _route.name,
		meta: _route.meta,
		children: null,
	};
	if (_route.children && _route.children.length > 0) {
		obj.children = _route.children;
	}
	return obj;
}

export function filterRoutes(_routes) {
	const _filter_routes = _routes.filter(
		(_route) => _route.meta && _route.meta.title
	);
	const _filter = _filter_routes.map((item) => {
		const _item = _formatRoute(item);
		if (_item.children && _item.children.length > 0) {
			_item.children = filterRoutes(_item.children);
		}
		return _item;
	});
	return _filter;
}
