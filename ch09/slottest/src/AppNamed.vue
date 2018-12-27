<template>
  <div id="app">
    <layout>
        <h1 slot="header">헤더 영역</h1>
        <div slot="sidebar">
            <ul class="menu">
                <li v-for="sidebar in sidebars">
                    <a v-bind:href="sidebar.link">{{sidebar.menu}}</a>
                </li>
            </ul>
        </div>
        
        <div slot="sidebar">
            <ul class="menu">
                <li v-for="sidebar in sidebars">
                    <a v-bind:href="sidebar.link">{{sidebar.menu}}</a>
                </li>
            </ul>
        </div>
        <div slot="content">
            <h2>컨텐트 영역</h2>
            <p>어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
            <p>어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
            <p>어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
            <p>어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구</p>
        </div>

        <p slot="footer">Footer text</p>
    </layout>
  </div>
</template>

<script>
import Layout from './components/NamedSlot.vue';

export default {
    data() {
        return {
            sidebars : [
                { menu : "Home", link : "#" },
                { menu : "About", link : "#" },
                { menu : "Contact", link : "#" },
                { menu : "Vue.js", link : "#" },
                { menu : "Vue2.js", link : "#" },
                { menu : "Vue3.js", link : "#" }
            ]
        }
    },
    components : { Layout }
}
</script>

<style scoped>
ul.menu {
    position:relative;
    padding: 5px 5px 5px 5px;
    list-style: none;
    font-style: italic;
}
ul.menu a {
    text-decoration:none;
}
</style>

