<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light text-dark">
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
            <nuxt-link to="/newsfeed" class="nav-link"
              >News Feed</nuxt-link
            >
            <nuxt-link to="/allpost" class="nav-link"
              >All Post</nuxt-link
            >
            <nuxt-link to="/Postdata" class="nav-link">Post Data</nuxt-link>
          </div>
        </div>
      </div>
      <!-- Modal login -->
      <div class="d-flex">
       <nuxt-link to="/login" class="mr-4 text-decoration-none text-dark  font-weight-bold">
          Login</nuxt-link>
          <nuxt-link to="/register" class="mr-2 text-decoration-none text-dark  font-weight-bold">Register</nuxt-link>
        <!-- <b-modal id="modal-center" centered>
        </b-modal> -->
      </div>
      <!-- End of Modal Login -->
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
};
</script>

<style>
</style>