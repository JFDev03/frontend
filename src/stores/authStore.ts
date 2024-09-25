import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
    const accessToken = ref<string | null>(localStorage.getItem('accessToken'));
    const refreshToken = ref<string | null>(localStorage.getItem('refreshToken'));
    const userInfo = ref<string | null>(localStorage.getItem('user'));

    const setDependencies = (user_info: string, accessToken: string, refreshToken: string) => {
        localStorage.setItem('user', user_info);
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
    };

    const getAccessToken = () => {
        return accessToken.value;
    };

    const getRefreshToken = () => {
        return refreshToken.value;
    };

    const getUserInfo = () => {
        if (!userInfo.value) {
            return null; // Return null if userInfo.value is falsy
        }
    
        try {
            return JSON.parse(userInfo.value); // Safely parse the JSON
        } catch (error) {
            console.error("Error parsing user info:", error);
            return null; // Return null if parsing fails
        }
    };
    

    return {
        setDependencies,
        getAccessToken,
        getRefreshToken,
        getUserInfo
    };
});
