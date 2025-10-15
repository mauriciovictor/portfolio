import {ref} from "vue";

export const useMenu = () => {
    const menuOpen = ref(false);

    function toggleMenu() {
        menuOpen.value = !menuOpen.value;
    }

    function closeMenu() {
        menuOpen.value = false;
    }

    return {toggleMenu, closeMenu, menuOpen}
}