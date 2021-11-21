<template>
  <div class="backgroundImage">
    <Nav />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Nav,
    Footer,
  },
};
</script>

<style>
.backgroundImage {
  height: 40rem;
  width: 100;
  background: linear-gradient(rgba(0, 0, 0, 0.241), rgba(4, 4, 4, 0.323)),
    url("../assets/NightJakarta.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* opacity: 0.8; */
}
</style>
