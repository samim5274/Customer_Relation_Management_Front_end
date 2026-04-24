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
                        <option value="" disabled>Select</option>
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

                <Field label="Visa Category">
                <select v-model="form.visaCategory" class="input">
                    <option value="" disabled="">-- Select Visa Category --</option>
                    <option v-for="visa in visaCategories" :key="visa.id" :value="visa.id">{{ visa.name }}</option>
                </select>
                </Field>

                <Field label="Country">
                <select v-model="form.country" class="input">
                    <option value="" disabled selected>-- Select Country --</option>
                    <option v-for="country in countries" :key="country.id" :value="country.id">{{ country.name }}</option>
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
            <h2 class="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Other Information</h2>

            <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Father's Name">
                <input v-model="form.father_name" type="text" class="input" placeholder="Father name" />
                </Field>

                <Field label="Mother's Name">
                <input v-model="form.mother_name" type="text" class="input" placeholder="Mother's name" />
                </Field>
                
                <Field label="Occupation">
                <input v-model="form.occupation" type="text" class="input" placeholder="occupation" />
                </Field>

                <br>

                <Field label="Passport No">
                <input v-model="form.passport_no" type="text" class="input" placeholder="A123456789" />
                </Field>

                <Field label="Passport Expired Date">
                <input v-model="form.passport_expiry_date" type="date" class="input" />
                </Field>

                <div class="flex items-center gap-4">
                    <img
                        v-if="previews.passport_photo"
                        :src="previews.passport_photo"
                        class="h-16 w-16 rounded-xl object-cover"
                    />

                    <input
                        type="file"
                        accept="image/*"
                        @change="e => handleImageChange(e, 'passport_photo')"
                        class="input"
                    />
                </div>

                <div class="flex items-center gap-4">
                    <img
                        v-if="previews.nid_photo"
                        :src="previews.nid_photo"
                        class="h-16 w-16 rounded-xl object-cover"
                    />

                    <input
                        type="file"
                        accept="image/*"
                        @change="e => handleImageChange(e, 'nid_photo')"
                        class="input"
                    />
                </div>
            </div>
        </div>

        <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900 mt-4">
            <h2 class="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Spouse Details</h2>

            <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Spouse Name">
                <input v-model="form.spouse_name" type="text" class="input" placeholder="Spouse Name" />
                </Field>

                <Field label="Spouse NID">
                <input v-model="form.spouse_nid" type="text" class="input" placeholder="Spouse NID" />
                </Field>

                <div class="flex items-center gap-4">
                    <img
                        v-if="previews.spouse_photo"
                        :src="previews.spouse_photo"
                        class="h-16 w-16 rounded-xl object-cover"
                    />

                    <input
                        type="file"
                        accept="image/*"
                        @change="e => handleImageChange(e, 'spouse_photo')"
                        class="input"
                    />
                </div>

                <div class="flex items-center gap-4">
                    <img
                        v-if="previews.spouse_nid_photo"
                        :src="previews.spouse_nid_photo"
                        class="h-16 w-16 rounded-xl object-cover"
                    />

                    <input
                        type="file"
                        accept="image/*"
                        @change="e => handleImageChange(e, 'spouse_nid_photo')"
                        class="input"
                    />
                </div>
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

                <!-- is_submitted -->
                <Field label="Document Submission Status">
                    <div class="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl border border-slate-200 dark:border-slate-700 transition-all">
                        <label class="relative inline-flex cursor-pointer items-center">
                            <input type="checkbox" v-model="form.is_submitted" class="peer sr-only" />
                            <div class="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:bg-slate-700"></div>
                            <span class="ml-3 text-sm font-medium text-slate-600 dark:text-slate-300">
                                {{ form.is_submitted ? 'Submitted' : 'Pending Submission' }}
                            </span>
                        </label>
                    </div>
                </Field>

            </div>
        </div>

        <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900 mt-4">
            <h2 class="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Photo</h2>

            <div class="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
                <img 
                    :src="previews.user_photo || photoUrl" 
                    class="h-16 w-16 rounded-2xl object-cover ring-2 ring-slate-200 dark:ring-white/10" 
                />

                <div class="flex-1">
                    <input 
                        type="file" 
                        accept="image/*" 
                        @change="e => handleImageChange(e, 'user_photo')"
                        class="block w-full text-sm text-slate-600 dark:text-slate-200" 
                    />
                    <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
                        PNG/JPG recommended.
                    </p>
                </div>
            </div>

            <div class="mt-5 flex justify-end gap-2">
                <button
                type="button"  @click="editCustomer()"                        
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
import { useRouter } from 'vue-router';

const router = useRouter();
const successMsg = ref('');
const errorMsg = ref('');
const loading = ref(false);




const props = defineProps({
    userId: {
        type: [String, Number],
        required: true
    },
    userSlug: {
        type: String,
        required: true,
        default: ''
    },
    userSku: {
        type: String,
        required: true,
        default: ''
    }
});

