<script setup>
import { ref } from 'vue';
import TabbalbleTextarea from '../components/TabbableTextarea.vue'
import { useFlash } from '../composables/useFlash';
import { counter } from '../stores/CounterStore';
let { flash } = useFlash();
let comment = ref('test value');
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>The current count is {{ counter.count }}</p>
    <main>
      <p>
        <button @click="flash('Yah!', 'It Works On About Page', 'info')">Click Me</button>
      </p>
      <form>
        <TabbalbleTextarea v-model="comment" style="width: 150%; height: 300px;" />
      </form>
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
