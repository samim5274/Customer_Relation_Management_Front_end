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
                <main class="flex-1 min-w-0 bg-gray-50 dark:bg-[#0C1326] px-4 sm:px-6 lg:px-8 py-6">
                    <!-- Header -->
                    <div class="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h1 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">Reference</h1>
                            <p class="text-sm text-slate-600 dark:text-slate-300">Refer to earn more point</p>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <!-- Left: form -->
                        <leftSection :users="users" @userCreated="fetchedUsers" />
                        <!-- Right: form -->
                        <rightSection :users="users" />
                    </div>
                </main>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import { ref, onMounted, } from 'vue';
import { useRouter } from "vue-router";
import api from "../../../services/api";

import Navbar from "./navbar.vue";
import Header from "./header.vue";
import Message from '../../Message/message.vue'

import rightSection from './user-list-right.vue';
import leftSection from './user-list-left.vue';

const sidebarOpen = ref(false);
const active = ref("dashboard");
const router = useRouter();
const successMsg = ref('');
const errorMsg = ref('');





// const rightRef = ref(null);

// function handleUserCreated() {
//     rightRef.value?.fetchedUsers();
// }









// fetch user
const users = ref([]);
const loadingUsers = ref(false);
// fetch all admin and customer
async function fetchedUsers() {
    loadingUsers.value = true;
    try {
        const res = await api.get('/customer/users');
        if (res.data?.success) {
        users.value = res.data.data;
        }
    } catch (err) {
        console.error(err);
    } finally {
        loadingUsers.value = false;
    }
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

function onSearch(q) {
    console.log("search:", q);
}



/* ESC to close drawer */
onMounted(() => {

    fetchedUsers();

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

<style scoped>

</style>