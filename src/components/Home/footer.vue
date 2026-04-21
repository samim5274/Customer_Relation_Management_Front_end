<script setup>
import { ref } from 'vue';

const email = ref('');
const isSubmitting = ref(false);

const handleSubscribe = async () => {
    if (!email.value) return;
    isSubmitting.ref = true;
  
    setTimeout(() => {
        alert('Thank you for subscribing to TravelBD!');
        email.value = '';
        isSubmitting.value = false;
    }, 1500);
};

const socialLinks = [
    { name: 'facebook', icon: 'fa-brands fa-facebook-f', color: 'hover:bg-[#1877F2]' },
    { name: 'instagram', icon: 'fa-brands fa-instagram', color: 'hover:bg-[#E4405F]' },
    { name: 'twitter', icon: 'fa-brands fa-x-twitter', color: 'hover:bg-[#000000]' },
    { name: 'youtube', icon: 'fa-brands fa-youtube', color: 'hover:bg-[#FF0000]' }
];
</script>

<template>
    <footer class="relative bg-[#050b18] pt-20 pb-10 text-white overflow-hidden">
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>

        <div class="relative mx-auto max-w-7xl px-4">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-12">
            
            <div class="lg:col-span-4">
            <h2 class="text-3xl font-black tracking-tighter text-white">
                Travel<span class="text-yellow-400">BD</span>
            </h2>
            <p class="mt-6 text-gray-400 text-sm leading-relaxed max-w-sm">
                Since 2014, we've been crafting unforgettable journeys. Join 10k+ happy travelers exploring the world's most beautiful destinations with our premium, secure packages.
            </p>
            <div class="mt-8 flex flex-wrap gap-4">
                <a 
                    v-for="social in socialLinks" 
                    :key="social.name" 
                    href="#" 
                    :class="[
                        'h-11 w-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-lg',
                        social.color
                    ]"
                    :title="social.name"
                >
                    <i :class="[social.icon, 'text-lg transition-transform duration-300 group-hover:scale-110 text-white']"></i>
                </a>
            </div>
            </div>

            <div class="lg:col-span-2">
            <h4 class="text-sm font-black uppercase tracking-[0.2em] text-yellow-400 mb-8">Navigation</h4>
            <ul class="space-y-4 text-gray-400 text-sm">
                <li v-for="link in ['About Us', 'Our Packages', 'Destinations', 'Travel Guides']" :key="link">
                <a href="#" class="flex items-center group">
                    <span class="h-1 w-0 bg-yellow-400 transition-all group-hover:w-3 mr-0 group-hover:mr-2"></span>
                    <span class="hover:text-white transition-colors">{{ link }}</span>
                </a>
                </li>
            </ul>
            </div>

            <div class="lg:col-span-2">
            <h4 class="text-sm font-black uppercase tracking-[0.2em] text-yellow-400 mb-8">Services</h4>
            <ul class="space-y-4 text-gray-400 text-sm">
                <li v-for="service in ['Hotel Booking', 'Flight Tickets', 'Visa Support', 'Tour Guide']" :key="service">
                <a href="#" class="hover:text-white transition-colors flex items-center gap-2">
                    <span class="text-yellow-400/50">•</span> {{ service }}
                </a>
                </li>
            </ul>
            </div>

            <div class="lg:col-span-4">
            <h4 class="text-sm font-black uppercase tracking-[0.2em] text-yellow-400 mb-8">Newsletter</h4>
            <p class="text-sm text-gray-400 mb-6 italic">Subscribe to get exclusive "Flash Deal" alerts.</p>
            
            <div class="relative flex overflow-hidden rounded-2xl bg-white/5 p-1 border border-white/10 focus-within:border-yellow-400/50 transition-colors">
                <input 
                v-model="email"
                type="email" 
                placeholder="Your Email Address" 
                class="w-full bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500"
                />
                <button 
                @click="handleSubscribe"
                :disabled="isSubmitting"
                class="rounded-xl bg-yellow-500 px-6 py-3 text-xs font-black uppercase tracking-widest text-black transition-all hover:bg-yellow-400 disabled:opacity-50"
                >
                {{ isSubmitting ? '...' : 'Join' }}
                </button>
            </div>

            <div class="mt-8 space-y-3">
                <div class="flex items-center gap-3 text-sm text-gray-400">
                <span class="text-yellow-400">📞</span> +880 1234-567890
                </div>
                <div class="flex items-center gap-3 text-sm text-gray-400">
                <span class="text-yellow-400">📍</span> Dhaka, Bangladesh
                </div>
            </div>
            </div>
        </div>

        <div class="mt-20 border-t border-white/5 pt-10">
            <div class="flex flex-col md:flex-row justify-between items-center gap-6">
                <div class="flex flex-col md:flex-row items-center gap-2 text-sm text-gray-500">
                    <span>© {{ new Date().getFullYear() }} TravelBD. All rights reserved.</span>
                    <span class="hidden md:inline text-gray-800">|</span>
                    <span class="flex items-center gap-1">
                    Crafted with ❤️ by 
                    <a href="https://mercuviax.vercel.app/" 
                        target="_blank" 
                        class="text-white hover:text-blue-400 transition-all font-bold hover:underline decoration-2 underline-offset-4">
                        Mercuviax Software
                    </a>
                    </span>
                </div>

                <div class="flex flex-wrap justify-center md:justify-end gap-4 opacity-50 grayscale hover:opacity-100 transition-all duration-500">
                    <div class="h-8 w-12 bg-white rounded flex items-center justify-center p-1 shadow-sm">
                        <img src="https://images.seeklogo.com/logo-png/38/1/bkash-logo-png_seeklogo-382709.png" alt="bKash" class="h-full object-contain" />
                    </div>
                    <div class="h-8 w-12 bg-white rounded flex items-center justify-center p-1 shadow-sm">
                        <img src="https://static.vecteezy.com/system/resources/previews/068/973/792/non_2x/nagad-logo-horizontal-mobile-banking-app-icon-on-transparent-background-free-png.png" alt="Nagad" class="h-full object-contain" />
                    </div>
                    <div class="h-8 w-12 bg-white rounded flex items-center justify-center p-1 shadow-sm">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/Visa_Inc._logo_%282005%E2%80%932014%29.svg" alt="Visa" class="h-full object-contain" />
                    </div>
                    <div class="h-8 w-12 bg-white rounded flex items-center justify-center p-1 shadow-sm">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" class="h-full object-contain" />
                    </div>
                    <div class="h-8 w-12 bg-white rounded flex items-center justify-center p-1 shadow-sm">
                        <img src="https://sslcommerz.com/wp-content/uploads/2021/11/logo.png" alt="sslcommerz" class="h-full object-contain" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    font-family: 'Inter', sans-serif;
}

a {
    backdrop-filter: blur(4px);
}
</style>