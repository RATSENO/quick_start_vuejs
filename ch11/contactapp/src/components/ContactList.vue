<template>
    <div>
        <p class="addNew">
            <button class="btn btn-primary" @click="addContact()">새로운 연락처 추가하기</button>
        </p>
        <div id="example">
        <table id="list" class="table table-striped table-borderd table-hover">
            <thead>
                <tr>
                   <th>이름</th> 
                   <th>전화번호</th> 
                   <th>주소</th> 
                   <th>사진</th> 
                   <th>편집/삭제</th> 
                </tr>
            </thead>
            <tbody id="contacts">
                <tr v-for="contact in contactlist.contacts">
                    <td>{{contact.name}}</td>
                    <td>{{contact.tel}}</td>
                    <td>{{contact.address}}</td>
                    <td><img class="thumbnail" :src="contact.photo" @click="editPhoto(contact.no)" /></td>
                    <td>
                        <button class="btn btn-primary" @click="editContact(contact.no)">편집</button>
                        <button class="btn btn-primary" @click="deleteContact(contact.no)">삭제</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>
<script>
import eventBus from '../EventBus';

export default {
    name : 'contactList',
    props : ['contactlist'],
    methods: {
        addContact : function(){
            eventBus.$emit("addContactForm");
        },
        editContact : function(no){
            eventBus.$emit("editContactForm", no);
        },
        deleteContact : function(no){
            if(confirm("정말로 삭제하시겠습니까?")==true){
                eventBus.$emit("deleteContact", no);
            }
        },
        editPhoto : function(no){
            eventBus.$emit("editPhoto", no);
        }
    },
}
</script>

<style scoped>
.addnew { 
    margin:10px auto;
    max-width: 820px;
    min-width: 820px;
    padding:40px 0px 0px 0px;
    text-align: left; 
    }
/* 
    relative (상대위치)
    기본 위치(static으로 지정되었을 때의 위치)를 기준으로 좌표 프로퍼티(top, bottom, left, right)를 사용하여 위치를 이동시킨다.
    static을 선언한 요소와 relative를 선언한 요소의 차이점은 좌표 프로퍼티의 동작 여부뿐이며 그외는 동일하게 동작한다.
 */
#example { 
    margin:10px auto; 
    max-width: 820px; 
    min-width: 820px;
    padding:0px; 
    position:relative; 
    font: 13px "verdana"; 
    }
#example .long{ 
    width: 100%; 
    }
#example .short{ 
    width: 50%; 
    }
/* 
    box-sizing 프로퍼티는 width, height 프로퍼티의 대상 영역을 변경할 수 있다.
    content-box : width, height 프로퍼티 값은 content 영역을 의미한다. (기본값)
    border-box : width, height 프로퍼티 값은 content 영역, padding, border가 포함된 값을 의미한다.
 */
#example input, textarea, select{ 
    box-sizing: border-box;
    border:1px solid #BEBEBE; 
    padding: 7px; 
    margin:0px;
    outline: none;  
    }
#list  { 
    width: 800px; 
    font: 13px "verdana";  
    }
#list thead tr { 
    color:yellow; 
    background-color: purple; 
    }
/* 
    :nth-child(n)
    셀렉터에 해당하는 모든 요소 중 앞에서 n번째 자식인 요소를 선택한다. 

    :nth-last-child(n)
    셀렉터에 해당하는 모든 요소 중 뒤에서 n번째 자식인 요소를 선택한다.
*/
#list th:nth-child(5n), #list td:nth-child(5n) { 
    width:150px; 
    }
#list th:nth-child(5n+1), #list td:nth-child(5n+1) { 
    width:200px; 
    }
#list th:nth-child(5n+2), #list td:nth-child(5n+2) { 
    width:150px; 
    }
#list th:nth-child(5n+3), #list td:nth-child(5n+3) { 
    width:250px; 
    }
#list th:nth-child(5n+4), #list td:nth-child(5n+4) { 
    width:60px; 
    }
#list th { 
    padding:10px 5px 10px 5px; 
    }
#list tr { 
    border-bottom: solid 1px black; 
    }
#list td, #list th {  
    text-align:center; 
    vertical-align:middle; 
    }
img.thumbnail { 
    width:48px; 
    height: 48px; 
    margin-top: auto; 
    margin-bottom: auto; 
    display: block; 
    cursor:pointer; 
    }
</style>