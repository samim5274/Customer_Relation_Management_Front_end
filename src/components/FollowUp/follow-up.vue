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
                    <div class="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                        <aside class="lg:col-span-4 xl:col-span-3">
                            <div class="sticky top-24 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
                                
                                <div class="mb-4">
                                    <div class="relative">
                                        <i class="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
                                        <input type="text" v-model="search" 
                                            class="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border-none rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 transition" 
                                            placeholder="Search users..." />
                                    </div>
                                </div>

                                <div v-if="loading" class="p-4 text-center text-slate-500 animate-pulse">
                                    <i class="fa-solid fa-spinner fa-spin mr-2"></i> Loading...
                                </div>
                                <div v-else-if="filteredCustomers.length === 0" class="p-4 text-center text-slate-400 text-sm italic">
                                    No customers found
                                </div>

                                <div class="flex flex-col gap-2 max-h-full overflow-y-auto custom-scrollbar pr-1">
                                    <button
                                        v-for="customer in filteredCustomers"
                                        :key="customer.id"
                                        @click="activeTab = customer.id"
                                        class="w-full flex items-center gap-3 p-2.5 rounded-xl text-sm transition-all duration-200 group text-left"
                                        :class="activeTab === customer.id
                                            ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 dark:shadow-none'
                                            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'"
                                    >
                                        <div class="relative flex-shrink-0">
                                            <img v-if="customer.photo" :src="makeImg(customer.photo)" class="h-11 w-11 rounded-xl object-cover ring-2 ring-white dark:ring-slate-700 shadow-sm"/>
                                            <div v-else class="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-base shadow-md">
                                                {{ customer.name ? customer.name.charAt(0).toUpperCase() : 'C' }}
                                            </div>
                                            <span class="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white dark:border-slate-900 bg-emerald-500"></span>
                                        </div>
                                        <div class="flex-1 min-w-0">
                                            <p class="font-semibold truncate">{{ customer.name }}</p>
                                            <p class="text-[11px] opacity-70 truncate">{{ customer.phone || 'No phone' }}</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </aside>

                        <section class="lg:col-span-8 xl:col-span-9">
                            <div class="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 overflow-hidden h-[119vh] flex flex-col">
                                
                                <div v-if="selectedCustomer" class="flex flex-col h-full animate-in fade-in slide-in-from-bottom-2 duration-500">
                                    
                                    <div class="sticky top-0 z-30 p-6 border-b border-slate-100 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
                                        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                            <div class="flex items-center gap-5">
                                                <div class="relative flex-shrink-0">
                                                    <img v-if="selectedCustomer.photo" :src="makeImg(selectedCustomer.photo)" class="h-16 w-16 rounded-2xl object-cover ring-4 ring-white dark:ring-slate-800 shadow-xl" />
                                                    <div v-else class="h-16 w-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                                                        {{ selectedCustomer.name?.charAt(0).toUpperCase() }}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h2 class="text-xl font-black text-slate-800 dark:text-white tracking-tight">{{ selectedCustomer.name }}</h2>
                                                    <div class="flex flex-wrap gap-2 mt-1">
                                                        <span class="px-2 py-0.5 bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 rounded-md text-[9px] font-bold uppercase tracking-wider">
                                                            ID: #{{ selectedCustomer.u_id || selectedCustomer.id }}
                                                        </span>
                                                        <span class="px-2 py-0.5 bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 rounded-md text-[9px] font-bold uppercase tracking-wider">
                                                            {{ selectedCustomer.lead_status || 'Active' }}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="flex items-center gap-3">
                                                <a :href="`tel:${selectedCustomer.phone}`" class="flex items-center justify-center w-10 h-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl hover:bg-indigo-600 hover:text-white transition-all shadow-sm">
                                                    <i class="fa-solid fa-phone text-sm"></i>
                                                </a>
                                                <button @click="openFollowupModal" class="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-100 dark:shadow-none hover:bg-indigo-700 active:scale-95 transition-all">
                                                    <i class="fa-solid fa-plus mr-2"></i> NEW FOLLOW-UP
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex-1 overflow-y-auto p-8 custom-scrollbar">
                                        <div class="grid grid-cols-1 xl:grid-cols-3 gap-8">
                                            
                                            <div class="xl:col-span-1 space-y-6">
                                                <div class="sticky top-0">
                                                    <h3 class="text-xs font-black text-slate-400 uppercase tracking-[2px] mb-4">Contact Details</h3>
                                                    <div class="space-y-4 bg-slate-50 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-100 dark:border-slate-800">
                                                        <div class="flex flex-col">
                                                            <span class="text-[10px] text-slate-400 font-bold uppercase">Email</span>
                                                            <span class="text-sm font-medium text-slate-700 dark:text-slate-200 truncate">{{ selectedCustomer.email || 'N/A' }}</span>
                                                        </div>
                                                        <div class="flex flex-col">
                                                            <span class="text-[10px] text-slate-400 font-bold uppercase">Country</span>
                                                            <div class="flex items-center gap-2 mt-1 font-bold text-slate-700 dark:text-slate-200">
                                                                <i class="fa-solid fa-location-dot text-indigo-500 text-xs"></i>
                                                                <span class="text-sm">{{ selectedCustomer.country?.name || 'Not Assigned' }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="flex flex-col">
                                                            <span class="text-[10px] text-slate-400 font-bold uppercase">Visa Type</span>
                                                            <span class="text-sm font-medium text-slate-700 dark:text-slate-200">{{ selectedCustomer.visa_category?.name || 'N/A' }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="xl:col-span-2 space-y-6 relative">
                                                <div v-if="detailsLoading" class="absolute inset-0 bg-white/50 dark:bg-slate-900/50 flex justify-center py-10 z-20 backdrop-blur-[1px]">
                                                    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                                                </div>

                                                <h3 class="text-xs font-black text-slate-400 uppercase tracking-[2px]">Follow-up History</h3>
                                                
                                                <div class="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
                                                    
                                                    <div v-for="followup in followups" :key="followup.id" class="relative flex items-start gap-6 group">
                                                        <div class="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-white dark:bg-slate-900 border-2 shadow-sm z-10"
                                                            :class="{
                                                                'border-indigo-500': followup.contact_type === 'call',
                                                                'border-emerald-500': followup.contact_type === 'whatsapp',
                                                                'border-blue-500': followup.contact_type === 'email',
                                                                'border-purple-500': followup.contact_type === 'meeting'
                                                            }">
                                                            <i v-if="followup.contact_type === 'call'" class="fa-solid fa-phone text-indigo-500 text-sm"></i>
                                                            <i v-else-if="followup.contact_type === 'whatsapp'" class="fa-brands fa-whatsapp text-emerald-500 text-sm"></i>
                                                            <i v-else-if="followup.contact_type === 'email'" class="fa-solid fa-envelope text-blue-500 text-sm"></i>
                                                            <i v-else-if="followup.contact_type === 'meeting'" class="fa-solid fa-users text-purple-500 text-sm"></i>
                                                            <i v-else class="fa-solid fa-comment-dots text-slate-400 text-sm"></i>
                                                        </div>
                                                        
                                                        <div class="flex-1 bg-white dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all group-hover:shadow-md group-hover:border-indigo-100 dark:group-hover:border-indigo-900/50">
                                                            <div class="flex justify-between items-start mb-3">
                                                                <div>
                                                                    <h4 class="text-sm font-bold text-slate-800 dark:text-slate-100">{{ followup.title }}</h4>
                                                                    <div class="flex items-center gap-2 mt-1">
                                                                        <span class="text-[9px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-wider bg-indigo-50 dark:bg-indigo-900/30 px-2 py-0.5 rounded">
                                                                            {{ followup.contact_type }}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <span class="text-[10px] text-slate-400 font-medium">
                                                                    {{ new Date(followup.created_at).toLocaleDateString() }}
                                                                </span>
                                                            </div>

                                                            <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                                                                {{ followup.note }}
                                                            </p>

                                                            <div class="flex items-center justify-between pt-3 border-t border-slate-50 dark:border-slate-800">
                                                                <span class="text-[10px] font-bold text-slate-400 italic">By {{ followup.user?.name }}</span>
                                                                <div class="flex items-center gap-2">
                                                                    <span class="px-2 py-1 rounded-md text-[9px] font-black uppercase flex items-center gap-1"
                                                                        :class="getPriorityClass(followup.priority)">
                                                                        <i class="fa-solid fa-circle text-[6px]"></i>
                                                                        {{ followup.priority }}
                                                                    </span>

                                                                    <span class="px-2 py-1 rounded-md text-[9px] font-black uppercase"
                                                                        :class="getStatusClass(followup.status)">
                                                                        {{ followup.status.replace('_', ' ') }}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div v-if="followups.length === 0 && !detailsLoading" class="text-center py-10 bg-slate-50 dark:bg-slate-900/20 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800">
                                                        <p class="text-slate-400 text-sm font-medium">No history found.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div v-else class="flex-1 flex flex-col items-center justify-center p-12 text-center">
                                    <div class="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
                                        <i class="fa-solid fa-users text-3xl text-slate-300"></i>
                                    </div>
                                    <h3 class="text-lg font-bold text-slate-700 dark:text-white">Select a Customer</h3>
                                    <p class="text-slate-400 text-sm mt-1">Select from the sidebar to manage follow-ups.</p>
                                </div>
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


<div v-if="showModal" class="fixed inset-0 z-[999] overflow-y-auto">
    <div class="fixed inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity" @click="showModal = false"></div>

    <div class="flex min-h-full items-center justify-center p-4 sm:p-6">
        <div class="relative w-full max-w-3xl transform overflow-hidden rounded-[2rem] bg-white dark:bg-slate-900 shadow-2xl transition-all border border-slate-200 dark:border-slate-800">
            
            <div class="px-8 py-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30">
                <div class="flex items-center gap-4">
                    <div class="h-12 w-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200 dark:shadow-none">
                        <i class="fa-solid fa-calendar-check text-xl"></i>
                    </div>
                    <div>
                        <h3 class="text-xl font-black text-slate-800 dark:text-white tracking-tight">New Interaction</h3>
                        <p class="text-xs text-slate-500 font-medium italic">Logging follow-up for: {{ selectedCustomer.name }}</p>
                    </div>
                </div>
                <button @click="showModal = false" class="h-10 w-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 hover:text-rose-500 transition-colors">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

            <form @submit.prevent="submitFollowup" class="p-8">
                <div class="space-y-8">
                    
                    <div class="space-y-5">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
                            <h4 class="text-[10px] font-black uppercase tracking-[2px] text-slate-400">Interaction Details</h4>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div class="md:col-span-2">
                                <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-2 ml-1">Subject / Title</label>
                                <input v-model="followupForm.title" type="text" class="w-full px-4 py-3 rounded-2xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all" placeholder="Briefly describe this interaction..." required>
                            </div>

                            <div class="md:col-span-2">
                                <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-2 ml-1">Contact Method</label>
                                <div class="grid grid-cols-2 sm:grid-cols-5 gap-3">
                                    <button v-for="type in ['call', 'whatsapp', 'email', 'meeting', 'other']" :key="type" type="button"
                                        @click="followupForm.contact_type = type"
                                        :class="followupForm.contact_type === type ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600' : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-500'"
                                        class="flex flex-col items-center gap-2 p-3 rounded-2xl border-2 text-[10px] font-bold uppercase transition-all hover:border-indigo-300">
                                        <i :class="getContactIcon(type)" class="text-base"></i>
                                        {{ type }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-5 pt-2">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                            <h4 class="text-[10px] font-black uppercase tracking-[2px] text-slate-400">Status & Scheduling</h4>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
                            <div>
                                <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-2 ml-1">Current Status</label>
                                <select v-model="followupForm.status" class="w-full px-4 py-3 rounded-2xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-4 focus:ring-indigo-500/10">
                                    <option value="" disabled selected>-- Select Status --</option>
                                    <option value="pending">Pending</option>
                                    <option value="contacted">Contacted</option>
                                    <option value="interested">Interested</option>
                                    <option value="not_interested">Not Interested</option>
                                    <option value="closed">Closed</option>
                                </select>
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-2 ml-1">Priority</label>
                                <div class="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl">
                                    <button v-for="p in ['low', 'medium', 'high']" :key="p" type="button"
                                        @click="followupForm.priority = p"
                                        :class="followupForm.priority === p ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-sm' : 'text-slate-500'"
                                        class="flex-1 py-2 text-[10px] font-black uppercase rounded-xl transition-all">
                                        {{ p }}
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-2 ml-1">Next Follow-up</label>
                                <input v-model="followupForm.follow_up_date" type="datetime-local" class="w-full px-4 py-3 rounded-2xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white">
                            </div>
                        </div>
                    </div>

                    <div class="space-y-5 pt-2">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                            <h4 class="text-[10px] font-black uppercase tracking-[2px] text-slate-400">Outcome & Notes</h4>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div class="md:col-span-1">
                                <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-2 ml-1">Deal Amount</label>
                                <div class="relative">
                                    <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                                    <input v-model="followupForm.deal_amount" type="number" step="0.01" class="w-full pl-10 pr-4 py-3 rounded-2xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white" placeholder="0.00">
                                </div>
                            </div>

                            <div class="md:col-span-1 flex items-center justify-end">
                                <label class="relative inline-flex items-center cursor-pointer mt-4">
                                    <input v-model="followupForm.is_converted" type="checkbox" class="sr-only peer">
                                    <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                                    <span class="ml-3 text-xs font-black text-slate-600 dark:text-slate-400 uppercase tracking-wider">Converted</span>
                                </label>
                            </div>

                            <div class="md:col-span-2">
                                <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-2 ml-1">Detailed Outcome</label>
                                <textarea v-model="followupForm.outcome" rows="2" class="w-full px-4 py-3 rounded-2xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white focus:ring-4 focus:ring-indigo-500/10" placeholder="What was the specific result?"></textarea>
                            </div>

                            <div class="md:col-span-2">
                                <label class="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-2 ml-1">Internal Notes</label>
                                <textarea v-model="followupForm.note" rows="3" class="w-full px-4 py-3 rounded-2xl border-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-white" placeholder="Any private notes for the team..."></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex items-center gap-4 mt-10">
                    <button type="button" @click="showModal = false" class="flex-1 px-6 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-black text-xs uppercase tracking-[1px] hover:bg-slate-200 transition-all">
                        Cancel
                    </button>
                    <button type="submit" :disabled="loading" class="flex-[2] px-6 py-4 rounded-2xl bg-indigo-600 text-white font-black text-xs uppercase tracking-[1px] shadow-xl shadow-indigo-200 dark:shadow-none hover:bg-indigo-700 active:scale-95 transition-all disabled:opacity-50">
                        <span v-if="loading"><i class="fa-solid fa-circle-notch fa-spin mr-2"></i> Processing</span>
                        <span v-else><i class="fa-solid fa-paper-plane mr-2"></i> Save Interaction</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>


            </div>
        </div>
        
    </div>
</template>

<script setup>
import { onMounted, ref, computed, watch } from "vue";
import { useRouter } from "vue-router";
import api, { makeImg } from "../../services/api";
import { format } from "date-fns";

import Navbar from '../Dashboard/admin/admin-navbar.vue';
import Header from '../Dashboard/admin/admin-header.vue';
import Message from '../Message/message.vue';

const sidebarOpen = ref(false);
const active = ref("dashboard");

const router = useRouter();

const successMsg = ref('');
const errorMsg = ref('');
const loading = ref(false);
const activeTab = ref(null);











const selectedCustomer = computed(() => {
    return customers.value.find(c => c.id === activeTab.value) || null;
});


const followups = ref([]); // ফলো-আপ ডাটা রাখার জন্য
const detailsLoading = ref(false); // লোডিং স্টেট

// activeTab (customer id) পরিবর্তন হলে এই watch ফাংশনটি চলবে
watch(activeTab, async (newId) => {
    if (newId) {
        await fetchFollowupHistory(newId);
    }
});

async function fetchFollowupHistory(customerId) {
    detailsLoading.value = true;
    try {
        // ব্যাকএন্ডে ওই ইউজারের ফলো-আপ ডাটা চেয়ে রিকোয়েস্ট
        const res = await api.get(`/follow-up/customers/${customerId}/history`);
        
        // ব্যাকএন্ড থেকে আসা ডাটা সেভ করা
        followups.value = res.data.data; 
        console.log(followups.value);
    } catch (error) {
        console.error("Error fetching follow-ups:", error);
        followups.value = [];
    } finally {
        detailsLoading.value = false;
    }
}












const showModal = ref(false);
const followupForm = ref({
    customer_id: null,
    title: '',
    note: '',
    status: 'Pending',
    priority: 'Medium',
    follow_up_date: '',
    contact_type: 'Call',
    outcome: '',
    deal_amount: 0,
    is_converted: false
});

const getContactIcon = (type) => {
    const icons = {
        call: 'fa-solid fa-phone',
        whatsapp: 'fa-brands fa-whatsapp',
        email: 'fa-solid fa-envelope',
        meeting: 'fa-solid fa-users',
        other: 'fa-solid fa-ellipsis'
    };
    return icons[type] || icons.other;
};

const getStatusClass = (status) => {
    const classes = {
        'pending': 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
        'contacted': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
        'interested': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
        'not_interested': 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
        'closed': 'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200'
    };
    return classes[status] || 'bg-slate-100 text-slate-600';
};

const getPriorityClass = (priority) => {
    const classes = {
        'low': 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400',
        'medium': 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
        'high': 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400 animate-pulse-subtle'
    };
    return classes[priority] || classes.medium;
};

// মডাল ওপেন করার ফাংশন
const openFollowupModal = () => {
    if (selectedCustomer.value) {
        followupForm.value.customer_id = selectedCustomer.value.id;
        showModal.value = true;
    }
};

// ডাটা সেভ করার ফাংশন
const submitFollowup = async () => {
    loading.value = true;
    try {
        const res = await api.post('/follow-up/store', followupForm.value);
        
        if (res.data.success) {
            successMsg.value = res.data.message;
            showModal.value = false; // মডাল বন্ধ করা
            
            // ফর্ম রিসেট করা
            followupForm.value = {
                customer_id: selectedCustomer.value.id,
                title: '',
                note: '',
                status: 'pending',
                priority: 'medium',
                follow_up_date: '',
                contact_type: 'call',
                outcome: '',
                deal_amount: 0,
                is_converted: false
            };
            
            // হিস্ট্রি রিফ্রেশ করা
            await fetchFollowupHistory(selectedCustomer.value.id);
        }
    } catch (error) {
        errorMsg.value = error.response?.data?.message || "Something went wrong";
    } finally {
        loading.value = false;
    }
};












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

        if (customers.value.length > 0 && !activeTab.value) {
            activeTab.value = customers.value[0].id;
        }
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