<template>
    <div>
        <div class="mx-auto">
            
            <div class="flex items-center justify-between mb-12">
                <div>
                    <h1 class="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Notification Settings</h1>
                    <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Manage how you receive alerts and stay connected.</p>
                </div>
                <div class="hidden sm:flex w-14 h-14 bg-blue-600/10 rounded-2xl items-center justify-center">
                    <i class="fa-solid fa-bell text-2xl text-blue-600 animate-bounce-slow"></i>
                </div>
            </div>

            <div class="space-y-8">
                
                <div class="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm border border-slate-300 dark:border-slate-800 relative overflow-hidden">
                    <div class="absolute top-0 right-0 p-4 opacity-5">
                        <i class="fa-solid fa-tower-broadcast text-6xl dark:text-slate-300"></i>
                    </div>
                    
                    <h3 class="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] mb-8">Preferred Channels</h3>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="group p-6 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-transparent hover:border-blue-500/30 transition-all duration-300">
                            <div class="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-500/20">
                                <i class="fa-solid fa-mobile-vibrate text-xl"></i>
                            </div>
                            <h4 class="font-bold text-slate-800 dark:text-white mb-1">Push</h4>
                            <p class="text-[11px] text-slate-500 mb-4 leading-tight">Instant alerts on your device.</p>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" checked class="sr-only peer">
                                <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>

                        <div class="group p-6 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-transparent hover:border-emerald-500/30 transition-all duration-300">
                            <div class="w-12 h-12 bg-emerald-500 text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/20">
                                <i class="fa-solid fa-envelope-open text-xl"></i>
                            </div>
                            <h4 class="font-bold text-slate-800 dark:text-white mb-1">Email</h4>
                            <p class="text-[11px] text-slate-500 mb-4 leading-tight">Detailed reports to inbox.</p>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" checked class="sr-only peer">
                                <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                            </label>
                        </div>

                        <div class="group p-6 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-transparent hover:border-orange-500/30 transition-all duration-300">
                            <div class="w-12 h-12 bg-orange-500 text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-orange-500/20">
                                <i class="fa-solid fa-comment-dots text-xl"></i>
                            </div>
                            <h4 class="font-bold text-slate-800 dark:text-white mb-1">SMS</h4>
                            <p class="text-[11px] text-slate-500 mb-4 leading-tight">Direct text message alerts.</p>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer">
                                <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-300 dark:border-slate-800">
                    <div class="p-8 border-b border-slate-50 dark:border-slate-800/50 flex items-center justify-between">
                        <h3 class="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Activity Preferences</h3>
                        <span class="text-[10px] font-bold bg-blue-50 dark:bg-blue-900/30 text-blue-600 px-3 py-1 rounded-full">Automated</span>
                    </div>

                    <div class="divide-y divide-slate-50 dark:divide-slate-800/50">
                        <div class="p-6 flex items-center justify-between group hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-all">
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                                    <i class="fa-solid fa-check-to-slot"></i>
                                </div>
                                <div>
                                    <p class="font-bold text-slate-800 dark:text-white">Order Status Updates</p>
                                    <p class="text-xs text-slate-500">Get notified when an order is shipped or delivered.</p>
                                </div>
                            </div>
                            <label class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 focus:outline-none">
                                <input type="checkbox" checked class="sr-only peer">
                                <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>

                        <div class="p-6 flex items-center justify-between group hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-all">
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-all">
                                    <i class="fa-solid fa-layer-group"></i>
                                </div>
                                <div>
                                    <p class="font-bold text-slate-800 dark:text-white">Inventory Alerts</p>
                                    <p class="text-xs text-slate-500">Receive alerts when products are low on stock.</p>
                                </div>
                            </div>
                            <label class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 focus:outline-none">
                                <input type="checkbox" class="sr-only peer">
                                <div class="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>

                        <div class="p-6 flex items-center justify-between group hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-all">
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-all">
                                    <i class="fa-solid fa-shield-halved"></i>
                                </div>
                                <div>
                                    <p class="font-bold text-slate-800 dark:text-white">Security & Account Access</p>
                                    <p class="text-xs text-slate-500">Important alerts regarding your account security.</p>
                                </div>
                            </div>
                            <label class="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 focus:outline-none">
                                <input type="checkbox" checked disabled class="sr-only peer">
                                <div class="w-11 h-6 bg-slate-300 dark:bg-slate-600 rounded-full cursor-not-allowed opacity-50 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:translate-x-full"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div class="flex items-center gap-3 text-slate-400 dark:text-slate-500">
                        <i class="fa-solid fa-circle-info text-xs"></i>
                        <p class="text-[11px] font-medium uppercase tracking-wider">Settings are synced across all your devices</p>
                    </div>

                    <div class="flex items-center gap-4 w-full sm:w-auto">
                        <button class="flex-1 sm:flex-none px-6 py-4 text-xs font-black border dark:border-slate-600 dark:hover:border-red-300 text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-all duration-300 uppercase tracking-[0.15em] hover:bg-red-50 dark:hover:bg-red-500/10 rounded-2xl">
                            Restore Defaults
                        </button>

                        <button class="group/btn relative flex-1 sm:flex-none px-10 py-4 overflow-hidden rounded-2xl bg-slate-900 dark:bg-blue-600 transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(37,99,235,0.4)] active:scale-[0.96]">
                            <span class="relative z-10 flex items-center justify-center gap-2 text-sm font-black text-white uppercase tracking-tighter">
                                Save Changes
                                <i class="fa-solid fa-arrow-right-long text-xs transition-transform duration-300 group-hover/btn:translate-x-1"></i>
                            </span>
                            <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
                            <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover/btn:animate-[shimmer_1.5s_infinite] transition-transform"></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.animate-bounce-slow {
    animation: bounce 3s infinite;
}
@keyframes bounce {
    0%, 100% { transform: translateY(-5%); animation-timing-function: cubic-bezier(0.8,0,1,1); }
    50% { transform: none; animation-timing-function: cubic-bezier(0,0,0.2,1); }
}

@keyframes shimmer {
    100% {
        transform: translateX(100%);
    }
}
</style>