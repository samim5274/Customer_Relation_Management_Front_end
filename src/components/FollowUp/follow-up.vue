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
                v-if="successMsg || errorMsg"
                :successMsg="successMsg"
                :errorMsg="errorMsg"
                @update:successMsg="successMsg = $event"
                @update:errorMsg="errorMsg = $event"
            />

            <!-- Content -->
            <div class="flex-1 min-w-0">






<main class="min-h-screen bg-gray-50 dark:bg-[#0C1326]">
    <div class="mx-auto">

        <!-- Content -->
        <div class="flex-1 min-w-0">
            <main class="min-h-screen bg-gray-50 dark:bg-[#0C1326]">
                <div class="mx-auto px-4 sm:px-6 lg:px-8 py-5">

                    <!-- Header -->
                    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h1 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100">
                            Customer Folow Up
                            </h1>
                            <p class="text-sm text-gray-600 dark:text-slate-400">Manage all customer and deals</p>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">

                        <!-- LEFT SIDEBAR -->
                        <aside class="lg:col-span-1">
                            <div class="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                            
                                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                                    <input type="text" v-model="search" class="input" placeholder="Search users..." />
                                </div>

                                <div v-if="loading" class="p-4 text-center text-slate-500">
                                    Loading...
                                </div>
                                <div v-else-if="filteredCustomers.length === 0" class="p-4 text-center text-slate-500">
                                    No customers found for "{{ search }}"
                                </div>

                                <div class="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
                                    <button
                                    v-for="customer in filteredCustomers"
                                    :key="customer.id"
                                    @click="activeTab = customer.id"
                                    class="flex items-center gap-2 px-4 py-2 rounded-xl text-sm whitespace-nowrap transition"
                                    :class="activeTab === customer.id
                                        ? 'bg-indigo-600 text-white shadow'
                                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'"
                                    >
                                    <div class="relative flex-shrink-0">
                                        <img v-if="customer.photo" :src="makeImg(customer.photo)" class="h-12 w-12 rounded-xl object-cover ring-2 ring-white dark:ring-slate-800 shadow-md"/>
                                        <div v-else class="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                            {{ customer.name ? customer.name.charAt(0).toUpperCase() : 'C' }}
                                        </div>
                                        <span class="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white dark:border-slate-900 bg-emerald-500"></span>
                                    </div>
                                    <span>{{ customer.name }}</span>
                                    </button>
                                </div>

                            </div>
                        </aside>

                        <!-- RIGHT CONTENT -->
                        <section class="lg:col-span-3">
                            <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900 min-h-[400px]">

                                Active box

                            </div>
                        </section>

                    </div>

                    <!-- pagination -->
                    <div class="flex flex-col gap-2 mt-4 border-t border-slate-200 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
                        <p class="text-xs text-slate-500">
                            Showing
                            <span class="font-semibold text-slate-700">{{ fromItem }}</span>
                            –
                            <span class="font-semibold text-slate-700">{{ toItem }}</span>
                            of
                            <span class="font-semibold text-slate-700">{{ total }}</span>
                        </p>

                        <div class="flex flex-wrap items-center justify-end gap-2">
                            <!-- First -->
                            <button
                                @click="fetchedCustomers(1)"
                                :disabled="currentPage === 1 || loading"
                                class="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40">
                                <i class="fa-solid fa-angles-left"></i>
                            </button>

                            <!-- Prev -->
                            <button
                                @click="fetchedCustomers(Math.max(1, currentPage - 1))"
                                :disabled="currentPage === 1 || loading"
                                class="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40">
                                <i class="fa-solid fa-chevron-left"></i>
                            </button>

                            <!-- Pages -->
                            <button
                                v-for="page in visiblePages"
                                :key="String(page)"
                                :disabled="page === '...' || loading"
                                @click="page !== '...' && fetchedCustomers(page)"
                                class="rounded-lg border px-3 py-1.5 text-xs font-semibold"
                                :class="[
                                    page === '...'
                                    ? 'border-slate-200 bg-white dark:bg-slate-900 text-slate-400 cursor-default'
                                    : currentPage === page
                                        ? 'border-slate-900 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900'
                                        : 'border-slate-200 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-100 hover:bg-slate-50'
                                ]">
                                {{ page }}
                            </button>

                            <!-- Next -->
                            <button
                                @click="fetchedCustomers(Math.min(lastPage, currentPage + 1))"
                                :disabled="currentPage === lastPage || loading"
                                class="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40">
                                <i class="fa-solid fa-angle-right"></i>
                            </button>

                            <!-- Last -->
                            <button
                                @click="fetchedCustomers(lastPage)"
                                :disabled="currentPage === lastPage || loading"
                                class="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40">
                                <i class="fa-solid fa-angles-right"></i>
                            </button>
                        </div>
                    </div>

                </div>
            </main>
        </div>
        

    </div>
</main>





            </div>
        </div>
        
    </div>
</template>

<script setup>
import { onMounted, ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
import api, { makeImg } from "../../services/api";

import Navbar from '../Dashboard/admin/admin-navbar.vue';
import Header from '../Dashboard/admin/admin-header.vue';
import Message from '../Message/message.vue';

const sidebarOpen = ref(false);
const active = ref("dashboard");

const router = useRouter();

const successMsg = ref('');
const errorMsg = ref('');
const loading = ref(false);
















const customers = ref([]);
const search = ref("");

const currentPage = ref(1);
const lastPage = ref(1);
const fromItem = ref(0);
const toItem = ref(0);
const total = ref(0);


async function fetchedCustomers(page = 1) {
    loading.value = true;

    try {
        const params = {
            page: page,
            search: search.value || ""
        };

        const res = await api.get('/follow-up/customers', { params });

        customers.value = res.data.data.data;

        currentPage.value = res.data.data.current_page;
        lastPage.value = res.data.data.last_page;
        fromItem.value = res.data.data.from;
        toItem.value = res.data.data.to;
        total.value = res.data.data.total;

    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false;
    }
}

const filteredCustomers = computed(() => {
    return customers.value || [];
});


const visiblePages = computed(() => {
    const pages = [];
    const range = 2;

    for (let i = 1; i <= lastPage.value; i++) {
        if (
            i === 1 ||
            i === lastPage.value ||
            (i >= currentPage.value - range && i <= currentPage.value + range)
        ) {
            pages.push(i);
        } else if (pages[pages.length - 1] !== "...") {
            pages.push("...");
        }
    }

    return pages;
});


let debounceTimeout;

watch(search, (newVal) => {
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        fetchedCustomers(1);
    }, 300);
});






// Open customer following message
const activeTab = ref(null);











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

/* ESC to close drawer */
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
});
</script>

<style>

</style>