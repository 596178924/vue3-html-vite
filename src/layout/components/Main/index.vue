<template>
	<el-scrollbar>
		<router-view v-slot="{ Component, route }">
			<template v-if="Component">
				<transition
					mode="out-in"
					:name="route.meta.transition || transitionDefaultName"
				>
					<!-- <keep-alive :max="maxKeepAliveRouteAmount" include> -->
						<Suspense :timeout="0">
							<component
								:is="Component"
								:key="route.name"
							></component>
							<template #fallback>
								<div>Loading...</div>
							</template>
						</Suspense>
					<!-- </keep-alive> -->
				</transition>
			</template>
		</router-view>
	</el-scrollbar>
</template>

<script setup>
import config from "@/config";
const { maxKeepAliveRouteAmount, transitionType } = config;
const transitionDefaultName = transitionType
	? transitionType
	: "el-fade-in-linear";
</script>
<style lang="scss" scoped></style>
