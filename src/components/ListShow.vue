<template>
    <ul class="table-view" style="margin-bottom: 50px;">
        <li class="table-view-cell media" v-for="(hero,index) in heros" :class="{ 'islike':hero.islike }">
            <a class="navigate-right">
                <img class="media-object pull-left" :src="hero.face">
                <div class="media-body" @click="herohandle(hero)" >
                    {{ hero.name }}
                    <p> {{ hero.content }} </p>
                </div>
            </a>
        </li>
    </ul>

</template>

<script>

    import store from '@/vuex/store'
    import {mapMutations} from 'vuex'
    export default {
        name: 'TopBar',
        data () {
            return {
                heros: [
                    {
                        "face": "./static/images/cq3.png",
                        "name": "魔法少女明日香",
                        "content": "I didn’t wanna late night text messages you a smile face saying goodbye ",
                        "islike": false
                    },
                    {
                        "face": "./static/images/cq11.png",
                        "name": "小女孩",
                        "content": "I didn’t wanna late night text messages you a smile face saying goodbye",
                        "islike": false
                    },
                    {
                        "face": "./static/images/cq7.png",
                        "name": "稀世怪盗鲁尼昂",
                        "content": "I didn’t wanna late night text messages you a smile face saying goodbye",
                        "islike": false
                    },
                    {
                        "face": "./static/images/cq8.png",
                        "name": "创造者宾森恩",
                        "content": "I didn’t wanna late night text messages you a smile face saying goodbye",
                        "islike": false
                    },
                    {
                        "face": "./static/images/cq9.png",
                        "name": "荒电狂魔夏尔梅",
                        "content": "I didn’t wanna late night text messages you a smile face saying goodbye",
                        "islike": false
                    },
                    {
                        "face": "./static/images/cq15.png",
                        "name": "荆棘魔女塔利亚",
                        "content": "I didn’t wanna late night text messages you a smile face saying goodbye",
                        "islike": false
                    },
                    {
                        "face": "./static/images/cq14.png",
                        "name": "二天一只流香织",
                        "content": "I didn’t wanna late night text messages you a smile face saying goodbye",
                        "islike": false
                    },
                    {
                        "face": "./static/images/cq12.png",
                        "name": "觉醒的雅肯",
                        "content": "I didn’t wanna late night text messages you a smile face saying goodbye",
                        "islike": false
                    }
                ]
            }
        },

        methods: {
            herohandle(hero){
                if (!hero.islike) {
                    var emoji = '😍';
                } else {
                    var emoji = '😰';
                }

                layer.open({
                    anim: 'up'
                    , content: hero.name
                    , btn: [emoji, '看我～']
                    , yes: function (index) {
                        hero.islike = !hero.islike;
                        layer.close(index);

                    },no : ()=>{
                        this.heroinfo(hero)
                    }
                });
            },
            heroinfo(hero){
                this.changestate(hero)
                this.$router.push('/Hero/'+hero.name);
            },
            ...mapMutations([
                    'changestate'
                ]),
            },
        store
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .media-object {
        width: 2rem;
        height: 2rem;
    }

    .islike {
        background-color: #DFF4F3;
        border: 1px solid #F7F7F7;
    }


</style>
