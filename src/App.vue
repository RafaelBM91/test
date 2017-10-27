<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <FooterComp />
    <NavBarComp v-show="$store.state.navbarControl" />
    <LoginComp />
    <RegisterComp />
  </div>
</template>

<script>
  import FooterComp from '@/components/Footer'
  import LoginComp from '@/components/Login'
  import RegisterComp from '@/components/Register'
  import NavBarComp from '@/components/NavBar'

  import 'bulma/css/bulma.css'
  import 'font-awesome/css/font-awesome.css'

  export default {
    name: 'app',
    created () {
      // for navbar control
      document.addEventListener("scroll", (event) => {
        if (document.body.scrollTop > 0) {
          this.$store.commit('changeNavbar', true)
        } else {
          this.$store.commit('changeNavbar', false)
        }
      })
    },
    components: {
      'FooterComp': FooterComp,
      'LoginComp': LoginComp,
      'RegisterComp': RegisterComp,
      'NavBarComp': NavBarComp
    }
  }
</script>

<style></style>
