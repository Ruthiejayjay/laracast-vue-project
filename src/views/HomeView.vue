<script setup>
import { ref } from 'vue';
import Quiz from '../components/Quiz/Quiz.vue';
import {state} from '../stores/quizStore'
let message = ref('Hello RMMM!');

let doSomething = () => {
  alert("doing it now")
};

setTimeout(() => {
  message.value = 'Saranghye Oppa'
}, 4000);



</script>

<template>
  <main>
    <p class="text-3xl font-bold underline">{{ message }}</p>
    <p>
      <input class="text-black" type="text" v-model="message">
    </p>
    <p>
      <button @click="doSomething">Click Me</button>
    </p>
    <Quiz :quiz="state" />
  </main>
</template>
