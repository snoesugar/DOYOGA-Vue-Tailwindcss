<template>
  <header class="relative flex flex-col h-[560px] md:h-full justify-center gap-6">
    <img src="/header.jpeg" class="w-full h-full object-cover object-center block" alt="header" />
    <div class="absolute text-secondary-text pl-4 md:pl-10 lg:pl-[180px]">
      <p class="mb-2 md:mb-0">健身輕時尚</p>
      <h1 class="text-3xl md:text-4xl font-medium mb-1">DOYOGA，做你的瑜珈</h1>
      <p class="text-xl md:text-2xl md:w-96 mb-6">多給自己一點時間享受靜謐，傾聽內心的聲音。</p>
      <RouterLink
        to="/reservation"
        class="px-4 py-2 bg-primary-bg text-secondary-text rounded-md mr-2"
        >立即預約</RouterLink
      >
      <RouterLink to="/course" class="px-4 py-2 bg-primary-btn text-white rounded-md mr-2"
        >課程介紹</RouterLink
      >
    </div>
  </header>
  <!-- 感受身心，活在當下 -->
  <div class="container px-4 md:px-10 lg:px-8 py-8 lg:py-10 text-center">
    <h2 class="text-2xl md:text-3xl font-medium text-primary-title mb-1">感受身心，活在當下</h2>
    <p class="text-xl text-primary-text mb-6 lg:mb-9">DOYOGA 可以帶給你...</p>

    <div class="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-4 lg:mb-6">
      <div
        v-for="item in features"
        :key="item.title"
        class="relative group overflow-hidden rounded-2xl w-full"
      >
        <div class="h-[480px] md:h-[252px] lg:h-[420px]">
          <img
            :src="item.img"
            :alt="item.title"
            class="w-full h-full object-cover object-center block"
          />
        </div>
        <div class="absolute bottom-0 left-0 p-6 w-full text-start">
          <h3 class="lg:text-xl text-white mb-1">{{ item.title }}</h3>
          <p class="text-white">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- 頂尖師資、專業教學 -->
  <div class="bg-primary-bg">
    <div class="container px-4 md:px-10 lg:px-8 py-8 lg:py-16 text-center">
      <div class="grid lg:grid-cols-2 items-center justify-center gap-8">
        <img
          src="../../public/yoga-4.jpeg"
          alt="yoga-4"
          class="w-full h-[628px] rounded-2xl object-cover object-center hidden lg:block"
        />
        <div class="text-left">
          <h3 class="text-center lg:text-left text-3xl font-medium text-primary-title mb-1">
            頂尖師資、專業教學
          </h3>
          <p class="text-xl text-primary-text mx-auto md:w-96 lg:w-full mb-6">
            強力師資，經歷豐富，協會認證。運用引導式教學，針對不同需求的人制定專屬課程。
          </p>
          <div class="flex flex-col gap-4 mb-4 md:mb-0">
            <div
              class="group bg-white text-secondary-text p-4 md:py-6 md:px-8 rounded-2xl flex items-center md:ml-28 lg:ml-0 transition-all duration-300 cursor-pointer hover:px-4 hover:md:py-10 hover:md:px-12 hover:ml-0 hover:md:ml-14 hover:lg:-ml-[95px]"
            >
              <img
                src="/teacher-1.png"
                alt="teacher-1"
                class="mr-4 md:mr-5 flex-shrink-0 w-[48px] h-[48px] md:w-[68px] md:h-[68px] transition-all duration-300 group-hover:md:w-[94px] group-hover:md:h-[94px] object-cover"
              />

              <div class="flex flex-col text-secondary-text gap-1">
                <span class="text-xl">Carol Tang 老師</span>
                <p>教學經歷 10 年</p>
                <p
                  class="text-sm opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500"
                >
                  瑜珈讓我重新認識自己的身體，也讓我有了不一樣的人生。
                </p>
              </div>
            </div>

            <div
              class="group bg-white text-secondary-text p-4 md:py-6 md:px-8 rounded-2xl flex items-center md:ml-28 lg:ml-0 transition-all duration-300 cursor-pointer hover:px-4 hover:md:py-10 hover:md:px-12 hover:ml-0 hover:md:ml-14 hover:lg:-ml-[95px]"
            >
              <img
                src="/teacher-2.png"
                alt="teacher-2"
                class="mr-4 md:mr-5 flex-shrink-0 w-[48px] h-[48px] md:w-[68px] md:h-[68px] transition-all duration-300 group-hover:md:w-[94px] group-hover:md:h-[94px] object-cover"
              />
              <div class="flex flex-col text-secondary-text gap-1">
                <span class="text-xl">Kanae 老師</span>
                <p>教學經歷 10 年</p>
                <p
                  class="text-sm opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500"
                >
                  每一次呼吸都是一次與自己的對話，在墊子上找到屬於你的寧靜角落。
                </p>
              </div>
            </div>

            <div
              class="group bg-white text-secondary-text p-4 md:py-6 md:px-8 rounded-2xl flex items-center md:ml-28 lg:ml-0 transition-all duration-300 cursor-pointer hover:px-4 hover:md:py-10 hover:md:px-12 hover:ml-0 hover:md:ml-14 hover:lg:-ml-[95px]"
            >
              <img
                src="/teacher-3.png"
                alt="teacher-3"
                class="mr-4 md:mr-5 flex-shrink-0 w-[48px] h-[48px] md:w-[68px] md:h-[68px] transition-all duration-300 group-hover:md:w-[94px] group-hover:md:h-[94px] object-cover"
              />
              <div class="flex flex-col text-secondary-text gap-1">
                <span class="text-xl">Asa Ifrit 老師</span>
                <p>教學經歷 10 年</p>
                <p
                  class="text-sm opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500"
                >
                  突破身體的侷限，是為了看見更強大的內心。讓我們在流動中感受生命力。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 舒適空間、靜心放鬆 -->
  <div class="bg-white">
    <div class="container px-4 md:px-10 lg:px-8 py-12 md:py-14 lg:py-16">
      <div class="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-10 lg:gap-16">
        <div class="text-left w-full md:w-1/2 order-1 md:order-2">
          <h3 class="text-2xl lg:text-3xl font-medium text-primary-title mb-1">
            舒適空間、靜心放鬆
          </h3>
          <p class="text-primary-text text-lg lg:text-xl mb-4 lg:mb-6">
            我們都渴望平靜安穩的生活，擁有一處能夠靜心的角落，安撫每天繁雜忙碌的心。
          </p>
          <a href="#" class="text-primary-title flex items-center group">
            環境介紹
            <i class="bi bi-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>

        <div class="grid grid-cols-2 gap-3 md:gap-4 w-full md:w-1/2 order-2 md:order-1">
          <div class="h-[210px] md:h-[350px] lg:h-[444px]">
            <img
              src="/yoga-5.jpg"
              alt="yoga-5"
              class="w-full h-full rounded-2xl object-cover object-center block"
            />
          </div>

          <div class="flex flex-col h-[210px] md:h-[350px] lg:h-[444px] gap-3 md:gap-4">
            <img
              src="/yoga-6.jpg"
              alt="yoga-6"
              class="flex-1 min-h-0 w-full rounded-2xl object-cover object-center block"
            />
            <img
              src="/yoga-7.jpg"
              alt="yoga-7"
              class="flex-1 min-h-0 w-full rounded-2xl object-cover object-center hidden md:block"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 精心設計、課程多元 -->
  <div class="bg-primary-bg">
    <div class="container px-4 md:px-10 lg:px-8 py-12 lg:py-16">
      <div
        class="flex flex-col md:grid md:grid-cols-2 items-start justify-center gap-4 md:gap-8 lg:gap-16"
      >
        <div class="text-left w-full">
          <h3 class="text-2xl lg:text-3xl font-medium text-primary-title mb-1">
            精心設計、課程多元
          </h3>
          <p class="text-primary-text text-lg lg:text-xl mb-4 lg:mb-6">
            教師帶領多元課程，釋放壓力，與身心常見的緊繃不適溫柔和解。
          </p>
          <RouterLink to="/course" class="text-primary-title flex items-center group">
            課程介紹
            <i class="bi bi-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
          </RouterLink>
        </div>

        <div class="w-full">
          <div class="grid grid-cols-2 gap-4 lg:hidden">
            <img
              v-for="item in yogaClasses"
              :key="item.Image"
              :src="item.Image"
              :alt="item.alt"
              class="w-full aspect-square rounded-2xl object-cover object-center block"
            />
          </div>

          <swiper
            :slides-per-view="1.5"
            :space-between="30"
            class="overflow-hidden w-full hidden lg:block"
          >
            <swiper-slide
              v-for="item in yogaClasses"
              :key="item.Image"
              class="rounded-2xl flex items-center justify-center"
            >
              <div class="w-full aspect-square rounded-2xl overflow-hidden">
                <img :src="item.Image" :alt="item.alt" class="w-full h-full object-cover" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </div>
  <!-- 方案選擇 -->
  <div class="container px-4 md:px-10 lg:px-8 py-8 md:py-10 text-center">
    <h2 class="text-3xl font-medium text-primary-title mb-1">方案選擇</h2>
    <p class="text-xl text-primary-text mb-6 lg:mb-9">DOYOGA 可以帶給你...</p>
    <div class="grid grid-cols-3 items-center justify-center gap-4 md:gap-8 mb-4 lg:mb-6">
      <div
        v-for="item in plans"
        :key="item.title"
        class="col-span-3 lg:col-span-1 overflow-hidden rounded-2xl border border-primary-text flex flex-col md:flex-row lg:flex-col"
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
            <p class="text-xl text-primary-btn mb-2">
              {{ item.price }}
            </p>
          </div>
          <p
            class="text-primary-title text-start mb-10 md:mb-6 lg:mb-10 line-clamp-2 lg:line-clamp-none"
          >
            {{ item.desc }}
          </p>
          <button class="w-full bg-primary-text py-2 text-white rounded-md text-xl">
            選擇課程
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- 聽聽他們怎麼說 -->
  <div class="bg-primary-bg">
    <div class="container px-4 md:pl-10 md:pr-0 lg:px-8 py-8 md:py-10 overflow-hidden">
      <h3 class="text-3xl font-medium text-primary-title text-center mb-8">聽聽他們怎麼說</h3>

      <div class="group">
        <div
          ref="scrollContainer"
          class="grid grid-flow-col grid-rows-3 md:grid-rows-2 gap-y-4 gap-x-8 overflow-x-auto pb-6 scrollbar-hide select-none cursor-grab active:cursor-grabbing snap-x snap-mandatory auto-cols-[100%] md:auto-cols-[45%] lg:auto-cols-[31%]"
          @mousedown="startDragging"
          @mousemove="onDragging"
          @mouseup="stopDragging"
          @mouseleave="stopDragging"
        >
          <div
            v-for="item in testimonials"
            :key="item.name"
            class="bg-white text-secondary-text py-4 px-4 rounded-2xl flex items-center shrink-0 w-full snap-start border border-transparent transition-all"
          >
            <img
              :src="item.img"
              :alt="item.name"
              class="mr-3 lg:mr-4 flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover"
            />

            <div class="flex flex-col text-primary-title gap-2 overflow-hidden">
              <div class="flex items-center">
                <span class="truncate">{{ item.name }}</span>
                <span class="ml-2 text-sm">{{ item.date }}</span>
              </div>

              <p class="flex gap-1 text-primary-btn">
                <i
                  v-for="n in 5"
                  :key="n"
                  class="bi text-xl lg:text-2xl"
                  :class="n <= item.rating ? 'bi-star-fill' : 'bi-star'"
                ></i>
              </p>

              <p class="line-clamp-2 text-primary-title leading-tight">
                {{ item.comment }}
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-between mb-6">
          <button
            @click="scrollPrev"
            class="p-2 text-primary-title/50 hover:text-primary-title transition-colors md:hidden"
          >
            <i class="bi bi-arrow-left text-3xl"></i>
          </button>

          <button
            @click="scrollNext"
            class="p-2 text-primary-title/50 hover:text-primary-title transition-colors md:hidden"
          >
            <i class="bi bi-arrow-right text-3xl"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import 'swiper/css'
