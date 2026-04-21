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
                <main class="flex-1 min-h-screen min-w-0 bg-gray-50 dark:bg-[#0C1326] px-4 sm:px-6 lg:px-8 py-6">

                    <div class="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                        <div>
                            <div class="flex items-center gap-3">
                                <h1 class="text-2xl font-black tracking-tight text-slate-900 dark:text-white">Order Management</h1>
                                <span class="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-bold text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20">
                                    {{ orders.length }} Orders
                                </span>
                            </div>
                            <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Monitor and manage your customer transactions and shipping status.</p>
                        </div>
                    </div>

                    <div class="mb-6 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                        <div class="flex flex-col gap-4 lg:flex-row lg:items-center">
                            
                            <div class="relative flex-1">
                                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">
                                    <i class="fa-solid fa-magnifying-glass h-4 w-4"></i>
                                </div>
                                <input 
                                    type="text" 
                                    v-model="searchQuery" 
                                    placeholder="Search by ID, Customer name or Transaction..." 
                                    class="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition-all focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-indigo-500"
                                />
                            </div>

                            <div class="flex flex-wrap items-center gap-3">
                                <div class="flex items-center gap-2">
                                    <i class="fa-solid fa-filter h-4 w-4 text-slate-400"></i>
                                    <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Status:</span>
                                </div>
                                <select 
                                    v-model="statusFilter" 
                                    class="min-w-[160px] rounded-xl border border-slate-200 bg-slate-50 py-2.5 px-4 text-sm font-semibold text-slate-700 outline-none transition-all focus:border-indigo-500 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:focus:border-indigo-500">
                                    <option value="">All Statuses</option>
                                    <option value="pending">Pending</option>
                                    <option value="confirmed">Confirmed</option>
                                    <option value="processing">Processing</option>
                                    <option value="picked">Picked</option>
                                    <option value="shipped">Shipped</option>
                                    <option value="out for delivery">Out for Delivery</option>
                                    <option value="delivered">Delivered</option>
                                    <option value="cancelled">Cancelled</option>
                                    <option value="failed">Failed</option>
                                    <option value="returned">Returned</option>
                                </select>

                                <button 
                                    @click="resetFilters" 
                                    class="p-2.5 text-slate-400 hover:text-rose-500 transition-colors"
                                    title="Reset Filters">
                                    <i class="fa-solid fa-rotate h-5 w-5"></i>
                                </button>
                            </div>
                        </div>
                    </div>


                    
                    <div class="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                        <div class="overflow-x-auto max-h-[850px]">
                            <table class="w-full text-left border-collapse">
                                <thead class="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                <tr>
                                    <th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Date</th>
                                    <th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Registration</th>
                                    <th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Customer</th>
                                    <th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Amount</th>
                                    <th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Transaction ID</th>
                                    <th class="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                                </tr>
                                </thead>

                                <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                                    <tr v-for="order in filteredOrders" :key="order.id" @click="viewOrderDetails(order)" class="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                                        
                                        <td class="px-6 py-4">
                                            <div class="text-xs text-slate-700 dark:text-slate-300">{{ formatDate(order.date) }}</div>
                                            <div v-if="order.paid_at" class="text-[10px] text-green-600 dark:text-green-400 mt-0.5">
                                                Paid: {{ formatDate(order.paid_at) }}
                                            </div>
                                        </td>

                                        <td class="px-6 py-4">
                                            <span class="font-mono font-bold text-indigo-600 dark:text-indigo-400">{{ order.reg }}</span>
                                        </td>

                                        <td class="px-6 py-4">
                                            <div class="flex items-center gap-3">
                                                <div class="h-9 w-9 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs">
                                                    {{ order.user?.name.substring(0, 2).toUpperCase() }}
                                                </div>
                                                <div>
                                                    <div class="text-sm font-semibold text-slate-900 dark:text-slate-100">{{ order.user?.name }}</div>
                                                    <div class="text-xs text-slate-500 dark:text-slate-400">{{ order.user?.user_id }}</div>
                                                </div>
                                            </div>
                                        </td>

                                        <td class="px-6 py-4 text-sm font-bold text-slate-900 dark:text-slate-100">
                                            {{ order.currency }} ৳ {{ order.amount.toLocaleString() }}
                                        </td>

                                        <td class="px-6 py-4">
                                            <div class="text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded inline-block">
                                                {{ order.transaction_id || 'N/A' }}
                                            </div>
                                        </td>

                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <span 
                                                :class="getStatus(order.status).container" 
                                                class="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider inline-flex items-center gap-2 border border-transparent dark:border-current/10 transition-all duration-300 shadow-sm"
                                            >
                                                <span class="relative flex h-2 w-2">
                                                    <span 
                                                        v-if="order.status.toLowerCase() === 'pending'"
                                                        class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                                                        :class="getStatus(order.status).dot"
                                                    ></span>
                                                    <span 
                                                        class="relative inline-flex rounded-full h-2 w-2"
                                                        :class="getStatus(order.status).dot"
                                                    ></span>
                                                </span>
                                                
                                                {{ order.status }}
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>


                </main>
            </div>
        </div>
        <FooterSection />
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";
import api from '../../../../services/api';

