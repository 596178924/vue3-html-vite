import ElementPlus from "./elementPlus";
import piniaInstall from "./pinia";
import VueI18n from "@/i18n"
import VueRouter from "@/router"
import VueParticles from 'vue-particles'

export default function install(app) {
  app.use(VueRouter)
  app.use(piniaInstall);
  app.use(VueI18n);
  app.use(VueParticles)
  app.use(ElementPlus);
}
