<template>
  <div class="home">
      <Banner></Banner>
      <div class="home-radio">
          <h2>电台</h2>
          <Songlist :songData="$store.state.HomeData.radioList"></Songlist>
      </div>
      <div class="home-radio">
          <h2>热门歌单</h2>
         <Songlist :songData="$store.state.HomeData.songList"></Songlist>
      </div>
  </div>
</template>

<script>
import Banner from '../components/Banner'
import Songlist from '../components/Songlist'
export default {
  name: 'home',
  created() {
      this.$store.commit('increment')
      console.log(this.$store.state)
      
  },
  components: {
  	  Banner,
      Songlist
  }
}
</script>
<style>
.home-radio{
	  margin-bottom: 7px;
	  margin-left: 10px;
    margin-right: 10px;
}	
.home-radio h2{
    font-size: 16px;
    color: #000;
    margin-bottom: 11px;
    font-weight: 400;
}
</style>