<template>
  <nav class="max-w-5xl mx-auto flex items-center justify-between px-6 py-12">
    <div class="flex items-center gap-3">
      <img :src="profile" alt="Profile" class="w-10 h-10 rounded-full"/>
      <span class="font-semibold text-neutral-400 dark:text-gray-300">Maurício Ferreira</span>
    </div>

    <!-- Menu Desktop -->
    <ul class="hidden md:flex gap-6 text-sm font-medium items-center">
      <li>
        <a
            href="#sobre"
            :class="activeSection === 'sobre' ? 'text-red-400 font-bold' : 'dark:text-white text-neutral-400 hover:text-red-400'"
            class="transition"
        >
          Sobre mim
        </a>
      </li>
      <li>
        <a
            href="#stack"
            :class="activeSection === 'stack' ? 'text-red-400 font-bold' : 'dark:text-white text-neutral-400 hover:text-red-400'"
            class="transition"
        >
          Stack
        </a>
      </li>
      <li>
        <a
            href="#projetos-empresariais"
            :class="activeSection === 'projetos-empresariais' ? 'text-red-400 font-bold' : 'dark:text-white text-neutral-400 hover:text-red-400'"
            class="transition"
        >
          Projetos Empresariais
        </a>
      </li>
      <li>
        <a
            href="#projetos-pessoais"
            :class="activeSection === 'projetos-pessoais' ? 'text-red-400 font-bold' : 'dark:text-white text-neutral-400 hover:text-red-400'"
            class="transition"
        >
          Projetos Pessoais
        </a>
      </li>
      <li>
        <a
            href="#contact"
            :class="activeSection === 'contact' ? 'text-red-400 font-bold' : 'dark:text-white text-neutral-400 hover:text-red-400'"
            class="transition"
        >
          Contato
        </a>
      </li>
      <li>
        <button @click="toggleTheme" class="p-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition">
          <svg v-if="!isDark" class="w-5 h-5 dark:fill-white fill-neutral-400" fill="currentColor" viewBox="0 0 20 20">
            <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
          </svg>
          <svg v-else class="w-5 h-5 dark:fill-white fill-neutral-400" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
          </svg>
        </button>
      </li>
    </ul>

    <!-- Menu Mobile -->
    <div class="md:hidden flex items-center gap-3">
      <button @click="toggleTheme" class="p-2 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition">
        <svg v-if="!isDark" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
        </svg>
        <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
        </svg>
      </button>
      <button @click="toggleMenu" class="text-current">
        <svg v-if="!menuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
  </nav>

  <!-- Menu Mobile Dropdown -->
  <div v-if="menuOpen" class="md:hidden bg-gray-100 dark:bg-[#1a1a1a] px-6 py-4">
    <ul class="flex flex-col gap-4 text-sm font-medium">
      <li>
        <a
            href="#sobre"
            @click="closeMenu"
            :class="activeSection === 'sobre' ? 'text-red-400 font-bold' : 'dark:text-white text-neutral-400 hover:text-red-400'"
            class="block transition"
        >
          Sobre mim
        </a>
      </li>
      <li>
        <a
            href="#stack"
            @click="closeMenu"
            :class="activeSection === 'stack' ? 'text-red-400 font-bold' : 'dark:text-white text-neutral-400 hover:text-red-400'"
            class="block transition"
        >
          Stack
        </a>
      </li>
      <li>
        <a
            href="#projetos-empresariais"
            @click="closeMenu"
            :class="activeSection === 'projetos-empresariais' ? 'text-red-400 font-bold' : 'dark:text-white text-neutral-400 hover:text-red-400'"
            class="block transition"
        >
          Projetos Empresariais
        </a>
      </li>
      <li>
        <a
            href="#projetos-pessoais"
            @click="closeMenu"
            :class="activeSection === 'projetos-pessoais' ? 'text-red-400 font-bold' : 'dark:text-white text-neutral-400 hover:text-red-400'"
            class="block transition"
        >
          Projetos Pessoais
        </a>
      </li>
      <li>
        <a
            href="#contact"
            @click="closeMenu"
            :class="activeSection === 'contact' ? 'text-red-400 font-bold' : 'dark:text-white text-neutral-400 hover:text-red-400'"
            class="block transition"
        >
          Contato
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue';
import {useTheme} from '../composables/useTheme.js'
import {useMenu} from "../composables/useMenu.js";
import useHandleScroll from "../composables/useHandleScroll.js";

const base = import.meta.env.BASE_URL || '/';
const profile = base + 'images/profile.jpeg';

const {isDark, toggleTheme, loadTheme} = useTheme();
const {toggleMenu, closeMenu, menuOpen} = useMenu()
const handleScroll = useHandleScroll();
const activeSection = ref('sobre');

onMounted(() => {
  loadTheme();

  // Adiciona listener de scroll para detectar seção ativa
  window.addEventListener('scroll', handleScroll.setup(window, document));
  handleScroll.setup(window, document); // Chama uma vez para definir a seção inicial
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});


</script>

<style scoped>
/* Scroll suave */
html {
  scroll-behavior: smooth;
}
</style>
