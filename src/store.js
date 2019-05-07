import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    HomeData: {},
    RankData:{}
  },
  mutations: {
    increment (state) {
        axios.get('/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?_=1554196751726&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1')
        .then(response => {
            state.HomeData=response.data.data
          }, err => {
             alert(err)
        })  
    },
    ranking(state){
    	 axios.get('/api/v8/fcg-bin/fcg_myqq_toplist.fcg?_=1554788761150&g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1')
        .then(response => {
                  state.RankData=response.data.data
          }, err => {
             alert(err)
        })  
    }
  }
})
