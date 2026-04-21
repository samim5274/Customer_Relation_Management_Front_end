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
                <main class="min-h-screen bg-gray-50 dark:bg-[#0C1326]">
                    <div class="mx-auto px-4 sm:px-6 lg:px-8 py-5">

                        <!-- Header -->
                        <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
                            <div>
                                <h1 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                                    <i class="fa-solid fa-sitemap text-[#3cabd3]"></i> 
                                    My Network Tree
                                </h1>
                                <p class="text-sm text-gray-600 dark:text-slate-400">
                                    Welcome back, <span class="font-semibold text-[#3cabd3]">{{ authUser?.name }}</span>. Manage your down line members.
                                </p>
                            </div>

                            <div class="flex items-center gap-3">
                                <button 
                                    @click="fetchedUsers"
                                    class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-slate-700 transition-all shadow-sm"
                                >
                                    <i class="fa-solid fa-rotate" :class="{ 'animate-spin': loading }"></i>
                                    Refresh
                                </button>

                                <div class="px-4 py-2 bg-[#A3D921]/10 border border-[#A3D921]/20 rounded-lg">
                                    <p class="text-[10px] uppercase text-gray-500 dark:text-slate-400 font-bold">Balance</p>
                                    <p class="text-sm font-bold text-gray-800 dark:text-gray-100">
                                        ৳{{ authUser?.bonus_balance || '0.00' }}
                                    </p>
                                </div>
                                <!-- <div class="px-4 py-2 bg-[#A3D921]/10 border border-[#A3D921]/20 rounded-lg">
                                    <p class="text-[10px] uppercase text-gray-500 dark:text-slate-400 font-bold">Deposit</p>
                                    <p class="text-sm font-bold text-gray-800 dark:text-gray-100">
                                        ৳{{ authUser?.total_deposit_bonus || '0.00' }}
                                    </p>
                                </div>
                                <div class="px-4 py-2 bg-[#A3D921]/10 border border-[#A3D921]/20 rounded-lg">
                                    <p class="text-[10px] uppercase text-gray-500 dark:text-slate-400 font-bold">Withdraw</p>
                                    <p class="text-sm font-bold text-gray-800 dark:text-gray-100">
                                        ৳{{ authUser?.total_withdraw_bonus || '0.00' }}
                                    </p>
                                </div> -->
                                <div class="px-4 py-2 bg-[#A3D921]/10 border border-[#A3D921]/20 rounded-lg">
                                    <p class="text-[10px] uppercase text-gray-500 dark:text-slate-400 font-bold">Points</p>
                                    <p class="text-sm font-bold text-gray-800 dark:text-gray-100">
                                        ৳{{ authUser?.total_points || '0.00' }}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <!-- Content -->
                        <div class="w-full overflow-x-auto pb-20">
                            <div class="min-w-[800px] flex justify-center mt-2">
                                <UserTreeNode v-if="rootUser" :user="rootUser" />
                                
                                <div v-else-if="loading" class="text-center p-10">
                                    <div class="animate-spin h-10 w-10 border-4 border-[#A3D921] border-t-transparent rounded-full mx-auto"></div>
                                    <p class="mt-4 dark:text-slate-400">Loading Tree...</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import api from '../../../../services/api';

const router = useRouter();

import Message from '../../../Message/message.vue'
import Navbar from '../navbar.vue'
import Header from '../header.vue'

const successMsg = ref("");
const errorMsg = ref("");
const loading = ref(false);
const sidebarOpen = ref(false);
const active = ref("dashboard");
const authUser = ref(null);
const isLoggedIn = ref(false);


import UserTreeNode from './UserTreeNode.vue';
const rootUser = ref(null);

// fetch users
async function fetchedUsers(){
    loading.value = true;
    errorMsg.value = "";

    const token = localStorage.getItem("token");
    if (!token) {
        isLoggedIn.value = false;
        authUser.value = null;
        loading.value = false;
        return;
    }

    try{
        const resUser = await api.get("/user");
        const userData = resUser.data.data || resUser.data;
        if (userData) {
            authUser.value = userData;
            isLoggedIn.value = true;

            // Fetch login user root and root user under all user 
            const resTree = await api.get(`/tree-user-log-root?root_id=${userData.id}`);
            // console.log("Full Tree Response:", resTree.data);
            
            if (resTree.data && resTree.data.data) {
                rootUser.value = resTree.data.data;
            } else {
                rootUser.value = userData;
            }
        }
    } catch (err){
        console.error("User fetched error: ", err);
        errorMsg.value = "Failed to load tree data.";
    } finally {
        loading.value = false;
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