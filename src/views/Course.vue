<template>
  <div class="container px-4 lg:px-8 text-center py-12 md:py-16">
    <h1 class="text-3xl text-primary-title mb-8">課程介紹</h1>
    <div class="mx-auto max-w-5xl">
      <div class="flex flex-col lg:flex-row items-stretch justify-center gap-8 px-4">
        <div
          class="hidden lg:block w-full lg:w-1/2 rounded-2xl overflow-hidden relative min-h-[400px]"
        >
          <img
            src="../../public/yoga-4.jpeg"
            alt="yoga-4"
            class="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>

        <!-- 右側文字區塊 -->
        <div class="text-left w-full lg:w-1/2 flex flex-col justify-center">
          <h2 class="text-center lg:text-left text-3xl font-medium text-primary-title">
            本月限定課程 - 空中瑜珈
          </h2>
          <div class="flex mb-4">
            <span class="text-primary-text">授課老師：Carol Tang</span>
            <div class="bg-primary-title text-sm text-white font-light py-1 px-4 rounded-2xl ml-2">
              60 min
            </div>
          </div>
          <p class="text-primary-title mx-auto md:w-96 lg:w-full mb-4">
            使用掛布懸掛在半空，進行哈達瑜珈體位法練習
            <br />藉由地心引力的重力原理 <br />鍛鍊核心肌群，舒緩脊椎壓力
            <br />訓練身體協調性，深層放鬆身體 <br />課堂裡老師會視同學狀況安排教導倒立動作
            <br />對於不敢嘗試倒立的同學來說 <br />藉由掛布的支持與保護
            <br />加上老師細心指導，讓同學能更快掌握
          </p>
          <RouterLink
            to="/reservation"
            class="text-white text-xl bg-primary-text py-2 px-3 w-fit rounded-md"
          >
            立即預約
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-primary-text py-5">
    <div class="container flex">
      <!-- 1. 建立一個 Flex 容器，並設定整體圓角與溢出隱藏 -->
      <div class="flex rounded-md overflow-hidden border border-primary-text w-fit">
        <!-- 2. 輸入框：設定 flex-grow 佔滿剩餘空間，移除原本的圓角 -->
        <input
          type="text"
          placeholder="請輸入要搜尋的課程"
          class="flex-grow bg-white accent-primary-title text-primary-text px-3 py-2 outline-none focus:bg-gray-50 transition-all"
        />

        <!-- 3. 搜尋按鈕：保持原始顏色，移除左側邊框避免重疊 -->
        <button
          class="bg-primary-title px-3 py-2 text-white hover:opacity-90 transition whitespace-nowrap"
        >
          搜尋
        </button>
      </div>
      <div class="ml-2">
        <select
          id="gender"
          name="gender"
          class="appearance-none inline-block w-auto border border-primary-text rounded-md pl-3 pr-10 py-2 text-primary-title bg-white focus:outline-none focus:ring-1 focus:ring-primary-title cursor-pointer transition-all"
          style="
            background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M7%2010L12%205L17%2010H7Z%22%20fill%3D%22%23491803%22%2F%3E%3Cpath%20d%3D%22M7%2014L12%2019L17%2014H7Z%22%20fill%3D%22%23491803%22%2F%3E%3C%2Fsvg%3E');
            background-repeat: no-repeat;
            background-position: right 0.7rem center;
            background-size: 1em;
          "
        >
          <option value="全部課程">全部課程</option>
          <option v-for="item in courses" :key="item.id" :value="item.id">
            {{ item.title }}
          </option>
        </select>
      </div>
    </div>
  </div>
  <div class="pt-14 pb-16 border-b border-primary-title">
    <div class="container">
      <div class="flex flex-row gap-8">
        <div class="basis-3/4">
          <div class="flex flex-col gap-8 p-4">
            <!-- 第一層：遍歷每一行 -->
            <div
              v-for="(row, rowIndex) in groupedCourses"
              :key="rowIndex"
              class="flex flex-row gap-8"
            >
              <!-- 第二層：遍歷該行中的兩個課程 -->
              <div
                v-for="(course, colIndex) in row"
                :key="course.id"
                class="h-[196px] relative cursor-pointer"
                @click="openModal(course)"
                :style="{ flexBasis: getBasis(rowIndex, colIndex) }"
              >
                <!-- 圖片 -->
                <img
                  :src="`../../public/${course.img}`"
                  class="object-cover object-center h-full w-full rounded-2xl"
                  :alt="course.title"
                />

                <!-- 時間標籤：壓在圖片上方 -->
                <div
                  class="absolute top-0 left-4 -translate-y-1/2 bg-primary-text text-sm text-white font-light w-fit py-1 px-4 rounded-2xl z-10"
                >
                  {{ course.time }} min
                </div>

                <!-- 底部文字區塊 -->
                <div class="absolute bottom-6 left-6 text-white">
                  <h3 class="text-3xl font-medium leading-tight">
                    {{ course.title }}{{ course.englishTitle ? ` ${course.englishTitle}` : '' }}
                  </h3>
                  <p class="text-base opacity-90">授課老師：{{ course.teacher }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="basis-1/4 text-primary-title">
          <p class="text-xl mb-2">DOYOGA 上課須知：</p>
          <ul class="space-y-1">
            <li>請攜帶適當的瑜珈墊和一條長毛巾配合課程使用。</li>
            <li>
              運動中請穿著有彈性、吸汗、透氣為原則的衣物，盡量穿著較貼身的運動衣，以便教練指導與自我矯正。
            </li>
            <li>運動中切記補充適當的水分、保持腹式呼吸，以鼻吸氣，以口呼氣為原則。</li>
            <li>
              運動中請保持微收小腹的原則，肩膀放鬆、頭頂向上延伸，請跟隨教練指示，配合呼吸一步步的確實練習。
            </li>
            <li>
              運動過程中若感到任何不適，請馬上停止且與老師商量討論。 若懷孕或特殊疾病請先告知。
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Modal 彈窗 -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center"
      @click.self="closeModal"
    >
      <div
        class="bg-primary-text border border-primary-title rounded-3xl max-w-3xl w-full p-14 relative mx-4"
      >
        <!-- Modal 內容 -->
        <div v-if="selectedCourse">
          <div class="grid grid-cols-2 gap-10 items-center">
            <div class="aspect-square overflow-hidden rounded-xl">
              <img
                :src="`../../public/${selectedCourse.img}`"
                class="w-full h-full object-cover"
                :alt="selectedCourse.title"
              />
            </div>
            <div class="text-white flex flex-col">
              <h2 class="text-3xl font-medium mb-1">
                {{ selectedCourse.title }}
                {{ selectedCourse.englishTitle ? ` ${selectedCourse.englishTitle}` : '' }}
              </h2>
              <div class="flex mb-4">
                <p>授課老師：{{ selectedCourse.teacher }}</p>
                <p class="bg-primary-title text-sm font-light w-fit py-1 px-4 rounded-2xl ml-2">
                  {{ selectedCourse.time }} min
                </p>
              </div>
              <div class="mb-4">
                <p class="min-h-[100px]">
                  {{ selectedCourse.description || '暫無詳細內容介紹。' }}
                </p>
              </div>
              <RouterLink
                to="/reservation"
                class="text-primary-title text-xl bg-primary-bg py-2 px-4 w-fit rounded-md"
              >
                立即預約
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="overflow-hidden">
    <div class="container text-center py-10 mb-28">
      <h2 class="text-3xl text-primary-title mb-8">師資介紹</h2>
      <swiper
        :slides-per-view="1.2"
        :space-between="30"
        :breakpoints="{
          '768': { slidesPerView: 2.1 },
          '1024': { slidesPerView: 3 },
        }"
        class="w-full !overflow-visible"
      >
        <swiper-slide
          v-for="(teacher, index) in teachers"
          :key="teacher.id"
          class="!overflow-visible h-auto"
        >
          <div
            :class="[
              'relative h-full text-white p-6 rounded-2xl pt-14 mt-12',
              index % 2 === 0 ? 'bg-primary-text' : 'bg-primary-title',
            ]"
          >
            <p class="text-xl mb-1">{{ teacher.name }}</p>
            <p class="mb-4">教學經歷{{ teacher.duration }}年</p>

            <div class="text-left flex-grow">
              <p class="font-light mb-8">“{{ teacher.introduction }}”</p>
              <ul class="space-y-1">
                <li v-for="(cert, cIndex) in teacher.directions" :key="cIndex">・{{ cert }}</li>
              </ul>
            </div>
            <img
              :src="`../../public/${teacher.image}`"
              :class="[
                'absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[96px] border-4 rounded-full',
                index % 2 === 0 ? 'border-primary-title' : 'border-primary-text',
              ]"
              :alt="teacher.name"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import 'swiper/css'

