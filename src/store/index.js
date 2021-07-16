import Vue from "vue";
import Vuex from "vuex";

// Import custom mods
import user from "./modules/user";
import app from "./modules/app";
import projects from "./modules/projects";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    user,
    projects,
  },
});
