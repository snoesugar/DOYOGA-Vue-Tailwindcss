<template>
  <div class="container px-4 md:px-10 lg:px-8 text-center py-12 md:py-16">
    <h1 class="text-3xl text-primary-title mb-6 md:mb-8">本月課表</h1>

    <div
      class="w-full overflow-x-auto whitespace-nowrap bg-primary-text p-12 rounded-2xl mb-8 md:mb-10 lg:mb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
    >
      <p class="text-left text-white text-xl mb-2">2021 07 月</p>
      <table class="w-full min-w-[700px] md:min-w-full table-auto bg-white border-collapse">
        <thead>
          <tr class="text-left font-normal text-primary-title">
            <th
              class="px-1 py-2 font-normal border-r border-b border-primary-text whitespace-nowrap w-px"
            >
              時間
            </th>
            <th class="py-2 text-center font-normal border-b border-primary-text">星期一</th>
            <th class="py-2 text-center font-normal border-b border-primary-text bg-primary-bg">
              星期二
            </th>
            <th class="py-2 text-center font-normal border-b border-primary-text">星期三</th>
            <th class="py-2 text-center font-normal border-b border-primary-text bg-primary-bg">
              星期四
            </th>
            <th class="py-2 text-center font-normal border-b border-primary-text">星期五</th>
            <th class="py-2 text-center font-normal border-b border-primary-text bg-primary-bg">
              星期六
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(row, idx) in schedule" :key="idx">
            <td
              class="border-r border-b border-primary-text px-1 py-2 text-left text-sm text-primary-title whitespace-nowrap w-px"
            >
              {{ row.time }}
            </td>

            <template v-if="row.isRest">
              <td
                colspan="6"
                class="border-b border-primary-text px-1 py-2 text-center text-primary-title"
              >
                休息
              </td>
            </template>

            <template v-else>
              <td
                v-for="dayKey in dayKeys"
                :key="dayKey"
                :class="[
                  'border-b border-primary-text px-2 py-2 text-left text-sm text-primary-title transition-colors',
                  getBgClass(dayKey, row.days?.[dayKey]),
                ]"
              >
                {{ row.days?.[dayKey] }}
              </td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mb-10 md:mb-4 lg:mb-10 max-w-2xl lg:max-w-3xl mx-auto">
      <h2 class="text-3xl text-secondary-text mb-6 lg:mb-10 text-center">上課須知</h2>

      <div class="space-y-4 md:space-y-8 text-left">
        <div v-for="(text, index) in notices" :key="index" class="flex items-center gap-2 md:gap-6">
          <!-- 1. 修改編號標籤：根據索引動態加入 mr-5 -->
          <span
            :class="[
              'text-3xl font-bold text-primary-title w-8 text-right transition-all',
              index % 2 !== 0 ? 'lg:ml-24' : '',
            ]"
          >
            {{ index + 1 }}.
          </span>

          <!-- 2. 右側內容框：維持原有的交錯顏色邏輯 -->
          <div
            :class="[
              'flex-grow py-4 px-4 md:px-6 rounded-2xl',
              index % 2 === 0
                ? 'border border-primary-text bg-white text-primary-title lg:mr-24'
                : 'bg-primary-text text-white',
            ]"
          >
            {{ text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface CourseRow {
  time: string
  isRest?: boolean // 是否為休息時段
  days?: {
    monday: string
    tuesday: string
    wednesday: string
    thursday: string
    friday: string
    saturday: string
  }
}

const schedule = ref<CourseRow[]>([
  {
    time: '0900-1000',
    days: {
      monday: '基礎 Basic',
      tuesday: '基礎 Basic',
      wednesday: '',
      thursday: '',
      friday: '基礎 Basic',
      saturday: '基礎 Basic',
    },
  },
  {
    time: '1000-1100',
    days: {
      monday: '艾揚格 Iyengar',
      tuesday: '哈達 Hatha',
      wednesday: '寰宇 Universal',
      thursday: '哈達 Hatha',
      friday: '艾揚格 Iyengar',
      saturday: '雙人飛行',
    },
  },
  {
    time: '1100-1200',
    days: {
      monday: '寰宇 Universal',
      tuesday: '陰陽 Yin Yang',
      wednesday: '艾揚格 Iyengar',
      thursday: '寰宇 Universal',
      friday: '',
      saturday: '艾揚格 Iyengar',
    },
  },
  { time: '1200-1400', isRest: true }, // 休息
  {
    time: '1400-1500',
    days: {
      monday: '雙人飛行',
      tuesday: '基礎 Basic',
      wednesday: '雙人飛行',
      thursday: '陰陽 Yin Yang',
      friday: '雙人飛行',
      saturday: '基礎 Basic',
    },
  },
  {
    time: '1500-1600',
    days: {
      monday: '陰陽 Yin Yang',
      tuesday: '陰陽 Yin Yang',
      wednesday: '基礎 Basic',
      thursday: '基礎 Basic',
      friday: '哈達 Hatha',
      saturday: '香氛瑜珈',
    },
  },
  {
    time: '1600-1700',
    days: {
      monday: '哈達 Hatha',
      tuesday: '雙人飛行',
      wednesday: '陰陽 Yin Yang',
      thursday: '香氛瑜珈',
      friday: '艾揚格 Iyengar',
      saturday: '陰陽 Yin Yang',
    },
  },
  {
    time: '1700-1800',
    days: {
      monday: '艾揚格 Iyengar',
      tuesday: '',
      wednesday: '哈達 Hatha',
      thursday: '艾揚格 Iyengar',
      friday: '寰宇 Universal',
      saturday: '哈達 Hatha',
    },
  },
  { time: '1800-2000', isRest: true }, // 休息
  {
    time: '2000-2100',
    days: {
      monday: '',
      tuesday: '',
      wednesday: '香氛瑜珈',
      thursday: '艾揚格 Iyengar',
      friday: '香氛瑜珈',
      saturday: '雙人飛行',
    },
  },
])

// 判斷背景顏色的函式
const getBgClass = (dayKey: string, courseName: string | undefined) => {
  const whiteColumns = ['monday', 'wednesday', 'friday']

  // 規則 1：一、三、五 永遠保持白色
  if (whiteColumns.includes(dayKey)) {
    return 'bg-white'
  }

  // 規則 2：二、四、六
  // 如果你想讓空白處有顏色，這裡直接回傳粉色背景
  // 如果只想讓「空白」變色，「有課」維持白色，則反轉判斷
  return courseName ? 'bg-primary-bg' : 'bg-primary-bg'
}

const dayKeys = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'] as const

const notices = [
  '空中瑜珈、香氛開放 2 天前電話預約上課。',
  '如果有特殊體質、特殊狀況，請主動告知該堂教師。',
  '取消預約或時間異動請於預約日前一天晚間 21:00 前告知。',
  '運動過程中若感到任何不適，請馬上停止且與老師商量討論。',
]
</script>