import Navbar from "../navbar.vue";
import Header from "../header.vue";
import Message from '../../../Message/message.vue'
import FooterSection from "../../../e-commerce/footer.vue";

const sidebarOpen = ref(false);
const active = ref("dashboard");

const router = useRouter();

const successMsg = ref('');
const errorMsg = ref('');








// =============================
// Get orders
// =============================
const orders = ref([]);
async function fetchOrders(){
    try{
        const res = await api.get('/customer/orders');
        orders.value = res.data.data;
        // console.log(orders.value);
    } catch(err){
        errorMsg.value = err || "Something is wrong to fetched orders.";
        console.log(err);
    }
}

const formatDate = (date) => new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
const statusConfig = {
    'pending': {
        container: 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400',
        dot: 'bg-amber-500'
    },
    'confirmed': {
        container: 'bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-400',
        dot: 'bg-sky-500'
    },
    'processing': {
        container: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400',
        dot: 'bg-indigo-500'
    },
    'picked': {
        container: 'bg-violet-100 text-violet-700 dark:bg-violet-500/10 dark:text-violet-400',
        dot: 'bg-violet-500'
    },
    'shipped': {
        container: 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400',
        dot: 'bg-blue-500'
    },
    'out for delivery': {
        container: 'bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-400',
        dot: 'bg-orange-500'
    },
    'delivered': {
        container: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400',
        dot: 'bg-emerald-500'
    },
    'cancelled': {
        container: 'bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400',
        dot: 'bg-rose-500'
    },
    'failed': {
        container: 'bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400',
        dot: 'bg-red-600'
    },
    'returned': {
        container: 'bg-slate-100 text-slate-700 dark:bg-slate-500/10 dark:text-slate-400',
        dot: 'bg-slate-500'
    },
    'default': {
        container: 'bg-slate-100 text-slate-700 dark:bg-slate-500/10 dark:text-slate-400',
        dot: 'bg-slate-500'
    }
};

const getStatus = (status) => {
    if (!status) return statusConfig.default;
    const normalizedStatus = status.toLowerCase().trim().replace(/_/g, ' ');
    return statusConfig[normalizedStatus] || statusConfig.default;
};

// =============================
// Filter orders
// =============================
const searchQuery = ref('');
const statusFilter = ref('');

const filteredOrders = computed(() => {
    return orders.value.filter(order => {
        const matchesStatus = !statusFilter.value || 
        order.status.toLowerCase() === statusFilter.value.toLowerCase();
        const search = searchQuery.value.toLowerCase().trim();
        if (!search) return matchesStatus;
        const matchesSearch = 
            (order.reg?.toLowerCase().includes(search)) ||
            (order.user?.name?.toLowerCase().includes(search)) ||
            (String(order.user?.user_id || '').includes(search)) ||
            (order.transaction_id?.toLowerCase().includes(search)) ||
            (order.status?.toLowerCase().includes(search));
        return matchesStatus && matchesSearch;
    });
});

const resetFilters = () => {
    searchQuery.value = '';
    statusFilter.value = '';
};









function viewOrderDetails(order){
    router.push(`/orders-details/${order.reg}/${order.slug}`);
}
















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
    fetchOrders();






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