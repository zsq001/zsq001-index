<template>
	<li v-if="chosen" class="mdui-list-item-active mdui-list-item mdui-ripple">
		<i class="mdui-list-item-icon mdui-icon material-icons">{{icon}}</i>
	</li>
	<li v-else class="mdui-list-item mdui-ripple">
		<i class="mdui-list-item-icon mdui-icon material-icons">{{icon}}</i>
	</li>
</template>
<script>
export default{
	props:{
		"icon": {
			type: String,
			default: ""
		},
		"chosen": {
			type: Boolean,
			default: false
		}
	}
}
</script>
