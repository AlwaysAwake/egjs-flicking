import { VueConstructor, PluginObject } from "vue";
import Flicking from "./Flicking";

declare global {
  interface Window {
    Vue: VueConstructor;
  }
}

const version = "#__VERSION__#";

const install = (Vue: VueConstructor): void => {
  Vue.component(Flicking.name, Flicking);
};

const plugin: PluginObject<VueConstructor> = {
  Flicking,
  install,
  version,
};
export default plugin;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(plugin);
}