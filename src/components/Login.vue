<template>
  <div class="modal" v-bind:class="{ 'is-active': $store.state.loginControl }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">LogIn</p>
        <button class="delete" aria-label="close" v-on:click="$store.commit('changeLogin', false)"></button>
      </header>
      <section class="modal-card-body">
        <form action="#" v-on:submit.prevent="() => { console.log('gola') }">
          <div class="field">
            <label class="label">Email Address</label>
            <div class="control has-icons-left">
              <input class="input is-info is-small" type="email" placeholder="Email Address" required>
              <span class="icon is-small is-left">
                <i class="fa fa-user"></i>
              </span>
            </div>
            <p class="help is-danger">* is required</p>
          </div>
          <div class="field">
            <label class="label">Password</label>
            <div class="control has-icons-left">
              <input class="input is-info is-small" type="password" placeholder="Password" required>
              <span class="icon is-small is-left">
                <i class="fa fa-lock"></i>
              </span>
            </div>
            <p class="help is-danger">* is required</p>
          </div>
          <label class="checkbox">
            <input type="checkbox">
            Remember me
          </label>
        </form>
      </section>
      <footer class="modal-card-foot">
        <button type="submit" class="button is-info">SingIn</button>
        <button class="button is-success" v-on:click="register">Register</button>
        <a href="#">Forgot Password?</a>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    methods: {
      register () {
        this.$store.commit('changeLogin', false)
        this.$store.commit('changeRegister', true)
      }
    }
  }
</script>

<style scoped></style>
