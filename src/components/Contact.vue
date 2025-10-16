<template>
  <section id="contact" class="py-20 text-white text-center">
    <h2 class="text-3xl font-bold mb-12 dark:text-white text-neutral-400">
      Contatos
    </h2>

    <div class="flex flex-wrap justify-center gap-12">
      <a
          :href="item.href"
          target="_blank"
          rel="noopener"
          v-for="item in contacts"
          :key="item.label"
          class="flex group flex-col items-center text-center group"
      >
        <div
            class="bg-neutral-100 dark:bg-[#1a1a1a] rounded-full w-16 h-16 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-red-700"
        >
          <component
              :is="item.icon"
              class="w-6 h-6 text-red-400 group-hover:text-white"
          />
        </div>
        <h3 class="font-semibold text-lg text-gray-600 dark:text-white">
          {{ item.label }}
        </h3>
        <span

            class="text-gray-400 text-sm group-hover:text-red-400 transition"
        >
          {{ item.value }}
        </span>
      </a>
    </div>
  </section>
</template>

<script setup>
import {useData} from "../composables/useData";

const {contacts} = useData().data();
</script>

<style scoped>
section {
  scroll-margin-top: 80px;
}
</style>
