<template>

  <nav>
    <router-link to="/" style="cursor: pointer">
      <img src="../static/uScreenLogo.svg" alt='uScreen Logo' />
    </router-link>
    <div class='rhs'>
      <div class='navItem'
           v-for="item in menuItems"
           :key="item.title">
        <router-link :to="item.link">
          <a-button>
            <a-icon :type="item.icon" /> {{item.title}}
          </a-button>
        </router-link>
      </div>

    </div>
  </nav>

</template>

<script>

  export default {
    data() {
      return {
        menuItems: [
          { icon: 'team', title: 'View Meetups', link: '/meetups' },
          { icon: 'home', title: 'Organize Meetup', link: '/meetups/new' },
          { icon: 'user', title: 'Profile', link: '/profile' },
          { icon: 'login', title: 'Sign Up', link: '/signup' },
          { icon: 'login', title: 'Sign In', link: '/signin' }
        ]
      }
    },
    name: 'Navbar'
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .navItem {
    margin: 0 5px;
  }

  nav {
    position: fixed;
    top: 0px;
    left: 0px;
    height: 54px;
    width: 100%;
    padding: 10px 20px;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.14), 0 2px 4px rgba(0, 0, 0, 0.21);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .rhs {
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

</style>
