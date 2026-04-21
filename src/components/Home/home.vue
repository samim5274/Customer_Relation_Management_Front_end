<script setup>
import { ref } from 'vue';

import topSection from './top-section.vue';
import HeroSection from './HeroSection.vue';
import PackageCard from './PackageCard.vue';
import StatsSection from './StatsSection.vue';
import SpecialOffer from './SpecialOffer.vue';
import Footer from './footer.vue';
import FloatingActions from './FloatingActions.vue';
import Destinations from './Destinations.vue';
import Features from './Features.vue';

const packages = ref([
    {
        id: 1,
        name: "Sajek Valley Relaxation",
        location: "Rangamati",
        price: "4,500",
        duration: "3 Days/2 Nights",
        image: "https://images.pexels.com/photos/30270882/pexels-photo-30270882.jpeg",
        description: "Enjoy the clouds and the mountains in the heart of Sajek."
    },
    {
        id: 2,
        name: "Cox's Bazar Beach Tour",
        location: "Chittagong",
        price: "7,000",
        duration: "4 Days/3 Nights",
        image: "https://images.pexels.com/photos/15213973/pexels-photo-15213973.jpeg",
        description: "The longest sea beach in the world is waiting for you."
    },
    {
        id: 3,
        name: "Sylhet Tea Garden Trip",
        location: "Sylhet",
        price: "5,500",
        duration: "2 Days/1 Night",
        image: "https://images.pexels.com/photos/29437326/pexels-photo-29437326.jpeg",
        description: "Explore the lush green tea gardens and waterfalls."
    }
]);
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <topSection />
        <HeroSection />
        
        <div class="mx-auto max-w-7xl px-4 py-16">
            <div class="mb-10 flex items-center justify-between">
                <div>
                <h2 class="text-3xl font-bold text-gray-800">Popular Destinations</h2>
                <div class="h-1 w-20 bg-yellow-500 mt-2"></div>
                </div>
                <a href="#" class="text-blue-600 font-semibold hover:underline">View All</a>
            </div>

            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <PackageCard 
                v-for="item in packages" 
                :key="item.id" 
                :package="item" 
                />
            </div>
        </div>

        <StatsSection />
        <SpecialOffer />
        <Destinations />
        <Features />
        <Footer />
        <FloatingActions />
    </div>
</template>