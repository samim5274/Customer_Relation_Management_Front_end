<script setup>
const features = [
    {
        id: 1,
        icon: 'fa-solid fa-shield-halved',
        title: 'Secure Booking',
        desc: 'Your safety and data security are our top priorities with encrypted payments.',
        bgColor: 'bg-blue-50',
        iconColor: 'text-blue-600'
    },
    {
        id: 2,
        icon: 'fa-solid fa-earth-americas',
        title: 'World Wide Tours',
        desc: 'Handpicked destinations across 50+ countries for unique experiences.',
        bgColor: 'bg-yellow-50',
        iconColor: 'text-yellow-600'
    },
    {
        id: 3,
        icon: 'fa-solid fa-headset',
        title: '24/7 Support',
        desc: 'Our dedicated travel experts are always available to assist you anywhere.',
        bgColor: 'bg-green-50',
        iconColor: 'text-green-600'
    },
    {
        id: 4,
        icon: 'fa-solid fa-hand-holding-dollar',
        title: 'Best Price Guarantee',
        desc: 'We offer premium luxury experiences at the most competitive market rates.',
        bgColor: 'bg-purple-50',
        iconColor: 'text-purple-600'
    }
];
</script>

<template>
    <section class="bg-white py-24 overflow-hidden relative">
        <div class="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-[100px] -ml-32 -mt-32 opacity-60"></div>
        
        <div class="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
            <div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
                
                <div class="lg:col-span-5">
                    <span class="text-blue-600 font-black uppercase tracking-[0.3em] text-[11px] mb-4 block">Core Values</span>
                    <h2 class="text-3xl md:text-5xl font-black tracking-tighter text-gray-900 mb-8 leading-[1.1]">
                        We Make Every <br/>
                        <span class="text-blue-600">Step of Your Journey</span> 
                        Memorable
                    </h2>
                    <p class="text-gray-500 mb-10 text-base leading-relaxed font-medium">
                        Since 2014, we’ve helped over 10,000+ travelers find their dream destinations. Our expertise ensures you don't just visit a place, you live the moment.
                    </p>
                    
                    <div class="flex items-center gap-6">
                        <div class="flex -space-x-3">
                            <img v-for="i in 4" :key="i" :src="`https://i.pravatar.cc/100?img=${i+10}`" class="h-12 w-12 rounded-full border-4 border-white shadow-sm" />
                        </div>
                        <div>
                            <p class="text-sm font-black text-gray-900">10k+ Happy Travelers</p>
                            <div class="flex text-yellow-400 text-[10px]">
                                <i class="fa-solid fa-star" v-for="i in 5" :key="i"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div v-for="feature in features" :key="feature.id" 
                         class="group p-8 rounded-xl border border-gray-300 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-blue-600/5 hover:-translate-y-2">
                        
                        <div :class="['h-14 w-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-[15deg]', feature.bgColor]">
                            <i :class="[feature.icon, 'text-2xl', feature.iconColor]"></i>
                        </div>
                        
                        <h4 class="text-xl font-black text-gray-900 mb-3 tracking-tight">{{ feature.title }}</h4>
                        <p class="text-sm text-gray-500 leading-relaxed font-medium">
                            {{ feature.desc }}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>