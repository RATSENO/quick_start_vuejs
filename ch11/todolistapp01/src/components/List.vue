<style>
* {  
    box-sizing: border-box;  
}
ul {  
    margin: 0; 
    padding: 0; 
}
ul li { 
    cursor: pointer;
    position: relative; 
    padding: 8px 8px 8px 40px;
    background: #eee; 
    font-size: 14px;  
    transition: 0.2s;
    -webkit-user-select: none; 
    -moz-user-select: none;
    -ms-user-select: none; 
    user-select: none;  
}
ul li:hover {  
    background: #ddd;  
}
ul li.checked {
    background: #BBB;  
    color: #fff; 
    text-decoration: line-through;
}
ul li.checked::before {
    content: ''; 
    position: absolute; 
    border-color: #fff;
    border-style: solid; 
    border-width: 0px 1px 1px 0px; 
    top: 10px; 
    left: 16px;  
    transform: rotate(45deg);
    height: 8px; 
    width: 8px;
}
.close {
    position: absolute; 
    right: 0; 
    top: 0;
    padding: 8px 12px 8px 12px
}
.close:hover {
    background-color: #f44336;  color: white;
}
</style>
<template>
    <ul id="todolist">
        <!-- <li v-for="(a, index) in todolist" v-bind:class="checked(a.done)" v-on:click="doneToggle(index)"> -->
        <li v-for="(a, index) in todolist" v-bind:class="checked(a.done)" v-on:click="doneToggle({ index : index })">
            <span>{{ a.todo }}</span>
            <span v-if="a.done"> (완료)</span>
            <!-- <span class="close" v-on:click.stop="deleteTodo(index)">&#x00D7;</span> -->
            <span class="close" v-on:click.stop="deleteTodo({ index : index })">&#x00D7;</span>
        </li>
    </ul>
</template>
<script type="text/javascript">
//import eventBus from './EventBus.vue'
import Constant from '../constant'
//컴포넌트 바인딩 헬퍼 메서드
import { mapState, mapMutations } from 'vuex'
//lodash 라이브러리의 _.extend()라는 함수를 사용하기 위해 import
import _ from 'lodash'

// export default {
//     computed: {
//         todolist(){
//             return this.$store.state.todolist;
//         }
//     },
//     methods : {
//         checked : function(done) {
//             if(done) return { checked:true };
//             else return { checked:false };
//         },
//         doneToggle : function(index) {
//             this.$store.commit(Constant.DONE_TOGGLE, {
//                 index : index
//             })
//         },
//         deleteTodo : function(index) {
//             this.$store.commit(Constant.DELETE_TODO, {
//                 index : index
//             })
//         }
//     }
// }

export default{
    computed: mapState(['todolist']),
    methods: _.extend({
        checked : function(done) {
            if(done) return { 
                checked:true 
            };
            else return { 
                checked:false 
            };
        }
    },
    mapMutations([
        Constant.DELETE_TODO,
        Constant.DONE_TOGGLE
    ])
  )
}
</script>
