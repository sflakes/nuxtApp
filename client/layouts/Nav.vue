<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <div class="container-fluid">
        <nuxt-link to="/" class="navbar-brand text-white">Blog App</nuxt-link>
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
          <div class="navbar-nav">
           <nuxt-link to="/" class="nav-link text-white">Post Data</nuxt-link>
           <nuxt-link to="/newsfeed" class="nav-link text-white">News Feed</nuxt-link>
           <nuxt-link to="/allpost" class="nav-link text-white">All Post</nuxt-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>