<script setup>
import TeamMember from './TeamMember.vue';
defineProps({
    team: Object 
})
</script>
<template>
    <div class="grid">
        <div class="place-self-center flex flex-col gap-y-3" style="width: 725px;">
            <table class="table-fixed border-spacing-2 border-separate">
                <thead>
                    <th class="text-left px-6 py-6">Name</th>
                    <th class="text-left px-6 py-6">Email</th>
                    <th class="text-left px-6 py-6">Status</th>
                </thead>

                <tbody>
                    <TeamMember v-for="member in team.members" :name=member.name :email=member.email :status=member.status>
                        <img :src="member.img" alt="rm-image" class="w-14 h-14 rounded-full" />
                    </TeamMember>
                </tbody>
            </table>
            <p class="text-right text-gray-600 italic" v-if="team.members.length === team.spots">There are no remaining spots. Upgrade to add more.</p>
        </div>
    </div>
</template>