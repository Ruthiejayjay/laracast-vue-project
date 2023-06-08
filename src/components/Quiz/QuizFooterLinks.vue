<template>
    <div>
        <h5>{{ quiz.name }}</h5>
        <ul>
            <li><a href="#" style="color: aquamarine; text-decoration: none;">Get a Job</a></li>
            <li><a href="#" style="color: aquamarine; text-decoration: none;">Contact Us</a></li>
        </ul>
    </div>
</template>
<script setup>
import { inject } from 'vue';

let quiz = inject('quiz')
</script>