// 1. 定義課程的資料結構
interface Course {
  id: number | string
  img: string
  title: string
  englishTitle?: string
  teacher: string
  time: number
  description?: string // 選擇性屬性，如果有介紹的話
}

// --- 修正後的狀態 ---
const isModalOpen = ref(false)

// 2. 使用泛型指定選中課程的型別，初始值為 null
const selectedCourse = ref<Course | null>(null)

// 3. 為函式參數加上型別
const openModal = (course: Course) => {
  selectedCourse.value = course
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedCourse.value = null
}

// 1. 課程原始資料
const courses = [
  {
    id: 1,
    title: '基礎',
    englishTitle: 'Basic',
    teacher: 'Carol Tang',
    time: 60,
    img: 'yoga-8.jpg',
    description:
      '使用掛布懸掛在半空，進行哈達瑜珈體位法練習 藉由地心引力的重力原理，鍛鍊核心肌群，舒緩脊椎壓力。 訓練身體協調性，深層放鬆身體。 課堂裡老師會視同學狀況安排教導倒立動作，對於不敢嘗試倒立的同學來說，藉由掛布的支持與保護，加上老師細心指導，讓同學能更快掌握。',
  },
  {
    id: 2,
    title: '艾揚格',
    englishTitle: 'Iyengar',
    teacher: 'Kanae',
    time: 60,
    img: 'yoga-9.jpg',
    description:
      '強調體位法的精準與正位，課堂中會大量使用輔助道具（如瑜珈磚、伸縮帶、椅子等），幫助不同程度的同學在安全的前提下，找到身體正確的正位線條。適合想建立穩固基礎、改善體態或有受傷修復需求的學員。',
  },
  {
    id: 3,
    title: '哈達',
    englishTitle: 'Hatha',
    teacher: 'Kuzuha',
    time: 60,
    img: 'yoga-10.jpg',
    description:
      '瑜珈的最根本練習，透過深長的呼吸配合經典體位法，達到陰陽平衡。節奏穩定且專注，能強化肌肉力量、提高柔軟度，並在動靜之間找回內心的平靜，是適合所有程度學員的基石課程。',
  },
  {
    id: 4,
    title: '寰宇',
    englishTitle: 'Universal',
    teacher: 'Kuzuha',
    time: 60,
    img: 'yoga-11.jpg',
    description:
      '由 Andrey Lappa 大師所創立，以科學且邏輯化的序列設計著稱。透過十字架形的墊子擺放與多面向的轉動，挑戰大腦協調與身體極限。這是一場全方位跨越身體、能量與意識層面的深度練習。',
  },
  {
    id: 5,
    title: '雙人飛行',
    englishTitle: 'Arco Yoga',
    teacher: 'Kuzuha、Kanae',
    time: 60,
    img: 'yoga-14.jpg',
    description:
      '結合瑜珈的靈性、泰式按摩的療癒以及特技表演的動態力量。透過與夥伴的信任合作，練習者將輪流擔任底座 (Base) 與飛翔者 (Flyer)，在趣味中鍛鍊核心穩定，並學習與人溝通及能量交換。',
  },
  {
    id: 6,
    title: '阿斯坦加',
    englishTitle: 'Ashtanga',
    teacher: 'Kanae',
    time: 60,
    img: 'yoga-15.jpg',
    description:
      '一種極具挑戰性且充滿能量的練習方式。遵循固定的體位法序列，並結合烏加依呼吸 (Ujjayi) 與注視點 (Drishti)。透過連續不間斷的流動產生內熱，淨化神經系統並排毒，適合喜歡高強度汗水與自我紀律的練習者。',
  },
  {
    id: 7,
    title: '陰陽',
    englishTitle: 'Yin Yang',
    teacher: 'Asa Chen',
    time: 60,
    img: 'yoga-16.jpg',
    description:
      '結合了動態流動（陽）與靜態深度伸展（陰）。前半段透過流暢動作溫暖肌肉、提振能量；後半段則進入長時保持的陰瑜珈，深入修復結締組織與筋膜。這是一堂能同時感受活力與極致放鬆的完美平衡課程。',
  },
  {
    id: 8,
    title: '香氛',
    englishTitle: 'Aroma Yoga',
    teacher: 'Asa Chen',
    time: 60,
    img: 'yoga-5.jpg',
    description:
      '將純淨植物精油融入瑜珈練習中。透過嗅吸與塗抹，讓香氛引領神經系統進入深層放鬆。配合溫和的體位法，舒緩日常累積的壓力與緊繃情緒，在療癒的香氣中重新找回身心的連結。',
  },
]

