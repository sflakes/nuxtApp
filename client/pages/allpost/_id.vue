<template>
  <div class="container card mt-5">
    <form>
      <h3 class="card-title mt-2">Create Post</h3>
      <div class="form-group">
        <label for="exampleFormControlInput1">Title :</label>
        <input
          v-model="Blog.title"
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Please write post title"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Description :</label>
        <textarea
          v-model="Blog.des"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
        ></textarea>
      </div>
      <nuxt-link to="/allpost"
        ><button
          type="button"
          class="btn btn-outline-success mb-2 btn-lg btn-block"
          @click="updatePost"
        >
          Edit Post
        </button>
      </nuxt-link>
    </form>
  </div>
</template>


<script>
import axios from "axios";

const urlGetEditData = "http://localhost:8080/edit/";
const updateUrl = "http://localhost:8080/update/";

export default {
  data() {
    return {
      Blog: {
        title: "",
        des: "",
      },
    };
  },

  methods: {
    async updatePost() {
      await axios
        .put(updateUrl + this.$route.params.id, this.Blog)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  async mounted() {
    const result = await axios.get(urlGetEditData + this.$route.params.id);
    this.Blog = result.data;
  },
};
</script>


<style>
</style>