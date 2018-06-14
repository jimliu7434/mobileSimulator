import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  data: {
    tabItems: [
      {
        Order: "1",
        CategoryID: "a",
        Cmd: "listtype1",
        Router: "/list",
        Name: "分類一"
      },
      {
        Order: "2",
        CategoryID: "b",
        Cmd: "listtype2",
        Router: "/about",
        Name: "分類二"
      }
    ],
    activeIndex: "1"
  },
  render: h => h(App)
}).$mount("#app");
