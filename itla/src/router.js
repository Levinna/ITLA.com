// for mapping
// config all the settings in Routing
import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home"
import About from "./views/About"

Vue.use(Router); // Router 전역 등록
export default new Router({ // path connection
    mode: "history", // link 이동을 쉽게 하기 위함, 아니면 /About 등으로 이동하지 않고 링크가 이상하게 길어짐
    routes: [ // 이동하는 방법은 path로 이동, name으로 이동하는 방법 2가지가 있음.

    ]
})