import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBookingStore = defineStore('booking', () => {
  // 全域共享的狀態
  const selectedPlan = ref<string | null>(null)
  const selectedCourse = ref<string | null>(null)

  // 更新狀態的方法
  const setPlan = (plan: string) => {
    selectedPlan.value = plan
  }

  const setCourse = (course: string) => {
    selectedCourse.value = course
  }

  return {
    selectedPlan,
    selectedCourse,
    setPlan,
    setCourse,
  }
})
