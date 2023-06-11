<script setup>
import { useTeamStore } from '../../stores/TeamStore';

let team = useTeamStore()
</script>
<template>
     <header class="flex justify-between mt-3">
        <div>
            <button class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-5 rounded disabled:bg-gray-400"
                :disabled="!team.spotsRemaining">Add Member ({{ team.spotsRemaining }} spots left)</button>
        </div>
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