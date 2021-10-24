<template>
  <div>
      <h3>{{Post.title}}</h3>
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