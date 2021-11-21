<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light text-dark" v-if="!auth">
      <div class="container-fluid">
        <nuxt-link to="/" class="navbar-brand text-white">ZAPDOZ</nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <!-- Modal login -->
      <div class="d-flex">
        <nuxt-link
          to="/allpost"
          class="mr-4 text-decoration-none font-weight-bold text-white"
          >Stories</nuxt-link
        >
        <nuxt-link
          to="/login"
          class="mr-4 text-decoration-none font-weight-bold text-white"
        >
          Login</nuxt-link
        >
        <nuxt-link
          to="/register"
          class="mr-2 text-decoration-none font-weight-bold text-white"
          >Register</nuxt-link
        >
      </div>
    </nav>
    <!-- ------------------------------------------------------------------------------------------------- -->
    <nav class="navbar navbar-expand-lg navbar-light text-dark" v-if="auth">
      <div class="container-fluid">
        <nuxt-link to="/" class="navbar-brand">ZAPDOZ</nuxt-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav text-dark">
            <nuxt-link
              to="/register"
              class="mr-4 text-decoration-none font-weight-bold text-white"
              >Stories</nuxt-link
            >
            <nuxt-link to="/newsfeed" class="nav-link">News Feed</nuxt-link>
            <nuxt-link to="/allpost" class="nav-link">All Post</nuxt-link>
            <nuxt-link to="/Postdata" class="nav-link">Post Data</nuxt-link>
          </div>
        </div>
      </div>
      <!-- Modal login -->
      <div class="d-flex">
        <a
          class="mr-4 text-decoration-none text-dark font-weight-bold"
          @click="logout"
          >Logout</a
        >
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      auth: false,
    };
  },

  mounted() {
    this.$nuxt.$on("auth", (auth) => {
      this.auth = auth;
    });
  },

  methods: {
    async logout() {
      await fetch("http://localhost:8080/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      }).then((result) => {
        this.auth = false; //silly way to set false the auth
      });
      await this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>