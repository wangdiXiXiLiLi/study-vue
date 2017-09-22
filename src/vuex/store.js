import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
  hero :  {
    "face": "./static/images/cq3.png",
    "name": "魔法少女明日香",
    "content": "I didn’t wanna late night text messages you a smile face saying goodbye ",
    "islike": false
  },
  ishasgo : false,
  backgroundcolor: '#878ECD'
}

const mutations={
  changestate(state,newhero){
    state.hero = newhero;
  },
  changeishasgo(state){
    if(state.ishasgo == false){
      state.ishasgo = true;
    }
  },
  changebackgroundcolor(state,color){
  	console.log(color)
  	if(color!=state.backgroundcolor){
  		state.backgroundcolor = color;
  	}
  	console.log(state.backgroundcolor)
  }
}


export default new Vuex.Store({
    state,mutations
 
})
