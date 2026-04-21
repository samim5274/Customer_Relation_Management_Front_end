<script setup>
const destinations = [
    {
        id: 1,
        title: 'Santorini, Greece',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop',
        price: '৳85,500',
        duration: '5 Days, 4 Nights',
        tag: 'Honeymoon'
    },
    {
        id: 2,
        title: 'Bali, Indonesia',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop',
        price: '৳42,000',
        duration: '4 Days, 3 Nights',
        tag: 'Adventure'
    },
    {
        id: 3,
        title: 'Swiss Alps, Switzerland',
        image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop',
        price: '৳1,20,000',
        duration: '7 Days, 6 Nights',
        tag: 'Luxury'
    },
    {
        id: 4,
        title: 'Maldives',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=800&auto=format&fit=crop',
        price: '৳55,000',
        duration: '3 Days, 2 Nights',
        tag: 'Beach'
    }
];
</script>

<template>
    <section class="bg-gray-50 py-24">
        <div class="mx-auto max-w-7xl px-4 lg:px-8">
            
            <div class="mb-16 flex flex-col items-center text-center">
                <span class="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-blue-600 mb-4">
                    Top Destinations
                </span>
                <h2 class="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-6">
                    Start Your Adventure <span class="text-blue-600">Today</span>
                </h2>
                <p class="max-w-2xl text-gray-500 text-sm md:text-base leading-relaxed font-medium">
                    Explore our handpicked destinations across the globe, from snowy mountains to tropical beaches. Premium experiences guaranteed.
                </p>
            </div>

            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div v-for="place in destinations" :key="place.id" class="group relative h-[450px] overflow-hidden rounded-[2.5rem] bg-gray-200 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-blue-200">
                    
                    <img :src="place.image" :alt="place.title" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />

                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                    <div class="absolute left-6 top-6">
                        <span class="rounded-full bg-white/20 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white backdrop-blur-md border border-white/30">
                            {{ place.tag }}
                        </span>
                    </div>

                    <div class="absolute bottom-0 p-8 w-full">
                        <div class="flex items-center gap-2 text-yellow-400 text-xs mb-2">
                            <i class="fa-solid fa-star" v-for="i in 5" :key="i"></i>
                            <span class="text-white/70 ml-1">(4.9)</span>
                        </div>
                        <h3 class="text-2xl font-black text-white mb-2 tracking-tight">{{ place.title }}</h3>
                        
                        <div class="flex items-center gap-4 text-white/70 text-xs font-bold mb-6">
                            <span class="flex items-center gap-1.5">
                                <i class="fa-solid fa-calendar-days text-blue-400"></i> {{ place.duration }}
                            </span>
                        </div>

                        <div class="flex items-center justify-between border-t border-white/10 pt-6">
                            <div>
                                <p class="text-[10px] uppercase font-bold text-white/50 tracking-widest">Start From</p>
                                <p class="text-xl font-black text-white">{{ place.price }}</p>
                            </div>
                            <button class="h-12 w-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg transition-all hover:bg-yellow-500 hover:text-black">
                                <i class="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-16 text-center">
                <button class="rounded-full border-2 border-gray-200 bg-transparent px-10 py-4 text-sm font-black uppercase tracking-widest text-gray-900 transition-all hover:bg-blue-600 hover:border-blue-600 hover:text-white">
                    Explore All Destinations
                </button>
            </div>
        </div>
    </section>
</template>