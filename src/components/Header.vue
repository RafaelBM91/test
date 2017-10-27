<template>
  <section class="hero is-medium is-info is-bold">
    <div class="hero-head">
      <NavBarComp />
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          RED DE PROFESIONALES TURISTICOS
        </h1>
        <h2 class="subtitle">
          Todo lo que necesitas para dar la mejor recomendacion a los turistas.
        </h2>
      </div>
    </div>
    <div class="hero-foot">
      <TabsComp />
    </div>
  </section>
</template>

<script>
  import NavBarComp from '@/components/NavBar'
  import TabsComp from '@/components/Tabs'

  export default {
    name: 'Header',
    components: {
      'NavBarComp': NavBarComp,
      'TabsComp': TabsComp
    }
  }
</script>

<style scoped></style>
