<template>
    <div id="app">
        <div class="container">
            <div class="form-group">
                <button @click="fetchContacts">1페이지 연락처 조회</button>
            </div>
            <div class="form-group">
                <input type="text" v-model="name" placeholder="이름을 입력합니다."/>
                <input type="text" v-model="tel" placeholder="전화번호를 입력합니다."/>
                <input type="text" v-model="address" placeholder="주소를 입력합니다"/>
                <button @click="addContact">연락처 1건 추가</button>
            </div>
            <div class="form-group">
                <input type="text" v-model="no" />
                <button @click="fetchContactOne"> 연락처 1건 조회</button>
            </div>
            <div class="form-group">
                <input type="text" v-model="name" placeholder="이름을 입력합니다."/>
                <input type="text" v-model="tel" placeholder="전화번호를 입력합니다."/>
                <input type="text" v-model="address" placeholder="주소를 입력합니다"/>
                <button @click="updateContact">수정</button>
            </div>            
            <div class="form-group">
                <input type="text" v-model="no"/>
                <button @click="deleteCotact">삭제</button>
            </div>
            <div class="form-group">
                <input type="text" v-model="no" />
                <input type="file" ref="photofile" name="photo" />
                <button @click="changePhoto">파일변경</button>
            </div>
        </div>
        <span>JSON 출력</span>
        <div id="result" class="container">
            <xmp>{{result}}</xmp>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
//main.js에 import 하였기 때문에 
// fetchContactOne : function(){
//     this.$axios.get('/api/contacts/' + this.no)
//도 정상 작동한다.

export default {
    name : "app",
    data(){
        return {
            no : 0,
            name : '',
            tel : '',
            address : '',
            result : null
        }
    },
    methods: {
        fetchContacts : function(){
            axios({
                method : 'GET',
                url : '/api/contacts',
                params : {
                    pageno : 1,
                    pagesize : 5
                }
            })
            // axios.get('/api/contacts', {
            //     params :  {
            //         pageno : 1,
            //         pagesize : 5
            //     }
            // })
            // .then(...)
            // .catch(...)
            .then((response) => {
                console.log(response);
                this.result = response.data;
            })
            .catch((ex) => {
                console.log("ERRO!!!!:", ex);
            })
        },
        addContact : function(){
            axios.post('/api/contacts',{
                name : this.name,
                tel : this.tel,
                address : this.address
            })
            .then((response) => {
                console.log(response);
                this.result = response.data;
                this.no = response.data.no;
            })
            .catch((ex) => {
                console.log("ERROR!!!:",ex);
            })
        },
        fetchContactOne : function(){
            //axios.get('/api/contacts/' + this.no)
            this.$axios.get('/api/contacts/' + this.no)
            .then((response) => {
                console.log(response);
                this.result = response.data;
            })
        },
        updateContact : function(){
            axios.put('/api/contacts/' + this.no, {
                name : this.name,
                tel : this.tel,
                address : this.address
            })
            .then((response) => {
                console.log(response);
                this.name = '';
                this.tel = '';
                this.address = '';
                this.result = response.data;
            })
            .catch((ex) => {
                console.log("ERROR!!!:",ex);
            })
        },
        deleteCotact : function(){
            axios.delete('/api/contacts/' + this.no)
            .then((response) => {
                console.log(response);
                this.no = 0;
                this.result = response.data;
            })
            .catch((ex) => {
                console.log("ERROR!!!:",ex);
            })            
        },
        changePhoto : function(){
            //axios를 이용해서 파일 업로드 기능을 구현하기 위해서
            //<input type="file">... 필드를 직접 참조해야한다.
            //ref라는 옵션을 사용하여 이 필드를 직접 참조할수 있다.
            
            //FormData 객체를 생성하고 this.$refs.photofile와 같이
            //ref 옵션을 이용해 파일 필드를 직접 참조한다.
            //이 필드의 값을 FormData 객체에 추가한 뒤 서버로 요청하면 된다.

            var data = new FormData();
            var file = this.$refs.photofile.files[0];
            data.append('photo', file);

            axios.post('/api/contacts/' + this.no + '/photo', data)
            .then((response) => {
                this.result = response.data;
            })
            .catch((ex) => {
                console.log("ERROR!!!:",ex);
            })              
        }
    }
}
</script>

<style>
@import url("https://cnd.bootcss.com/bootstrap/3.3.5/css/bootstrap.css");

#app{
    font-family: 'Avenir', Arial, Helvetica, sans-serif;
    -webkit-font-smoothing : antialiased;
    -moz-osx-font-smoothing : grayscale;
    text-align: left;
    color: #2c3e50;
    margin-top: 60px;
}
.container{
    border: solid 1px gray;
    padding: 10px;
    margin-bottom: 10px;
}
#result{
    text-align: left;
    padding: 20px;
    border: solid 1px black;
}
.form-group{
    border: dashed 1px gray;
    padding: 5px 5px 5px 20;
}
</style>

