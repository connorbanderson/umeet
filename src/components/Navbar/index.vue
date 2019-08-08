<template>

  <nav>
    <img src="../../static/uScreenLogo.svg" />
    <div class='rhs'>
      <span>Products</span>
      <span>Partners</span>
      <span>Pricing</span>
    </div>
  </nav>

</template>

<script>

  export default {
    name: 'Navbar'
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  nav {
    position: fixed;
    top: 0px;
    left: 0px;
    height: 44px;
    width: 100%;
    padding: 10px 20px;
    width: calc(100% - 40px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14), 0 2px 4px rgba(0, 0, 0, 0.21);
  }
</style>
