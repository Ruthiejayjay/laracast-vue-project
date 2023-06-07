<script setup>
import { useFlash } from '../composables/useFlash';
import { useStorage } from '../composables/useStorage'
let { flash } = useFlash();

let song = useStorage('song', 'Boy with luv');
let bias = useStorage('bias', 'RM')
</script>

<template>
    <div class="contact">
        <h1>This is an contact page</h1>
        <main>
            <p>
                <button @click="flash('Test','It Works')">Click Me</button>
            </p>
            <p>
                What is your favorite BTS song? <input type="text" v-model="song">
            </p>
            <p>
                Who is your BTS bias? <input type="text" v-model="bias">
            </p>
        </main>
    </div>
</template>
  
<style>
@media (min-width: 1024px) {
    .contact {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
  