<template>
    <div class="p-6 md:p-10 min-h-screen">

        <div class="max-w-5xl mx-auto text-center mb-20 relative">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/10 dark:bg-blue-600/5 blur-[100px] -z-10"></div>
            
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-[10px] font-black uppercase tracking-widest mb-6">
                <i class="fa-solid fa-lock text-blue-500"></i>
                Bank-Grade Security
            </div>
            
            <h1 class="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
                Your Security is Our <br> 
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Highest Priority</span>
            </h1>
            
            <p class="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto font-medium">
                We employ multiple layers of defense to ensure your business data, 
                personal information, and financial transactions stay protected 24/7.
            </p>
        </div>

        <div class="max-w-6xl mx-auto space-y-16">
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="group p-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-300 dark:border-slate-800 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
                    <div class="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i class="fa-solid fa-file-shield text-2xl text-blue-600"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-3 tracking-tight">End-to-End Encryption</h3>
                    <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        Every piece of data transmitted between your device and our servers is protected using 256-bit SSL encryption technology.
                    </p>
                </div>

                <div class="group p-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-300 dark:border-slate-800 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10">
                    <div class="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i class="fa-solid fa-fingerprint text-2xl text-emerald-600"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-3 tracking-tight">AI Fraud Detection</h3>
                    <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        Our intelligent algorithms monitor for suspicious activity in real-time, preventing unauthorized transactions before they happen.
                    </p>
                </div>

                <div class="group p-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-300 dark:border-slate-800 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10">
                    <div class="w-14 h-14 bg-orange-50 dark:bg-orange-900/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <i class="fa-solid fa-credit-card text-2xl text-orange-600"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-800 dark:text-white mb-3 tracking-tight">PCI DSS Compliance</h3>
                    <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                        We adhere to the highest international standards for payment security, ensuring your card information is never compromised.
                    </p>
                </div>
            </div>

            <div class="bg-slate-900 rounded-2xl overflow-hidden relative">
                <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                
                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 p-10 lg:p-20 items-center">
                    <div>
                        <h2 class="text-3xl font-black text-white mb-6 tracking-tight">Advanced Protection Ecosystem</h2>
                        <div class="space-y-6">
                            <div class="flex items-start gap-4">
                                <div class="p-2 bg-blue-500 rounded-lg mt-1"><i class="fa-solid fa-check text-white text-xs"></i></div>
                                <div>
                                    <h4 class="text-white font-bold">Two-Factor Authentication (2FA)</h4>
                                    <p class="text-slate-400 text-sm">Add an extra layer of security to your account using mobile verification.</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="p-2 bg-blue-500 rounded-lg mt-1"><i class="fa-solid fa-check text-white text-xs"></i></div>
                                <div>
                                    <h4 class="text-white font-bold">Automated Backups</h4>
                                    <p class="text-slate-400 text-sm">Your business data is backed up hourly in geographically distributed cloud servers.</p>
                                </div>
                            </div>
                            <div class="flex items-start gap-4">
                                <div class="p-2 bg-blue-500 rounded-lg mt-1"><i class="fa-solid fa-check text-white text-xs"></i></div>
                                <div>
                                    <h4 class="text-white font-bold">Real-time Threat Monitoring</h4>
                                    <p class="text-slate-400 text-sm">Active firewalls and DDoS protection are always on guard to block malicious attacks.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="relative flex justify-center">
                        <div class="w-64 h-64 sm:w-80 sm:h-80 bg-blue-600 rounded-full flex items-center justify-center relative animate-pulse-slow">
                            <div class="absolute inset-0 rounded-full border-[10px] border-blue-500/30 animate-ping"></div>
                            <i class="fa-solid fa-shield-halved text-[8rem] text-white"></i>
                        </div>
                        <div class="absolute top-0 right-0 bg-white p-3 rounded-2xl shadow-xl transform rotate-12">
                            <i class="fa-solid fa-vault text-blue-600 text-2xl"></i>
                        </div>
                        <div class="absolute bottom-10 -left-5 bg-white p-3 rounded-2xl shadow-xl transform -rotate-12">
                            <i class="fa-solid fa-key text-blue-600 text-2xl"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center py-10">
                <h3 class="text-slate-400 uppercase tracking-[0.3em] text-[10px] font-black mb-8">Secured By Industry Leaders</h3>
                <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <i class="fa-brands fa-aws text-4xl text-slate-600 dark:text-slate-300"></i>
                    <i class="fa-brands fa-cloudflare text-4xl text-slate-600 dark:text-slate-300"></i>
                    <i class="fa-brands fa-stripe text-4xl text-slate-600 dark:text-slate-300"></i>
                    <i class="fa-brands fa-digital-ocean text-4xl text-slate-600 dark:text-slate-300"></i>
                </div>
            </div>

            <div class="bg-blue-600 rounded-xl p-10 text-center tex3-white shadow-2xl shadow-blue-500/20">
                <h2 class="text-3xl font-black mb-4 text-slate-100">Found a Security Vulnerability?</h2>
                <p class="text-blue-100 mb-8 max-w-xl mx-auto">We take security reports seriously. If you've discovered a bug, please let us know through our Bug Bounty program.</p>
                <a href="mailto:security@dynamicbazarmerchantbd.com" class="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-black rounded-2xl hover:bg-blue-50 transition-all active:scale-95 shadow-xl">
                    <i class="fa-solid fa-bug"></i>
                    Report a Vulnerability
                </a>
            </div>

        </div>

        <div class="text-center py-10">
            <p class="text-slate-400 text-xs tracking-wide">
                &copy; 2026 <strong><a href="https://mercuviax.vercel.app/" target="_blank" class=" hover:underline hover:cursor-pointer">MERCUVIAX</a></strong> Security Operations Center. All Rights Reserved.
            </p>
        </div>
    </div>
</template>

<script setup>
// No dynamic logic needed for static security display
</script>

<style scoped>
.animate-pulse-slow {
    animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: .9; transform: scale(0.98); }
}
</style>