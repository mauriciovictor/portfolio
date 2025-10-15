<template>
  <section id="stack" class="text-center mt-5 mx-auto max-w-6xl">
    <h2 class="text-3xl font-bold text-primary mb-8 font-title">Stack Atual</h2>

    <div class="flex flex-wrap justify-center gap-6">
      <img
        v-for="(badge, index) in badges"
        :key="index"
        class="w-auto flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-110 floating-fast"
        :alt="badge.alt"
        :src="badge.src"
      />
    </div>
  </section>
</template>

<script setup>
import { useData } from "../composables/useData";

const { badges } = useData().data();
</script>
