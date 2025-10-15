<template>
  <section id="education">
    <div class="container mt-8 mx-auto max-w-6xl">
      <div class="mb-8">
        <h2 class="text-3xl font-bold text-primary mb-8 font-title">
          Formação Acadêmica
        </h2>
      </div>

      <div class="space-y-8">
        <div
          v-for="edu in education"
          :key="edu.id"
          class="group relative bg-white dark:bg-gray-800 rounded-xl p-3 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          <div
            class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-600 to-indigo-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"
          ></div>

          <div class="flex flex-col md:flex-row md:items-start gap-6 ml-6">
            <div
              class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform duration-300"
            >
              🎓
            </div>

            <div class="flex-1">
              <h3
                class="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
              >
                {{ edu.degree }}
              </h3>

              <h4
                class="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                {{ edu.institution }}
              </h4>

              <div
                class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>{{ edu.period }}</span>
              </div>

              <p
                v-if="edu.description"
                class="text-gray-600 dark:text-gray-400 leading-relaxed"
              >
                {{ edu.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useData } from "../composables/useData";
const { education } = useData().data();
</script>
