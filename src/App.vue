<template>
	<transition name="fade" appear>
	<div>
	<header class="header">
		<div class="mdui-float-left">
			<ul class="mdui-list">
				<li class="mdui-list-item mdui-ripple">
					<i class="mdui-list-item-icon mdui-icon material-icons">account_circle</i>
					<div class="mdui-list-item-content">About me</div>
				<li>
				<li class="mdui-list-item mdui-ripple">
					<i class="mdui-list-item-icon mdui-icon material-icons">widgets</i>
					<div class="mdui-list-item-content">My service</div>
				<li>
				<li class="mdui-list-item mdui-ripple">
					<i class="mdui-list-item-icon mdui-icon material-icons">call</i>
					<div class="mdui-list-item-content">Contact me</div>
				<li>
				<li class="mdui-list-item mdui-ripple">
					<i class="mdui-list-item-icon mdui-icon material-icons">insert_link</i>
					<div class="mdui-list-item-content">Friend link</div>
				<li>
			</ul>
		</div>
	</header>

	<main>
		<div class="mdui-container" id="app">
			<header>
		</div>
	</div>
	</transition>
</template>
<script>
import AboutMe from "./components/about-me.vue"
import LinkList from "./components/link-item.vue"

export default{
	name: App,
	components:{
		Aboutme,
		LinkList
	},
	data: function(){
		return {
			current_tab: 0,
			lists: [
				{
					id:"0", name:"About me", component:"AboutMe",
				},
				{
					id:"1", name:"My service", component:"link-list",
					data:{
						//name theContent img_src url 
						links:[
							{"url":"https://drive.zsq001.cn:12344/", theContent:"My cloud storage space", "title":"My Drive", img_src:"cloud_download"},
							{"url":"https://www.zsq001.cn:12344/", theContent:"gu gu and gu-ing", "title":"My blog", img_src:"developer_board"},
							{"url":"https://img.zsq001.cn", theContent:"My img bed", "title":"My img bed", img_src:"photo"}
						]
					}
				},
				{
					id:"2", name:"Contact me", component:"link-list",
					data:{ links:[//github qq email bili telegram gpg
						{"url":"mailto:zsq1750819212@gmail.com", theContent:"zsq1750819212@gmail.com", title: E-mail},
						{"url":"https://github.com/zsq001", theContent:"@zsq001", title: "My github"},
						{"url":"https://t.me/zsq001", theContent:"@zsq001", title: "My telegram"}
					]
					}
				},
				{
					id:"3", name:"Friend Link", component:"link-list",
					data:{
						links:FriendLinks
					}
				}
			]
		}
	}
}
</script>
