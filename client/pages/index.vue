<template>
  <div>
    <div class="backgroundImage">
      <div class="section text-center">
        <h1>ZAPDOZ is a place to write, read, and connect</h1>
        <p>
          It's easy and free to post your thinking on any topic and connect each
          other.
        </p>
      </div>
    </div>
    <section>
      <div class="div1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolores?</div>
      <div class="div2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolores?</div>
      <div class="div3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolores?</div>
      <div class="div4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolores?</div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
.backgroundImage {
  height: 40rem;
  width: 100;
  background-image: url("../assets/city2.jpg");
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
}

section {
  background-color: aqua;
  display: grid;
  grid-template-columns: auto auto;
  margin: auto;
  width: 70%;
  height: 100rem;
}
section .div1, .div4 {
  width: 500px;
  height: 400px;
  background-color: rgb(28, 28, 187);
}

section .div2, .div3 {
   width: 500px;
  height: 400px;
  background-color: rgb(56, 212, 119);
}
</style>