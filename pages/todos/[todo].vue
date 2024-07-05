<template>
  <div>
    <pre>{{ todoItem }}</pre>
    <button @click="handleFecth">Fetch Next</button>
  </div>
</template>

<script setup lang="js">
import { onMounted } from "vue"
const route = useRoute();
const todoObj = ref(null)

const { data: todoItem } = await useFetch(`https://jsonplaceholder.typicode.com/todos/${route.params.todo}`, {
})

async function handleFecth() {
  const res = await $fetch(`https://jsonplaceholder.typicode.com/todos/${route.params.todo + 1}`);
  console.log(res)
  todoItem.value = res
}


</script>