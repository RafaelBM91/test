<template>
  <div class="columns is-multiline is-centered">
    <div class="column is-12">
      <HeaderComp />
    </div>
    <div class="column is-12">
      <ul>
        <!-- <li v-for="(obj,index) in test" v-bind:key="index">{{obj.email}}</li> -->
      </ul>
      <br/><br/><br/><br/><br/><br/>
      <button type="button" class="button" v-on:click="testk">Subscriptions</button>
      <br/><br/><br/><br/><br/><br/>
    </div>
  </div>
</template>

<script>
  import HeaderComp from '@/components/Header'
  import gql from 'graphql-tag'
  import { pubsub } from '../../plugins/subscriptions'

  export default {
    name: 'Index',
    components: {
      'HeaderComp': HeaderComp
    },
    methods: {
      testk () {

        const subQuery = gql`subscription tags($type: String!) {
          tagAdded(type: $type) {
            id
            label
            type
          }
        }`

        const observer = this.$apollo.subscribe({
          query: subQuery,
          variables: {
            type: 'City',
          },
        })

        observer.subscribe({
          next(data) {
            console.log(data);
          },
          error(error) {
            console.error(error);
          },
        })

      }
    }
  }
</script>

<style scoped></style>
