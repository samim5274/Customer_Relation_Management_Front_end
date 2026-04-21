<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};


</script>

<template>
    <nav class="bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm sticky top-0 z-[1000]">
        <div class="mx-auto max-w-7xl px-4 lg:px-8">
            <div class="flex h-20 items-center justify-between">
                
                <div class="flex items-center gap-2.5 group cursor-pointer">
                    <div class="flex items-center gap-3 group cursor-pointer">
                        <div class="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg shadow-blue-200 transition-all duration-700 group-hover:rotate-[360deg] group-hover:shadow-blue-400/40">
                            <!-- <i class="fa-solid fa-plane-departure text-white text-lg"></i> -->
                            <img src="/logo/logo.png" alt="TravelBD Logo" 
                                class="block dark:hidden w-10 h-10 object-contain transition-transform duration-500 group-hover:scale-110" />
                            
                            <img src="/logo/white-logo.png" alt="TravelBD Logo" 
                                class="hidden dark:block w-10 h-10 object-contain drop-shadow-[0_4px_8px_rgba(255,255,255,0.2)] transition-transform duration-500 group-hover:scale-110" />

                            <div class="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        <div class="flex flex-col leading-none">
                            <span class="text-2xl font-black tracking-tighter text-gray-900">
                                Mercuviax<span class="text-blue-600">BD</span>
                            </span>
                            <span class="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400">Premium Agency</span>
                        </div>
                    </div>
                </div>

                <div class="hidden md:flex items-center gap-10">
                    <ul class="flex items-center gap-8">
                        <li v-for="item in ['Home', 'Packages', 'Destinations', 'About Us']" :key="item">
                            <a href="#" class="relative py-2 text-sm font-bold uppercase tracking-widest text-gray-600 transition-all hover:text-blue-600 group/link">
                                {{ item }}
                                <span class="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover/link:w-full"></span>
                            </a>
                        </li>
                    </ul>
                    <div class="h-6 w-px bg-gray-200"></div>
                    <button class="rounded-full bg-blue-600 px-7 py-3 text-xs font-black uppercase tracking-widest text-white shadow-xl shadow-blue-200 transition-all hover:bg-blue-700 hover:-translate-y-0.5">
                        Book Now
                    </button>
                </div>

                <div class="flex items-center gap-4 md:hidden">
                    <button class="h-10 w-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-900 border border-gray-100">
                        <i class="fa-solid fa-magnifying-glass text-sm"></i>
                    </button>
                    <button 
                        @click="toggleMenu" 
                        class="relative h-10 w-10 flex flex-col items-center justify-center gap-1.5 rounded-lg bg-blue-600 text-white shadow-lg z-[1002]"
                    >
                        <span :class="['h-0.5 w-5 bg-white transition-all duration-300', isMobileMenuOpen ? 'rotate-45 translate-y-2' : '']"></span>
                        <span :class="['h-0.5 w-5 bg-white transition-all duration-300', isMobileMenuOpen ? 'opacity-0 -translate-x-4' : '']"></span>
                        <span :class="['h-0.5 w-5 bg-white transition-all duration-300', isMobileMenuOpen ? '-rotate-45 -translate-y-2' : '']"></span>
                    </button>
                </div>

            </div>
        </div>
    </nav>
    
    <Transition name="slide">
        <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[1001] md:hidden">
            <div @click="toggleMenu" class="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity"></div>
            
            <div class="absolute right-0 top-0 h-screen w-[85%] max-w-xs bg-white shadow-2xl overflow-y-auto">
                
                <div class="flex items-center justify-between p-6 border-b border-gray-50 bg-gray-50/50">
                    <div class="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-lg shadow-blue-200 transition-all duration-700 group-hover:rotate-[360deg] group-hover:shadow-blue-400/40">
                            <!-- <i class="fa-solid fa-plane-departure text-white text-lg"></i> -->
                            <img src="/logo/logo.png" alt="TravelBD Logo" 
                                class="block dark:hidden w-10 h-10 object-contain transition-transform duration-500 group-hover:scale-110" />
                            
                            <img src="/logo/white-logo.png" alt="TravelBD Logo" 
                                class="hidden dark:block w-10 h-10 object-contain drop-shadow-[0_4px_8px_rgba(255,255,255,0.2)] transition-transform duration-500 group-hover:scale-110" />

                            <div class="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>

                        <div class="flex flex-col leading-none">
                            <span class="text-2xl font-black tracking-tighter text-gray-900">
                                Mercuviax<span class="text-blue-600">BD</span>
                            </span>
                            <span class="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400">Premium Agency</span>
                        </div>
                    <button @click="toggleMenu" class="h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-100 text-gray-400">
                        <i class="fa-solid fa-xmark text-lg"></i>
                    </button>
                </div>

                <div class="p-6">
                    <p class="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Quick Navigation</p>
                    <div class="flex flex-col gap-1">
                        <a v-for="link in ['Home', 'Packages', 'Destinations', 'About Us', 'Contact']" 
                        :key="link" 
                        @click="toggleMenu" 
                        href="#" 
                        class="flex items-center justify-between px-4 py-4 rounded-xl text-sm font-bold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all group">
                            {{ link }}
                            <i class="fa-solid fa-angle-right text-[10px] opacity-0 group-hover:opacity-100 transition-all"></i>
                        </a>
                    </div>

                    <div class="mt-8 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-5 text-white shadow-xl shadow-blue-100">
                        <p class="text-[10px] font-bold uppercase opacity-80 mb-1">Special Deal</p>
                        <h4 class="text-sm font-bold mb-3">Get 20% off on your first Maldives trip!</h4>
                        <button class="w-full rounded-lg bg-white/20 py-2.5 text-xs font-black uppercase tracking-widest backdrop-blur-md transition-all hover:bg-white/30">
                            Claim Now
                        </button>
                    </div>

                    <div class="mt-10 pt-8 border-t border-gray-100">
                        <div class="space-y-4">
                            <div class="flex items-center gap-4 text-gray-500 hover:text-blue-600 transition-colors">
                                <div class="h-8 w-8 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
                                    <i class="fa-solid fa-phone text-xs"></i>
                                </div>
                                <span class="text-xs font-bold">+880 1533-021557</span>
                            </div>
                            <div class="flex items-center gap-4 text-gray-500 hover:text-blue-600 transition-colors">
                                <div class="h-8 w-8 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
                                    <i class="fa-solid fa-envelope text-xs"></i>
                                </div>
                                <span class="text-xs font-bold">info@travelbd.com</span>
                            </div>
                        </div>

                        <div class="flex items-center gap-4 mt-8">
                            <a v-for="social in ['facebook-f', 'x-twitter', 'instagram', 'youtube']" 
                            :key="social" 
                            href="#" 
                            class="h-9 w-9 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 border border-gray-100 hover:text-blue-600 hover:bg-blue-50 transition-all">
                                <i :class="['fa-brands', 'fa-' + social, 'text-sm']"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="p-6 bg-gray-50/50 mt-auto">
                    <p class="text-[10px] text-center text-gray-400 font-medium italic">
                        Crafted by Mercuviax Software
                    </p>
                </div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active {
    transition: all 0.5s cubic-bezier(0.32, 0.72, 0, 1);
}
.slide-enter-from, .slide-leave-to {
    transform: translateX(100%);
}
</style>