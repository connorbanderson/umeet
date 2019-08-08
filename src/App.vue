<template>

  <div id="app">
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>

</template>

<script>

  import Navbar from './components/Navbar.vue'

  export default {
    name: 'app',
    components: {
      Navbar
    }
  }

</script>

<style>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }

</style>
