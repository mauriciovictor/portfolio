import { ref } from "vue";

export function useModal() {
  const showModal = ref(false);
  const selectedPost = ref({});

  function openModal(post) {
    selectedPost.value = post;
    showModal.value = true;
  }

  function closeModal() {
    showModal.value = false;
  }

  return { showModal, selectedPost, openModal, closeModal };
}
