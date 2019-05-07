<template>
  <div id="app">
       <div class="music-top"></div>
       <div class="music-nav">
            <ul> 
                 <li><router-link to="/">推荐</router-link></li>
                 <li><router-link to="/ranking">排行榜</router-link></li>
                 <li><router-link to="/search">搜索</router-link></li>
            </ul>
       </div>
       <router-view></router-view>
  </div>
</template>

<script>
	export default {
    name: 'app',
    data(){
      return {
      }
    }
  }
</script>
<style>
#app{
	    background: #f4f4f4;
	    overflow: hidden;
}
.music-top{
	width: 100%;
	height: 64px;
	background-color: #d43c33;
}
.music-nav{
	width:100%;
	height: 40px;
	background: #fff;
}
.music-nav ul{
	overflow: hidden
}
.music-nav ul li{
	float: left;
	width: 33.33%;
	text-align: center;
  line-height: 40px;
	
}
.music-nav ul li a{
	display: block;
	font-size: 16px;
	color: rgba(0,0,0,.6);
}
.music-nav ul li a.router-link-exact-active{
	color: #31c27c;
	position: relative;
}
.music-nav ul li a.router-link-exact-active:after {
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #31c27c;
}
</style>
