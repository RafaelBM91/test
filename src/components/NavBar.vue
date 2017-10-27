<template>
  <nav class="navbar is-info" v-bind:class="{ 'navbar-fixed': $store.state.navbarControl }">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="http://miconcierge.net/public/admin/logoHeaderMiC.png" alt="LOGO">
        </a>
        <span class="navbar-burger burger" data-target="navbarMenuHeroA">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenuHeroA" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item">
            Home
          </a>
          <a class="navbar-item" v-on:click="$store.commit('changeLogin', true)">
            LogIn
          </a>
          <a class="navbar-item" v-on:click="$store.commit('changeRegister', true)">
            Register
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar',
    created () {
      // control navbar-burger for movil and tablets
      document.addEventListener('DOMContentLoaded', function () {
        var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
        if ($navbarBurgers.length > 0) {
          $navbarBurgers.forEach(function ($el) {
            $el.addEventListener('click', function () {
              var target = $el.dataset.target
              var $target = document.getElementById(target)
              $el.classList.toggle('is-active')
              $target.classList.toggle('is-active')
            });
          });
        }
      });
    }
  }
</script>

<style scoped>
  .navbar-fixed {
    position: fixed;
    top: 5px;
    left: 5px;
    right: 5px;
    background-color: #209CEE !important;
  }
</style>
