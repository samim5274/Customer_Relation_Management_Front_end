<template>
    <section class="lg:col-span-2">
        <Message
            :successMsg="successMsg"
            :errorMsg="errorMsg"
            @update:successMsg="successMsg = $event"
            @update:errorMsg="errorMsg = $event"
        />
        <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h2 class="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Personal Information</h2>

            <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Name">
                <input v-model="form.name" type="text" class="input" placeholder="Your name" />
                </Field>

                <Field label="Phone">
                <input v-model="form.phone" type="text" class="input" placeholder="01XXXXXXXXX" />
                </Field>

                <Field label="Email">
                <input v-model="form.email" class="input" placeholder="e.g example@example.com" />
                </Field>

                <Field label="Date of birth">
                <input v-model="form.dob" type="date" class="input" />
                </Field>

                <Field label="Gender">
                <select v-model="form.gender" class="input">
                    <option value="" disabled="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                </Field>

                <Field label="Blood group">
                <select v-model="form.blood_group" class="input">
                    <option value="" disabled selected>Select</option>
                    <option>O+</option><option>O-</option>
                    <option>A+</option><option>A-</option>
                    <option>B+</option><option>B-</option>
                    <option>AB+</option><option>AB-</option>
                </select>
                </Field>

                <Field label="National ID" class="sm:col-span-2">
                <input v-model="form.national_id" type="text" class="input" placeholder="NID number" />
                </Field>

                <Field label="Religion" class="sm:col-span-2">
                <input v-model="form.religion" type="text" class="input" placeholder="Religion" />
                </Field>
            </div>
        </div>

        <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900 mt-4">
            <h2 class="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Address</h2>

            <div class="mt-4 grid grid-cols-1 gap-4">
                <Field label="Present address">
                <textarea v-model="form.present_address" rows="3" class="input" placeholder="Present address"></textarea>
                </Field>

                <Field label="Permanent address">
                <textarea v-model="form.permanent_address" rows="3" class="input" placeholder="Permanent address"></textarea>
                </Field>
            </div>
        </div>

        <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900 mt-4">
            <h2 class="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Reference</h2>

            <div class="mt-4 grid grid-cols-1 gap-4">
                <Field label="Referer Code">
                <input v-model="form.refer_id" type="text" readonly class="input" placeholder="e.g DBMBL-ABC456SA8Q" />
                </Field>

                <Field label="Root User">
                <input type="text" v-model="searchRootUser" placeholder="Search by ID, name or email..." class="input mb-2" />
                <select v-model="form.root_user_id" class="input">
                    <option disabled value="">-- Select user --</option>
                    <option v-for="u in filteredRootUsers" :key="u.id" :value="u.id">
                        {{ u.name }} - {{ u.user_id }}
                    </option>
                </select>
                </Field>

                <Field label="Placement">
                    <div class="grid grid-cols-2 gap-4">
                        <label :class="[
                            'relative flex cursor-pointer flex-col rounded-xl border-2 p-4 transition-all duration-300',
                            selectedRootUser?.left_child_id 
                                ? 'bg-slate-50 dark:bg-slate-900/40 border-slate-100 dark:border-slate-800 opacity-50 cursor-not-allowed' 
                                : (placement === 'left' 
                                    ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-500/10 ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-slate-900' 
                                    : 'border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-slate-500')
                        ]">
                            <input type="radio" v-model="placement" value="left" :disabled="selectedRootUser?.left_child_id" class="sr-only" />
                            
                            <div class="flex items-center justify-between">
                                <span class="text-sm font-bold text-slate-900 dark:text-slate-100 tracking-tight">Left Node</span>
                                <div v-if="placement === 'left' && !selectedRootUser?.left_child_id" class="h-5 w-5 rounded-full bg-indigo-500 flex items-center justify-center shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            <div class="mt-2 flex items-center gap-1.5">
                                <span :class="['h-2 w-2 rounded-full', selectedRootUser?.left_child_id ? 'bg-rose-500' : 'bg-emerald-500 animate-pulse']"></span>
                                <span class="text-[10px] font-semibold uppercase tracking-wide" :class="selectedRootUser?.left_child_id ? 'text-rose-500' : 'text-emerald-500'">
                                    {{ selectedRootUser?.left_child_id ? 'Occupied' : 'Available' }}
                                </span>
                            </div>
                        </label>

                        <label :class="[
                            'relative flex cursor-pointer flex-col rounded-xl border-2 p-4 transition-all duration-300',
                            selectedRootUser?.right_child_id 
                                ? 'bg-slate-50 dark:bg-slate-900/40 border-slate-100 dark:border-slate-800 opacity-50 cursor-not-allowed' 
                                : (placement === 'right' 
                                    ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-500/10 ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-slate-900' 
                                    : 'border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-slate-500')
                        ]">
                            <input type="radio" v-model="placement" value="right" :disabled="selectedRootUser?.right_child_id" class="sr-only" />
                            
                            <div class="flex items-center justify-between">
                                <span class="text-sm font-bold text-slate-900 dark:text-slate-100 tracking-tight">Right Node</span>
                                <div v-if="placement === 'right' && !selectedRootUser?.right_child_id" class="h-5 w-5 rounded-full bg-indigo-500 flex items-center justify-center shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>

                            <div class="mt-2 flex items-center gap-1.5">
                                <span :class="['h-2 w-2 rounded-full', selectedRootUser?.right_child_id ? 'bg-rose-500' : 'bg-emerald-500 animate-pulse']"></span>
                                <span class="text-[10px] font-semibold uppercase tracking-wide" :class="selectedRootUser?.right_child_id ? 'text-rose-500' : 'text-emerald-500'">
                                    {{ selectedRootUser?.right_child_id ? 'Occupied' : 'Available' }}
                                </span>
                            </div>
                        </label>
                    </div>
                </Field>
            </div>
        </div>

        <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900 mt-4">
            <h2 class="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Photo</h2>

            <div class="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
                <img :src="photoPreview || photoUrl" class="h-16 w-16 rounded-2xl object-cover ring-2 ring-slate-200 dark:ring-white/10" />

                <div class="flex-1">
                <input type="file" accept="image/*" @change="onPhotoChange" class="block w-full text-sm text-slate-600 dark:text-slate-200" />
                <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">PNG/JPG recommended.</p>
                </div>
            </div>

            <div class="mt-5 flex justify-end gap-2">
                <button
                type="button"  @click="CreateUser()"                        
                :disabled="loading"
                class="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 disabled:opacity-60"
                >
                <i class="fa-solid fa-floppy-disk"></i>
                {{ loading ? "loading..." : "Save Changes" }}
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, h, watch } from 'vue';
import api, { makeImg } from "../../../services/api";
import Message from '../../Message/message.vue';

