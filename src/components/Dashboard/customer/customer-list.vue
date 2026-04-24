<template>
    <div class="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-200">
        <Header
            @open-sidebar="sidebarOpen = true"
            @search="onSearch"
            :isDark="isDark" @toggle-theme="toggleTheme"
        />

        <div class="flex  min-h-[calc(100vh-56px)]">
            <Navbar
                v-model="active"
                :open="sidebarOpen"
                @close="sidebarOpen = false"
            />

            <Message
                :successMsg="successMsg"
                :errorMsg="errorMsg"
                @update:successMsg="successMsg = $event"
                @update:errorMsg="errorMsg = $event"
            />















            <!-- Content -->
            <div class="flex-1 min-w-0">
                <main class="flex-1 min-w-0 bg-gray-50 dark:bg-[#0C1326] px-4 sm:px-6 lg:px-8 py-8">
                    <div class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h1 class="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">Customer Directory</h1>
                            <p class="text-sm text-slate-500 dark:text-slate-400">View, search, and manage your global customer base.</p>
                        </div>
                        <div class="flex items-center gap-3">
                            <div class="relative">
                                <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                                <input 
                                    type="text" 
                                    v-model="search" 
                                    placeholder="Search by name or email..." 
                                    class="pl-9 pr-4 py-2 w-full sm:w-64 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-sm focus:ring-2 focus:ring-blue-500 transition-all outline-none text-slate-900 dark:text-slate-100"
                                />
                            </div>
                        </div>
                    </div>

                    <section class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                        <div class="overflow-x-auto">
                            <table v-if="customers && customers.length > 0" class="w-full text-left border-collapse">
                                <thead>
                                    <tr class="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                        <th class="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Customer Info</th>
                                        <th class="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 hidden md:table-cell">Location</th>
                                        <th class="px-6 py-4 text-right text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Actions</th>
                                    </tr>
                                </thead>

                                <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                                    <tr 
                                        v-for="user in filteredCustomers" :key="user.id"
                                        class="group hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors duration-200">
                                        
                                        <td class="py-4 px-6">
                                            <div class="flex items-center gap-4">
                                                <div class="relative flex-shrink-0">
                                                    <img v-if="user.photo" :src="makeImg(user.photo)" class="h-12 w-12 rounded-xl object-cover ring-2 ring-white dark:ring-slate-800 shadow-md"/>
                                                    <div v-else class="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                                        {{ user.name ? user.name.charAt(0).toUpperCase() : 'C' }}
                                                    </div>
                                                    <span class="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white dark:border-slate-900 bg-emerald-500"></span>
                                                </div>

                                                <div class="flex flex-col min-w-0">
                                                    <div class="flex items-center gap-2">
                                                        <span class="font-semibold text-slate-900 dark:text-slate-100 truncate">
                                                            {{ user.name }}
                                                        </span>
                                                        <span class="hidden sm:inline-flex px-2 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-100 dark:border-blue-500/20">
                                                            PRO
                                                        </span>
                                                    </div>
                                                    <span class="text-xs text-slate-500 dark:text-slate-400 truncate">
                                                        {{ user.email }}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>

                                        <td class="py-4 px-6 hidden md:table-cell">
                                            <div class="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                                <i class="fa-solid fa-location-dot text-xs opacity-50"></i>
                                                <span class="text-xs truncate max-w-[200px]" :title="user.present_address">
                                                    {{ user.present_address || 'Not set' }}
                                                </span>
                                            </div>
                                        </td>

                                        <td class="py-4 px-6 text-right">
                                            <button 
                                                @click="editCustomer(user)"
                                                class="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all shadow-sm"
                                            >
                                                <i class="fa-regular fa-pen-to-square"></i>
                                                <span>Edit</span>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div v-if="filteredCustomers.length === 0 && !loading" class="py-20 text-center">
                                <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                                    <i class="fa-solid fa-user-slash text-slate-400 text-xl"></i>
                                </div>
                                <h3 class="text-slate-900 dark:text-white font-medium">No customers found</h3>
                                <p class="text-slate-500 text-sm">Try adjusting your search criteria.</p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>










            
        </div>
        
    </div>









    












</template>

<script setup>
import { ref, computed, onMounted, h } from 'vue';
import { useRouter } from 'vue-router'
import api, { makeImg } from "../../../services/api.js";

import Navbar from '../admin/admin-navbar.vue';
import Header from '../admin/admin-header.vue';
import Message from '../../Message/message.vue';

const router = useRouter()
const sidebarOpen = ref(false);
const active = ref("dashboard");
const loading = ref(false);
const successMsg = ref('');
const errorMsg = ref('');

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












function editCustomer(user) {
    router.push(`/customer-edit/${user.id}/${user.slug}/${user.sku}`);
}












const isDark = ref(false);

function applyTheme(dark) {
    isDark.value = dark;   // VERY IMPORTANT
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
}

function toggleTheme() {
    applyTheme(!isDark.value);
}

const onSearch = (query) => {
    search.value = query;
};

onMounted(() => {
    fetchedCustomers();

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") sidebarOpen.value = false;
    });

    const saved = localStorage.getItem("theme");

    if (saved === "dark") applyTheme(true);
    else if (saved === "light") applyTheme(false);
    else {
        const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        applyTheme(systemDark);
    }
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