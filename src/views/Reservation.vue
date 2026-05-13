<template>
  <!-- 立即預約 -->
  <div class="container px-4 lg:px-8 text-center pt-12 md:pt-16">
    <h1 class="text-3xl text-primary-title mb-6 md:mb-4 lg:mb-6">立即預約</h1>
    <div class="flex flex-row gap-4 md:gap-8 justify-between md:justify-center mb-8">
      <div class="bg-primary-title text-white rounded-2xl py-3 px-4 md:px-3 lg:px-12">選擇方案</div>
      <div class="bg-primary-bg text-primary-title rounded-2xl py-3 px-4 md:px-3 lg:px-12">
        填寫資料
      </div>
      <div class="bg-primary-bg text-primary-title rounded-2xl py-3 px-4 md:px-3 lg:px-12">
        完成預約
      </div>
    </div>
    <!-- 桌面版 -->
    <div class="hidden lg:block">
      <div class="grid grid-cols-3 items-center justify-center gap-6 md:gap-8 mb-4">
        <div
          v-for="item in plans"
          :key="item.title"
          :class="[
            'col-span-3 lg:col-span-1 overflow-hidden rounded-2xl border border-primary-text flex flex-col md:flex-row lg:flex-col transition-all duration-300',
            selectedPlan === item.title
              ? 'border-transparent ring-4 ring-primary-text'
              : 'border-primary-text',
          ]"
        >
          <img
            :src="item.img"
            :alt="item.title"
            class="md:w-1/2 lg:w-full h-[238px] lg:h-[243px] object-cover object-center block"
          />

          <div class="p-6 flex-1 text-left lg:text-center flex flex-col justify-between">
            <div class="text-center md:text-left lg:text-center">
              <h3 class="text-xl text-primary-title mb-1">
                {{ item.title }}
              </h3>
              <p class="text-xl text-primary-text mb-2">
                {{ item.price }}
              </p>
            </div>
            <p
              class="text-primary-title text-start mb-10 md:mb-6 lg:mb-10 line-clamp-2 lg:line-clamp-none"
            >
              {{ item.desc }}
            </p>
            <button
              @click="selectPlan(item.title)"
              class="w-full bg-primary-text py-2 text-white rounded-md text-xl hover:bg-opacity-90 transition-colors"
            >
              選擇課程
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 平板和手機版 -->
    <div class="block lg:hidden">
      <div class="grid grid-cols-3 items-center justify-center gap-6 md:gap-8 mb-4">
        <div
          v-for="item in plans"
          :key="item.title"
          v-show="!selectedPlan || selectedPlan === item.title"
          :class="[
            'col-span-3 lg:col-span-1 overflow-hidden rounded-2xl border border-primary-text flex flex-col md:flex-row lg:flex-col transition-all duration-300',
            selectedPlan === item.title
              ? 'border-transparent ring-4 ring-primary-text'
              : 'border-primary-text',
            /* 如果已選中方案，在 md 尺寸將寬度撐滿 */
            selectedPlan ? 'md:w-full' : '',
          ]"
        >
          <img
            :src="item.img"
            :alt="item.title"
            class="md:w-1/2 lg:w-full h-[238px] lg:h-[243px] object-cover object-center block"
          />

          <div class="p-6 flex-1 text-left lg:text-center flex flex-col justify-between">
            <div class="text-center md:text-left lg:text-center">
              <h3 class="text-xl text-primary-title mb-1">
                {{ item.title }}
              </h3>
              <p class="text-xl text-primary-text mb-2">
                {{ item.price }}
              </p>
            </div>
            <p
              class="text-primary-title text-start mb-10 md:mb-6 lg:mb-10 line-clamp-2 lg:line-clamp-none"
            >
              {{ item.desc }}
            </p>
            <button
              @click="selectPlan(item.title)"
              class="w-full bg-primary-text py-2 text-white rounded-md text-xl hover:bg-opacity-90 transition-colors"
            >
              選擇課程
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 桌面版 -->
    <div class="hidden lg:block">
      <div class="flex justify-around mb-4">
        <div v-for="item in plans" :key="item.title" class="p-3 transition-all duration-300">
          <!-- 使用 v-show 判斷：當目前的方案標題等於選中的標題時才顯示 -->
          <i
            v-show="selectedPlan === item.title"
            class="bi bi-caret-down-fill text-primary-title"
          ></i>
        </div>
      </div>
    </div>
    <!-- 平板和手機版 -->
    <div class="block lg:hidden">
      <div class="flex justify-around mb-4">
        <div class="p-3 transition-all duration-300">
          <!-- 使用 v-show 判斷：當目前的方案標題等於選中的標題時才顯示 -->
          <i class="bi bi-caret-down-fill text-primary-title"></i>
        </div>
      </div>
    </div>
  </div>
  <!-- 選擇課程階級 -->
  <Transition name="expand">
    <div v-if="selectedPlan" class="expand-wrapper">
      <div
        class="container px-4 lg:px-8 text-center bg-primary-title border border-secondary-text py-8 lg:py-10"
      >
        <h2 class="text-white text-3xl mb-6 lg:mb-8">選擇課程階級</h2>
        <!-- 電腦和手機版 -->
        <div class="block md:hidden lg:block">
          <div class="flex flex-col md:flex-row gap-6 justify-center mb-4 md:mb-6">
            <button
              @click="selectCourse(item.title)"
              v-for="item in courses"
              :key="item.title"
              :class="[
                'flex-1 bg-primary-text text-white text-left p-6 rounded-2xl shadow-[0px_3px_6px_#00000029] transition-all duration-300',
                selectedCourse === item.title
                  ? 'border-transparent ring-4 ring-white'
                  : 'border-primary-text',
              ]"
              class="flex-1 bg-primary-text text-white text-left p-6 rounded-2xl shadow-[0px_3px_6px_#00000029]"
            >
              <div class="flex items-center justify-between text-2xl font-medium mb-1">
                {{ item.title }}{{ ' ' }}{{ item.englishTitle }}
                <i
                  class="bi bi-check-circle text-4xl transition-opacity duration-300"
                  :class="selectedCourse === item.title ? 'opacity-100' : 'opacity-50'"
                ></i>
              </div>
              <p class="mb-3">
                {{ item.desc }}
                <span
                  class="bg-primary-title text-white text-sm font-light py-1 px-4 rounded-xl ml-2"
                  >{{ item.duration }}</span
                >
              </p>
              <ul class="space-y-1">
                <li>・{{ item.directions[0] }}</li>
                <li>・{{ item.directions[1] }}</li>
                <li>・{{ item.directions[2] }}</li>
              </ul>
            </button>
          </div>
        </div>
        <!-- 平板版 -->
        <swiper
          :slides-per-view="2.1"
          :space-between="30"
          class="overflow-hidden w-full hidden md:block lg:hidden p-2 -m-2"
        >
          <swiper-slide
            v-for="item in courses"
            :key="item.title"
            class="rounded-2xl flex items-center justify-center overflow-visible"
          >
            <button
              @click="selectCourse(item.title)"
              :class="[
                'flex-1 bg-primary-text text-white text-left p-6 rounded-2xl shadow-[0px_3px_6px_#00000029] transition-all duration-300',
                selectedCourse === item.title
                  ? 'border-transparent ring-4 ring-white'
                  : 'border-primary-text',
              ]"
              class="flex-1 bg-primary-text text-white text-left p-6 rounded-2xl shadow-[0px_3px_6px_#00000029]"
            >
              <div class="flex items-center justify-between text-2xl font-medium mb-1">
                {{ item.title }}{{ ' ' }}{{ item.englishTitle }}
                <i
                  class="bi bi-check-circle text-4xl transition-opacity duration-300"
                  :class="selectedCourse === item.title ? 'opacity-100' : 'opacity-50'"
                ></i>
              </div>
              <p class="mb-5">
                {{ item.desc }}
                <span
                  class="bg-primary-title text-white text-sm font-light py-1 px-4 rounded-xl ml-2"
                  >{{ item.duration }}</span
                >
              </p>
              <ul class="space-y-1">
                <li>・{{ item.directions[0] }}</li>
                <li>・{{ item.directions[1] }}</li>
                <li>・{{ item.directions[2] }}</li>
              </ul>
            </button>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </Transition>
  <!-- 預約須知 -->
  <div class="container px-4 lg:px-8 text-center pb-8 lg:pb-10">
    <div v-if="selectedPlan" class="pt-8 lg:pt-10">
      <p class="text-primary-title mb-1">您選擇的是</p>
      <p
        class="text-xl text-primary-title underline decoration-2 underline-offset-4 decoration-primary-text mb-10"
      >
        {{ selectedPlan }}課程
        <span v-if="selectedCourse"> - {{ selectedCourse }}</span>
        <span v-else class="text-sm font-normal text-secondary-text"> (請選擇課程階級)</span>
      </p>
    </div>
    <h2 class="text-primary-title text-3xl mb-4">預約須知</h2>
    <ul class="text-left text-primary-title space-y-1 max-w-md mx-auto mb-8">
      <li>1. 如果有特殊體質、特殊狀況，請主動告知。</li>
      <li>
        2. 取消預約或時間異動請於預約日前一天晚間 21:00
        前告知，預約當日請勿異動或取消，以免影響您日後再預約的個人信用及難度。
      </li>
      <li>
        3. 為維護上課品質，請遵守 DOYOGA 各項參觀規定，未遵守規定者，本公司保留謝絕入館之權利。
      </li>
      <li>
        4. DOYOGA
        保留修改預約須知之權利，修改後的條款將公佈於本網站上，不另外個別通知。如果您繼續在本網站進行參觀預約，就表示您已經了解、並同意遵守修改後的約定條款。
      </li>
    </ul>
    <RouterLink
      v-if="selectedPlan"
      to="/reservation-1"
      class="inline-block w-full max-w-sm lg:max-w-md bg-primary-bg py-2 px-16 lg:px-32 text-white rounded-md text-xl mb-14 md:mb-12 lg:mb-16 text-center hover:bg-opacity-90 transition-colors"
    >
      繼續預約
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

