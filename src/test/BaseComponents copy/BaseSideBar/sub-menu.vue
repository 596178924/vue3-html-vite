<template>
	<div class="sub-menu" :class="bindClass">
		<el-scrollbar height="100%" class="sub-menu__scrollbar">
			<ul class="sub-menu__routes">
				<li
					v-for="subRouteItem in routes"
					:key="subRouteItem.name"
					class="sub-menu-item"
					:class="{
						'is-active':
							subRouteItem.path == currentRouteSubPath &&
							subRouteItem.path == currentOpenSubPath,
						'is-actived':
							subRouteItem.path == currentRouteSubPath &&
							subRouteItem.path != currentOpenSubPath,
						'is-open': subRouteItem.path == currentOpenSubPath,
					}"
					:route="subRouteItem"
					@click="checkSubMenuItem(subRouteItem)"
				>
					<i
						class="sub-menu-icon"
						:class="[
							subRouteItem.meta && subRouteItem.meta.icon
								? subRouteItem.meta.icon
								: '',
						]"
					></i>
					<p class="menu-item-title">
						{{
							subRouteItem.meta && subRouteItem.meta.title
								? subRouteItem.meta.title
								: subRouteItem.name
								? subRouteItem.name
								: ""
						}}
					</p>
				</li>
			</ul>
		</el-scrollbar>
		<slot :currentRoutes="currentRoutes"></slot>
	</div>
</template>

<script setup>
import { ref, computed } from "vue-demi";

const props = defineProps({
	routeMatched: {
		type: Array,
		required: true,
	},
	collapse: {
		type: Boolean,
		required: true,
	},
	subHandler: {
		type: Boolean,
		required: false,
	},
	routes: {
		type: Array,
		required: true,
	},
});
const bindClass = computed(() => ({
	"is-sub": props.subHandler,
	"is-collapse": props.collapse,
}));

const currentRouteSubPath = computed(() => getCurrentSubPath());
const currentActiveSubPath = ref(getCurrentSubPath());
const currentOpenSubPath = ref(getCurrentSubPath());
function getCurrentSubPath() {
	const _matched = props.routeMatched;
	return _matched.length > 0 ? _matched[0].path : "";
}
const currentRoutes = computed(() =>
	props.subHandler ? getCurrentRouteChildren() : props.routes
);
function checkSubMenuItem(item) {
	currentOpenSubPath.value = item.path;
	currentActiveSubPath.value = item.path;
	console.log(currentRoutes.value);
}
function getCurrentRouteChildren() {
	const _currentRoute = props.routes.find(
		(item) => item.path == currentActiveSubPath.value
	);
	return _currentRoute.children && _currentRoute.children.length > 0
		? _currentRoute.children
		: [_currentRoute];
}
</script>
<style lang="scss" scoped>
.sub-menu.is-sub {
	@apply flex;
}
.sub-menu:not(.is-sub) .sub-menu__scrollbar {
	@apply hidden;
}
.sub-menu__scrollbar {
	@apply shadow-inner bg-gray-700;
}

.sub-menu__routes {
	@apply list-none;
}
.sub-menu-item {
	@apply text-center cursor-pointer py-1 px-3 text-white;
	&.hover,
	&.is-open {
		@apply bg-blue-200;
	}
	&.is-actived {
		@apply bg-blue-400;
	}
	&.is-active {
		@apply bg-blue-600;
	}
}
.sub-menu-icon {
	@apply text-2xl;
}
</style>
