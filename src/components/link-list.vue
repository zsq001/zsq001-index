<template>
	<ul class="mdui-list">
		<link-item v-for="(link,title) in links" v-bind:key="title" v-bind="link"></link-item>
	</ul>
</template>
<script>
import LinkItem from "./link-item.vue"

export default{
	components:{
		LinkItem	
	},
	props:{
		links:{
			required:true,
			validator: function() {return true;}
		}
	}
}
</script>
