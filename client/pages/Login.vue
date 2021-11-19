<template>
  <div
    class="container d-flex justify-content-center align-items-center col-md-4"
  >
    <main class="form-signin col-md-12">
      <form>
        <h1 class="h3 mb-3 fw-normal">Sign in</h1>

        <div class="form-floating my-4">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            v-model="email"
          />
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control mb-3"
            id="floatingPassword"
            placeholder="Password"
            v-model="password"
          />
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button
          class="w-100 btn btn-lg btn-primary"
          type="submit"
          @click.prevent="submit, checkForm"
        >
          Sign in
        </button>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    async submit() {
      await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      });
      // const content = await response.json();
      // console.log(content);

      // await this.$router.push('/admin');
    },

    checkForm(e) {
      if (this.email && this.password) {
        return true;
      }

      this.errors = [];

      if (!this.email) {
        console.log("Email required.");
      }
      if (!this.password) {
        console.log("Password required.");
      }

      e.preventDefault();
    },

    // async submit(){
    //   await axios
    //   .post('http://localhost:8080/login',{
    //     method: 'POST',
    //     Headers: {'Content-Type': 'application'}
    //   })
    //   .then((result) => {

    //   }).catch((err) => {

    //   });
    // }
  },
};
</script>

<style>
</style>