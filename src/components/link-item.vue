<template>
	<li class="mdui-list-item mdui-ripple">
		<i v-if="img_src.length" class="mdui-list-item-icon mdui-icon material-icons">{{ img_src }}</i>
		<div v-else-if="imgr_src.length" class="mdui-list-item-avatar mdui-icon"><img :src="imgr_src"/></div>
		<div class="mdui-list-item-content">
			<div class="mdui-list-item-title mdui-list-item-one-line">{{ title }}</div>
			<div class="mdui-list-item-text mdui-list-item-one-line" v-if="theContent.length">{{ theContent }}</div>
		</div>
	
		<div v-if="isDialog==1" class="mdui-dialog" id="qq-dialog">
			<div class="mdui-dialog-title">QQ友链</div>
			<div class="mdui-dialog-content">因QQ平台限制，请使用QQ应用扫描下方二维码
				<img class="mdui-center" height="170" width="170" :src="qrcodePic"/>
			</div>
			<div class="mdui-dialog-actions">
				<button class="mdui-btn mdui-ripple" mdui-dialog-close>Close</button>
			</div>
		</div>

		<a v-if="isDialog==0" :href="url" target="_blank"><i class="mdui-list-item-icon mdui-icon material-icons">arrow_forward</i></a>
		<i v-else-if="isDialog==1" class="mdui-list-item-icon mdui-icon material-icons" mdui-dialog="{target: '#qq-dialog'}">arrow_forward</i>
	</li>
</template>
<script>
export default{
	props:{
		"img_src":{
			type: String,
			default: ""
		},
		"title":{
			type: String,
			default: ""
		},
		"theContent":{
			type: String,
			default: ""
		},
		"url":{
			type: String,
			default: ""
		},
		"imgr_src":{
			type: String,
			default: ""
		},
		"isDialog":{
			type: Number,
			default: 0
		},
		"qrcodePic":{
			type: String,
			default: ""
		}
	}
}
</script>