// 1. 導入 Store 與 storeToRefs
import { useReservationStore } from '@/stores/useReservationStore'
import { storeToRefs } from 'pinia'

// 2. 初始化 Store
const store = useReservationStore()

// 3. 使用 storeToRefs 提取狀態，這樣在 template 中可以直接使用 selectedPlan
// 且它們會是響應式的（與 Store 同步）
const { selectedPlan, selectedCourse } = storeToRefs(store)

// 4. 定義點擊方法，呼叫 Store 的 Actions
const selectPlan = (planTitle: string) => {
  store.setPlan(planTitle)
  // 選擇方案時，通常會清空上一次選的課程，確保邏輯正確
  store.setCourse('')
}

const selectCourse = (courseTitle: string) => {
  store.setCourse(courseTitle)
}
// 方案資料
const plans = [
  {
    img: '/yoga-11.jpg',
    title: '首次體驗',
    price: 'NT $450 / 次',
    desc: '分基礎、中級、高級可以選擇。初次至 DOYOGA 上課建議選擇此方案。',
  },
  {
    img: '/yoga-12.jpg',
    title: '短期體驗',
    price: 'NT $1800 / 月',
    desc: '分基礎、中級、高級可以選擇。想試著培養瑜珈習慣者可以選擇此方案。',
  },
  {
    img: '/yoga-13.jpg',
    title: '長期體驗',
    price: 'NT $5600 / 季',
    desc: '分基礎、中級、高級可以選擇。有長期習慣做瑜伽者建議選擇此方案。',
  },
]

