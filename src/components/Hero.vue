<template>
    <div>
        <top-Bar></top-Bar>
        <hero-Show></hero-Show>
    </div>
</template>

<script>
    import TopBar from '@/components/TopBar'
    import HeroShow from '@/components/HeroShow'


    export default {

        name: 'hello',
        data () {
            return {
            }
        },
        components : {
            'top-Bar' : TopBar,
            'hero-Show' : HeroShow
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
