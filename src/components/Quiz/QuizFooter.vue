<template>
    <h4 style="margin-top: 20px;">Quiz Footer</h4>
    <QuizFooterLinks />
</template>
<script setup>
import QuizFooterLinks from './QuizFooterLinks.vue';

defineProps({
    quiz: Object
});
</script>