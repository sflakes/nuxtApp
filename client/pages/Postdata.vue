<template>
  <div class="container card mt-5">
    <form>
      <h3 class="card-title mt-2">Create Post</h3>
      <div class="form-group">
        <label for="exampleFormControlInput1">Title :</label>
        <input
          v-model="Blogpost.title"
          type="string"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Please write post title"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Author :</label>
        <input
          v-model="Blogpost.author"
          type="string"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Please write post title"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Description :</label>
        <textarea
          v-model="Blogpost.des"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="20"
        ></textarea>
      </div>
      <button
        type="button"
        class="btn btn-outline-success mb-2 btn-lg btn-block"
        @click.prevent="addPost"
      >
        Submit
      </button>
    </form>

    
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Blogpost: {
        title: " ",
        des: " ",
        author: " ",
      },
    };
  },

  methods: {
    async addPost() {
      await axios
        .post("http://localhost:8080/post", this.Blogpost)
        .then(res=>{
          console.log(res);
        })
        .catch(err=>{
          console.log(err);
        });
    }
  },
};
</script>

<style>

</style>