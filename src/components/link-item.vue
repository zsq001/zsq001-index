<template>
	<li class="mdui-item mdui-ripple">
		<i v-if="img_src.length" class="mdui-list-item-avater mdui-icon material-icons">{{img_src}}</i>
		<div v-else-if="imgr_src" class="mdui-list-item-avater">
		<img :src="imgr_src"/>
		</div>
		<div v-else></div>
		<div class="mdui-list-item-content">
			<div class="mdui-list-item-title mdui-list-one-line">{{title}}</div>
			<div class="mdui-list-item-content mdui-list-one-line" v-if="theContent.length">{{theContent}}</div>
		</div>
		<div :href="url" v-if="url.length"><i class="mdui-list-item-icon mdui-icon material-icons">arrow_forward</i></div>
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
		}
	}
}
</script>