// 2. 將資料每兩個分為一組 (Row)
const groupedCourses = computed(() => {
  const groups = []
  for (let i = 0; i < courses.length; i += 2) {
    groups.push(courses.slice(i, i + 2))
  }
  return groups
})

const getBasis = (rowIndex: number, colIndex: number) => {
  const isEvenRow = rowIndex % 2 === 0
  if (isEvenRow) {
    return colIndex === 0 ? '60%' : '40%'
  } else {
    return colIndex === 0 ? '40%' : '60%'
  }
}

const teachers = [
  {
    id: 1,
    image: 'teacher-1.png',
    name: 'Carol Tang',
    duration: '10',
    introduction:
      '因為瑜珈讓我重新認識自己的身體，也讓我有了不一樣的人生。 我希望能跟學生們分享瑜珈的好，讓大 家能藉由瑜珈看見自己的內在與潛能， 並將瑜珈自然的融入自己的生活中。',
    directions: [
      '協會認證艾揚格瑜珈老師',
      '2010 年完成四年的艾揚格師資培訓',
      '2020 取得艾揚格瑜珈高階認證',
    ],
  },
  {
    id: 2,
    image: 'teacher-2.png',
    name: 'Kanae',
    duration: '3',
    introduction:
      '希望每個人透過觀察，感受在在進入動作，連接陰與陽，內和外，呼和吸的方式來更了解瑜珈練習的觀點，每個​動作都帶著呼吸和順位，在平衡心理和生理的狀況下以安全和簡化的技巧進入瑜珈姿勢，帶著放鬆的心情，享受瑜珈和生命的喜悅，並樂在其​中。 我希望能跟學生們分享瑜珈的好，讓大 家能藉由瑜珈看見自己的內在與潛能， 並將瑜珈自然的融入自己的生活中。',
    directions: [
      '美國瑜珈聯盟 RYT200 小時師資認證',
      '自然呼吸瑜珈會館開授倒立研習',
      '簡善琳瑜珈會館開授倒立研習',
    ],
  },
  {
    id: 3,
    image: 'teacher-4.png',
    name: 'Kuzuha',
    duration: '3',
    introduction: '瑜珈是一種生活態度， 學習平衡不強求，堅持不放棄， 修煉心靈活在當下。',
    directions: [
      '美國瑜珈聯盟 RYT200 小時師資認證',
      '自然呼吸瑜珈會館開授倒立研習',
      '簡善琳瑜珈會館開授倒立研習',
    ],
  },
  {
    id: 4,
    image: 'teacher-3.png',
    name: 'Asa Ifrit',
    duration: '5',
    introduction: '瑜珈是一種生活態度， 學習平衡不強求，堅持不放棄， 修煉心靈活在當下。',
    directions: ['自然呼吸瑜珈會館開授倒立研習', '簡善琳瑜珈會館開授倒立研習'],
  },
]
</script>