import 'swiper/css/pagination'

// 感受身心，活在當下
const features = [
  {
    img: '/yoga-1.jpeg',
    title: '整體健身',
    desc: '每一個動作，都融入運動解剖學的的觀點強調以身體的中心線為出發點。',
  },
  {
    img: '/yoga-2.jpeg',
    title: '減壓放鬆',
    desc: '調節全身系統、改善血液循環、減壓養心、釋放身心，達到修心養性的目的。',
  },
  {
    img: '/yoga-3.jpeg',
    title: '局部雕塑',
    desc: '幫助強化背部與腹部的核心肌群，增進我們身體穩定度以及保持良好體態。',
  },
]

// 精心設計、課程多元
const yogaClasses = [
  { Image: '/yoga-8.jpg', alt: 'yoga-8' },
  { Image: '/yoga-9.jpg', alt: 'yoga-9' },
  { Image: '/yoga-10.jpg', alt: 'yoga-10' },
  { Image: '/yoga-11.jpg', alt: 'yoga-11' },
]

//方案選擇
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

// 聽聽他們怎麼說
const testimonials = [
  {
    img: '/user-1.png',
    name: 'Joanne',
    date: 'Oct 17 2020',
    rating: 5,
    comment: '服務很好、設備優良！',
  },
  {
    img: '/user-2.png',
    name: '穎旻',
    date: 'Oct 17 2020',
    rating: 5,
    comment: '上課後身體健康很多',
  },
  {
    img: '/user-3.png',
    name: '子琪',
    date: 'Oct 17 2020',
    rating: 5,
    comment: '上課很有趣！',
  },
  {
    img: '/user-4.png',
    name: '葉子',
    date: 'Oct 17 2020',
    rating: 5,
    comment: '老師的教學很專業',
  },
  {
    img: '/user-5.png',
    name: 'Ray',
    date: 'Oct 17 2020',
    rating: 5,
    comment: '很舒壓',
  },
  {
    img: '/user-6.png',
    name: '俊儀',
    date: 'Oct 17 2020',
    rating: 5,
    comment: '讚的！',
  },
]

