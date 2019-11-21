<template>
  <div>
    Foo
    <el-input type="text" id="siteAddress" v-model="test" />
    <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">点我打开</el-button>

    <el-drawer title="我是标题" :visible.sync="drawer" direction="rtl">
      <!-- <el-input type="text" id="siteAddress" v-model="test" /> -->
    </el-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      test: "abc",
      drawer: false
    };
  },
  created() {
    window.location.reload(true)
  }
};
</script>
