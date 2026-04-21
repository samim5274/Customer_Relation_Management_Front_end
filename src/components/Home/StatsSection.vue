<script setup>
import { ref, onMounted } from 'vue';

const stats = ref([
    { id: 1, label: 'Happy Travelers', value: 10000, suffix: '+', icon: '🌍' },
    { id: 2, label: 'Total Destinations', value: 500, suffix: '+', icon: '🗺️' },
    { id: 3, label: 'Years Experience', value: 12, suffix: '+', icon: '🎖️' },
    { id: 4, label: 'Average Rating', value: 4.9, suffix: '', icon: '⭐' }
]);

const statsRef = ref(null);
const animatedStats = ref(stats.value.map(() => 0));

const animateValue = (index, target) => {
    let startTimestamp = null;
    const duration = 2000;

    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        if (target % 1 !== 0) {
        animatedStats.value[index] = (progress * target).toFixed(1);
        } else {
        animatedStats.value[index] = Math.floor(progress * target);
        }

        if (progress < 1) {
        window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
        stats.value.forEach((stat, index) => {
            animateValue(index, stat.value);
        });
        observer.disconnect(); // animation done and observe off
        }
    }, { threshold: 0.5 }); // section 50% screen and animation start

    if (statsRef.value) {
        observer.observe(statsRef.value);
    }
});

const formatValue = (val, target) => {
    if (target >= 1000) return (val / 1000).toFixed(0) + 'k';
    return val;
};
</script>

<template>
    <div ref="statsRef" class="relative bg-[#0a192f] py-24 overflow-hidden">
        <div class="absolute top-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div class="relative mx-auto max-w-7xl px-4">
        <div class="grid grid-cols-2 gap-12 md:grid-cols-4">
            
            <div v-for="(stat, index) in stats" :key="stat.id" 
                class="group flex flex-col items-center text-center transition-transform hover:-translate-y-2">
            
            <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-xl transition-all group-hover:bg-yellow-400/10 group-hover:border-yellow-400/20 group-hover:rotate-6">
                <span class="text-3xl">{{ stat.icon }}</span>
            </div>

            <div class="flex items-baseline gap-1">
                <h3 class="text-5xl font-black tracking-tighter text-white">
                {{ formatValue(animatedStats[index], stat.value) }}
                </h3>
                <span class="text-3xl font-bold text-yellow-400">{{ stat.suffix }}</span>
            </div>

            <p class="mt-3 text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400 group-hover:text-gray-200">
                {{ stat.label }}
            </p>
            </div>

        </div>
        </div>
    </div>
</template>

<style scoped>

h3 {
    font-variant-numeric: tabular-nums;
}
</style>