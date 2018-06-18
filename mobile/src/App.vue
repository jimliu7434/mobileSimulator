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
      <el-button type="warning" icon="el-icon-search" style="position:fixed;top:80%;right:20px;" circle @click="dialogFormVisible = true"></el-button>
      <el-dialog title="電文測試" :visible.sync="dialogFormVisible">
        <el-form :model="form" :inline="true" label-position="right">
          <el-form-item label="http://localhost:8080/public/" label-width="200px">
            <el-select v-model="form.region" placeholder="Please select a command">
              <el-option label="Zone No.1" value="shanghai"></el-option>
              <el-option label="Zone No.2" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-form :model="form" label-position="left">
          <el-form-item label="Properties" label-width="100px">
            <el-checkbox-group v-model="form.checkList">
              <el-checkbox label="Option A"></el-checkbox>
              <el-checkbox label="Option B"></el-checkbox>
              <el-checkbox label="Option C" disabled checked></el-checkbox>
              <el-checkbox label="disabled" disabled></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="Body" label-width="100px">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
        </span>
      </el-dialog>
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
      activeIndex: this.$store.state.activeIndex,
      dialogFormVisible: false,
      form: {
        region: "",
        checkList: [],
        desc: ""
      },
      formLabelWidth: "120px"
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
    handleScroll(event) {
      const element = event.target.scrollingElement;
      const totalHeight = element.scrollHeight;
      const winHeight = element.clientHeight;
      const offset = element.scrollTop;
      const diff = 100;
      //console.log(event);
      console.log(`${offset}/${totalHeight}`);
      if (offset + winHeight >= totalHeight - diff) {
        if (this.$store.state.isSending === false) {
          console.log("request sent to server");
          this.$store.commit("setsending", true);
        }
      }
    },
    onBtnClick(event) {
      //TODO: show a panel
      console.log(event);
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
