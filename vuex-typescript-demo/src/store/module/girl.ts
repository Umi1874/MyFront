export default {
  namespaced: true,
  state: {
    currentFlower: 0
  },
  mutations: {
    updateCurrentFlower(state, payload) {
      state.currentFlower = state.currentFlower + payload;
    }
  },
  actions: {
    encourage({ dispatch }) {
      dispatch("boy/beEncouraged", null, { root: true });
    }
  }
};
