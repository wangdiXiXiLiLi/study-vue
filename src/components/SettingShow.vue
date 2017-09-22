<template>
  <ul class="table-view">
    <li v-for="color in colors" class="table-view-cell">{{ color }} <button v-bind:style="{ backgroundColor: color }"  class="btn" @click="changebackgroundcolor(color)">click me!</button></li>
  </ul>
</template>

<script>
  import store from '@/vuex/store'
  import {mapMutations} from 'vuex'
  export default {
    name: 'HeroShow',
    data () {
    return {
      colors : ['#CA82F8','#9B3284','#F46060','#415B90','#FC3A52','#878ECD','#586B8F','#A12559','#52524E','#F79F24']
      }
    },
    methods:{
      ...mapMutations(['changebackgroundcolor'])
    },
    store

       

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .table-view-cell button {
    color:#F9F9F9;
  }

</style>
