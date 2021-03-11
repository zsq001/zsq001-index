<template>
	<div class="mdui-col">
	<li v-if="chosen" class="mdui-list-item-active mdui-list-item mdui-ripple">
		<i class="mdui-list-item-icon mdui-icon material-icons">{{ icon }}</i>
		<div class="mdui-list-item-content">{{ text }}</div>
	</li>
	<li v-else class="mdui-list-item mdui-ripple" @click="$emit('click')">
		<i class="mdui-list-item-icon mdui-icon material-icons">{{ icon }}</i>
		<div class="mdui-list-item-content">{{ text }}</div>
	</li>
	</div>
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
		},
		"text": {
			type: String,
			default: ""
		}
	}
}
</script>
