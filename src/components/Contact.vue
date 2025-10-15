<template>
  <section id="contact" class="py-20 text-white text-center">
    <h2 class="text-3xl font-bold mb-12">Contatos</h2>

    <div class="flex flex-wrap justify-center gap-12">
      <div
          v-for="item in contacts"
          :key="item.label"
          class="flex flex-col items-center text-center group"
      >
        <div
            class="bg-[#1a1a1a] rounded-full w-16 h-16 flex items-center justify-center mb-4
                 transition-all duration-300 group-hover:bg-red-700"
        >
          <component :is="item.icon" class="w-6 h-6 text-red-400 group-hover:text-white"/>
        </div>
        <h3 class="font-semibold text-lg">{{ item.label }}</h3>
        <a
            :href="item.href"
            target="_blank"
            rel="noopener"
            class="text-gray-400 text-sm hover:text-red-400 transition"
        >
          {{ item.value }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import {Mail, Phone, Linkedin, Github} from "lucide-vue-next";

const contacts = [
  {
    label: "E-mail",
    icon: Mail,
    value: "mauriciovictor17@gmail.com",
    href: "mailto:mauriciovictor17@gmail.com",
  },
  {
    label: "Telefone",
    icon: Phone,
    value: "(96) 99907-1159",
    href: "tel:+5596999071159",
  },
  {
    label: "Linkedin",
    icon: Linkedin,
    value: "mauricio-v-ferreira-",
    href: "https://www.linkedin.com/in/mauricio-v-ferreira-/",
  },
  {
    label: "Github",
    icon: Github,
    value: "@mauriciovictor",
    href: "https://github.com/mauriciovictor",
  },
];
</script>

<style scoped>
section {
  scroll-margin-top: 80px;
}
</style>