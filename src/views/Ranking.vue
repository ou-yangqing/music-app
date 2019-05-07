<template>
    <div class="music-rank">
         <ul>
         	<li v-for="(item,i) in $store.state.RankData.topList" :key="i">
         		<img :src="item.picUrl"/>
         		<div class="name">
         			<h3>{{item.topTitle}}</h3>
         		</div>
         	</li>
         </ul>
    </div>
</template>

<script>
export default {
  name: 'Ranking',
  created() {
      this.$store.commit('ranking')
      console.log(this.$store.state)
      
  }
}
</script>
<style>
  .music-rank{
  	margin: 10px;
    padding-bottom: 55px;
  }
  .music-rank li{
  	height: 100px;
  	margin-bottom: 10px;
    overflow: hidden;
    background: #fff;
  }
  .music-rank li img{
  	float: left;
  	width: 100px;
  }
  .name{
  	float: left;
  }
  .name h3{
  	font-size: 16px;
    color: #000;
    font-weight: 400;
    margin-bottom: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  
</style>