<template>
  <div class="container card px-5 py-3 my-5">
    <div class="row mb-3">
      <div class="col-md-10">
        <h2>All Stories</h2>
      </div>
      <div class="col-md-2">
        <button type="button" class="btn btn-success">Check All</button>
      </div>
    </div>
    <div class="row" v-for="datapost in post" :key="datapost._id">
      <!-- <h1>{{datapost.des}}</h1> -->
      <div class="col-md-10 mb-5 p-3 shadow bg-white rounded">
        <div>
          <h3>{{ datapost.title }}</h3>
          <p>{{ datapost.des }}</p>
        </div>
      </div>
      <div class="col-md-2 mb-3 p-3">
        <div>
          <nuxt-link :to="/allpost/ + datapost._id">    <!-- dynamic route -->
            <button type="button" class="btn btn-primary">Edit</button>
          </nuxt-link>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteData(datapost._id)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      post: [],
    };
  },

  mounted() {
    this.getAllData();
  },

  methods: {
    async getAllData() {
      await axios
        .get("http://localhost:8080/get")
        .then((Response) => {
          this.post = Response.data;
          console.log(Response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async deleteData(id) {
      await axios
        .delete("http://localhost:8080/delete/" + id)
        .then((res) => {
          this.getAllData();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>