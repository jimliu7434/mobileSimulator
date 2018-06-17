import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";

Vue.use(ElementUI);
Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    cmd: "GetAllNewsList",
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
    }
  },
  mutations: {
    setcmd(state, cmd) {
      state.cmd = cmd;
      console.log(state.cmd);

      let l;
      if (state.cmd === "GetAllNewsList") {
        l = [
          {
            vc: 5,
            showDate: "2016-05-03",
            title: "Tom",
            description: "No. 189, Grove St, Los Angeles"
          },
          {
            vc: 5,
            showDate: "2016-05-02",
            title: "Tom",
            description: "No. 189, Grove St, Los Angeles"
          },
          {
            vc: 5,
            showDate: "2016-05-04",
            title: "Tom",
            description: "No. 189, Grove St, Los Angeles"
          },
          {
            vc: 5,
            showDate: "2016-05-01",
            title: "Tom",
            description: "No. 189, Grove St, Los Angeles"
          },
          {
            vc: 5,
            showDate: "2016-05-04",
            title: "Tom",
            description: "No. 189, Grove St, Los Angeles"
          },
          {
            vc: 5,
            showDate: "2016-05-01",
            title: "Tom",
            description: "No. 189, Grove St, Los Angeles"
          },
          {
            vc: 5,
            showDate: "2016-05-04",
            title: "Tom",
            description: "No. 189, Grove St, Los Angeles"
          },
          {
            vc: 5,
            showDate: "2016-05-01",
            title: "Tom",
            description: "No. 189, Grove St, Los Angeles"
          },
          {
            vc: 5,
            showDate: "2016-05-04",
            title: "Tom",
            description: "No. 189, Grove St, Los Angeles"
          },
          {
            vc: 5,
            showDate: "2016-05-01",
            title: "Tom",
            description: "No. 189, Grove St, Los Angeles"
          },
          {
            vc: 5,
            showDate: "2016-05-04",
            title: "Tom",
            description: "No. 189, Grove St, Los Angeles"
          },
          {
            vc: 5,
            showDate: "2016-05-01",
            title: "Tom",
            description: "No. 189, Grove St, Los Angeles"
          },
          {
            vc: 5,
            showDate: "2016-05-04",
            title: "Tom",
            description: "No. 189, Grove St, Los Angeles"
          },
          {
            vc: 5,
            showDate: "2016-05-01",
            title: "Tom",
            description: "No. 189, Grove St, Los Angeles"
          },
          {
            vc: 5,
            showDate: "2016-05-04",
            title: "Tom",
            description: "No. 189, Grove St, Los Angeles"
          },
          {
            vc: 5,
            showDate: "2016-05-01",
            title: "Tom",
            description: "No. 189, Grove St, Los Angeles"
          },
          {
            vc: 5,
            showDate: "2016-05-04",
            title: "Tom",
            description: "No. 189, Grove St, Los Angeles"
          },
          {
            vc: 5,
            showDate: "2016-05-01",
            title: "Tom",
            description: "No. 189, Grove St, Los Angeles"
          },
          {
            vc: 5,
            showDate: "2016-05-04",
            title: "Tom",
            description: "No. 189, Grove St, Los Angeles"
          },
          {
            vc: 5,
            showDate: "2016-05-01",
            title: "Tom",
            description: "No. 189, Grove St, Los Angeles"
          },
          {
            vc: 5,
            showDate: "2016-05-04",
            title: "Tom",
            description: "No. 189, Grove St, Los Angeles"
          },
          {
            vc: 5,
            showDate: "2016-05-01",
            title: "Tom",
            description: "No. 189, Grove St, Los Angeles"
          }
        ];
      } else {
        l = [
          {
            vc: 5,
            showDate: "2016-05-03",
            title: "Tom",
            description: "No. 189, Grove St, Los Angeles"
          },
          {
            vc: 5,
            showDate: "2016-05-02",
            title: "Tom",
            description: "No. 189, Grove St, Los Angeles"
          }
        ];
      }
      this.dispatch("setlistAsync", l);
    },
    setlist(state, list) {
      state.list = list;
    },
    setloading(state, loading) {
      state.loading = loading;
    }
  },
  actions: {
    setlistAsync({ commit }, list) {
      commit("setloading", true);
      commit("setlist", []);
      setTimeout(() => {
        console.log("trigger", list);
        commit("setloading", false);
        commit("setlist", list);
      }, 5000);
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
