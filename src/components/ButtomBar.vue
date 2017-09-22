<template>
	<nav class="bar bar-tab xixi-buttombar" v-bind:style="{ backgroundColor: bgcolor }">
	  <router-link class="tab-item active" to='/' >
	    <i class="icon iconfont icon-shouye" :class="{ 'check-color' : ishome }"></i>
	    <span class="tab-label" :class="{ 'check-color' : ishome }">首页</span>
	  </router-link>
	  <router-link class="tab-item"  to='/List'>
	    <i class="icon iconfont icon-dingdan" :class="{ 'check-color' : islist }" ></i>
	    <span class="tab-label" :class="{ 'check-color' : islist }">列表</span>
	  </router-link>
	  <router-link class="tab-item" to='/Setting'>
	    <i class="icon iconfont icon-yanse" :class="{ 'check-color' : isme }"></i>
	    <span class="tab-label" :class="{ 'check-color' : isme }">color</span>
	  </router-link>
	 
	</nav>
</template>

<script>
import store from '@/vuex/store'
import {mapMutations} from 'vuex'
import {mapState} from 'vuex'
export default {
  name: 'TopBar',
  data () {
    return {
    	ishome : true,
    	islist : false,
    	isme : false
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      const uri = this.$route.path;
      if (uri === '/') {
        this.ishome = true,
        this.islist = false,
        this.isme = false
      }
      if (uri === '/List') {
        this.ishome = false,
        this.islist = true,
        this.isme = false,
        this.changeishasgo();
      }
      if (uri === '/Setting') {
        this.ishome = false,
        this.islist = false,
        this.isme = true,
        this.changeishasgo();
      }
    });
  },
  methods : {
    ...mapMutations([
        'changeishasgo'
      ])
  },
  computed : {
    ...mapState({
      bgcolor:state=>state.backgroundcolor
    })
  },
  store
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
  .xixi-buttombar span {
  	color: #DFF4F3;
  }
  .check-color{
  	color :#1B435D !important;
  }
</style>
