import { createApp } from 'vue-demi'
import AppElement from './App.vue'
import pluginInstall from "./plugins";
// import directivesInstall from "./directives"

import 'remixicon/fonts/remixicon.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import "@/styles/index.css"
import "@/styles/index.scss"
import '@/styles/animate.css';
import "@/mocks"
(() => {
  const app = createApp(AppElement);
  // app.use(directivesInstall);
  app.use(pluginInstall);
  app.mount('#app');
  return app;
})()
