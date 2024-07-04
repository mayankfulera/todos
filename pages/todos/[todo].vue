<template>
  <div>
    <pre>{{ todoItem }}</pre>
  </div>
</template>

<script setup lang="js">
import { onMounted } from "vue"
const route = useRoute();

const { data: todoItem } = await useFetch(`https://jsonplaceholder.typicode.com/todos/${route.params.todo}`, {

})


</script>