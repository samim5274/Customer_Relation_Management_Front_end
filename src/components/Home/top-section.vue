<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

import navbar from './navbar.vue';

function loginRedirect(){
    router.push('login');
}
</script>

<template>
    <header class="fixed top-0 left-0 z-[1000] w-full">
        <div class="hidden md:block bg-[#050b18] border-b border-white/5 py-2.5">
            <div class="mx-auto max-w-7xl px-4 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-400">
                <div class="flex gap-6">
                    <a href="tel:+8801533021557" class="hover:text-yellow-400 transition-colors"><i class="fa-solid fa-phone text-yellow-500 mr-1"></i> +880 1533-021557</a>
                    <a href="mailto:info@mercuviax.com" class="hover:text-yellow-400 transition-colors"><i class="fa-solid fa-envelope text-yellow-500 mr-1"></i> info@mercuviax.com</a>
                </div>
                <button @click="loginRedirect" class="flex items-center gap-2 transition-colors hover:text-yellow-400">
                    <i class="fa-solid fa-circle-user text-yellow-500"></i> Login
                </button>
            </div>
        </div>

        <div @click="loginRedirect" class="md:hidden bg-yellow-400 py-2 shadow-md">
            <div class="flex items-center justify-center gap-2">
                <i class="fa-solid fa-circle-user text-[11px] text-black/70"></i>
                <button class="text-[11px] font-black uppercase tracking-widest text-black">Login to Account</button>
            </div>
        </div>

        <navbar />
    </header>
    
    <div class="h-[100px] md:h-[130px]"></div>
</template>