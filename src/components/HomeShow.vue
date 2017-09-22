<template>
  <div id="appnews" v-infinite-scroll="getmorenews" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <a class="news" v-for="newinfo in newsinfo">
      <div class="news-title">{{ newinfo.title }}</div>
      <div class="news-img"><img :src="newinfo.image1" alt=""></div>
      <div class="news-img"><img :src="newinfo.image2" alt=""></div>
      <div class="news-img"><img :src="newinfo.image3" alt=""></div>
      <div style="clear:both"></div>
      <div class="news-time">{{ newinfo.time }}</div>
    </a>
  </div>
</template>

<script>



export default {
  name: 'TopBar',
  data () {
    return {
      newsinfo : [
        {
          "title": "erinnerst du dich noch an den Tag,an dem du mir...? ",
          "image1" : "./static/images/cq1.png",
          "image2" : "./static/images/cq2.png",
          "image3" : "./static/images/cq3.png",
          "time" : "2017-08-15"
        },
        {
          "title": "Zweige und Blätter sind meine Hände ",
          "image1" : "./static/images/cq4.png",
          "image2" : "./static/images/cq5.png",
          "image3" : "./static/images/cq6.png",
          "time" : "2017-08-15"
        },
        {
          "title": "denn mein Körper ist in Wurzeln gehüllt",
          "image1" : "./static/images/cq7.png",
          "image2" : "./static/images/cq8.png",
          "image3" : "./static/images/cq9.png",
          "time" : "2017-08-15"
        },
        {
          "title": "das Vergissmeinnicht, das du mir gegeben hast, ist hier",
          "image1" : "./static/images/cq10.png",
          "image2" : "./static/images/cq11.png",
          "image3" : "./static/images/cq12.png",
          "time" : "2017-08-15"
        }
      ]
    }
  },
  create : function(){
    console.log(this.newsinfo)
  },
  methods:{
    getmorenews(){
      this.axios.get('./static/mocks/newsinfo.json')
        .then((response) => {
          if(response.status == 200){
            this.newsinfo = this.newsinfo.concat(response.data);
          }
        })
        .catch(function (response) {
          console.log(response);
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .news{
    display: block;
    margin:10px;
    border-bottom: 1px solid #C4AFF0;
  }
  .news-title {
    font-size: 0.8rem;
    color : #1B435D;
    text-align: left;
  }
  .news-time {
    font-size: 0.7rem;
    color : #1B435D;
    text-align: right;
  }
  .news-img {
    width: 33%;
    float: left;
    margin :0px;
    border :1px solid white;
  }
  .news-img img {
    width: 100%;
    left: 0;
    top: 0;
  }
  #appnews{
    margin-bottom: 50px;
  }

</style>
