<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 my-5">
        <div
          class="newsfeed card p-4 mb-3"
          v-for="blogPost in Blog"
          :key="blogPost._id"
        >
          <h4>{{ blogPost.title }}</h4>
          <p>{{ blogPost.des.substring(0,200) }}</p>
          <div>
            <nuxt-link :to="/newsfeed/ + blogPost._id">
              <button type="button" class="btn btn-success">
                Read More
              </button></nuxt-link
            >
          </div>
        </div>
      </div>
      <div class="col-md-4 my-5 p-4 mb-3">
        <h4>News Feed</h4>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const url = "http://localhost:8080/get";

export default {
  data() {
    return {
      Blog: [],
    };
  },
  async mounted() {
    await axios
      .get(url)
      .then((res) => {
        this.Blog = res.data;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
</style>