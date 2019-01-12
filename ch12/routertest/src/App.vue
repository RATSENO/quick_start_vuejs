<template>
  <div>
    <div class="header">
      <h1 class="headerText">(주)Open SG</h1>
      <nav>
        <ul>
          <li>
            <!-- <router-link to="/home">Home</router-link> -->
            <router-link v-bind:to="{name : 'home'}">Home</router-link>
          </li>
          <li>
            <!-- <router-link to="/about">About</router-link> -->
            <router-link v-bind:to="{name : 'about'}">About</router-link>
          </li>
          <li>
            <!-- <router-link to="/contacts">Contacts</router-link> -->
            <router-link v-bind:to="{name : 'contacts'}">Contact</router-link>
          </li>          
        </ul>
      </nav>
    </div>

    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contacts from './components/Contacts.vue'
import ContactByNo from './components/ContactByNo.vue'
import NotFound from './components/NotFound.vue'
import VueRouter from 'vue-router';

const router = new VueRouter({
  mode : 'history',
  routes : [
    {
      path : '/',
      component : Home
    },
    {
      path : '/home',
      component : Home,
      name : 'home'
    },
    {
      path : '/about',
      component : About,
      name : 'about'
    },
    {
      path : '/contacts',
      component : Contacts,
      name : 'contacts',
      children : [
        {
          path : ':no',
          component : ContactByNo,
          name : 'contactbyno',
          beforeEnter : (to, from, next)=>{
            console.log("@@ beforeEnter! : " + from.path + "-->" + to.path)
            if(from.path.startsWith("/contacts")){
              next();
            }else{
              next("/home");
            }
          }
        }
      ]
    },
    {
      path : '*',
      component : NotFound
    }
    // ,
    // {
    //   path : '/contacts/:no',
    //   component : ContactByNo
    // }
  ]
})

//전역 수준의 보호 기능을 사용하기 위해
// VueRouter 객체에 beforeEach, afterEach 메서드를 추가한다
// beforeEach() 보호 메서드에서는
// next()함수를 반드시 호출해야 다음의 훅으로 진행한다
// next()함수를 호출하지 않으면 내비게이션이 진행되지 않는다.
router.beforeEach((to, from, next)=>{
  console.log("** beforeEach!!")
  next();
})

router.afterEach((to, from)=>{
  console.log("** afterEach!!")
})

export default{
  name : 'app',
  router
}
</script>
<style>
@import url("https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");

.header{
  background-color: aqua;
  padding: 10px 0px 0px 0px;
}
.headerText{
  padding: 0px 20px 0px 20px;
}
ul{
  list-style-type:none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: purple;
}
li{
  float: left;
}
li a {
  display: block;
  color: yellow;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
li a:hover{
  background-color: aqua;
  color: black;
}
</style>

