<template>
  <div>
    <div>
      <div class="section text-center text-white" style="margin-top: 10rem">
        <h1>ZAPDOZ is a place to write, read, and connect</h1>
        <p>
          It's easy and free to post your thinking on any topic and connect each
          other.
        </p>
      </div>
    </div>
    <Section />
  </div>
</template>

<script>
import Section from "../components/Section.vue";

export default {
  components: {
    Section,
  },
};
</script>

<style>
/* .container {
  margin-top: 35rem;
} */

section {
  background-color: aqua;
  display: grid;
  grid-template-columns: auto auto;
  margin: auto;
  width: 70%;
  height: 100rem;
}
section .div1,
.div4 {
  width: 500px;
  height: 400px;
  background-color: rgb(28, 28, 187);
}

section .div2,
.div3 {
  width: 500px;
  height: 400px;
  background-color: rgb(56, 212, 119);
}
</style>