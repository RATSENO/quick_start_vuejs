<template>
    <div>
        <h1>TodoList</h1>
        <todo-list></todo-list>
    </div>
</template>
<script type="text/javascript">
import TodoList from './TodoList.vue';

export default {
    name : 'todo',
    components : { TodoList }
}

</script>