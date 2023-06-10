<script setup>
import TeamHeader from '../components/Team/TeamHeader.vue';
import TeamMember from '../components/Team/TeamMember.vue';
import team from '@/team.json'
</script>
<template>
   <TeamHeader :team="team" />
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
            <p class="text-right text-gray-600 italic" v-show="team.members.length === team.spots">There are no remaining spots. Upgrade to add more.</p>
        </div>
    </div>
    <footer class="mt-12 bg-gray-100 py-4 text-center text-black">
        <h5 class="font-semibold text-lg">
            {{ team.name }} - {{ team.spots }} Member Team
        </h5>
    </footer>
</template>