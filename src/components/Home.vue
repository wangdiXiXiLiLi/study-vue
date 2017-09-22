<template>
  <div>
    <top-Bar></top-Bar>
    <home-Show></home-Show>
	<buttom-Bar></buttom-Bar>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar'
import ButtomBar from '@/components/ButtomBar'
import HomeShow from '@/components/HomeShow'


export default {

  name: 'hello',
  data () {
    return {
    }
  },
  components : {
  	'top-Bar' : TopBar,
  	'buttom-Bar' : ButtomBar,
  	'home-Show' : HomeShow
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