// 評論滾輪
// 1. 指定 ref 的類型為 HTMLElement 或 null
const scrollContainer = ref<HTMLElement | null>(null)

// 2. 邏輯變數不需要是響應式的，直接宣告即可
let isDown = false
let startX: number = 0
let scrollLeft: number = 0

// 3. 定義處理函數
const startDragging = (e: MouseEvent) => {
  if (!scrollContainer.value) return // 確保元素存在

  isDown = true
  // 記錄滑鼠相對於容器的初始座標
  startX = e.pageX - scrollContainer.value.offsetLeft
  // 記錄容器目前的捲動位置
  scrollLeft = scrollContainer.value.scrollLeft
}

const stopDragging = () => {
  isDown = false
}

const onDragging = (e: MouseEvent) => {
  if (!isDown || !scrollContainer.value) return

  e.preventDefault() // 防止拖動時選取文字

  // 計算目前滑鼠位置與初始位置的距離
  const x = e.pageX - scrollContainer.value.offsetLeft
  const walk = (x - startX) * 2 // *2 代表滑動倍率，數字越大滑越快

  // 更新捲動位置
  scrollContainer.value.scrollLeft = scrollLeft - walk
}

// 往後捲動 (Next)
const scrollNext = () => {
  if (scrollContainer.value) {
    const scrollAmount = scrollContainer.value.clientWidth // 捲動一整個容器寬度
    scrollContainer.value.scrollBy({
      left: scrollAmount,
      behavior: 'smooth',
    })
  }
}

// 往前捲動 (Prev)
const scrollPrev = () => {
  if (scrollContainer.value) {
    const scrollAmount = scrollContainer.value.clientWidth
    scrollContainer.value.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth',
    })
  }
}
</script>

<style>
/* 隱藏捲動條 */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* 防止拖拽時選取到內容 */
.select-none {
  user-select: none;
  -webkit-user-drag: none; /* 防止圖片被滑鼠抓取 */
}

/* 設定滑鼠樣式 */
.cursor-grab {
  cursor: grab;
}
.cursor-grabbing {
  cursor: grabbing;
}
</style>