const courses = [
  {
    title: '基礎',
    englishTitle: 'Basic',
    desc: '基礎課程',
    duration: '60 min',
    directions: ['入體位法動作解說', '瑜珈基礎動作、順位', '適合任何階段練習者'],
  },
  {
    title: '中階',
    englishTitle: 'Intermediate',
    desc: '艾揚格、哈達、寰宇',
    duration: '60 min',
    directions: ['刺激身體七個層次為核心', '結合流暢體位法練習、呼吸、觀想', '適合半年以上練習者'],
  },
  {
    title: '高階',
    englishTitle: 'Advanced',
    desc: '阿斯坦加、陰陽',
    duration: '60 min',
    directions: ['充分打開身體每個部位', '顯著提升力量與柔軟度', '適合一年以上練習者'],
  },
]
</script>

<style scoped>
/* 包裹層，用來控制高度展開 */
.expand-wrapper {
  overflow: hidden; /* 確保超出部分在動畫時隱藏 */
}

/* 進場過程與離場過程 */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.5s ease-in-out;
  max-height: 1000px; /* 設定一個大於內容實際高度的數值 */
}

/* 進場前與離場後的狀態 */
.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

/* 進場後與離場前的狀態 */
.expand-enter-to,
.expand-leave-from {
  max-height: 1000px;
  opacity: 1;
}
</style>
