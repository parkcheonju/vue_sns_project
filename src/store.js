import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      likes: 0,
      likeclick: false,
    };
  },
  mutations: {
    likeon(state) {
      if (state.likeclick === false) {
        state.likes++;
        state.likeclick = true;
      } else {
        state.likes--;
        state.likeclick = false;
      }
    },
  },
});

export default store;
