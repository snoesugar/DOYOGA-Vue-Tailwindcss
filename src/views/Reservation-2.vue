<template>
  <div class="container px-4 lg:px-8 text-center py-12 md:py-16">
    <h1 class="text-3xl text-primary-title mb-6 md:mb-4 lg:mb-6">立即預約</h1>
    <div
      class="flex flex-row gap-4 md:gap-8 justify-between md:justify-center mb-9 md:mb-7 lg:mb-9"
    >
      <div class="bg-primary-bg text-primary-title rounded-2xl py-3 px-4 md:px-3 lg:px-12">
        選擇方案
      </div>
      <div class="bg-primary-bg text-primary-title rounded-2xl py-3 px-4 md:px-3 lg:px-12">
        填寫資料
      </div>
      <div class="bg-primary-title text-white rounded-2xl py-3 px-4 md:px-3 lg:px-12">完成預約</div>
    </div>
    <div class="text-primary-title mb-8">
      <div class="mb-5">
        <i class="bi bi-check-circle text-4xl"></i>
      </div>
      <p class="text-xl">已完成預約，以下是您的預約資訊:</p>
    </div>
    <div
      class="mx-auto max-w-lg lg:max-w-xl border border-primary-text rounded-lg overflow-hidden mb-6"
    >
      <div
        @click="isOpen = !isOpen"
        class="flex justify-between items-center bg-primary-title px-5 py-4 cursor-pointer select-none"
      >
        <h3 class="text-white font-medium">預約資訊</h3>
        <span class="transform transition-transform duration-300" :class="{ 'rotate-180': isOpen }">
          <i class="bi bi-chevron-down text-white"></i>
        </span>
      </div>

      <transition name="accordion">
        <div v-if="isOpen" class="overflow-hidden">
          <div class="p-4 lg:p-5 text-start text-primary-title bg-white">
            <p class="text-xl mb-4">
              <span class="font-medium mr-2">您預約的是</span>
              <span class="text-primary-text">
                {{ store.selectedPlan }}課程
                <span v-if="store.selectedCourse"> - {{ store.selectedCourse }}</span>
              </span>
            </p>
            <ul class="space-y-2">
              <li>
                <span class="font-medium">上課預約報到日：</span>{{ store.selectedDateDisplay }}
              </li>
              <li><span class="font-medium">預約人：</span>{{ store.name }}</li>
              <li><span class="font-medium">年齡：</span>{{ store.age }} 歲</li>
              <li>
                <span class="font-medium">性別：</span>{{ store.gender === 'female' ? '女' : '男' }}
              </li>
              <li><span class="font-medium">電子信箱：</span>{{ store.email }}</li>
              <li><span class="font-medium">手機號碼：</span>{{ store.phone }}</li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <div class="mx-auto max-w-sm text-primary-title">
      <h2 class="text-xl mb-2">上課注意事項</h2>
      <p class="text-start mb-8">
        第一次上課請提前 10-15 分鐘至櫃檯報到，請攜帶毛巾、水 .穿著運動服、乾淨室內運動鞋。
        <br class="block lg:hidden" />如欲更改體驗時間請提前通知我們喔！
      </p>
      <RouterLink
        to="/"
        class="inline-block w-full bg-primary-text text-white py-2 px-16 lg:px-32 rounded-md text-xl mb-10 md:mb-4 lg:mb-10 text-center hover:bg-opacity-90 transition-colors"
      >
        返回首頁
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isOpen = ref(true)

import { useReservationStore } from '@/stores/useReservationStore'
const store = useReservationStore()
</script>

<style>
/* 定義展開收合的過渡動畫 */
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease-out;
  max-height: 300px; /* 設定一個足夠的內容高度 */
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
