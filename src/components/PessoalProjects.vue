<template>
  <section id="projetos-pessoais" class="mt-20">
    <h2 class="text-2xl dark:text-white text-neutral-400 font-semibold mb-8">{{ props.title }}</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
      <article
          v-for="post in posts"
          :key="post.title"
          class="group rounded-2xl overflow-hidden relative cursor-pointer shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border dark:border-none border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 p-6 floatingazs"
          @click="openModal(post)"
      >
        <div class="mb-4">
          <h3 class="text-neutral-500 dark:text-white font-bold text-2xl mb-3">{{ post.title }}</h3>
          <p class="text-neutral-400 dark:text-gray-300 text-sm mb-4 line-clamp-3">{{ post.description }}</p>
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
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
        @click.self="closeModal"
    >
      <div
          class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative animate-fade-in border border-gray-700">
        <button @click="closeModal"
                class="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl transition-colors">&times;
        </button>
        <h3 class="text-3xl font-bold mb-4 text-white">{{ selectedPost.title }}</h3>
        <p class="text-gray-300 mb-6 leading-relaxed">{{ selectedPost.description }}</p>

        <h4 class="text-lg font-semibold text-white mb-3">Tecnologias Utilizadas:</h4>
        <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{{ selectedPost.description }}</p>

        <div class="mb-6">
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Tecnologias Utilizadas:</h4>
          class="px-4 py-2 bg-blue-600/40 text-blue-200 text-sm font-semibold rounded-lg border border-blue-500/60
          hover:bg-blue-600/60 transition-colors"
          <span
              v-for="tech in selectedPost.tecnologias"
              :key="tech"
              class="px-4 py-2 text-sm font-semibold rounded-lg border dark:bg-purple-600/30 dark:text-purple-300 dark:border-purple-500/50 transition-colors"
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
        <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </a>
    </div>
  </section>
</template>

<script setup>
import {ref} from 'vue';

const props = defineProps(['title']);
const posts = [
  {
    title: 'Emprega Amapá',
    description: 'Plataforma completa para conectar empregadores e candidatos no estado do Amapá. Sistema de gestão de vagas, currículos e processos seletivos com interface moderna e intuitiva.',
    tecnologias: ['Laravel', 'Vue.js', 'Inertia.js', 'MySQL', 'Tailwind CSS'],
    link: 'https://empregaamapa.portal.ap.gov.br/',
  },
  {
    title: 'Porto de Santos',
    description: 'Sistema de gestão portuária para o maior porto da América Latina. Controle de operações logísticas, movimentação de cargas e infraestrutura portuária com alta performance.',
    tecnologias: ['PHP', 'Oracle', 'JavaScript', 'Bootstrap'],
    link: 'https://www.portodesantos.com.br/conheca-o-porto/infraestrutura-portuaria/',
  },
  {
    title: 'RURAP - Sistema de Gestão Rural',
    description: 'Aplicativo para apoio à agricultura familiar no Amapá. Gestão de propriedades rurais, controle de produção, assistência técnica e extensão rural.',
    tecnologias: ['Laravel', 'Livewire', 'PostgreSQL', 'Alpine.js', 'Tailwind CSS'],
    link: 'https://sigater-rurap.portal.ap.gov.br/',
  },
];

const showModal = ref(false);
const selectedPost = ref({});

function openModal(post) {
  selectedPost.value = post;
  showModal.value = true;
}

function closeModal() {
  showModal.value = false;
}
</script>

<style>
/* Animação suave para o modal */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.3s ease;
}

/* Animação de levitação suave */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
}

.floating {
  animation: float 4s ease-in-out infinite;
}

.floating:nth-child(2n) {
  animation-delay: 0.5s;
}

.floating:nth-child(3n) {
  animation-delay: 1s;
}

/* Utilitário para limitar linhas da descrição */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Efeito de sombra para levitação */
.group-hover\:shadow-levitate:hover {
  box-shadow: 0 16px 32px 0 rgba(0, 0, 0, 0.35), 0 1.5px 8px 0 rgba(0, 0, 0, 0.18);
}

/* Efeito de levitação */
.group-hover\:-translate-y-6:hover {
  transform: translateY(-1.5rem);
}

/* Scroll margin para compensar navbar fixo */
section {
  scroll-margin-top: 80px;
}
</style>
