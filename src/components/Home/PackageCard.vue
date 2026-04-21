<script setup>
import { ref } from 'vue';

const props = defineProps({
    package: {
        type: Object,
        required: true
    }
});

const isWishlisted = ref(false);

const toggleWishlist = () => {
    isWishlisted.value = !isWishlisted.value;
};
</script>

<template>
    <div class="group relative overflow-hidden rounded-[2rem] bg-white border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
        
        <div class="relative h-64 overflow-hidden">
        <img 
            :src="package.image" 
            :alt="package.name"
            class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div class="absolute bottom-4 left-4 backdrop-blur-md bg-white/20 border border-white/30 rounded-xl px-4 py-1.5 text-white shadow-lg">
            <span class="text-xs font-medium block leading-none">Starting from</span>
            <span class="text-lg font-bold">৳ {{ package.price }}</span>
        </div>

        <div class="absolute top-4 left-4 bg-yellow-400 text-black text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-lg shadow-sm">
            {{ package.type || 'Trending' }}
        </div>

        <button 
            @click="toggleWishlist"
            class="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-full backdrop-blur-md bg-white/30 border border-white/40 text-white transition-all hover:bg-white hover:text-red-500 shadow-md"
        >
            <span class="text-xl" :class="isWishlisted ? 'text-red-500' : ''">
            {{ isWishlisted ? '❤️' : '🤍' }}
            </span>
        </button>
        </div>

        <div class="p-6">
        <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-1">
            <span v-for="i in 5" :key="i" class="text-yellow-400 text-xs">★</span>
            <span class="text-[11px] text-gray-400 ml-1 font-medium">(4.8/5)</span>
            </div>
            <span class="flex items-center gap-1 text-[11px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-md">
            <span class="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
            Available
            </span>
        </div>

        <div class="mb-2 flex items-center gap-3 text-[12px] font-semibold text-blue-600 uppercase tracking-tighter">
            <span class="flex items-center gap-1">📍 {{ package.location }}</span>
            <span class="text-gray-300">|</span>
            <span class="flex items-center gap-1 text-gray-500">🕒 {{ package.duration }}</span>
        </div>

        <h3 class="mb-3 text-xl font-extrabold text-gray-900 group-hover:text-blue-600 transition-colors">
            {{ package.name }}
        </h3>
        
        <p class="mb-6 text-sm text-gray-500 leading-relaxed line-clamp-2 italic">
            "{{ package.description }}"
        </p>
        
        <div class="flex items-center gap-2">
            <button class="flex-1 bg-gray-900 text-white py-3 font-bold rounded-2xl transition-all hover:bg-blue-600 hover:shadow-lg active:scale-95">
            View Details
            </button>
            <button class="w-12 h-12 flex items-center justify-center border-2 border-gray-100 rounded-2xl text-gray-400 hover:border-blue-200 hover:text-blue-500 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            </button>
        </div>
        </div>
    </div>
</template>