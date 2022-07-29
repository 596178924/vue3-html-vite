<template>
	<el-dropdown
		max-height="500px"
		@command="commandDropdown"
		@visible-change="handlerIconKeep"
	>
		<ListSettings :keepAlive="iconKeepAlive"></ListSettings>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item command="removeOtherRouteTabs">
					关闭其他
				</el-dropdown-item>
				<el-dropdown-item command="removeAllRouteTabs">
					关闭全部
				</el-dropdown-item>
				<el-dropdown-item command="removeRightRouteTabs">
					关闭右边
				</el-dropdown-item>
				<el-dropdown-item command="removeLeftRouteTabs">
					关闭左边
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script setup>
import ListSettings from "@/components/AnimationIcons/ListSettings";
import { computed, ref } from "vue-demi";
import { useRouteTabStore } from "@/store/routeTab";
const RouteTabStore = useRouteTabStore();
const {
	removeRightRouteTabs,
	removeLeftRouteTabs,
	removeOtherRouteTabs,
	removeAllRouteTabs,
} = RouteTabStore;

function commandDropdown(command) {
	switch (command) {
		case "removeRightRouteTabs":
			removeRightRouteTabs(currentActiveRoute.value);
			break;
		case "removeLeftRouteTabs":
			removeLeftRouteTabs(currentActiveRoute.value);
			break;
		case "removeOtherRouteTabs":
			removeOtherRouteTabs(currentActiveRoute.value);
			break;
		case "removeAllRouteTabs":
			removeAllRouteTabs();
			Removed();
			break;
	}
}
const iconKeepAlive = ref(false);
function handlerIconKeep(bool) {
	iconKeepAlive.value = bool;
}
</script>
