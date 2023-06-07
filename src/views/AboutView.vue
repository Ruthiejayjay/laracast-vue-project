<script setup>
import { useFlash } from '../composables/useFlash';
let { flash } = useFlash();
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <main>
      <p>
        <button @click="flash('Yah!','It Works On About Page', 'info')">Click Me</button>
      </p>
    </main>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
