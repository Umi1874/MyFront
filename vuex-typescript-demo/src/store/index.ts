import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { boy } from "./module/boy";
import { girl } from "./module/girl";
import { RootState } from "./root-types";
Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    flowerInstock: 10
  },
  mutations: {
    updateFlowerInstock(state, payload) {
      state.flowerInstock = state.flowerInstock + payload;
    }
  },
  actions: {
    sellFlower({ commit, state }) {
      return new Promise((resolve, reject) => {
        if (state.flowerInstock > 0) {
          commit("updateFlowerInstock", -1);
          resolve();
        } else {
          reject();
        }
      });
    }
  },
  modules: {
    boy,
    girl
  }
};
