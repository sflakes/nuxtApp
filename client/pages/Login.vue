<template>
  <div
    class="container d-flex justify-content-center align-items-center col-md-12 mt-4">
    <b-card style="width: 30rem;">
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
            @click.prevent="submit"
          >
            Sign in
          </button>
          <h5 class="my-4">Or login with</h5>
          <b-button disabled 
            class="w-100 btn btn-lg my-4 btn-bg-primary"
            type="submit"
            @click.prevent="submit"
          >
            Google
          </b-button>
          <b-button disabled
            class="w-100 btn btn-lg my-4 btn-bg-primary"
            type="submit"
            @click.prevent="submit"
          >
            Github
          </b-button>
          <b-button disabled
            class="w-100 btn btn-lg my-4 btn-bg-primary"
            type="submit"
            @click.prevent="submit"
          >
            Facebook
          </b-button>
          
        </form>
      </main>
    </b-card>
  </div>
</template>

<script>
// import {ValidationObserver, ValidationProvider} from 'vee-validate';


export default {
  // components: {
  //   ValidationObserver,
  //   ValidationProvider
  // },

  data() {
    return {
      email: "",
      password: "",
      // errors: [],
      
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
      }).then((response)=> {
          // console.log(response.statusText)
          if (response.ok) {
            console.log("User founded")
            this.$router.push('/admin')
          }else{
            console.log("user not found")
            this.$router.push('/register')
          }
      }).catch((error)=>{
        console.log(error)
      })
     // await this.$router.push('/admin');
    }
    












  // const content = await response.json();
      // console.log(content);
    // checkForm(e) {
    //   if (this.email && this.password) {
    //     return true;
    //   }

    //   this.errors = [];

    //   if (!this.email) {
    //     console.log("Email required.");
    //   }
    //   if (!this.password) {
    //     console.log("Password required.");
    //   }

    //   e.preventDefault();
    // },

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