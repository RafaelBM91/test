<template>
  <div class="columns is-multiline is-centered">
    <div class="column is-12">
      <HeaderComp />
    </div>
    <div class="column is-12">
      <br/><br/><br/><br/><br/><br/>
      <br/><br/><br/><br/><br/><br/>
    </div>
  </div>
</template>

<script>
  import HeaderComp from '@/components/Header'

  export default {
    name: 'Index',
    components: {
      'HeaderComp': HeaderComp
    }
  }
</script>

<style scoped></style>
