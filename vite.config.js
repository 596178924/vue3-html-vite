import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import legacy from '@vitejs/plugin-legacy'
// import viteCompression from "vite-plugin-compression"
import ElementPlus from 'unplugin-element-plus/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import { configCompressPlugin } from './compress';
import path from "path"
// https://vitejs.dev/config/
import config from "./src/config"


const allPlugins = [
	vue(),
	ElementPlus({
		useSource: true,
	}),
	Components({
		resolvers: [ElementPlusResolver()]
	}),
	legacy({
		targets: ['defaults', 'not IE 11']
	})
];

// build 压缩 .gz
// const modeIsDev = import.meta.MODE === "development"
// if (!modeIsDev) {
// 	allPlugins.push(viteCompression())
// }

export default defineConfig({
	baseUrl: "/",
	plugins: [
		...allPlugins,
	],
	resolve: {
		// 如果报错__dirname找不到，需要安装node,
		// 执行npm i @types/node --save-dev
		alias: {
			'~': path.resolve(__dirname, "./"),
			'@': path.resolve(__dirname, "./src"),
			'@Base': path.resolve(__dirname, "./src/BaseComponents"),
			'@LC': path.resolve(__dirname, "./src/layout/components"),
			'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
		},
		extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
	},
	server: {
		host: '0.0.0.0',
		hmr: true,
		port: config.serverPort,// 端口号
		// open: false,// 自动在浏览器打开
		// https: false,// 是否开启 https
		proxy: {
			'/api': `http://localhost:${config.serverPort}`
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				/* .scss全局预定义变量，引入多个文件 以;(分号分割)*/
				// @import "@/styles/global.scss";
				// @import "@/styles/theme/index.scss";
				// additionalData: `
				// 	@use "@/styles/element.scss" as *;
				// `,
			},
		},
	},
	build: {
		minify: 'terser',
		//指定输出路径
		assetsDir: "./",
		// 指定输出文件路径
		outDir: "hxb-admin-vite-dist",
		// 进行压缩计算
		brotliSize: false,
		sourcemap: false,
		// 代码压缩配置
		terserOptions: {
			// 生产环境移除console
			compress: {
				drop_console: true,
				drop_debugger: true,
			},
			keep_classnames: true,
		},
	},
});
