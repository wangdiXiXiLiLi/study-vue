<template>
    <div>
        <top-Bar></top-Bar>
        <setting-Show></setting-Show>
        <buttom-Bar></buttom-Bar>

    </div>
</template>

<script>
    import TopBar from '@/components/TopBar'
    import SettingShow from '@/components/SettingShow'
    import ButtomBar from '@/components/ButtomBar'
    export default {

        name: 'hello',
        data () {
            return {
            }
        },
        components : {
            'top-Bar' : TopBar,
            'setting-Show' : SettingShow,
            'buttom-Bar' : ButtomBar,
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
