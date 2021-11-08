<template>
  <div class="container min-vh-100 d-flex justify-content-center align-items-center col-md-4">
    <main class="form-signin col-md-12">
      <form>
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating my-4">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            v-model="email"
          />
          <!-- <label for="floatingInput">Email address</label> -->
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control mb-3"
            id="floatingPassword"
            placeholder="Password"
            v-model="password"
          />
          <!-- <label for="floatingPassword">Password</label> -->
        </div>

        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit" @click.prevent="submit">
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
            email: '',
            password:  ''
        }
    },
    methods: {
        async submit(){
            await fetch("http://localhost:8080/login", {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
                body: JSON.stringify({
                    email: this.email,
                    password: this.password
                })
            });
            await this.$router.push('/admin');
        }

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