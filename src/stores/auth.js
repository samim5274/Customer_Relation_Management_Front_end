import { ref, computed } from 'vue'
import api, { makeImg } from '../services/api'

const authUser = ref(null)

const isLoggedIn = computed(() => !!authUser.value)

const avatarUrl = computed(() => {
    return authUser.value?.photo
        ? makeImg(authUser.value.photo)
        : "/images/avatar.png"
})

async function loadUser() {
    const token = localStorage.getItem("token")

    if (!token) {
        authUser.value = null
        return
    }

    try {
        const res = await api.get("/user")
        authUser.value = res.data
    } catch (e) {
        logout()
    }
}

function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    authUser.value = null
}

export function useAuth() {
    return {
        authUser,
        isLoggedIn,
        avatarUrl,
        loadUser,
        logout
    }
}