<template>
  <div id="app" >
    <el-header >
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
      </el-menu-item >
    </el-menu>
    </el-header>
    
    <el-Main @v-scroll="handleScroll">
      <router-view />
    </el-Main>
    
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
      tabItems: this.$store.state.tabItems,
      activeIndex: this.$store.state.activeIndex
    };
  },
  methods: {
    handleSelect(key) {
      const idx = Number(key) - 1;
      const d = this.tabItems[idx];
      this.fetchPage(d.CategoryID, d);
    },
    fetchPage(cateID, item) {
      this.$store.commit("setcmd", item.Cmd);
      this.$router.push(item.Router);
    },
    handleScroll(e) {
      console.log(e);
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    const idx = Number(this.activeIndex) - 1;
    const d = this.tabItems[idx];
    this.fetchPage(d.CategoryID, d);
  }
};
</script>
