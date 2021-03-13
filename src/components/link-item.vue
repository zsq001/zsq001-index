<template>
	<li class="mdui-list-item mdui-ripple">
		<i v-if="img_src.length" class="mdui-list-item-icon mdui-icon material-icons">{{ img_src }}</i>
		<div v-else-if="imgr_src.length" class="mdui-list-item-avatar mdui-icon"><img :src="imgr_src"/></div>
		<div class="mdui-list-item-content">
			<div class="mdui-list-item-title mdui-list-item-one-line">{{ title }}</div>
			<div class="mdui-list-item-text mdui-list-item-one-line" v-if="theContent.length">{{ theContent }}</div>
		</div>
		<a :href="url" target="_blank" v-if="url.length"><i class="mdui-list-item-icon mdui-icon material-icons">arrow_forward</i></a>
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
