<template>
  <div class="container px-4 lg:px-8 text-center py-12 md:py-16">
    <h1 class="text-3xl text-primary-title mb-6 md:mb-4 lg:mb-6">立即預約</h1>
    <div class="flex flex-row gap-4 md:gap-8 justify-between md:justify-center mb-8">
      <div class="bg-primary-bg text-primary-title rounded-2xl py-3 px-4 md:px-3 lg:px-12">
        選擇方案
      </div>
      <div class="bg-primary-title text-white rounded-2xl py-3 px-4 md:px-3 lg:px-12">填寫資料</div>
      <div class="bg-primary-bg text-primary-title rounded-2xl py-3 px-4 md:px-3 lg:px-12">
        完成預約
      </div>
    </div>
    <div class="flex justify-center items-center mb-6 lg:mb-10">
      <p class="text-secondary-text">您選擇的是</p>
      <p class="text-xl text-primary-title ml-4">
        {{ store.selectedPlan }}課程
        <span v-if="store.selectedCourse"> - {{ store.selectedCourse }}</span>
        <span v-else class="text-sm font-normal text-secondary-text"> (請選擇課程階級)</span>
      </p>
    </div>
    <form class="mx-auto text-start text-secondary-text max-w-sm" @submit.prevent="handleNextStep">
      <div class="mb-8">
        <h2 class="mb-4">1. 是否接觸過瑜珈?</h2>
        <div class="relative">
          <input
            type="radio"
            id="yogaExperienceYes"
            name="yogaExperience"
            value="yes"
            class="accent-primary-title"
            v-model="yogaExperience"
          />
          <label for="yogaExperienceYes" class="ml-2">是</label>
          <input
            type="radio"
            id="yogaExperienceNo"
            name="yogaExperience"
            value="no"
            class="ml-4 accent-primary-title"
            v-model="yogaExperience"
          />
          <label for="yogaExperienceNo" class="ml-2">否</label>
        </div>
        <span v-if="errors.yogaExperience" class="absolute text-red-500 text-sm mt-1">
          <i class="bi bi-exclamation-circle"></i>此欄位為必選
        </span>
      </div>
      <div class="mb-8">
        <h2 class="mb-4">2. 想改善的生活問題?</h2>
        <div class="relative grid grid-cols-3 gap-4">
          <div>
            <input
              type="checkbox"
              id="improvementGoal1"
              name="improvementGoals"
              value="肌耐力不足"
              class="accent-primary-title"
              v-model="improvementGoals"
            />
            <label for="improvementGoal1" class="ml-2">肌耐力不足</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="improvementGoal2"
              name="improvementGoals"
              value="柔軟度不佳"
              class="accent-primary-title"
              v-model="improvementGoals"
            />
            <label for="improvementGoal2" class="ml-2">柔軟度不佳</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="improvementGoal3"
              name="improvementGoals"
              value="壓力大"
              class="accent-primary-title"
              v-model="improvementGoals"
            />
            <label for="improvementGoal3" class="ml-2">壓力大</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="improvementGoal4"
              name="improvementGoals"
              value="姿勢不正"
              class="accent-primary-title"
              v-model="improvementGoals"
            />
            <label for="improvementGoal4" class="ml-2">姿勢不正</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="improvementGoal5"
              name="improvementGoals"
              value="睡眠品質差"
              class="accent-primary-title"
              v-model="improvementGoals"
            />
            <label for="improvementGoal5" class="ml-2">睡眠品質差</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="improvementGoal6"
              name="improvementGoals"
              value="注意力不足"
              class="accent-primary-title"
              v-model="improvementGoals"
            />
            <label for="improvementGoal6" class="ml-2">注意力不足</label>
          </div>
        </div>
        <span
          v-if="errors.improvementGoals"
          class="absolute text-red-500 text-sm mt-1 flex items-center gap-1"
        >
          <i class="bi bi-exclamation-circle"></i> 請至少選擇一項
        </span>
      </div>
      <div class="mb-8">
        <h2 class="mb-4">3. 每週累積運動量約為多少？</h2>
        <div class="relative grid grid-cols-2 gap-1">
          <div>
            <input
              type="radio"
              id="weeklyExercise150"
              name="weeklyExercise"
              value="150 分鐘以上"
              class="accent-primary-title"
              v-model="weeklyExercise"
            />
            <label for="weeklyExercise150" class="ml-2">150 分鐘以上</label>
          </div>
          <div>
            <input
              type="radio"
              id="weeklyExercise75-150"
              name="weeklyExercise"
              value="75~150 分鐘"
              class="accent-primary-title"
              v-model="weeklyExercise"
            />
            <label for="weeklyExercise75-150" class="ml-2">75~150 分鐘</label>
          </div>
          <div>
            <input
              type="radio"
              id="weeklyExercise30-75"
              name="weeklyExercise"
              value="30~75 分鐘"
              class="accent-primary-title"
              v-model="weeklyExercise"
            />
            <label for="weeklyExercise30-75" class="ml-2">30~75 分鐘</label>
          </div>
          <div>
            <input
              type="radio"
              id="weeklyExerciseBelow30"
              name="weeklyExercise"
              value="30 分鐘以下"
              class="accent-primary-title"
              v-model="weeklyExercise"
            />
            <label for="weeklyExerciseBelow30" class="ml-2">30 分鐘以下</label>
          </div>
        </div>
        <span
          v-if="errors.weeklyExercise"
          class="absolute text-red-500 text-sm mt-1 flex items-center gap-1"
        >
          <i class="bi bi-exclamation-circle"></i> 請選擇您的運動量
        </span>
      </div>
      <div class="mb-8">
        <h2 class="mb-1 text-primary-title">4. 上課預約報到日</h2>
        <p class="text-sm text-secondary-text mb-2">
          若還沒有確定的日期，可以等待專員與您聯絡時再做詳細的諮詢哦！
        </p>

        <div class="relative inline-block">
          <div class="border border-[#D7C4C0] rounded-md px-4 py-2 text-[#B7A6A3] text-lg bg-white">
            {{ selectedDateDisplay }}
          </div>

          <input
            type="date"
            v-model="rawDate"
            onclick="this.showPicker()"
            class="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
          />
        </div>
        <span
          v-if="errors.rawDate"
          class="absolute text-red-500 text-sm mt-1 flex items-center gap-1"
        >
          <i class="bi bi-exclamation-circle"></i> 請選擇預約日期
        </span>
      </div>
      <div class="mb-8">
        <h2 class="mb-4 text-primary-title">5. 填寫基本資料，完成預約後會寄送通知至電子信箱</h2>
        <div class="grid grid-cols-2 gap-y-8 gap-x-2 mb-8">
          <div class="relative flex flex-col gap-2">
            <label for="name" class="text-primary-title">姓名</label>
            <input
              type="text"
              id="name"
              placeholder="請輸入您的姓名"
              :class="[
                'w-full border border-primary-text rounded-md px-3 py-2 text-primary-text bg-white focus:outline-none focus:ring-1 focus:ring-primary-title',
                errors.name
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-primary-text focus:ring-primary-title',
              ]"
              v-model="name"
            />
            <span v-if="errors.name" class="absolute -bottom-6 text-red-500 text-sm">
              <i class="bi bi-exclamation-circle"></i> 姓名必須輸入
            </span>
          </div>
          <div class="relative flex flex-col gap-2">
            <label for="age" class="text-primary-title">年齡</label>
            <input
              type="number"
              id="age"
              placeholder="請輸入您的年齡"
              :class="[
                'w-full border border-primary-text rounded-md px-3 py-2 text-primary-text bg-white focus:outline-none focus:ring-1 focus:ring-primary-title',
                errors.age
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-primary-text focus:ring-primary-title',
              ]"
              v-model="age"
            />
            <span v-if="errors.age" class="absolute -bottom-6 text-red-500 text-sm mt-1">
              <i class="bi bi-exclamation-circle"></i> 請輸入正確年齡
            </span>
          </div>
          <div class="flex flex-col gap-2 items-start">
            <label for="gender" class="text-primary-title">性別</label>
            <div class="relative inline-block">
              <select
                id="gender"
                name="gender"
                class="appearance-none inline-block w-auto border border-primary-text rounded-md pl-4 pr-10 py-2 text-primary-text bg-white focus:outline-none focus:ring-1 focus:ring-primary-title cursor-pointer transition-all"
                v-model="gender"
                style="
                  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12.714%2015.467L17.471%2010.711C18.106%2010.076%2017.653%209%2016.757%209H7.243C6.347%209%205.894%2010.076%206.529%2010.711L11.3%2015.482C11.691%2015.873%2012.324%2015.873%2012.714%2015.482Z%22%20fill%3D%22%23491803%22%2F%3E%3C%2Fsvg%3E');
                  background-repeat: no-repeat;
                  background-position: right 0.7rem center;
                  background-size: 1em;
                "
              >
                <option value="female">女</option>
                <option value="male">男</option>
              </select>
            </div>
          </div>
        </div>
        <div class="relative flex flex-col gap-2 mb-8">
          <label for="email" class="text-primary-title">電子信箱</label>
          <input
            type="email"
            id="email"
            placeholder="email@example.com"
            :class="[
              'w-full border border-primary-text rounded-md px-3 py-2 text-primary-text bg-white focus:outline-none focus:ring-1 focus:ring-primary-title',
              errors.email
                ? 'border-red-500 focus:ring-red-500'
                : 'border-primary-text focus:ring-primary-title',
            ]"
            v-model="email"
          />
          <span v-if="errors.email" class="absolute -bottom-6 text-red-500 text-sm mt-1">
            <i class="bi bi-exclamation-circle"></i> 請輸入正確的信箱格式
          </span>
        </div>
        <div class="relative flex flex-col gap-2">
          <label for="phone" class="text-primary-title">手機號碼</label>
          <input
            type="tel"
            id="phone"
            placeholder="0912-345-678"
            :class="[
              'w-full border border-primary-text rounded-md px-3 py-2 text-primary-text bg-white focus:outline-none focus:ring-1 focus:ring-primary-title',
              errors.phone
                ? 'border-red-500 focus:ring-red-500'
                : 'border-primary-text focus:ring-primary-title',
            ]"
            v-model="phone"
          />
          <span v-if="errors.phone" class="absolute -bottom-6 text-red-500 text-sm mt-1">
            <i class="bi bi-exclamation-circle"></i> 請輸入有效的手機號碼
          </span>
        </div>
      </div>
      <button
        @click="handleNextStep"
        class="inline-block w-full bg-primary-text text-white py-2 px-16 lg:px-32 rounded-md text-xl mb-10 md:mb-4 lg:mb-10 text-center hover:bg-opacity-90 transition-colors"
      >
        繼續預約
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useReservationStore } from '@/stores/useReservationStore'
import { useForm, useField } from 'vee-validate'

