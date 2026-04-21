<template>
    <section class="lg:col-span-1 space-y-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
  
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <input type="text" v-model="search" class="input" placeholder="Search users..." />
        </div>

        <!-- Table -->
        <div class="overflow-x-auto max-h-[1100px]">
            <table class="min-w-full text-sm">
                <!-- Body -->
                <tbody>
                    <tr 
                        v-for="user in filteredUsers" 
                        :key="user.id"
                        class="group border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50/80 dark:hover:bg-[#1e293b]/50 transition-all duration-300">
                        <td class="py-4 px-6">
                            <div class="flex items-center gap-4">

                                <div v-if="user.photo">
                                <img :src="user.photo ? makeImg(user.photo) : '/images/avatar.png'" alt="User photo" class="h-11 w-11 rounded-2xl object-cover ring-2 ring-slate-200 dark:ring-white/10"/>
                                </div>
                                <div v-else class="h-11 w-11 rounded-xl bg-gradient-to-br from-[#A3D921] to-[#639d00] flex items-center justify-center text-black font-bold shadow-lg shadow-[#A3D921]/10 group-hover:scale-110 transition-transform">
                                    {{ user.name.charAt(0).toUpperCase() }}
                                </div>

                                <div class="flex flex-col gap-1">
                                <div class="flex items-center gap-3">
                                    <span class="text-sm font-bold text-slate-900 dark:text-white tracking-tight leading-none">
                                        {{ user.name }}
                                    </span>
                                    
                                    <span 
                                        class="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider border transition-all duration-300 shadow-sm"
                                        :class="{
                                            'bg-emerald-50 text-emerald-700 border-emerald-200/50 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20': user.role === 'admin',
                                            'bg-blue-50 text-blue-700 border-blue-200/50 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20': user.role === 'customer'
                                        }">
                                        <span class="relative flex h-1.5 w-1.5 mr-1.5">
                                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" :class="user.role === 'admin' ? 'bg-emerald-400' : 'bg-blue-400'"></span>
                                            <span class="relative inline-flex rounded-full h-1.5 w-1.5" :class="user.role === 'admin' ? 'bg-emerald-500' : 'bg-blue-500'"></span>
                                        </span>
                                        {{ user.role }}
                                    </span>
                                </div>

                                <div class="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                                    <i class="fa-regular fa-envelope text-[10px] opacity-70"></i>
                                    <span class="text-[11px] font-medium tracking-wide">
                                        {{ user.email }}
                                    </span>
                                </div>
                                <div class="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                                    <i class="fa-solid fa-id-card-clip text-[10px] opacity-70"></i>
                                    <span class="text-[11px] font-medium tracking-wide">
                                        {{ user.user_id }}
                                    </span>
                                </div>
                            </div>
                            </div>
                        </td>

                        <td class="py-4 px-6">
                            <div class="flex items-center gap-2">
                                <div v-if="user.left_child_id || user.right_child_id" class="flex -space-x-2">
                                    <div v-if="user.left_child_id" class="h-6 w-6 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[8px] font-bold" title="Left Occupied">L</div>
                                    <div v-if="user.right_child_id" class="h-6 w-6 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[8px] font-bold" title="Right Occupied">R</div>
                                </div>
                                <span v-else class="text-[10px] text-slate-400 italic font-medium">No direct down line</span>
                            </div>
                        </td>
                    </tr>

                    <!-- Empty -->
                    <tr v-if="filteredUsers.length === 0">
                    <td colspan="3" class="text-center py-6 text-slate-400">
                        No users found
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, h } from 'vue';
import api, { makeImg } from "../../../services/api.js";


const props = defineProps({
    users: Array
});


const search = ref("");
const filteredUsers = computed(() => {
    if (!props.users) return [];

    return props.users.filter(user =>
        user.name?.toLowerCase().includes(search.value.toLowerCase()) ||
        user.email?.toLowerCase().includes(search.value.toLowerCase()) ||
        user.user_id?.toLowerCase().includes(search.value.toLowerCase())
    );
});

</script>

<style scoped>
.input{
    @apply w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 placeholder:text-slate-400
        focus:outline-none focus:ring-2 focus:ring-indigo-500
        dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100;
}
.inputDisabled{
    @apply w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-600
        dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300;
}
</style>