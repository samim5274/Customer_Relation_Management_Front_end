<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const timeLeft = ref({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
});

// টার্গেট ডেট এবং প্রগ্রেস ক্যালকুলেশন
const targetDate = new Date('2026-12-31T23:59:59').getTime();
const startDate = new Date('2026-01-01T00:00:00').getTime(); // অফার শুরু হওয়ার ডেট

const calculateTime = () => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff > 0) {
        timeLeft.value.days = Math.floor(diff / (1000 * 60 * 60 * 24));
        timeLeft.value.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        timeLeft.value.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        timeLeft.value.seconds = Math.floor((diff % (1000 * 60)) / 1000);
    }
};

// কত শতাংশ সময় বাকি আছে তা দেখানোর জন্য
const progressWidth = computed(() => {
    const now = new Date().getTime();
    const total = targetDate - startDate;
    const remaining = targetDate - now;
    return Math.max(0, Math.min(100, (remaining / total) * 100));
});

let timer;
onMounted(() => {
    calculateTime();
    timer = setInterval(calculateTime, 1000);
});

onUnmounted(() => {
    clearInterval(timer);
});
</script>

<template>
    <div class="bg-gray-50 py-16 md:py-24">
        <div class="mx-auto max-w-7xl px-4">
            <div class="group relative flex flex-col lg:flex-row items-center gap-10 md:gap-16 rounded-[2.5rem] bg-white p-6 md:p-16 shadow-2xl shadow-blue-100/50 border border-gray-100 overflow-hidden">
                
                <div class="absolute -top-24 -left-24 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-40 group-hover:bg-blue-200 transition-colors duration-500"></div>

                <div class="relative w-full lg:w-1/2">
                    <div class="relative overflow-hidden rounded-[2rem] shadow-2xl">
                        <img 
                            src="https://images.pexels.com/photos/18979142/pexels-photo-18979142.jpeg" 
                            alt="Special Offer" 
                            class="h-[350px] md:h-[500px] w-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                        />
                        <div class="absolute top-6 right-6 md:top-8 md:right-8 flex h-20 w-20 md:h-24 md:w-24 flex-col items-center justify-center rounded-full bg-red-600 text-white shadow-lg ring-4 md:ring-8 ring-white/20 animate-pulse z-10">
                            <span class="text-xl md:text-2xl font-black">20%</span>
                            <span class="text-[8px] md:text-[10px] uppercase font-bold tracking-tighter">Limited Off</span>
                        </div>
                        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                </div>

                <div class="w-full lg:w-1/2">
                    <div class="flex items-center gap-3 mb-6">
                        <span class="h-px w-8 bg-blue-600"></span>
                        <span class="text-blue-600 font-black tracking-[0.3em] uppercase text-[10px] md:text-xs">Flash Deal of the Week</span>
                    </div>

                    <h2 class="text-3xl md:text-5xl font-black text-gray-900 leading-tight">
                        Exotic Maldives <br /> 
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Luxury Escape</span>
                    </h2>

                    <p class="mt-4 md:mt-6 text-gray-500 leading-relaxed text-base md:text-lg">
                        Experience the ultimate luxury in the Maldives. Crystal clear water, private villas, and unforgettable sunsets are waiting for you.
                    </p>

                    <div class="mt-8 flex flex-wrap gap-3 md:gap-4">
                        <div v-for="(val, unit) in timeLeft" :key="unit" class="flex flex-col items-center flex-1 min-w-[65px] md:min-w-[75px] p-2 md:p-3 rounded-2xl bg-gray-50 border border-gray-100 shadow-sm hover:border-blue-200 transition-colors">
                            <span class="text-xl md:text-2xl font-black text-gray-900">{{ val }}</span>
                            <span class="text-[9px] md:text-[10px] uppercase font-bold text-gray-400 tracking-widest">{{ unit }}</span>
                        </div>
                    </div>

                    <div class="mt-8 space-y-2">
                        <div class="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-400">
                            <span>Tickets Remaining</span>
                            <span class="text-red-500">Only 8 Left!</span>
                        </div>
                        <div class="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div class="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-1000" :style="{ width: progressWidth + '%' }"></div>
                        </div>
                    </div>

                    <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        <div v-for="feature in ['Free Airport Pickup', '5 Star Resort Stay', 'Premium Breakfast', 'Guided Island Tour']" :key="feature" 
                             class="flex items-center gap-3 text-sm md:text-base text-gray-700 font-semibold group/item">
                            <span class="flex h-5 w-5 md:h-6 md:w-6 items-center justify-center rounded-full bg-green-100 text-green-600 group-hover/item:bg-green-500 group-hover/item:text-white transition-all text-xs">✓</span>
                            {{ feature }}
                        </div>
                    </div>

                    <div class="mt-10 flex flex-col sm:flex-row items-center gap-6 border-t border-gray-100 pt-8">
                        <button class="w-full sm:w-auto rounded-2xl bg-gray-900 px-10 py-4 md:py-5 font-bold text-white transition-all hover:bg-blue-600 hover:shadow-[0_20px_50px_rgba(37,99,235,0.3)] active:scale-95">
                            Grab This Offer
                        </button>
                        <div class="flex flex-row sm:flex-col items-baseline sm:items-start gap-2">
                            <span class="text-gray-400 text-xs md:text-sm line-through">Was ৳ 90,000</span>
                            <span class="text-2xl md:text-3xl font-black text-blue-600">৳ 72,000</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>