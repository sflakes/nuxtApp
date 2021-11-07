<template>
  <div
    class="
      container
      min-vh-100
      d-flex
      justify-content-center
      align-items-center
      col-md-4
    "
  >
    <main class="form-signin col-md-12">
      <form @submit.prevent="submit">
        <h1 class="h3 mb-3 fw-normal">Please register</h1>
        <div class="form-floating">
          <input
            type="name"
            class="form-control mb-3"
            id="floatingPassword"
            placeholder="Name"
            v-model="name"
          />
          <!-- <label for="floatingPassword">Password</label> -->
        </div>
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
        <button class="w-100 btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </form>
    </main>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email:  '',
            password: ''
        }
    },
    methods: {
        async submit(){
            await fetch('http://localhost:8080/register', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: this.name,
                    email: this.email,
                    password: this.password
                })
            });
            await this.$router.push('/login');
        }   
        
    },
};
</script>

<style>
</style>