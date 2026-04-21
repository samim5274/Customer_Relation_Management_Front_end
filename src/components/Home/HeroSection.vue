<template>
    <div class="relative min-h-[850px] md:h-[750px] w-full overflow-hidden">
        <div 
        class="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110 hover:scale-100"
        style="background-image: url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80');"
        >
        <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
        </div>

        <div class="relative flex h-full flex-col items-center justify-center px-4 py-20 text-center text-white">
        
        <div class="mb-6 animate-fade-in-down">
            <div class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md border border-white/20 shadow-xl">
            <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
            </span>
            <span class="text-[10px] md:text-xs font-bold text-white uppercase tracking-[0.2em]">
                Special 2026 Winter Deals is Live
            </span>
            </div>
        </div>

        <h1 class="max-w-4xl mb-6 text-4xl font-extrabold tracking-tight md:text-7xl lg:leading-[1.1]">
            Journey Beyond Your <br />
            <span class="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent italic">Imagination</span>
        </h1>
        
        <p class="mb-10 max-w-2xl text-base text-gray-200 md:text-xl font-light">
            Discover hidden gems and create unforgettable memories with our handpicked premium travel experiences.
        </p>

        <div class="w-full max-w-5xl rounded-3xl bg-white/10 p-2 backdrop-blur-xl border border-white/30 shadow-2xl">
            <div class="grid grid-cols-1 gap-2 md:grid-cols-4 p-2 bg-white rounded-2xl md:rounded-[1.2rem]">
            
            <div class="flex flex-col items-start px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100">
                <label class="text-[10px] uppercase font-black text-gray-400 mb-1">Destination</label>
                <div class="flex items-center w-full">
                <span class="text-blue-500 mr-2 text-sm">📍</span>
                <input type="text" placeholder="Where to?" class="w-full bg-transparent text-gray-800 text-sm font-semibold outline-none" />
                </div>
            </div>

            <div class="flex flex-col items-start px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100">
                <label class="text-[10px] uppercase font-black text-gray-400 mb-1">Tour Type</label>
                <div class="flex items-center w-full">
                <span class="text-blue-500 mr-2 text-sm">⛵</span>
                <select class="w-full bg-transparent text-gray-800 text-sm font-semibold outline-none cursor-pointer">
                    <option>Adventure Tour</option>
                    <option>Luxury Honeymoon</option>
                    <option>Family Package</option>
                </select>
                </div>
            </div>

            <div class="flex flex-col items-start px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100">
                <label class="text-[10px] uppercase font-black text-gray-400 mb-1">Date</label>
                <div class="flex items-center w-full">
                <span class="text-blue-500 mr-2 text-sm">📅</span>
                <input type="date" class="w-full bg-transparent text-gray-800 text-sm font-semibold outline-none" />
                </div>
            </div>

            <button class="flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 px-6 font-bold text-white transition-all hover:bg-blue-700 active:scale-95 shadow-lg shadow-blue-200">
                <span>Search Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </button>
            </div>
        </div>

        <div class="mt-12 flex flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-12 text-xs md:text-sm font-medium text-gray-300 uppercase tracking-widest">
            <div class="flex items-center justify-center gap-2 group cursor-default">
            <span class="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 text-green-400 border border-green-500/30 transition-transform group-hover:scale-110">✔</span>
            Safe Booking
            </div>
            <div class="flex items-center justify-center gap-2 group cursor-default">
            <span class="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 text-green-400 border border-green-500/30 transition-transform group-hover:scale-110">✔</span>
            Pro Guides
            </div>
            <div class="flex items-center justify-center gap-2 group cursor-default">
            <span class="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/20 text-green-400 border border-green-500/30 transition-transform group-hover:scale-110">✔</span>
            24/7 Support
            </div>
        </div>
        </div>

        <div class="absolute bottom-0 w-full leading-[0] z-10">
        <svg class="relative block w-full h-[40px] md:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,88.46,128.52,95.4,191.85,85.11,257.49,74.52,279.7,64.15,321.39,56.44Z" fill="#f9fafb"></path>
        </svg>
        </div>
    </div>
</template>

<style scoped>
@keyframes fade-in-down {
    0% { opacity: 0; transform: translateY(-20px); }
    100% { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-down {
    animation: fade-in-down 0.8s ease-out;
}
</style>