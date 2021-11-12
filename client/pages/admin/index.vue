<template>
  <div>
      <h1>{{message}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ""
    }
  },
  async mounted() {
    try {
    const response = await fetch('http://localhost:8080/user', {
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
    })

    const  content = await response.json();
    
    this.message = 'Welcome ' + content.name
    this.$nuxt.$emit('auth', true);  
    } catch (error) {
      this.message = 'You dont have access';
      this.$nuxt.$emit('auth', true);
    }
    
  },
}
</script>

<style>

</style>