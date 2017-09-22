<template>
	<header class="bar bar-nav xixi-topbar" v-bind:style="{ backgroundColor: bgcolor }">
    <a class="icon icon-left-nav pull-left" @click="goback"></a>
    <a class="icon icon-right-nav pull-right" v-if="ishasgo" @click="goon"></a>
    <h1 class="title">Crusaders Quest</h1>
  </header>
</template>

<script>
import store from '@/vuex/store'
import {mapState} from 'vuex'
export default {
  name: 'TopBar',
  data () {
    return {
    }
  },
  methods: {
    goback:function(){
      this.$router.back();
    },
    goon:function(){
      this.$router.go(+1);
    }
  },
  computed:{
    ...mapState({
        ishasgo:state=>state.ishasgo,
    }),
    ...mapState({
      bgcolor:state=>state.backgroundcolor
    })
  },
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
  .xixi-topbar h1,i,a {
    color: #DFF4F3;
  }
</style>
