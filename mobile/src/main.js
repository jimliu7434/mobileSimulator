import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(ElementUI);
Vue.use(Vuex);
Vue.prototype.$http = Axios;

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    activeIndex: "1",
    loading: false,
    tabItems: [
      {
        Order: "1",
        CategoryID: "a",
        Cmd: "GetAllNewsList",
        Router: "/list",
        Name: "最新新聞"
      },
      {
        Order: "2",
        CategoryID: "b",
        Cmd: "GetStockNewsList",
        Router: "/list",
        Name: "自選新聞"
      }
    ],
    list: []
  },
  getters: {
    cmd: state => {
      return state.cmd;
    },
    list: state => {
      return state.list;
    },
    selected: state => {
      const idx = Number(state.activeIndex);
      return state.tabItems[idx];
    }
  },
  mutations: {
    setcmd(state, cmd) {
      state.cmd = cmd;
      const args = {
        cmd: this.getters.selected.Cmd,
        cateID: this.getters.selected.CategoryID
      };

      this.dispatch("setlistAsync", args);
    },
    setlist(state, list) {
      state.list = list;
    },
    setloading(state, loading) {
      state.loading = loading;
    }
  },
  actions: {
    async setlistAsync({ commit }, args) {
      commit("setlist", []);
      commit("setloading", true);
      let list = [];
      if (args.cmd === "GetAllNewsList") {
        // change to axios
        list.push(
          {
            vc: 10,
            title: "ABCDEFG",
            showDate: "2018-01-01",
            description: "testing"
          },
          {
            vc: 10,
            title: "ABCDEFG",
            showDate: "2018-01-01",
            description: "testing"
          }
        );
      } else if (args.cmd === "GetStockNewsList") {
        // change to axios
        list.push(
          {
            vc: 10,
            title: "ABCDEFG",
            showDate: "2018-01-01",
            description: "testing"
          },
          {
            vc: 10,
            title: "ABCDEFG",
            showDate: "2018-01-01",
            description: "testing"
          },
          {
            vc: 10,
            title: "ABCDEFG",
            showDate: "2018-01-01",
            description: "testing"
          },
          {
            vc: 10,
            title: "ABCDEFG",
            showDate: "2018-01-01",
            description: "testing"
          }
        );
      }
      setTimeout(() => {
        commit("setloading", false);
        commit("setlist", list);
      }, 2000);
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
