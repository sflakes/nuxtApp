<template>
  <div class="container">
    <div class="row">
      <div class="col-md-8 my-5">
        <div
          class="newsfeed card p-4 mb-3 shadow bg-white rounded"
          v-for="blogPost in Blogs"
          :key="blogPost._id"
        >
          <h4>{{ blogPost.title }}</h4>
          <p>{{ blogPost.des.substring(0, 200) }}</p>
          <p>Published on : {{ getCostumizedDate(blogPost.date) }}</p>
          <div>
            <nuxt-link :to="/newsfeed/ + blogPost._id">
              <button type="button" class="btn btn-success">
                Read More
              </button></nuxt-link
            >
          </div>
        </div>
      </div>
      <div class="col-md-4 my-5 px-4 mb-3">
        <div class="main_latest_post card p-4">
          <div class="card text-center bg-primary text-white p-2 shadow rounded ">
            <h5 class="m-0">Latest Post</h5>
          </div>
          <div
            class="latest_post card my-3 p-2 shadow bg-white rounded"
            v-for="latestpost in latestPost"
            :key="latestpost._id"
          >
            <h6>{{ latestpost.title }}</h6>
            <p>{{ latestpost.des.substring(0, 50) }}</p>
            <p>Published on: {{ getLatestPostDate(latestpost.date)}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import {mapActions, mapState, mapMutations} from 'vuex'

// const url = "http://localhost:8080/get";
// const latestposturl = "http://localhost:8080/latestpost";

export default {
  data() {
    return {
      // Blog: [],
      latestPost: [],
    };
  },

  computed: {
    ...mapState({
      Blogs: (state) => state.Blog
    }),
  },

  methods: {
      ...mapActions(['getAllBlogData']),
      ...mapMutations(['SET_BLOG_DATA']),
      getCostumizedDate: (date) => {
          return moment(date).startOf('day').fromNow();
      },
      getLatestPostDate: (date) => {
          return moment(date).format('dddd');
      }
  },

  async mounted() {
    this.getAllBlogData()
    //to get all post
    // await axios
    //   .get(url)
    //   .then((res) => {
    //     this.Blog = res.data;
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // //to get latest post
    // await axios
    //   .get(latestposturl)
    //   .then((reslatespost) => {
    //     this.latestPost = reslatespost.data;
    //     // console.log("reslatestpost");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
};
</script>

<style>
</style>