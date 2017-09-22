<template>
    <div>
        <img :src="heroinfo.face" alt="">
        <h4>{{ heroinfo.name }}</h4>
        <div>{{ heroinfo.content }}</div>
    </div>
</template>

<script>
    import store from '@/vuex/store';
    import {mapState} from 'vuex';
    export default {
        name: 'HeroShow',
        data () {
            return {
               
            }
        },
        computed:{
            ...mapState({
                heroinfo:state=>state.hero
            })
        },
        store

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.iconfont{
    color:#F2BBBB;
}

</style>
