<template>
    <div class="p-6 space-y-8 min-h-screen">

        <div class="max-w-6xl mx-auto mb-20 px-4 sm:px-6">
            <div class="grid grid-cols-1 md:grid-cols-12 items-center gap-12 lg:gap-16">
                
                <div class="md:col-span-5 flex items-center justify-center relative">
                    <div class="absolute w-72 h-72 bg-blue-500/10 dark:bg-blue-600/5 rounded-full blur-[80px] -z-10"></div>
                    
                    <div class="relative group">
                        <div class="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[3rem] opacity-20 group-hover:opacity-40 blur transition duration-700"></div>
                        
                        <div class="relative w-52 h-52 sm:w-64 sm:h-64 bg-white dark:bg-slate-900 rounded-[2.8rem] shadow-2xl flex items-center justify-center p-8 border border-slate-100 dark:border-slate-800 transition-all duration-500 group-hover:scale-[1.03] group-hover:rotate-1">
                            
                            <div class="w-full h-full flex items-center justify-center overflow-hidden">
                                <img 
                                    :src="bazarLogoLight" 
                                    alt="Dynamic Bazar Logo" 
                                    class="max-w-full max-h-full object-contain block dark:hidden transition-opacity duration-300"
                                />

                                <img 
                                    :src="bazarLogoDark" 
                                    alt="Dynamic Bazar Logo" 
                                    class="max-w-full max-h-full object-contain hidden dark:block transition-opacity duration-300"
                                />
                            </div>

                            <div class="absolute -bottom-3 -right-3 bg-white dark:bg-slate-900 p-1.5 rounded-2xl shadow-xl">
                                <div class="bg-blue-600 text-white flex items-center gap-1.5 px-4 py-2 rounded-xl border border-blue-500/20 shadow-inner">
                                    <i class="fa-solid fa-circle-check text-xs"></i>
                                    <span class="text-[11px] font-black uppercase tracking-tighter">Verified</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="md:col-span-7 space-y-8 text-center md:text-left">
                    <div class="flex flex-wrap items-center justify-center md:justify-start gap-3">
                        <span class="px-4 py-1.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-[10px] font-black uppercase tracking-widest">
                            Enterprise
                        </span>
                        <span class="px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                            <span class="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                            v1.0 Release
                        </span>
                    </div>

                    <div class="space-y-4">
                        <h1 class="text-4xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                            The Future of <br>
                            <span class="relative">
                                <span class="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#2A7B9A] to-[#2D647C]">
                                    Dynamic Bazar Merchant BD
                                </span>
                                <span class="absolute bottom-2 left-0 w-full h-3 bg-blue-500/10 -z-10 rounded-full"></span>
                            </span>
                        </h1>
                        <p class="text-slate-600 dark:text-slate-400 text-lg sm:text-xl leading-relaxed max-w-2xl font-medium">
                            Redefining the e-commerce landscape in Bangladesh. A powerful, 
                            <span class="text-slate-900 dark:text-slate-100 font-bold italic">all-in-one ecosystem</span> 
                            meticulously crafted for modern vendors and smart consumers.
                        </p>
                    </div>

                    <div class="grid grid-cols-2 sm:flex items-center justify-center md:justify-start gap-8 pt-4">
                        <div class="group">
                            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 group-hover:text-blue-500 transition-colors">Launch Year</p>
                            <div class="flex items-baseline gap-1">
                                <span class="text-3xl font-black text-slate-800 dark:text-white tracking-tighter">2026</span>
                                <span class="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                            </div>
                        </div>
                        
                        <div class="hidden sm:block h-10 w-px bg-slate-200 dark:bg-slate-800"></div>

                        <div class="group">
                            <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 group-hover:text-blue-500 transition-colors">Tech Architecture</p>
                            <div class="flex items-baseline gap-1">
                                <span class="text-3xl font-black text-slate-800 dark:text-white tracking-tighter">LVV</span>
                                <span class="text-[10px] font-bold text-blue-500">Stack</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-300 dark:border-slate-800">
            <h2 class="text-2xl font-bold mb-4 text-slate-800 dark:text-white flex items-center gap-2">
                <span class="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">🚀</span> Our Vision
            </h2>
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                <strong>Dynamic Bazar Merchant BD</strong> is a comprehensive multi-vendor e-commerce solution 
                designed to bridge the gap between local merchants and digital consumers. We provide 
                a seamless marketplace experience where security, speed, and user-experience 
                are our top priorities. Our goal is to digitize traditional commerce and 
                provide tools for businesses of all sizes to thrive online.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-300 dark:border-slate-800">
                <h3 class="text-xl font-bold mb-3 text-slate-800 dark:text-white">Our Journey</h3>
                <p class="text-slate-600 dark:text-slate-300 italic">
                    Initiated in <strong>February 2026</strong>, Bazar Merchant BD was built to 
                    solve the complexities of inventory management, payment processing, and 
                    logistics for Bangladeshi entrepreneurs.
                </p>
            </div>
            <div class="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-300 dark:border-slate-800">
                <h3 class="text-xl font-bold mb-3 text-slate-800 dark:text-white">Our Commitment</h3>
                <p class="text-slate-600 dark:text-slate-300">
                    We ensure a <strong>secure payment gateway</strong>, real-time order tracking, 
                    and a dynamic dashboard for both merchants and customers to maintain 
                    transparency at every stage.
                </p>
            </div>
        </div>

        <div class="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-300 dark:border-slate-800">
            <div class="text-center mb-10">
                <h2 class="text-2xl font-bold text-slate-800 dark:text-white">Built with Modern Tech Stack</h2>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">High-performance tools driving the platform</p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                
                <div class="group flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-800/40 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:bg-red-50 dark:hover:bg-red-900/10 border border-slate-300 dark:border-slate-300/10 hover:border-red-200 dark:hover:border-red-900/30">
                    <div class="text-4xl mb-3 text-slate-400 group-hover:text-[#FF2D20] transition-colors duration-300">
                        <i class="fa-brands fa-laravel"></i>
                    </div>
                    <span class="font-bold text-slate-700 dark:text-slate-200 text-sm tracking-wide">Laravel</span>
                </div>

                <div class="group flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-800/40 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:bg-indigo-50 dark:hover:bg-indigo-900/10 border border-slate-300 dark:border-slate-300/10 hover:border-indigo-200 dark:hover:border-indigo-900/30">
                    <div class="text-4xl mb-3 text-slate-400 group-hover:text-[#777BB4] transition-colors duration-300">
                        <i class="fa-brands fa-php"></i>
                    </div>
                    <span class="font-bold text-slate-700 dark:text-slate-200 text-sm tracking-wide">PHP 8.x</span>
                </div>

                <div class="group flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-800/40 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 border border-slate-300 dark:border-slate-300/10 hover:border-emerald-200 dark:hover:border-emerald-900/30">
                    <div class="text-4xl mb-3 text-slate-400 group-hover:text-[#42b883] transition-colors duration-300">
                        <i class="fa-brands fa-vuejs"></i>
                    </div>
                    <span class="font-bold text-slate-700 dark:text-slate-200 text-sm tracking-wide">Vue.js 3</span>
                </div>

                <div class="group flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-800/40 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:bg-sky-50 dark:hover:bg-sky-900/10 border border-slate-300 dark:border-slate-300/10 hover:border-sky-200 dark:hover:border-sky-900/30">
                    <div class="text-4xl mb-3 text-slate-400 group-hover:text-[#06B6D4] transition-colors duration-300">
                        <i class="fa-brands fa-tailwind-css"></i> </div>
                    <span class="font-bold text-slate-700 dark:text-slate-200 text-sm tracking-wide">Tailwind</span>
                </div>

                <div class="group flex flex-col items-center p-6 bg-slate-50 dark:bg-slate-800/40 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:bg-amber-50 dark:hover:bg-amber-900/10 border border-slate-300 dark:border-slate-300/10 hover:border-amber-200 dark:hover:border-amber-900/30">
                    <div class="text-4xl mb-3 text-slate-400 group-hover:text-[#F29111] transition-colors duration-300">
                        <i class="fa-solid fa-database"></i>
                    </div>
                    <span class="font-bold text-slate-700 dark:text-slate-200 text-sm tracking-wide">MySQL/Redis</span>
                </div>

            </div>
        </div>

        <div class="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-300 dark:border-slate-800">
            <div class="flex items-center justify-between mb-8">
                <div>
                    <h2 class="text-2xl font-bold text-slate-800 dark:text-white leading-tight">Platform Ecosystem</h2>
                    <p class="text-sm text-slate-500 dark:text-slate-400">Integrated architecture for seamless operations</p>
                </div>
                <div class="hidden sm:block h-px flex-grow mx-8 bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div class="group relative p-8 rounded-xl transition-all duration-500 bg-slate-50 dark:bg-slate-800/30 border border-slate-300 dark:border-slate-800 hover:border-indigo-500/30 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-indigo-500/10">
                    <div class="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <i class="fa-solid fa-shield-halved text-4xl text-indigo-600"></i>
                    </div>
                    <div class="w-14 h-14 bg-indigo-500/10 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white shadow-inner">
                        <i class="fa-solid fa-user-shield text-xl"></i>
                    </div>
                    <h3 class="font-bold text-slate-800 dark:text-white text-xl mb-3">System Admin</h3>
                    <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        Centralized control hub for comprehensive oversight, security protocols, and advanced platform analytics.
                    </p>
                </div>

                <div class="group relative p-8 rounded-xl transition-all duration-500 bg-slate-50 dark:bg-slate-800/30 border border-slate-300 dark:border-slate-800 hover:border-emerald-500/30 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-emerald-500/10">
                    <div class="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <i class="fa-solid fa-store text-4xl text-emerald-600"></i>
                    </div>
                    <div class="w-14 h-14 bg-emerald-500/10 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white shadow-inner">
                        <i class="fa-solid fa-shop text-xl"></i>
                    </div>
                    <h3 class="font-bold text-slate-800 dark:text-white text-xl mb-3">Merchant Hub</h3>
                    <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        Advanced storefront management, dynamic product inventory, sales forecasting, and deep customer insights.
                    </p>
                </div>

                <div class="group relative p-8 rounded-xl transition-all duration-500 bg-slate-50 dark:bg-slate-800/30 border border-slate-300 dark:border-slate-800 hover:border-orange-500/30 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-orange-500/10">
                    <div class="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <i class="fa-solid fa-cart-shopping text-4xl text-orange-600"></i>
                    </div>
                    <div class="w-14 h-14 bg-orange-500/10 text-orange-600 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white shadow-inner">
                        <i class="fa-solid fa-bag-shopping text-xl"></i>
                    </div>
                    <h3 class="font-bold text-slate-800 dark:text-white text-xl mb-3">Customer Panel</h3>
                    <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        Personalized shopping experience with intelligent recommendations, secure payments, and live order tracking.
                    </p>
                </div>

            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-8 items-stretch">
    
            <div class="relative group overflow-hidden bg-slate-900 p-8 sm:p-10 rounded-xl shadow-2xl shadow-blue-950/30 border border-slate-800 flex flex-col lg:flex-row items-center gap-8 transition-all duration-500 hover:shadow-blue-500/10">
                <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2rem] blur opacity-10 group-hover:opacity-25 transition-opacity duration-500"></div>
                <div class="relative flex-shrink-0">
                    <div class="absolute -inset-2 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-slow"></div>
                    <div class="relative p-1.5 bg-slate-800 rounded-full">
                        <img 
                            :src="devSamim" 
                            alt="Samim Hossain - Lead Developer"
                            class="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>

                <div class="relative flex-grow text-center lg:text-left">
                    <div class="flex justify-center lg:justify-start mb-4">
                        <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-[10px] uppercase tracking-wider font-bold text-blue-400">
                            <span class="relative flex h-2 w-2">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Core Architect
                        </span>
                    </div>

                    <h3 class="text-xs text-blue-400 uppercase tracking-[0.2em] font-bold mb-1 opacity-70">Lead Developer</h3>
                    <a href="https://shamim-hossen.vercel.app/" target="_blank" class="block group/link mb-3">
                        <span class="text-3xl sm:text-4xl font-black text-white tracking-tight group-hover/link:text-blue-400 transition-colors duration-300">
                            Samim Hossain
                        </span>
                        <i class="fa-solid fa-arrow-up-right-from-square text-sm text-blue-500 opacity-0 group-hover/link:opacity-100 transition-all translate-y-1 ml-2"></i>
                    </a>
                    <p class="text-sm text-slate-400 leading-relaxed max-w-md mb-6">
                        Expert in architecting high-performance e-commerce ecosystems using <strong>Laravel</strong> & <strong>Vue.js</strong>. Dedicated to clean code and scalable digital solutions.
                    </p>

                    <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                        <div class="flex items-center gap-2 p-1 bg-slate-800/50 rounded-full border border-slate-700/50">
                            <a href="https://github.com/samim5274" target="_blank" class="w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:bg-white hover:text-black transition-all duration-300" title="GitHub">
                                <i class="fa-brands fa-github text-lg"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/samim-hossain-bc5274/" target="_blank" class="w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:bg-[#0077b5] hover:text-white transition-all duration-300" title="LinkedIn">
                                <i class="fa-brands fa-linkedin-in text-lg"></i>
                            </a>
                            <a href="https://www.facebook.com/bc.bc.94402" target="_blank" class="w-9 h-9 flex items-center justify-center rounded-full text-slate-400 hover:bg-[#1877f2] hover:text-white transition-all duration-300" title="Facebook">
                                <i class="fa-brands fa-facebook-f text-lg"></i>
                            </a>
                        </div>

                        <div class="hidden sm:block h-6 w-px bg-slate-700 mx-2"></div>

                        <div class="flex items-center gap-3">
                            <a href="https://wa.me/+8801762164746" target="_blank" class="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 text-sm font-semibold">
                                <i class="fa-brands fa-whatsapp text-base"></i>
                                <span>WhatsApp</span>
                            </a>
                            <a href="https://t.me/samim5274" target="_blank" class="w-10 h-10 flex items-center justify-center rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 hover:bg-sky-500 hover:text-white transition-all duration-300">
                                <i class="fa-brands fa-telegram text-lg"></i>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            <div class="relative group bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-300 dark:border-slate-800 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5">
                
                <div class="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>

                    <div>
                        <div class="flex items-center gap-3 mb-6">
                            <div class="flex flex-col gap-1">
                                <div class="w-8 h-1 bg-blue-600 rounded-full"></div>
                                <div class="w-4 h-1 bg-blue-400 rounded-full"></div>
                            </div>
                            <h3 class="text-xl font-black text-slate-800 dark:text-white tracking-tight uppercase">
                                Parent Organization
                            </h3>
                        </div>
                        
                        <div class="mb-6 flex items-center gap-5">
                            <div class="relative group/logo">
                                <div class="absolute -inset-2 bg-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500"></div>
                                
                                <div class="relative w-16 h-16 p-1 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-300 dark:border-slate-700 flex items-center justify-center overflow-hidden transform transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                                    <img 
                                        :src="mercuviaxLogo" 
                                        alt="MERCUVIAX Dark Logo" 
                                        class="w-full h-full object-contain block dark:hidden transition-all duration-500"
                                    />

                                    <img 
                                        :src="mercuviaxWhiteLogo" 
                                        alt="MERCUVIAX Light Logo" 
                                        class="w-full h-full object-contain hidden dark:block transition-all duration-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <h4 class="text-2xl font-black text-slate-900 dark:text-white leading-none tracking-tight">
                                    MERCUVIAX
                                </h4>
                                <div class="flex items-center gap-2 mt-1.5">
                                    <span class="h-px w-4 bg-blue-500"></span>
                                    <p class="text-[10px] font-bold text-blue-600 dark:text-blue-400 tracking-[0.25em] uppercase">
                                        Tech Solutions
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p class="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-sm text-justify">
                            <span class="text-blue-600 dark:text-blue-400 font-semibold"><a href="https://dynamicbazarmerchantbd.com/" target="_blank" class="hover:underline hover:cursor-pointer">Dynamic Bazar Merchant BD</a></span> is the flagship e-commerce ecosystem powered by <strong class="text-slate-800 dark:text-slate-200"><a href="https://mercuviax.vercel.app/" target="_blank" class="hover:underline hover:cursor-pointer">MERCUVIAX</a></strong>. We specialize in building high-performance automation tools and enterprise-grade software that drive business growth.
                        </p>
                    </div>
                    
                    <div class="mt-auto pt-6 border-t border-slate-300 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-800/20 -mx-8 -mb-8 px-8 pb-8 rounded-b-[2rem]">
                    <div class="flex items-center justify-between gap-4 flex-wrap">
                        
                        <div class="hidden sm:block">
                            <p class="text-[10px] uppercase tracking-[0.15em] font-bold text-slate-400 dark:text-slate-500 mb-1">Official Website</p>
                            <p class="text-xs font-semibold text-slate-600 dark:text-slate-300 italic">Explore our ecosystem</p>
                        </div>

                        <div class="relative">
                            <div class="absolute -inset-1 bg-blue-500 rounded-xl blur opacity-20 group-hover/btn:opacity-40 animate-pulse"></div>
                            
                            <a href="https://mercuviax.vercel.app/" target="_blank" 
                            class="group/btn relative inline-flex items-center justify-center px-8 py-3.5 font-black text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] active:scale-[0.97] overflow-hidden">
                                
                                <span class="relative z-10 flex items-center gap-2.5 tracking-tight text-sm">
                                    Discover MERCUVIAX
                                    <i class="fa-solid fa-arrow-right-long text-xs transition-transform duration-300 group-hover/btn:translate-x-1.5"></i>
                                </span>

                                <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
                                
                                <div class="absolute bottom-0 left-0 w-full h-[2px] bg-white/20"></div>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <div class="text-center pt-8 border-t border-slate-200 dark:border-slate-800">
            <p class="text-slate-500 text-sm">
                Software Version: <span class="font-mono font-bold text-slate-700 dark:text-slate-300">1.0.0-stable</span> | 
                Latest Update: <span class="font-semibold text-slate-700 dark:text-slate-300">June 2026</span>
            </p>
        </div>

    </div>
</template>

<script setup>
const bazarLogoLight = "/logo/logo.png";
const bazarLogoDark = "/logo/white-logo.png";

const devSamim = "/images/dev/dev1.jpg";
const mercuviaxLogo = "/images/dev/MercoviaX-logo.png";
const mercuviaxWhiteLogo = "/images/dev/MercuvaiX-logo-white.png";
</script>

<style scoped>
.transition-hover {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>