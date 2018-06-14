<template>
  <div id="app">
    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
      <el-menu-item v-for="item in tabItems" :key="item.CategoryID" :index="item.Order" >
        <!-- <router-link :to="item.Router">{{ item.Name }}</router-link> -->
        {{ item.Name }}
      </el-menu-item>
    </el-menu>

    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
export default {
  data() {
    return {
      tabItems: this.$root.tabItems,
      activeIndex: this.$root.activeIndex,
      selectedTab: this.$root.tabItems[0]
    };
  },
  methods: {
    handleSelect(key) {
      const idx = Number(key) - 1;
      const d = this.tabItems[idx];
      this.fetchPage(d.CategoryID, d);
    },
    fetchPage(cateID, item) {
      //console.log(`ID: ${cateID} - router: ${item.Router} - cmd: ${item.Cmd}]`);
      this.selectedTab = item;
      this.$router.push(item.Router);
    }
  },
  mounted() {
    const idx = Number(this.activeIndex) - 1;
    const d = this.tabItems[idx];
    this.fetchPage(d.CategoryID, d);
  }
};
</script>
