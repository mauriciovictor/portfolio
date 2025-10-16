<script setup>
import {Download} from 'lucide-vue-next'
import {useData} from "../composables/useData.js";

const {aboutMe} = useData().data();
</script>
<template>
  <section class="mt-8">
    <p class="text-red-400 uppercase tracking-wide text-sm font-semibold mb-3">
      {{ aboutMe.title }}
    </p>
    <h1
        class="text-neutral-300 dark:text-white text-4xl font-bold mb-6 leading-tight"
    >
      {{ aboutMe.subject }}
    </h1>
    <p class="text-gray-400 text-lg leading-relaxed">
      {{ aboutMe.description }}
    </p>

    <a
        :href="aboutMe.cv"
        target="_blank"
        download="mauricio_ferreira_cv.pdf"
        rel="noopener"
        class="inline-flex mt-5 gap-3 justify-center items-center px-3 py-3 rounded-lg bg-cyan-600 text-white font-semibold hover:bg-cyan-700 transition-colors shadow-lg floating-fast"
    >
      Baixar CV
      <Download/>
    </a>
  </section>
</template>
