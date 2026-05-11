<template>
  <div class="container px-4 lg:px-8 text-center py-12 md:py-16">
    <h1 class="text-3xl text-primary-title mb-6 md:mb-4 lg:mb-6">立即預約</h1>
    <div class="flex flex-row gap-4 md:gap-8 justify-center mb-8">
      <div class="bg-primary-bg text-primary-title rounded-2xl py-3 px-4 md:px-3 lg:px-12">
        選擇方案
      </div>
      <div class="bg-primary-title text-white rounded-2xl py-3 px-4 md:px-3 lg:px-12">填寫資料</div>
      <div class="bg-primary-bg text-primary-title rounded-2xl py-3 px-4 md:px-3 lg:px-12">
        完成預約
      </div>
    </div>
    <div class="flex justify-center items-center mb-10">
      <p class="text-secondary-text">您選擇的是</p>
      <p class="text-xl text-primary-title ml-4">
        {{ selectedPlan }}課程
        <span v-if="selectedCourse"> - {{ selectedCourse }}</span>
        <span v-else class="text-sm font-normal text-secondary-text"> (請選擇課程階級)</span>
      </p>
    </div>
    <div class="mx-auto text-start text-secondary-text max-w-sm">
      <div class="mb-8">
        <h2 class="mb-4">1. 是否接觸過瑜珈?</h2>
        <input
          type="radio"
          id="yogaExperienceYes"
          name="yogaExperience"
          value="yes"
          class="accent-primary-title"
        />
        <label for="yogaExperienceYes" class="ml-2">是</label>
        <input
          type="radio"
          id="yogaExperienceNo"
          name="yogaExperience"
          value="no"
          class="ml-4 accent-primary-title"
        />
        <label for="yogaExperienceNo" class="ml-2">否</label>
      </div>
      <div class="mb-8">
        <h2 class="mb-4">2. 想改善的生活問題?</h2>
        <div class="grid grid-cols-3 gap-4">
          <div>
            <input
              type="checkbox"
              id="improvementGoal1"
              name="improvementGoals"
              value="肌耐力不足"
              class="accent-primary-title"
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
            />
            <label for="improvementGoal6" class="ml-2">注意力不足</label>
          </div>
        </div>
      </div>
      <div class="mb-8">
        <h2 class="mb-4">3. 每週累積運動量約為多少？</h2>
        <div class="grid grid-cols-2 gap-1">
          <div>
            <input
              type="radio"
              id="weeklyExercise150"
              name="weeklyExercise"
              value="150 分鐘以上"
              class="accent-primary-title"
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
            />
            <label for="weeklyExerciseBelow30" class="ml-2">30 分鐘以下</label>
          </div>
        </div>
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
      </div>
      <div class="mb-8">
        <h2 class="mb-4 text-primary-title">5. 填寫基本資料，完成預約後會寄送通知至電子信箱</h2>
        <div class="grid grid-cols-2 gap-y-4 gap-x-2 mb-4">
          <div class="flex flex-col gap-2">
            <label for="name" class="text-primary-title">姓名</label>
            <input
              type="text"
              id="name"
              placeholder="請輸入您的姓名"
              class="w-full border border-primary-text rounded-md px-3 py-2 text-primary-text bg-white focus:outline-none focus:ring-1 focus:ring-primary-title"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="age" class="text-primary-title">年齡</label>
            <input
              type="number"
              id="age"
              placeholder="請輸入您的年齡"
              class="w-full border border-primary-text rounded-md px-3 py-2 text-primary-text bg-white focus:outline-none focus:ring-1 focus:ring-primary-title"
            />
          </div>
          <div class="flex flex-col gap-2 items-start">
            <label for="gender" class="text-primary-title">性別</label>
            <div class="relative inline-block">
              <select
                id="gender"
                name="gender"
                class="appearance-none inline-block w-auto border border-primary-text rounded-md pl-4 pr-10 py-2 text-primary-text bg-white focus:outline-none focus:ring-1 focus:ring-primary-title cursor-pointer transition-all"
                style="
                  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M12.714%2015.467L17.471%2010.711C18.106%2010.076%2017.653%209%2016.757%209H7.243C6.347%209%205.894%2010.076%206.529%2010.711L11.3%2015.482C11.691%2015.873%2012.324%2015.873%2012.714%2015.482Z%22%20fill%3D%22%23491803%22%2F%3E%3C%2Fsvg%3E');
                  background-repeat: no-repeat;
                  background-position: right 0.7rem center;
                  background-size: 1em;
                "
              >
                <option value="male">男</option>
                <option value="female">女</option>
              </select>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2 mb-4">
          <label for="email" class="text-primary-title">電子信箱</label>
          <input
            type="email"
            id="email"
            placeholder="email@example.com"
            class="w-full border border-primary-text rounded-md px-3 py-2 text-primary-text bg-white focus:outline-none focus:ring-1 focus:ring-primary-title"
          />
        </div>
        <div class="flex flex-col gap-2">
          <label for="phone" class="text-primary-title">手機號碼</label>
          <input
            type="tel"
            id="phone"
            placeholder="0912-345-678"
            class="w-full border border-primary-text rounded-md px-3 py-2 text-primary-text bg-white focus:outline-none focus:ring-1 focus:ring-primary-title"
          />
        </div>
      </div>
      <button class="bg-primary-text text-white py-2 w-full rounded-md mb-10">送出</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBookingStore } from '@/stores/booking'
import { storeToRefs } from 'pinia'

const bookingStore = useBookingStore()
// 這裡拿到的就是你在上一頁選好的內容
const { selectedPlan, selectedCourse } = storeToRefs(bookingStore)

import { ref, computed } from 'vue'

const rawDate = ref('')

// 如果你想要「始終」顯示 MM/DD/YYYY，就直接回傳字串
// 如果想要選完後顯示日期，可以判斷 rawDate.value
const selectedDateDisplay = computed(() => {
  return rawDate.value ? rawDate.value : 'MM/DD/YYYY'
})
</script>

<style scoped>
input::placeholder {
  color: #c0a4a5;
  opacity: 0.7; /* 視需求調整 */
}
</style>
