<script setup>
import TeamHeader from '../components/Team/TeamHeader.vue';
import TeamMembers from '../components/Team/TeamMembers.vue';
import TeamFooter from '../components/Team/TeamFooter.vue';
import Modal from '../components/Modal.vue';
import { useTeamStore } from '../stores/TeamStore';
import { ref } from "vue";

let team = useTeamStore();
team.fill();
setTimeout(() => {
   team.grow(8)
}, 2000);
let showModal = ref(false);

</script>
<template>
   <TeamHeader @add="showModal = true" />
   <TeamMembers />
   <TeamFooter />
   <Modal :show="showModal" @close="showModal = false">
      <template #default>
         <p>Need to add a new member to your team?</p>
         <form class="mt-6">
            <div class="flex gap-2">
               <input type="email" placeholder="Email Address..." class="flex-1">
               <button>Add</button>
            </div>
         </form>
      </template>

   </Modal>
</template>
