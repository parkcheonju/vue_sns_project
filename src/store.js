import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "kim",
      age: 37,
    };
  },
  mutations: {
    changeName(state) {
      state.name = "park";
    },
    numplus(state){
      state.age++
    }
  },
});

export default store;
