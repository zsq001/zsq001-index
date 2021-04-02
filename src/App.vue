<template>
	<transition name="fade" appear>
	<div class="mdui-container">
    		<div class="mdui-row">
			<div class="mdui-float-left" id="app">
				<ul class="mdui-list">
					<li class=" mdui-list-item mdui-ripple">
						<div class="mdui-list-item-avatar"><img src="https://furry-img-1300406936.file.myqcloud.com/zsq001/bab4b0320095935.jpg"/></div>
						<div class="mdui-list-item-content">zsq001</div>
					</li>
					<block-list v-for="list in lists" :key="list.id" :text="list.name" :chosen="checkCurrentTab(list.id)" :icon="list.icon" @click="changeTab(list.id)"></block-list>
				</ul>
			</div>
	<main>
    		<div class="mdui-col-offset-md-2 mdui-col-offset-sm-">
			<div class="mdui-card card mdui-center" id="app">
				<transition name="fade" mode="out-in" appear>
					<keep-alive>
						<component :is="currentTabComponents" :key="current_tab" v-bind="currentTabLink"></component>
					</keep-alive>
				</transition>
      			</div>
		</div>
	</main>
	</div>
  </div>
	</transition>
</template>
<script>
import AboutMe from "./components/about-me.vue"
import LinkList from "./components/link-list.vue"
import FriendLinks from "./data/friend-links.json"
import BlockList from "./components/block-list.vue"

export default{
	name: 'App',
	components:{
		AboutMe,
		LinkList,
		BlockList
	},
	data: function(){
		return {
			current_tab: "0",
			lists: [
				{
					id:"0", name:"About me", component:"AboutMe", icon:"account_circle",
				},
				{
					id:"1", name:"My service", component:"link-list", icon:"widgets",
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
					id:"2", name:"Contact me", component:"link-list", icon:"call",
					data:{ links:[//github qq email bili telegram gpg
						{"url":"mailto:zsq1750819212@gmail.com", theContent:"zsq1750819212@gmail.com", title: "E-mail"},
						{"url":"https://github.com/zsq001", theContent:"@zsq001", title: "My github"},
						{"url":"https://t.me/zsq001", theContent:"@zsq001", title: "My telegram"},
						{"url":"https://space.bilibili.com/381720186", theContent:"@zsq_001", title: "My bili space"},
						{"url":"https://github.com/zsq001.gpg", theContent:"9D26 2ED8 7064 97A4", title:"GunPG"}
					]
					}
				},
				{
					id:"3", name:"Friend Link", component:"link-list", icon:"insert_link",
					data:{
						links:FriendLinks
					}
				}
			]
		}
	},
	methods: {
		changeTab(id){
			this.current_tab = id;
		},
		checkCurrentTab(id){
			return this.current_tab == id;
		}	
	},
	computed: {
		currentTabLink: function(){
			return this.lists[this.current_tab].data;
		},
		currentTabComponents: function(){
			return this.lists[this.current_tab].component;
		}
	}
}
</script>
<style scoped>
.lleft
{
	padding: 15px;
	width: 100%;
	top: 2vh;
}
</style>
