<template>
	<transition name="fade" appear>
	<div class="mdui-container">
        <div class="mdui-row">
			<div class="mdui-float-left mdui-m-t-1" id="app">
				<ul class="mdui-list">
					<li class=" mdui-list-item mdui-ripple">
						<div class="mdui-list-item-avatar"><img src="https://cos-furry-img.zsq001.cn/zsq001/5cbe91006081920.jpg"/></div>
						<div class="mdui-list-item-content">zsq001</div>
					</li>
					<block-list v-for="list in lists" :key="list.id" :text="list.name" :chosen="checkCurrentTab(list.id)" :icon="list.icon" @click="changeTab(list.id)"></block-list>
				</ul>
			</div>
	<main>
        <div class="mdui-p-t-3">
			<div class="mdui-card card mdui-center " >
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
<script src=./dialog.js></script>
<script>
import AboutMe from "./components/about-me.vue"
import LinkList from "./components/link-list.vue"
import BlockList from "./components/block-list.vue"
import Beian from "./components/Beian.vue"
import axios from "axios";
/*import FriendLinks from "http://127.0.0.1:5000/v1/friendlink/"
import Contact from "http://127.0.0.1:5000/v1/contact/"
import Service from "http://127.0.0.1:5000/v1/service/"*/

export default{
	name: 'App',
	components:{
		AboutMe,
		LinkList,
		BlockList,
		Beian
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
						links:[]
					}
				},
				{
					id:"2", name:"Contact me", component:"link-list", icon:"call",
					data:{ 
						links:[]
					}
				},
				{
					id:"3", name:"Friend Link", component:"link-list", icon:"insert_link",
					data:{
						links:[]
					}
				},
				{
					id:"4", name:"合规信息", component:"Beian", icon:"info"
				}
			]
		}
	},
  mounted() {
    axios.get('https://api.zsq001.cn/index/v1/service/')
      .then(response => (this.lists[1].data.links = response.data))
    axios.get('https://api.zsq001.cn/index/v1/contact/')
      .then(response => (this.lists[2].data.links = response.data))
    axios.get('https://api.zsq001.cn/index/v1/friendlink/')
      .then(response => (this.lists[3].data.links = response.data))
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
