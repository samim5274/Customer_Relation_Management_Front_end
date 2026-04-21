<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showTapToTop = ref(false);

// স্ক্রল পজিশন চেক করার জন্য
const handleScroll = () => {
    if (window.scrollY > 400) {
        showTapToTop.value = true;
    } else {
        showTapToTop.value = false;
    }
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <div class="fixed bottom-6 right-6 z-[999] flex flex-col gap-4">
        
        <a href="https://wa.me/8801533021557" 
            target="_blank"
            class="group fixed bottom-24 right-6 z-[999] flex items-center gap-3">
            <span class="hidden md:block translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 bg-white text-gray-800 text-sm font-bold px-4 py-2 rounded-full shadow-xl border border-gray-100">
                Need Help? Chat with us!
            </span>

            <div class="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-[#25D366]/40">
                
                <span class="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30"></span>
                <span class="absolute inset-0 animate-pulse rounded-full bg-[#25D366] opacity-20"></span>

                <i class="fa-brands fa-whatsapp text-white text-3xl relative z-10"></i>
                
                <span class="absolute top-0 right-0 flex h-4 w-4">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
                </span>
            </div>
        </a>

        <Transition name="fade-slide">
            <button 
                v-if="showTapToTop"
                @click="scrollToTop"
                class="group flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:scale-110 shadow-blue-500/20 active:scale-95"
                title="Go to Top"
            >                
                <i class="fa-solid fa-angle-up text-xl transition-transform duration-300 group-hover:-translate-y-1"></i>
                
                <span class="absolute right-16 scale-0 rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-bold text-white transition-all group-hover:scale-100">
                    Top
                </span>
            </button>
        </Transition>

    </div>
</template>

<style scoped>
/* Transition Animations */
/* Smooth Entrance Animation */
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(30px) scale(0.6);
}

button:hover i {
    animation: bounce-up 0.6s infinite alternate;
}

@keyframes bounce-up {
    from { transform: translateY(0); }
    to { transform: translateY(-4px); }
}
</style>