<template>
	<div class="song-list">
		<ul>
			<li v-for="(list,i) in songData">
				<img :src="list.picUrl" />
				<h3 v-if="list.Ftitle">{{list.Ftitle}}</h3>
				<div v-if="list.songListDesc">
				    <h3 class="song-list-item">{{list.songListDesc}}</h3>
				    <p>{{list.songListAuthor}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'Songlist',
  props:['songData']
}	
</script>

<style>
	.song-list li{
		float: left;
        width: 50%;
        -webkit-box-sizing: border-box;
        padding-right: 8px;
        margin-bottom: 10px;
        overflow: hidden;
        
	}
	.song-list li h3{
		padding: 5px 7px 0 7px ;
        color: #000;
	    height: 36px;
        line-height: 18px;
        white-space: normal;
        word-wrap: break-word;
        background: #fff;
	} 
	.song-list li h3.song-list-item{
	    height: 22px;
	    line-height: 22px;
        white-space: nowrap;   
        text-overflow: ellipsis;
        overflow: hidden;
	}
	.song-list li p{
		padding: 0 7px 5px;
        color: #000;
        background: #fff;
        height: 14px;
        font-size: 12px;
        white-space: nowrap;   
        text-overflow: ellipsis;
        overflow: hidden;
	}
</style>