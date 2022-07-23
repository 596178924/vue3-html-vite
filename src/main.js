import { createApp } from 'vue'
import AppElement from './App.vue'
import pluginInstall from "./plugins";
import 'remixicon/fonts/remixicon.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import "@/styles/index.css"
import "@/styles/index.scss"


(() => {
  const app = createApp(AppElement);
  app.use(pluginInstall);
  app.mount('#app');
  return app;
})()
