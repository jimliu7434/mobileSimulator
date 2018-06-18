<template>
  <div> 
    <el-row>
      <el-col :span="2">
        <div class="news-viewcount grid-content bg-purple"  style="text-align: center;height: 60px">
          {{ vc }}
        </div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"  style="text-align: center;">
          <a href="https://placeholder.com"><img src="http://via.placeholder.com/60x60"></a>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          <el-row>
            <el-col :span="24"><div class="news-title grid-content bg-purple" style="text-align: left;">{{ title }}</div></el-col>            
          </el-row>
          <el-row>
            <el-col :span="24"><div class="news-desc grid-content bg-purple" style="text-align: left;">{{ description }}</div></el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6"><div class="news-date grid-content bg-purple" style="text-align: center;">{{ showDate }}</div></el-col>
    </el-row>
      
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    vc: Number,
    title: String,
    showDate: String,
    description: String
  }
};
</script>

<style>
.news-title {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 1.5em;
}

.news-desc {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 1em;
}

.news-date {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 1.3em;
}

.news-viewcount {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 2em;
}
</style>
