<template>
	<el-scrollbar>
		<router-view v-slot="{ Component, route }">
			<template v-if="Component">
				<transition
					mode="out-in"
					:name="route.meta.transition || 'el-fade-in-linear'"
				>
					<!-- <keep-alive>
				</keep-alive> -->
					<Suspense :timeout="0">
						<component
							:is="Component"
							:key="route.name"
						></component>
						<template #fallback>
							<div>Loading...</div>
						</template>
					</Suspense>
				</transition>
			</template>
		</router-view>
	</el-scrollbar>
</template>

<script setup></script>
<style lang="scss" scoped></style>
