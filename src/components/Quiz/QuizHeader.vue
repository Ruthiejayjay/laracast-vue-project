<template>
    <h1 style="margin-top: 15px;">{{ state.name }}</h1>
    <h5>Welcome to your first quiz. How do you think you'll do</h5>
</template>
<script setup>
import { state } from '../../stores/quizStore';
</script>