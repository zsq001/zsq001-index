import Vue from "vue"
import app from "@/App.vue"
import "@/assets/css/mdui.css"
import "@/assets/js/mdui.js"

Vue.config.productionTip = false

new Vue ({
	hender :h => h(app)
}).$mount("#app")

