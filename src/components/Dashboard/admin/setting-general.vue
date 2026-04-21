<template>
    <div>
        
        <!-- Message component -->
        <Message
            :successMsg="successMsg"
            :errorMsg="errorMsg"
            @update:successMsg="successMsg = $event"
            @update:errorMsg="errorMsg = $event"
        />

        <!-- Header -->
        <div class="flex items-center justify-between mb-8 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div>
                <h1 class="text-2xl font-bold text-slate-800 dark:text-white">Vendor Settings</h1>
                <p class="text-sm text-slate-500 dark:text-slate-400">Manage your store details and appearance</p>
            </div>
            <div class="flex gap-3">
                <div class="relative group">
                    <div v-if="shopLogoPreview" class="h-16 w-16 rounded-full ring-4 ring-emerald-500/20 overflow-hidden bg-white">
                        <img :src="shopLogoPreview" class="h-full w-full object-cover" />
                    </div>
                    <div v-else class="h-16 w-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center border-2 border-dashed border-slate-300">
                        <span class="text-[10px] text-slate-400 font-medium">LOGO</span>
                    </div>
                </div>

                <div class="relative group">
                    <div v-if="shopWhiteLogoPreview" class="h-16 w-16 rounded-full ring-4 ring-emerald-500/20 overflow-hidden bg-slate-900">
                        <img :src="shopWhiteLogoPreview" class="h-full w-full object-cover" />
                    </div>
                    <div v-else class="h-16 w-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center border-2 border-dashed border-slate-300">
                        <span class="text-[10px] text-slate-400 font-medium">W-LOGO</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
            <!-- Branding Assets -->
            <div>
                <div class="space-y-6">
                    <label class="section-label">Main Logo</label>
                    <div class="mt-2 flex flex-col items-center p-4 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl hover:border-emerald-400 transition-colors cursor-pointer relative">
                        <input type="file" @change="onLogoChange" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*" />
                        <div v-if="!shopLogoPreview" class="text-center">
                            <div class="mx-auto h-12 w-12 text-slate-400 mb-2">📁</div>
                            <span class="text-xs font-medium text-slate-500">Upload Main Logo</span>
                        </div>
                        <img v-else :src="shopLogoPreview" class="h-24 w-24 object-contain rounded-lg" />
                    </div>
                </div>

                <div class="space-y-6 mt-4">
                    <label class="section-label">White Logo (For Dark UI)</label>
                    <div class="mt-2 flex flex-col items-center p-4 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl hover:border-emerald-400 transition-colors cursor-pointer relative bg-slate-900/10">
                        <input type="file" @change="onWhiteLogoChange" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*" />
                        <div v-if="!shopWhiteLogoPreview" class="text-center">
                            <div class="mx-auto h-12 w-12 text-slate-400 mb-2">📁</div>
                            <span class="text-xs font-medium text-slate-500">Upload White Logo</span>
                        </div>
                        <img v-else :src="shopWhiteLogoPreview" class="h-24 w-24 object-contain rounded-lg" />
                    </div>
                </div>
            </div>

            <!-- Shop Details -->
            <div class="lg:col-span-2 space-y-5">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <div class="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label class="input-label">Shop Name</label>
                            <input v-model="form.shop_name" type="text" class="input-field" />
                        </div>
                        <div>
                            <label class="input-label">Shop Slug (URL)</label>
                            <input v-model="form.shop_slug" type="text" class="input-field" />
                        </div>
                    </div>

                    <div>
                        <label class="input-label">Email Address</label>
                        <input v-model="form.email" type="email" class="input-field" />
                    </div>

                    <div>
                        <label class="input-label">Phone Number</label>
                        <input v-model="form.phone" type="text" class="input-field" />
                    </div>

                    <div class="md:col-span-2">
                        <label class="input-label">Shop Description</label>
                        <textarea v-model="form.shop_description" rows="3" class="input-field resize-none"></textarea>
                    </div>

                    <div class="md:col-span-2">
                        <label class="input-label">Physical Address</label>
                        <input v-model="form.address" type="text" class="input-field" />
                    </div>

                    <div>
                        <label class="input-label">City</label>
                        <input v-model="form.city" type="text" class="input-field" />
                    </div>

                    <div>
                        <label class="input-label">State / Province</label>
                        <input v-model="form.state" type="text" class="input-field" />
                    </div>

                    <div>
                        <label class="input-label">Postal Code</label>
                        <input v-model="form.postal_code" type="text" class="input-field" />
                    </div>

                    <div>
                        <label class="input-label">Country</label>
                        <input v-model="form.country" type="text" class="input-field" />
                    </div>

                </div>

                <div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end gap-3">
                    <button 
                        @click="fetchVendor" 
                        class="px-6 py-2.5 border text-sm font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all">
                        Reset
                    </button>
                    <button 
                        @click="saveSettings" 
                        :disabled="loading"
                        class="px-8 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-lg shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2 disabled:opacity-70">
                        <span v-if="loading" class="animate-spin text-lg">↻</span>
                        {{ loading ? 'Saving...' : 'Update Settings' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import api, { makeImg } from "../../../services/api.js";
import Message from '../../Message/message.vue'

const loading = ref(false);
const successMsg = ref("");
const errorMsg = ref("");

const shopLogoPreview = ref(null);
const shopWhiteLogoPreview = ref(null);
const currentVendorId = ref(null);

const form = ref({
    shop_name: '',
    shop_slug: '',
    shopLogo: null,      
    shopWhiteLogo: null, 
    shop_description: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postal_code: '',
});

// Fetch vendor
const fetchVendor = async () => {
    try {
        const res = await api.get("/vendor");
        if (res.data && res.data.data) {
            const v = res.data.data;
            
            currentVendorId.value = v.id;

            form.value = {
                ...form.value, 
                shop_name: v.shop_name || '',
                shop_slug: v.shop_slug || '',
                shop_description: v.shop_description || '',
                email: v.email || '',
                phone: v.phone || '',
                address: v.address || '',
                city: v.city || '',
                state: v.state || '',
                country: v.country || '',
                postal_code: v.postal_code || '',
            };

            shopLogoPreview.value = v.shop_logo ? makeImg(v.shop_logo) : null;
            shopWhiteLogoPreview.value = v.shop_logo_2 ? makeImg(v.shop_logo_2) : null;
        }
    } catch (err) {
        errorMsg.value = "Failed to fetch vendor data!";
    }
};

// Primary Logo Handler
const onLogoChange = (e) => {
    const file = e.target.files[0];
    if(file){
        form.value.shopLogo = file;
        shopLogoPreview.value = URL.createObjectURL(file);
    }
};

// White Logo Handler
const onWhiteLogoChange = (e) => {
    const file = e.target.files[0];
    if(file){
        form.value.shopWhiteLogo = file;
        shopWhiteLogoPreview.value = URL.createObjectURL(file);
    }
};

// Save Settings (dummy)
const saveSettings = async () => {
    if (!currentVendorId.value) {
        errorMsg.value = "Vendor ID missing!";
        return;
    }

    loading.value = true;
    errorMsg.value = "";
    successMsg.value = "";

    try {
        const data = new FormData();
        data.append('shop_name', form.value.shop_name);
        data.append('shop_slug', form.value.shop_slug);
        data.append('shop_description', form.value.shop_description);
        data.append('email', form.value.email || '');
        data.append('phone', form.value.phone || '');
        data.append('address', form.value.address || '');
        data.append('city', form.value.city || '');
        data.append('state', form.value.state || '');
        data.append('country', form.value.country || '');
        data.append('postal_code', form.value.postal_code || '');

        if (form.value.shopLogo) data.append('shop_logo', form.value.shopLogo);
        if (form.value.shopWhiteLogo) data.append('shop_logo_2', form.value.shopWhiteLogo);

        data.append('_method', 'POST'); 

        const res = await api.post(`/vendor/edit-vendor/${currentVendorId.value}`, data);
        
        if(res.data.success) {
            successMsg.value = "Settings updated successfully!";
            await fetchVendor(); 
        }
    } catch(err) {
        console.error(err);
        if(err.response?.data?.errors) {
            errorMsg.value = Object.values(err.response.data.errors)[0][0];
        } else {
            errorMsg.value = err.response?.data?.message || "Failed to update settings!";
        }
    } finally {
        loading.value = false;
    }
};

onMounted(() => {
    fetchVendor();
});
</script>

<style scoped>
.input-label {
    @apply block mb-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300;
}

.section-label {
    @apply block mb-3 text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400;
}

.input-field {
    @apply w-full px-4 py-2.5 text-sm rounded-xl border 
    border-slate-200 dark:border-slate-700 
    bg-white dark:bg-slate-800/50 
    text-slate-700 dark:text-slate-100
    placeholder:text-slate-400
    focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 
    outline-none transition-all duration-200;
}
</style>