// 如果你想要「始終」顯示 MM/DD/YYYY，就直接回傳字串
// 如果想要選完後顯示日期，可以判斷 rawDate.value
const selectedDateDisplay = computed(() => {
  return rawDate.value ? rawDate.value : 'MM/DD/YYYY'
})

const router = useRouter()
const store = useReservationStore()
// --- 1. 定義驗證架構 (所有欄位皆必填) ---
const schema = {
  yogaExperience: 'required',
  improvementGoals: 'required',
  weeklyExercise: 'required',
  rawDate: 'required',
  name: 'required',
  age: 'required|numeric',
  gender: 'required',
  email: 'required|email',
  phone: 'required|min:8',
}

const { handleSubmit, errors } = useForm({
  validationSchema: schema,
  // 讓初始值直接等於 Store 的值
  initialValues: store.$state,
})

// --- 2. 綁定各個欄位 (讓 store 與 validation 同步) ---
const { value: name } = useField<string>('name')
const { value: email } = useField<string>('email')
const { value: phone } = useField<string>('phone')
const { value: age } = useField<number>('age')
const { value: rawDate } = useField<string>('rawDate')
const { value: yogaExperience } = useField<string>('yogaExperience')
const { value: weeklyExercise } = useField<string>('weeklyExercise')
const { value: improvementGoals } = useField<string[]>('improvementGoals')
const { value: gender } = useField<string>('gender')

// 下方的 handleNextStep 修正
const handleNextStep = handleSubmit((values) => {
  // values 已經包含所有驗證過的資料
  store.$patch(values) // 使用 $patch 快速更新 Store
  router.push('/reservation-2')
})
</script>

<style scoped>
input::placeholder {
  color: #c0a4a5;
  opacity: 0.7; /* 視需求調整 */
}
</style>
