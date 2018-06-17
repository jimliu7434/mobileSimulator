<template>
  <el-table
    :data="mlist"
    stripe
    :show-header="false" 
    style="width: 100%" 
    empty-text="No Data"
    v-loading="this.$store.state.loading"
    >
    <el-table-column label="abc">
      <template slot-scope="scope">
        <list-item 
          :vc="scope.row.vc"
          :title="scope.row.title" 
          :showDate="scope.row.showDate" 
          :description="scope.row.description">
        </list-item>
      </template>
    </el-table-column>
  </el-table>
</template>

<style>
body {
  margin: 0;
}
</style>

<script>
import ListItem from "../components/ListItem.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: mapState({
    mlist: "list"
  }),
  methods: {
    handleScroll(e, position) {
      console.log(e, position);
    }
  },
  components: {
    "list-item": ListItem
  }
};
</script>
