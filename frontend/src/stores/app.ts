import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const ready = ref(true)

  return {
    ready,
  }
})
