<script setup>
import { useTeamStore } from '../../stores/TeamStore';
import AddMemberModal from './AddMemberModal.vue';

let team = useTeamStore()
</script>
<template>
    <header class="flex justify-between mt-3">
        <AddMemberModal />
        <div>
            <h3 class="inline-flex items-center text-3xl relative">
                <img src="@/assets/images/bts-logo.png" alt="bts-logo" class="w-12 h-10 mr-2">
                {{ team.name }}
                <div
                    class="bg-purple-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2">
                    {{ team.spots }}</div>
            </h3>
        </div>
    </header>
</template>