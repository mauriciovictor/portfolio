import {ref} from "vue";

export function useTheme() {
    const isDark = ref(true);

    const toggleTheme = () => {
        isDark.value = !isDark.value;
        if (isDark.value) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const loadTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            isDark.value = false;
            document.documentElement.classList.remove('dark');
        } else {
            isDark.value = true;
            document.documentElement.classList.add('dark');
        }
    }

    return {isDark, toggleTheme, loadTheme};
}
