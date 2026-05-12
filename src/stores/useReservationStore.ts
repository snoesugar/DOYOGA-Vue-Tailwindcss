import { defineStore } from 'pinia'

interface ReservationForm {
  yogaExperience?: string
  improvementGoals?: string[]
  weeklyExercise?: string
  rawDate?: string
  name?: string
  age?: number | null
  gender?: string
  email?: string
  phone?: string
  selectedPlan?: string
  selectedCourse?: string
}

export const useReservationStore = defineStore('reservation', {
  state: () => ({
    yogaExperience: '',
    improvementGoals: [] as string[],
    weeklyExercise: '',
    rawDate: '',
    name: '',
    age: null as number | null,
    gender: 'female',
    email: '',
    phone: '',
    // 關鍵修正：確保這裡定義為 string | null，與後續 Action 傳入值相容
    selectedPlan: '' as string | null,
    selectedCourse: '' as string | null,
  }),
  getters: {
    selectedDateDisplay: (state) => {
      return state.rawDate ? state.rawDate.replace(/-/g, '/') : '請選擇日期'
    },
  },
  actions: {
    setFormData(data: ReservationForm) {
      Object.assign(this.$state, data)
    },
    // 確保 Action 接收的是 string
    setPlan(plan: string) {
      this.selectedPlan = plan
    },
    setCourse(course: string) {
      this.selectedCourse = course
    },
  },
})
