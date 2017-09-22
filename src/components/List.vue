<template>
  <div>
    <top-Bar></top-Bar>
    <list-Show></list-Show>
	  <buttom-Bar></buttom-Bar>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
import ButtomBar from '@/components/ButtomBar'
import ListShow from '@/components/ListShow'


export default {

  name: 'hello',
  data () {
    return {
    }
  },
  components : {
  	'top-Bar' : TopBar,
  	'buttom-Bar' : ButtomBar,
    'list-Show' : ListShow
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
