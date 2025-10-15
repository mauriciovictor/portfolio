<template>
  <section id="projetos-pessoais" class="mt-20">
    <h2 class="text-2xl dark:text-white text-neutral-400 font-semibold mb-8">
      {{ props.title }}
    </h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
      <article
        v-for="post in posts"
        :key="post.title"
        class="group rounded-2xl overflow-hidden relative cursor-pointer shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border dark:border-none border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 p-6 floating"
        @click="openModal(post)"
      >
        <div class="mb-4">
          <h3 class="text-neutral-500 dark:text-white font-bold text-2xl mb-3">
            {{ post.title }}
          </h3>
          <p
            class="text-neutral-400 dark:text-gray-300 text-sm mb-4 line-clamp-3"
          >
            {{ post.description }}
          </p>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in post.tecnologias"
            :key="tech"
            class="px-3 py-1 bg-blue-600/30 text-cyan-900 text-blue-300 dark:bg-blue-600/30 dark:text-blue-300 dark:border-blue-500/50 text-xs font-semibold rounded-full border border-blue-500/50"
          >
            {{ tech }}
          </span>
        </div>
      </article>
    </div>
    <!-- Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      @click.self="closeModal"
    >
      <div
        class="bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative animate-fade-in border dark:border-gray-700"
      >
        <button
          @click="closeModal"
          class="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl transition-colors"
        >
          &times;
        </button>
        <h3 class="text-3xl font-bold mb-4 text-neutral-400 dark:text-white">
          {{ selectedPost.title }}
        </h3>
        <p class="text-neutral-400 dark:text-gray-300 mb-6 leading-relaxed">
          {{ selectedPost.description }}
        </p>
        <div class="mb-6">
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in selectedPost.tecnologias"
              :key="tech"
              class="px-4 py-2 text-sm font-semibold rounded-lg border dark:bg-blue-600/30 text-blue-300 border-blue-500/50 transition-colors"
            >
              {{ tech }}
            </span>
          </div>
        </div>
        <a
          v-if="selectedPost.link"
          :href="selectedPost.link"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg"
        >
          Visitar projeto
          <svg
            class="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useData } from "../composables/useData";
import { useModal } from "../composables/useModal";

const props = defineProps(["title"]);
const posts = useData().data().personalProjects;
const { closeModal, openModal, selectedPost, showModal } = useModal();
</script>
