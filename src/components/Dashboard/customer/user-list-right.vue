<template>
    <section class="lg:col-span-1 space-y-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
  
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <input type="text" v-model="search" class="input" placeholder="Search users..." />
        </div>

        <!-- Table -->
        <div class="overflow-x-auto max-h-[900px]">
            <table v-if="customers && customers.length > 0" class="min-w-full text-sm">
                <!-- Body -->
                <tbody>
                    <tr 
                        v-for="user in filteredCustomers" :key="user.id"
                        class="group border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50/80 dark:hover:bg-[#1e293b]/50 transition-all duration-300">
                        <td class="py-4 px-6">
                            <div class="flex items-center gap-4">

                                <div v-if="user.photo">
                                <img :src="makeImg(user.photo)" alt="User photo" class="h-11 w-11 rounded-2xl object-cover ring-2 ring-slate-200 dark:ring-white/10"/>
                                </div>
                                <div v-else class="h-11 w-11 rounded-xl bg-gradient-to-br from-[#A3D921] to-[#639d00] flex items-center justify-center text-black font-bold shadow-lg shadow-[#A3D921]/10 group-hover:scale-110 transition-transform">
                                    {{ user.name ? user.name.charAt(0).toUpperCase() : 'C' }}
                                </div>

                                <div class="flex flex-col gap-1">
                                <div class="flex items-center gap-3">
                                    <span class="text-sm font-bold text-slate-900 dark:text-white tracking-tight leading-none">
                                        {{ user.name }}
                                    </span>
                                    
                                    <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider border transition-all duration-300 shadow-sm uppercase bg-blue-50 text-blue-700 border-blue-200/50 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20">
                                        <span class="relative flex h-1.5 w-1.5 mr-1.5">
                                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400"></span>
                                            <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                                        </span>
                                        Customer
                                    </span>
                                </div>

                                <div class="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                                    <i class="fa-regular fa-envelope text-[10px] opacity-70"></i>
                                    <span class="text-[11px] font-medium tracking-wide">
                                        {{ user.email }}
                                    </span>
                                </div>
                                <div class="flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
                                    <i class="fa-solid fa-location-dot text-[10px] opacity-70"></i>
                                    
                                    <span class="text-[11px] font-medium tracking-wide truncate max-w-[150px]" :title="user.present_address">
                                        {{ user.present_address || 'No address' }}
                                    </span>
                                </div>
                            </div>
                            </div>
                        </td>
                    </tr>

                    <!-- Empty -->
                    <tr v-if="filteredCustomers.length === 0 && !loading">
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

const loading = ref(false);
const customers = ref([]);
const search = ref("");

async function fetchedCustomers() {
    loading.value = true;
    try {
        const res = await api.get("/customers");
        customers.value = res.data.data || []; 
    } catch (error) {
        console.error("Failed to fetch customers:", error.response?.data || error.message);
    } finally {
        loading.value = false;
    }
}

const filteredCustomers = computed(() => {
    const data = customers.value || [];
    const s = search.value.toLowerCase();
    
    return data.filter(u => 
        String(u.name || '').toLowerCase().includes(s) ||
        String(u.email || '').toLowerCase().includes(s) ||
        String(u.u_id || '').toLowerCase().includes(s)
    );
});

onMounted(() => {
    fetchedCustomers();
});;

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