<script setup>
defineProps ({
    name: String,
    email: String,
    status: String,
    image: String
})
</script>
<template>
    <tr class="bg-gray-100 px-12">
        <td class="text-xl text-gray-500 font-medium flex items-center gap-x-4 px-6 py-4">
            <slot />
            <!-- <img src="@/assets/images/rm.jpg" alt="rm-image" class="w-14 h-14 rounded-full"> -->
            {{ name }}
        </td>
        <td class="text-gray-500 px-6 py-4">{{ email }}</td>
        <td class="px-6 py-4">
            <button class="text-purple-500 text-xl">{{ status }}</button>
        </td>
    </tr>
</template>