const customer = ref(null);
async function fetchUser() 
{
    if (!props.userId) return;
    loading.value = true;

    try {
        const res = await api.get(`/customers/${props.userId}`);

        if (res.data.success)
        {
            const userData = res.data.data;
            customer.value = userData;

            Object.assign(form.value, userData);

            if (userData.gender) {
                form.value.gender = userData.gender.toLowerCase();
            }

            if (userData.passport_expiry_date) {
                form.value.passport_expiry_date = userData.passport_expiry_date.split('T')[0];
            }

            if (userData.dob) {
                form.value.dob = userData.dob.split('T')[0];
            }

            form.value.country = userData.country_id;
            form.value.visaCategory = userData.visa_category_id;

            if (userData.photo) previews.value.user_photo = makeImg(userData.photo);
            if (userData.passport_photo) previews.value.passport_photo = makeImg(userData.passport_photo);
            if (userData.national_id_photo) previews.value.nid_photo = makeImg(userData.national_id_photo);
            if (userData.spouse_photo) previews.value.spouse_photo = makeImg(userData.spouse_photo);
            if (userData.spouse_nid_photo) previews.value.spouse_nid_photo = makeImg(userData.spouse_nid_photo);
        }
    } catch (error) {
        console.error("Failed to fetch user:", error.response?.data || error.message);
        errorMsg.value = "Failed to load user data.";
    } finally {
        loading.value = false;
    }
}






const Field = (props, { slots }) =>
    h("div", { class: props.class || "" }, [
        h("label", { class: "mb-2 block text-xs font-semibold text-slate-600 dark:text-slate-200" }, props.label),
        slots.default?.(),
    ]);

const previews = ref({
    passport_photo: '',
    nid_photo: '',
    spouse_photo: '',
    spouse_nid_photo: '',
    user_photo: ''
});

const files = ref({
    passport_photo: null,
    nid_photo: null,
    spouse_photo: null,
    spouse_nid_photo: null,
    user_photo: null,
});

function handleImageChange(e, field) {
    const file = e.target.files?.[0];
    if (!file) return;

    files.value[field] = file;
    previews.value[field] = URL.createObjectURL(file);
}


const authUser = ref(null);

const photoUrl = computed(() => {
    const p = authUser.value?.photo;
    return p ? makeImg(p) : "/images/avatar.png";
});


























// create user
const form = ref({
    name: "",
    phone: "",
    dob: "",
    email: "",
    gender: "",
    visaCategory: "",
    country: "",
    blood_group: "",
    present_address: "",
    permanent_address: "",
    national_id: "",
    religion: "",
    
    father_name:'',
    mother_name:'',
    is_submitted: false,
    occupation:'',
    passport_no:'',
    passport_expiry_date:'',
    passport_photo:'',
    national_id_photo:'',

    spouse_name:'',
    spouse_photo:'',
    spouse_nid:'',
    spouse_nid_photo:'',
});


async function editCustomer() {
    loading.value = true;
    errorMsg.value = "";
    successMsg.value = "";

    const payload = new FormData();
    payload.append('_method', 'PUT');

    const imageFieldKeys = ['photo', 'passport_photo', 'national_id_photo', 'spouse_photo', 'spouse_nid_photo'];

    // normal form fields
    Object.keys(form.value).forEach(key => {
        if (!imageFieldKeys.includes(key) && key !== "is_submitted") {
            payload.append(key, form.value[key] ?? "");
        }
    });

    payload.append("is_submitted", form.value.is_submitted ? 1 : 0);

    // all image files append
    Object.keys(files.value).forEach(key => {
        if (files.value[key] instanceof File) { 
            payload.append(key, files.value[key]);
        }
    });

    try {
        const res = await api.post(`/customers/update/${props.userId}`, payload, {
            headers: { "Content-Type": "multipart/form-data" }
        });

        successMsg.value = res.data.message || "Customer updated successfully!";

        setTimeout(() => {
            router.push('/customers-details');
        }, 2000);

    } catch (err) {
        console.error("UPDATE ERROR:", err);

        if (err.response?.data?.errors) {
            errorMsg.value = Object.values(err.response.data.errors)
                .flat()
                .join(", ");
        } else {
            errorMsg.value = err.response?.data?.message || "Failed to update customer";
        }
    } finally {
        loading.value = false;
    }
}









// =============================
// Get Visa Category and country
// =============================
const countries = ref([]);
async function fetchedCountry() {
    loading.value = true;
    try {
        const res = await api.get("/customers/get-country");
        countries.value = res.data.data || []; 
        // console.log(countries.value);
    } catch (error) {
        console.error("Failed to fetch countries:", error.response?.data || error.message);
    } finally {
        loading.value = false;
    }
}

const visaCategories = ref([]);
async function fetchedVisaCategory() {
    loading.value = true;
    try {
        const res = await api.get("/customers/get-visa-category");
        visaCategories.value = res.data.data || []; 
        // console.log(visaCategories.value);
    } catch (error) {
        console.error("Failed to fetch visaCategories:", error.response?.data || error.message);
    } finally {
        loading.value = false;
    }
}

onMounted(() => {

    fetchUser();

    fetchedCountry();
    fetchedVisaCategory();
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