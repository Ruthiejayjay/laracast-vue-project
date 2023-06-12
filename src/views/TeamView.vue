<script setup>
import TeamHeader from '../components/Team/TeamHeader.vue';
import TeamMembers from '../components/Team/TeamMembers.vue';
import TeamFooter from '../components/Team/TeamFooter.vue';
import { useTeamStore } from '../stores/TeamStore';

let team = useTeamStore();
team.fill();
setTimeout(() => {
   team.grow(8)
}, 2000);


</script>
<template>
   <TeamHeader />
   <TeamMembers />
   <TeamFooter />

</template>
