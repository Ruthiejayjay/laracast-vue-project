<script setup>
import TeamHeader from '../components/Team/TeamHeader.vue';
import team from '@/team.json'
import TeamMembers from '../components/Team/TeamMembers.vue';
import TeamFooter from '../components/TeamFooter.vue';
</script>
<template>
   <TeamHeader :team="team" />
    <TeamMembers :team="team" />
   <TeamFooter :team="team" />
</template>