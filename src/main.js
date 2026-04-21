import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

import './style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import "leaflet/dist/leaflet.css"

// theme
const saved = localStorage.getItem("theme");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const dark = saved ? saved === "dark" : systemDark;

document.documentElement.classList.toggle("dark", dark);

// app
const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

app.mount('#app')