<template>
	<div class="view">
		<p>homepage</p>
		<p class="media-perfers-color-scheme">tailwind css dark or light</p>
		<el-input v-model="data"></el-input>

		<el-tabs class="hxb-tabs">
			<el-tab-pane
				v-for="route in allRoutes"
				:key="route.path"
				:closable="false"
				:name="route.path"
			>
				<template #label>
					<el-menu
						:collapse="false"
						mode="horizontal"

					>
						<el-menu-item index="/">1</el-menu-item>
						<el-sub-menu :index="route.path">
							<el-menu-item
								v-for="item in route.children"
								:key="item"
								:index="item.path"
							>
							</el-menu-item>
						</el-sub-menu>
					</el-menu>
				</template>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script setup>
import { ref } from "vue-demi";
const data = ref("");


const allRoutes = ref([
	{
		path: "/",
		meta: {
			title: "首页",
		},
		children: [
			{
				path: "/",
				meta: {
					title: "首页1",
				},
			},
		],
	},
]);
</script>

<style lang="scss" scoped>
.media-perfers-color-scheme {
	@apply dark:text-yellow-400 text-blue-400;
}
</style>
