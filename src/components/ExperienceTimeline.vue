<template>
  <section class="py-8">
    <h2 class="text-3xl  font-bold text-neutral-400 dark:text-primary mb-8 font-title">
      Experiência Profissional
    </h2>
    <ul class="relative border-l-2  border-primary">
      <li v-for="(exp, idx) in experiences" :key="idx" class="mb-10 ml-6">
        <span
            class="absolute -left-[13px] flex items-center justify-center w-6 h-6 dark:bg-primary rounded-full ring-2 dark:ring-white ring-cyan-600  "
        >
          <svg
              class="w-3 h-3 dark:text-white text-cyan-600"
              fill="currentColor"
              viewBox="0 0 20 20"
          >
            <circle cx="10" cy="10" r="10"/>
          </svg>
        </span>
        <div
            class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow transition-colors duration-300"
        >
          <h3
              class="text-lg font-semibold text-gray-900 dark:text-white font-title mb-1"
          >
            {{ exp.title }}
            <span class="text-secondary font-normal">@ {{ exp.company }}</span>
          </h3>
          <span class="block text-sm text-neutral-400 dark:text-primary font-medium mb-2">{{
              exp.period
            }}</span>
          <p class="text-gray-700 dark:text-gray-300 text-base">
            {{ exp.description }}
          </p>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
import {useData} from "../composables/useData";

const {experiences} = useData().data();
</script>
