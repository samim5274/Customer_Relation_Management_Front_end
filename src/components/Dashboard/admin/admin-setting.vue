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
                            ⚙️ Settings
                            </h1>
                            <p class="text-sm text-gray-600 dark:text-slate-400">Manage all complaint and software settings</p>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="mt-6 grid grid-cols-1 lg:grid-cols-4 gap-6">

                        <!-- LEFT SIDEBAR -->
                        <aside class="lg:col-span-1">
                            <div class="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">

                            <div class="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
                                <button
                                v-for="item in menus"
                                :key="item.key"
                                @click="activeTab = item.key"
                                class="flex items-center gap-2 px-4 py-2 rounded-xl text-sm whitespace-nowrap transition"
                                :class="activeTab === item.key
                                    ? 'bg-indigo-600 text-white shadow'
                                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'"
                                >
                                <span><i :class="item.icon"></i></span>
                                <span>{{ item.label }}</span>
                                </button>
                            </div>

                            </div>
                        </aside>

                        <!-- RIGHT CONTENT -->
                        <section class="lg:col-span-3">
                            <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900 min-h-[400px]">

                                <!-- General -->
                                <div v-if="activeTab === 'general'">
                                    <settingGeneral />
                                </div>

                                <!-- Theme -->
                                 <div v-if="activeTab === 'theme'">
                                    <settingTheme />
                                 </div>

                                <!-- Notification -->
                                <div v-if="activeTab === 'notification'">
                                    <settingNotification />
                                </div>

                                <!-- Privacy & Policy -->
                                <div v-if="activeTab === 'privacyAndPolicy'">
                                    <privacyAndPolicy />
                                </div>

                                <!-- About -->
                                <div v-if="activeTab === 'about'">
                                    <settingAbout />
                                </div>

                                <!-- Security -->
                                <div v-if="activeTab === 'security'">
                                    <settingSecurity />
                                </div>

                            </div>
                        </section>

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
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import Navbar from './admin-navbar.vue';
import Header from './admin-header.vue';
import Message from '../../Message/message.vue'

const sidebarOpen = ref(false);
const active = ref("dashboard");

const router = useRouter();

const successMsg = ref('');
const errorMsg = ref('');









import settingGeneral from "./setting-general.vue";
import settingAbout from "./setting-about.vue";
import privacyAndPolicy from "./setting-privacy.vue";
import settingSecurity from "./setting-security.vue";
import settingNotification from "./setting-notification.vue";
import settingTheme from "./setting-theme.vue";






const activeTab = ref('general')

const menus = [
    { key: 'general', label: 'General', icon: 'fa-solid fa-gear' },
   
    { key: 'theme', label: 'Theme', icon: 'fa-brands fa-affiliatetheme' },
    { key: 'notification', label: 'Notification', icon: 'fa-solid fa-bell' },
    { key: 'security', label: 'Security', icon: 'fa-solid fa-lock' },
    { key: 'privacyAndPolicy', label: 'Privacy & Policy', icon: 'fa-solid fa-shield-halved' },
    { key: 'about', label: 'About', icon: 'fa-solid fa-info' },
]

















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