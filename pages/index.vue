<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <NuxtLink :to="`/todos/${todo.id}`"> {{ todo.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="js">
const router = useRouter()
const { data: todos } = await useFetch('https://jsonplaceholder.typicode.com/todos');

function handleNavigation(id) {
  router.push(`/todos/${id}`)
}
</script>