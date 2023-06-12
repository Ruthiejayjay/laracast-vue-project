<script setup>
import Modal from '../Modal.vue';
import { ref } from "vue";
import { useTeamStore } from '../../stores/TeamStore';

let team = useTeamStore()
let showModal = ref(false);
</script>
<template>
    <div>
        <button class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-5 rounded disabled:bg-gray-400"
            :disabled="!team.spotsRemaining" @click="showModal = true">Add Member ({{ team.spotsRemaining }} spots
            left)</button>
    </div>
    <Teleport to="body">
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
    </Teleport>
</template>