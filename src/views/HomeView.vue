<script setup>
import { ref } from 'vue';
import Quiz from '../components/Quiz/Quiz.vue';
let message = ref('Hello RMMM!');

let doSomething = () => {
  alert("doing it now")
};

setTimeout(() => {
  message.value = 'Saranghye Oppa'
}, 2000);


</script>

<template>
  <main>
    <p>{{ message }}</p>
    <p>
      <input type="text" v-model="message">
    </p>
    <p>
      <button @click="doSomething">Click Me</button>
    </p>
    <Quiz :quiz="{ name: 'My First Quiz', questions: [] }" />
  </main>
</template>
