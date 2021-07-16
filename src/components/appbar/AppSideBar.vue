<template>
  <v-navigation-drawer
    v-model="drawer"
    app
  >
    <!--  -->
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "AppSideBar",
  props: {
    show: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  data: function () {
    return {
      drawer: true,
    };
  },
  created: function () {
    console.log("Je passe ici");
    this.drawer = this.show;
  },
};
</script>