const props = defineProps({
    users: {
        type: Array,
        default: () => []
    }
});

const successMsg = ref('');
const errorMsg = ref('');
const loading = ref(false);

const Field = (props, { slots }) =>
    h("div", { class: props.class || "" }, [
        h("label", { class: "mb-2 block text-xs font-semibold text-slate-600 dark:text-slate-200" }, props.label),
        slots.default?.(),
    ]);

const photoFile = ref(null);
const photoPreview = ref("");

function onPhotoChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;

    photoFile.value = file;
    photoPreview.value = URL.createObjectURL(file);
}

const photoUrl = computed(() => {
    const p = authUser.value?.photo;
    return p ? makeImg(p) : "/images/avatar.png";
});














const authUser = ref(null);
async function fetchedAuthUser(){
    try{
        const res = await api.get('/customer/users/auth');
        authUser.value = res.data.data;
        form.value.refer_id = authUser.value.user_id;
    } catch(err) {
        errorMsg.value = err.response?.data?.message || "Failed to create user";
    } finally {
        loading.value = false;
    }
}











// root user search
const searchRootUser = ref("");
const filteredRootUsers = computed(() => {
    if (!props.users || !props.users.length) return [];

    const term = searchRootUser.value.toLowerCase();

    return props.users.filter(user => {
        if (!term) return true;

        return (
            user.name?.toLowerCase().includes(term) ||
            user.email?.toLowerCase().includes(term) ||
            user.user_id?.toLowerCase().includes(term) ||
            String(user.id).includes(term)
        );
  });
});




const selectedRootUser = computed(() => {
    return props.users.find(u => u.id == form.value.root_user_id) || null;
});



// Set placement
const placement = ref(null);

watch(() => selectedRootUser.value, (newUser) => {
    if (newUser) {
        if (!newUser.left_child_id && newUser.right_child_id) {
            placement.value = 'left';
        } else if (newUser.left_child_id && !newUser.right_child_id) {
            placement.value = 'right';
        } else if (!newUser.left_child_id && !newUser.right_child_id) {
            placement.value = 'left'; 
        } else {
            placement.value = null;
        }
    } else {
        placement.value = null;
    }
}, { immediate: true });

watch(placement, (val) => {
    form.value.position = val;
});






// create user

const emit = defineEmits(['userCreated']);

const form = ref({
    name: "",
    phone: "",
    dob: "",
    email: "",
    gender: "",
    blood_group: "",
    present_address: "",
    permanent_address: "",
    national_id: "",
    religion: "",
    refer_id: "",
    root_user_id: "",
    position: '',
});


async function CreateUser() {
    loading.value = true;
    errorMsg.value = "";

    const payload = new FormData();
    Object.keys(form.value).forEach(key => payload.append(key, form.value[key] || ""));
    if(photoFile.value) payload.append("photo", photoFile.value);

    try {
        const res = await api.post("/customer/users/create", payload);

        successMsg.value = res.data.message || "User created successfully!";
        emit('userCreated');

        Object.keys(form.value).forEach(key => form.value[key] = "");
        photoPreview.value = null;

    } catch(err) {
        console.log("FULL ERROR:", err);

        if (err.response?.data?.errors) {
            errorMsg.value = Object.values(err.response.data.errors).flat().join(", ");
        } else {
            errorMsg.value = err.response?.data?.message || "Failed to create user";
        }
    } finally {
        loading.value = false;
    }
}

onMounted(() => {
    fetchedAuthUser();
});
</script>

<style>
.input{
    @apply w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 placeholder:text-slate-400
        focus:outline-none focus:ring-2 focus:ring-indigo-500
        dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100;
}
.inputDisabled{
    @apply w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-600
        dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300;
}
</style>