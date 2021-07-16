<template>
  <v-main>
    <AppBar />
    <AppSideBar :show="user.isAuth && projects.hasProjects" />
  </v-main>
</template>

<script>
import AppBar from "@/components/appbar/AppBar";
import AppSideBar from "@/components/appbar/AppSideBar";

// Store tools
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    AppBar,
    AppSideBar,
  },
  computed: mapState(["user", "projects"]),
};
</script>
