
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 my-5">
        <div
          class="newsfeed card p-4 mb-3">
          <h4>{{ Post.title }}</h4>
          <p>{{ Post.des }}</p>
          <div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'

const url = 'http://localhost:8080/details/'


export default {
    data() {
        return {
            Post: [],
        }
    },

    async mounted() {
        const result = await axios.get(url+ this.$route.params.id)
        this.Post = result.data;
    },
}
</script>

<style>

</style>