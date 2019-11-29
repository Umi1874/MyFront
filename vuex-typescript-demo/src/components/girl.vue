<template>
  <div>
    <div>女孩</div>
    <div>手上有{{currentFlower}}朵花</div>
    <div>
      <el-button @click="encourage()">鼓励</el-button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("girl", {
      currentFlower: state => state.currentFlower
    })
  },
  methods: {
    ...mapActions("girl", ["encourage"])
  }
};
</script>