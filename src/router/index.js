import { createRouter, createWebHistory } from 'vue-router';

// Auth Routes
import Login from '../components/Auth/login.vue';
import Register from '../components/Auth/register.vue'
import FindAccount from '../components/Auth/find-account.vue'
import otpVerification from '../components/Auth/otp-verification.vue';
import resetPassword from '../components/Auth/reset-password.vue';
import Unauthorized from '../components/Auth/unauthorized.vue';




// | Role     | Access            |
// | -------- | ----------------- |
// | Admin    | Full access       |
// | Manager  | Reports + team    |
// | Agent    | Leads + booking   |
// | Support  | Customer service  |
// | Accounts | Payment & invoice |
// | Customer | Own data only     |

// Lead → Follow-up → Quotation → Booking → Payment → Tour → Feedback






// Home Routes
import Home from '../components/Home/home.vue';

// Dashboard Route
import Dashboard from '../components/Dashboard/admin/admin-dashboard.vue';
import AdminProfile from '../components/Dashboard/admin/admin-profile.vue';
import AdminSetting from '../components/Dashboard/admin/admin-setting.vue';

// Customer Route
import C_create from '../components/Dashboard/customer/create-customer.vue';

const routes = [
    // Public Home Routes
    { path: '/', component: Home, meta: {title: "Home - Mercuvaix"} },

    // Auth Routes
    { path: '/login', component: Login, meta: {title: "Login"} },
    { path: '/register', component: Register, meta: {title: "Register"} },
    { path: '/forget-password', component: FindAccount, meta: {title: "Forget Password"} },
    { path: '/otp-verification', component: otpVerification, meta: {title: "OTP Verification", requiresEmail: true} },
    { path: '/reset-password', component: resetPassword, meta: {title: "Reset Password", requiresEmail: true} },
    { path: '/unauthorized', component: Unauthorized, meta: {title: "Unauthorized"} },

    // Admin Dashboard Routes
    { path: '/admin/dashboard', component: Dashboard, meta: { title: 'Dashboard', requiresAuth: true, roles: ['admin'] }},
    { path: '/admin/profile', component: AdminProfile, meta:{title: 'Admin Profile', requiresAuth: true, roles: ['admin']}},
    // user route
    { path: '/admin/setting', component: AdminSetting, meta:{title: 'Admin Setting', requiresAuth: true, roles: ['admin']}},

    // Customer Routes
    { path: '/customer-create', component: C_create, meta:{title: 'Create-customer', requiresAuth: true, roles: ['admin', 'manager', 'agent', 'support']}},
]












const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL || '/'),
    routes,
});

// security check
router.beforeEach((to, from, next) => {
  
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem('user'));

    // Set page title
    if (to.meta.title) {
        document.title = to.meta.title;
    }

    // Check if route requires email
    if (to.meta.requiresEmail) {
        const email = localStorage.getItem('email')
        if (!email) {
        // Email not found, redirect to forget-password
        return next('/forget-password');
        }
    }

    if (to.meta.requiresAuth && !token) {
        return next('/login');
    }

    // console.log(to.meta.roles);
    if (to.meta.roles) {
        if (!user) {
        return next('/login');
        }

        if (!to.meta.roles.includes(user.role)) {
        return next('/unauthorized');
        }
    }

    next();
});

export default router
