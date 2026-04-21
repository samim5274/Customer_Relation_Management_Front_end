<template>
    <div class="min-h-screen">
        <div class="mx-auto">
            
            <div class="mb-12">
                <h1 class="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Appearance Settings</h1>
                <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">Customize how Dynamic Bazar looks on your screen.</p>
            </div>

            <div class="space-y-10">
                
                <div class="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm border border-slate-300 dark:border-slate-800">
                    <h3 class="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] mb-8">Interface Mode</h3>
                    
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div class="group cursor-pointer">
                            <div class="relative aspect-video bg-slate-100 rounded-2xl border-4 border-blue-600 p-3 mb-3 overflow-hidden shadow-sm">
                                <div class="w-full h-2 bg-white rounded-full mb-2"></div>
                                <div class="w-2/3 h-2 bg-white rounded-full mb-4"></div>
                                <div class="grid grid-cols-2 gap-2">
                                    <div class="h-8 bg-white rounded-lg"></div>
                                    <div class="h-8 bg-white rounded-lg"></div>
                                </div>
                                <div class="absolute top-2 right-2 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                                    <i class="fa-solid fa-check text-[10px] text-white"></i>
                                </div>
                            </div>
                            <p class="text-center font-bold text-slate-800 dark:text-white text-sm">Light Mode</p>
                        </div>

                        <div class="group cursor-pointer">
                            <div class="relative aspect-video bg-slate-800 rounded-2xl border-2 border-slate-200 dark:border-slate-700 p-3 mb-3 overflow-hidden shadow-sm hover:border-blue-500 transition-all">
                                <div class="w-full h-2 bg-slate-700 rounded-full mb-2"></div>
                                <div class="w-2/3 h-2 bg-slate-700 rounded-full mb-4"></div>
                                <div class="grid grid-cols-2 gap-2">
                                    <div class="h-8 bg-slate-700 rounded-lg"></div>
                                    <div class="h-8 bg-slate-700 rounded-lg"></div>
                                </div>
                            </div>
                            <p class="text-center font-bold text-slate-500 dark:text-slate-400 text-sm">Dark Mode</p>
                        </div>

                        <div class="group cursor-pointer">
                            <div class="relative aspect-video rounded-2xl border-2 border-slate-200 dark:border-slate-700 mb-3 overflow-hidden shadow-sm hover:border-blue-500 transition-all">
                                <div class="absolute inset-0 flex">
                                    <div class="w-1/2 h-full bg-slate-100 p-3">
                                        <div class="w-full h-2 bg-white rounded-full mb-2"></div>
                                        <div class="h-8 bg-white rounded-lg"></div>
                                    </div>
                                    <div class="w-1/2 h-full bg-slate-800 p-3">
                                        <div class="w-full h-2 bg-slate-700 rounded-full mb-2"></div>
                                        <div class="h-8 bg-slate-700 rounded-lg"></div>
                                    </div>
                                </div>
                            </div>
                            <p class="text-center font-bold text-slate-500 dark:text-slate-400 text-sm">System Default</p>
                        </div>
                    </div>
                </div>

                <div class="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm border border-slate-300 dark:border-slate-800">
                    <h3 class="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] mb-8">Brand Accent Color</h3>
                    
                    <div class="flex flex-wrap gap-4">
                        <button class="w-12 h-12 rounded-2xl bg-blue-600 ring-4 ring-blue-600/20 flex items-center justify-center text-white">
                            <i class="fa-solid fa-check"></i>
                        </button>
                        <button class="w-12 h-12 rounded-2xl bg-indigo-600 hover:scale-110 transition-transform"></button>
                        <button class="w-12 h-12 rounded-2xl bg-emerald-500 hover:scale-110 transition-transform"></button>
                        <button class="w-12 h-12 rounded-2xl bg-rose-500 hover:scale-110 transition-transform"></button>
                        <button class="w-12 h-12 rounded-2xl bg-amber-500 hover:scale-110 transition-transform"></button>
                        <button class="w-12 h-12 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>

                <div class="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-300 dark:border-slate-800">
                    <div class="p-6 border-b border-slate-50 dark:border-slate-800/60 flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <div class="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                                <i class="fa-solid fa-indent text-blue-600 text-xs"></i>
                            </div>
                            <h3 class="text-sm font-black text-slate-800 dark:text-white uppercase tracking-wider">Layout Preferences</h3>
                        </div>
                    </div>
                    
                    <div class="divide-y divide-slate-50 dark:divide-slate-800/60">
                        <div class="p-6 flex items-center justify-between">
                            <div>
                                <p class="font-bold text-slate-800 dark:text-white text-sm">Compact Sidebar</p>
                                <p class="text-xs text-slate-500">Only show icons to maximize your workspace.</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer">
                                <div class="w-10 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                        
                        <div class="p-6 flex items-center justify-between">
                            <div>
                                <p class="font-bold text-slate-800 dark:text-white text-sm">High Contrast</p>
                                <p class="text-xs text-slate-500">Sharper borders and deeper blacks for better readability.</p>
                            </div>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" class="sr-only peer">
                                <div class="w-10 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </div>
                </div>

                <div class="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div class="flex items-center gap-3">
                        <div class="relative flex h-3 w-3">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
                        </div>
                        <p class="text-[11px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                            Live Preview Active
                        </p>
                    </div>

                    <div class="flex items-center gap-4 w-full sm:w-auto">
                        <button class="flex-1 sm:flex-none px-6 py-4 text-[10px] font-black text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-all duration-300 uppercase tracking-[0.2em] border border-slate-300 dark:border-slate-600 hover:border-slate-200 dark:hover:border-slate-800 rounded-2xl">
                            Reset to Default
                        </button>

                        <button class="group/apply relative flex-1 sm:flex-none px-12 py-4 bg-slate-900 dark:bg-blue-600 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20 active:scale-[0.96] transition-all duration-300">
                            <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover/apply:opacity-100 transition-opacity duration-500"></div>
                            
                            <span class="relative z-10 flex items-center justify-center gap-3 text-sm font-black text-white uppercase tracking-tighter">
                                Apply Theme
                                <i class="fa-solid fa-wand-magic-sparkles text-xs transition-all duration-500 group-hover/apply:rotate-12 group-hover/apply:scale-125"></i>
                            </span>

                            <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[100%] group-hover/apply:animate-[shimmer_2s_infinite]"></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}
</style>