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
                <main class="min-h-screen bg-slate-50 dark:bg-[#080E1E] transition-colors duration-300">
                    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    
                    <nav class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <div class="flex items-center gap-4">
                        <button @click="$router.back()" class="group h-11 w-11 flex items-center justify-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-indigo-500 transition-all shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-slate-600 dark:text-slate-400 group-hover:text-indigo-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <div>
                            <h1 class="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-none mb-1">Track Order</h1>
                            <div class="flex items-center gap-2">
                            <span class="text-xs font-bold text-slate-400 uppercase tracking-widest">Tracking ID:</span>
                            <code class="text-xs font-black text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-2 py-0.5 rounded cursor-pointer hover:bg-indigo-100 transition" @click="copyTrackingId">
                                #{{ order.reg }}
                            </code>
                            </div>
                        </div>
                        </div>
                        
                        <div class="flex items-center gap-3">
                        <button class="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 transition shadow-sm flex items-center gap-2">
                            <i class="fa-solid fa-download"></i> Invoice
                        </button>
                        <div class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span class="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Live Status</span>
                        </div>
                    </nav>

                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        
                        <div class="lg:col-span-8 space-y-6">
                        
                        <div class="relative overflow-hidden rounded-[2rem] bg-indigo-600 p-8 text-white shadow-2xl shadow-indigo-500/20">
                            <div class="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                            <div class="space-y-2">
                                <p class="text-indigo-100 text-xs font-bold uppercase tracking-[0.2em]">Estimated Arrival</p>
                                <h2 class="text-4xl font-black tracking-tighter">Monday, 24 April</h2>
                                <div class="flex items-center gap-2 text-indigo-100/80">
                                <i class="fa-solid fa-truck-fast text-sm"></i>
                                <span class="text-sm font-medium">In transit via Express Delivery</span>
                                </div>
                            </div>
                            <div class="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 min-w-[160px]">
                                <p class="text-[10px] font-bold uppercase text-indigo-100 mb-1">Global Status</p>
                                <p class="text-xl font-black uppercase tracking-wide italic">Out for Delivery</p>
                            </div>
                            </div>
                            <div class="absolute -right-10 -top-10 h-64 w-64 bg-white/10 rounded-full blur-3xl"></div>
                        </div>

                        <div class="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
                            <div class="flex items-center justify-between mb-10">
                            <h3 class="text-lg font-bold text-slate-900 dark:text-white">Delivery Journey</h3>
                            <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400">5 Steps Completed</span>
                            </div>

                            <div class="relative space-y-10">
                            <div class="absolute left-[15px] top-2 bottom-2 w-[2px] bg-slate-100 dark:bg-slate-800"></div>

                            <div v-for="(step, index) in trackingSteps" :key="index" class="relative flex gap-8 group">
                                <div class="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-500"
                                    :class="step.completed ? 'bg-indigo-600 shadow-lg shadow-indigo-500/40' : step.current ? 'bg-white border-4 border-indigo-600 dark:bg-slate-950 shadow-md' : 'bg-slate-100 dark:bg-slate-800'">
                                <svg v-if="step.completed" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
                                <div v-if="step.current" class="h-2 w-2 rounded-full bg-indigo-600 animate-ping"></div>
                                </div>

                                <div class="flex-1">
                                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                                    <h4 class="font-bold text-base transition-colors" :class="step.completed || step.current ? 'text-slate-900 dark:text-white' : 'text-slate-400'">
                                    {{ step.title }}
                                    </h4>
                                    <span class="text-[10px] font-black uppercase tracking-widest" :class="step.completed ? 'text-indigo-500' : 'text-slate-400'">
                                    {{ step.time }}
                                    </span>
                                </div>
                                <p class="text-sm leading-relaxed" :class="step.completed || step.current ? 'text-slate-500 dark:text-slate-400' : 'text-slate-400/60'">
                                    {{ step.description }}
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div class="lg:col-span-4 space-y-6">
                        
                        <div class="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                            <h4 class="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
                            <i class="fa-solid fa-map-location-dot text-indigo-500"></i> Shipping Address
                            </h4>
                            <div class="space-y-4">
                            <div class="flex items-start gap-3">
                                <div class="h-10 w-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0">
                                <i class="fa-solid fa-user text-slate-400 text-xs"></i>
                                </div>
                                <div>
                                <p class="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-0.5">Receiver</p>
                                <p class="text-sm font-bold text-slate-900 dark:text-white">Md. Arif Ahmed</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-3">
                                <div class="h-10 w-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0">
                                <i class="fa-solid fa-location-dot text-slate-400 text-xs"></i>
                                </div>
                                <div>
                                <p class="text-xs font-bold text-slate-400 uppercase tracking-tighter mb-0.5">Address</p>
                                <p class="text-xs font-semibold text-slate-600 dark:text-slate-300 leading-relaxed">
                                    House #42, Road #07, Block-C, Banasree, Rampura, Dhaka-1219, BD.
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div class="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                            <h4 class="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Courier Partner</h4>
                            <div class="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
                                <div class="h-12 w-12 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center font-black text-indigo-600 shadow-sm italic">
                                PE
                                </div>
                                <div>
                                <p class="text-sm font-black text-slate-900 dark:text-white">Pathao Express</p>
                                <p class="text-[10px] font-bold text-indigo-500">Fastest Delivery</p>
                                </div>
                            </div>
                        </div>

                        <div class="bg-slate-900 dark:bg-indigo-600 rounded-[2.2rem] p-8 shadow-xl shadow-indigo-500/10">
                            <h4 class="text-white font-bold mb-2">Need Assistance?</h4>
                            <p class="text-slate-400 dark:text-indigo-100 text-xs leading-relaxed mb-6">
                            If you have any issues with your delivery or the product, our support is 24/7 available.
                            </p>
                            <button class="w-full py-4 bg-white text-slate-900 dark:text-indigo-700 text-xs font-black uppercase tracking-widest rounded-2xl transition-all shadow-xl hover:bg-slate-50 active:scale-95">
                            Contact Support
                            </button>
                        </div>

                        </div>
                    </div>
                    </div>
                </main>
            </div>
        </div>
        
    </div>


    <FooterSection />
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import api, {makeImg} from '../../../../services/api';

import Navbar from "../navbar.vue";
import Header from "../header.vue";
import Message from '../../../Message/message.vue'
import FooterSection from "../../../e-commerce/footer.vue";

const sidebarOpen = ref(false);
const active = ref("dashboard");

const router = useRouter();
const route = useRoute();

const loading = ref(false);
const successMsg = ref('');
const errorMsg = ref('');


























const order = ref({ reg: 'ORD-5590-QX' });

const trackingSteps = ref([
    {
        title: 'Order Placed',
        time: '18 Apr, 10:30 AM',
        description: 'We have received your order and it is being processed.',
        completed: true,
        current: false
    },
    {
        title: 'Order Confirmed',
        time: '18 Apr, 12:15 PM',
        description: 'Your order has been verified and confirmed by our team.',
        completed: true,
        current: false
    },
    {
        title: 'Shipped',
        time: '19 Apr, 09:00 AM',
        description: 'Your package has been handed over to the courier partner.',
        completed: true,
        current: false
    },
    {
        title: 'Out for Delivery',
        time: 'Today, 02:30 PM',
        description: 'Our delivery agent is on the way to your location.',
        completed: false,
        current: true
    },
    {
        title: 'Delivered',
        time: 'Expected Soon',
        description: 'Package will be handed over to you after verification.',
        completed: false,
        current: false
    }
]);




























const isDark = ref(false);

function applyTheme(dark) {
    isDark.value = dark;
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