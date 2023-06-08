<template>
    <div>
        <h5>{{ state.name }}</h5>
        <button @click="state.name = 'A New Quiz Name'">Change Quiz Name</button>
        <ul>
            <li><a href="#" style="color: aquamarine; text-decoration: none;">Get a Job</a></li>
            <li><a href="#" style="color: aquamarine; text-decoration: none;">Contact Us</a></li>
        </ul>
    </div>
</template>
<script setup>
import { state } from '../../stores/quizStore';
</script>