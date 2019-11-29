<template>
  <div>
    <div>男孩</div>
    <div>手上有{{currentFlower}}朵花</div>
    <div>
      <el-button @click="sendFlower({sendNumber:1})">送花</el-button>
      <el-button @click="buyFlower({buyNumber:1})">买花</el-button>
    </div>
    <div>勇气值:{{braveScore}}</div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("boy", {
      currentFlower: state => state.currentFlower,
      braveScore: state => state.braveScore
    })
  },
  methods: {
    ...mapActions("boy", ["sendFlower", "buyFlower"])
  }
};
</script>