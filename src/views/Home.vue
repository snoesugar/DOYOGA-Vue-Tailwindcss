<template>
  <header class="relative flex flex-col justify-center gap-6">
    <img src="../../public/header.jpeg" alt="header" />
    <div class="absolute text-secondary-text pl-10 md:pl-[180px]">
      <span>健身輕時尚</span>
      <h1 class="text-4xl font-medium">DOYOGA，做你的瑜珈</h1>
      <p class="text-2xl w-96 mb-4">多給自己一點時間享受靜謐，傾聽內心的聲音。</p>
      <button class="px-4 py-2 bg-primary-bg text-secondary-text rounded-md mr-2">立即預約</button>
      <button class="px-4 py-2 bg-primary-btn text-white rounded-md mr-2">課程介紹</button>
    </div>
  </header>
  <!-- 感受身心，活在當下 -->
  <div class="container mx-auto py-10 text-center">
    <h2 class="text-3xl font-medium text-primary-title mb-1">感受身心，活在當下</h2>
    <p class="text-xl text-primary-text mb-9">DOYOGA 可以帶給你...</p>

    <div class="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">
      <div
        v-for="item in features"
        :key="item.title"
        class="relative group overflow-hidden rounded-2xl w-full"
      >
        <div class="h-[420px]">
          <img
            :src="item.img"
            :alt="item.title"
            class="w-full h-full object-cover object-center block"
          />
        </div>
        <div class="absolute bottom-0 left-0 p-6 w-full text-start">
          <h3 class="text-xl text-white mb-1">{{ item.title }}</h3>
          <p class="text-white text-sm">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- 頂尖師資、專業教學 -->
  <div class="bg-primary-bg">
    <div class="container mx-auto py-16 text-center">
      <div class="grid grid-cols-2 items-center justify-center gap-8">
        <img
          src="../../public/yoga-4.jpeg"
          alt="yoga-4"
          class="w-full h-[628px] rounded-2xl object-cover object-center block"
        />
        <div class="text-left">
          <h3 class="text-3xl font-medium text-primary-title mb-1">頂尖師資、專業教學</h3>
          <p class="text-primary-text text-xl mb-6">
            強力師資，經歷豐富，協會認證。運用引導式教學，針對不同需求的人制定專屬課程。
          </p>
          <div class="flex flex-col gap-4">
            <div
              class="bg-white text-secondary-text py-10 px-12 rounded-2xl flex items-center -ml-[95px]"
            >
              <img src="../../public/teacher-1.png" alt="teacher-1" class="mr-5 flex-shrink-0" />
              <div class="flex flex-col text-secondary-text gap-1">
                <span class="text-xl">Carol Tang 老師</span>
                <p>教學經歷 10 年</p>
                <p>瑜珈讓我重新認識自己的身體，也讓我有了不一樣的人生。</p>
              </div>
            </div>
            <div class="bg-white text-secondary-text py-6 px-8 rounded-2xl flex items-center">
              <img src="../../public/teacher-2.png" alt="teacher-2" class="mr-5 flex-shrink-0" />
              <div class="flex flex-col text-secondary-text gap-1">
                <span class="text-xl">Kanae 老師</span>
                <p>教學經歷 10 年</p>
              </div>
            </div>
            <div class="bg-white text-secondary-text py-6 px-8 rounded-2xl flex items-center">
              <img src="../../public/teacher-3.png" alt="teacher-3" class="mr-5 flex-shrink-0" />
              <div class="flex flex-col text-secondary-text gap-1">
                <span class="text-xl">Asa Ifrit 老師</span>
                <p>教學經歷 10 年</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 舒適空間、靜心放鬆 -->
  <div class="bg-white">
    <div class="container mx-auto py-16 text-center">
      <div class="grid grid-cols-2 items-center justify-center gap-8">
        <div class="grid grid-cols-3 gap-6">
          <img
            src="../../public/yoga-5.jpg"
            alt="yoga-5"
            class="col-span-2 w-full h-[444px] rounded-2xl object-cover object-center block"
          />

          <div class="flex flex-col h-full gap-6">
            <img
              src="../../public/yoga-6.jpg"
              alt="yoga-6"
              class="flex-1 rounded-2xl object-cover object-center block min-h-0"
            />

            <img
              src="../../public/yoga-7.jpg"
              alt="yoga-7"
              class="flex-1 rounded-2xl object-cover object-center block min-h-0"
            />
          </div>
        </div>
        <div class="text-left">
          <h3 class="text-3xl font-medium text-primary-title mb-1">舒適空間、靜心放鬆</h3>
          <p class="text-primary-text text-xl mb-6">
            我們都渴望平靜安穩的生活，擁有一處能夠靜心的角落，安撫每天繁雜忙碌的心。
          </p>
          <a href="#" class="text-primary-title">
            環境介紹 <i class="bi bi-arrow-right ml-2"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
  <!-- 精心設計、課程多元 -->
  <div class="bg-primary-bg">
    <div class="container mx-auto py-16 text-center">
      <div class="grid grid-cols-2 items-center justify-center gap-8">
        <div class="text-left">
          <h3 class="text-3xl font-medium text-primary-title mb-1">精心設計、課程多元</h3>
          <p class="text-primary-text text-xl mb-6">
            教師帶領多元課程，釋放壓力，與身心常見的緊繃不適溫柔和解。
          </p>
          <a href="#" class="text-primary-title">
            課程介紹 <i class="bi bi-arrow-right ml-2"></i
          ></a>
        </div>
        <swiper :slides-per-view="1.5" :space-between="30" class="overflow-hidden w-full">
          <swiper-slide
            v-for="item in yogaClasses"
            :key="item.Image"
            class="rounded-2xl flex items-center justify-center bg-white"
          >
            <div class="w-full aspect-square rounded-2xl overflow-hidden">
              <img :src="item.Image" :alt="item.alt" class="w-full h-full object-cover" />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
  <!-- 方案選擇 -->
  <div class="container mx-auto py-10 text-center">
    <h2 class="text-3xl font-medium text-primary-title mb-1">方案選擇</h2>
    <p class="text-xl text-primary-text mb-9">DOYOGA 可以帶給你...</p>
    <div class="grid grid-cols-3 items-center justify-center gap-8 mb-6">
      <div
        v-for="item in plans"
        :key="item.title"
        class="col-span-1 overflow-hidden rounded-2xl border border-primary-text"
      >
        <img
          :src="item.img"
          :alt="item.title"
          class="w-full h-[243px] object-cover object-center block"
        />
        <div class="bottom-0 left-0 p-6 w-full text-center">
          <h3 class="text-xl font-medium text-primary-title mb-1">{{ item.title }}</h3>
          <p class="text-xl text-primary-btn mb-2">{{ item.price }}</p>
          <p class="text-primary-title text-start mb-10">
            {{ item.desc }}
          </p>
          <button class="w-full bg-primary-text py-2 text-white rounded-md">選擇課程</button>
        </div>
      </div>
    </div>
  </div>
  <!-- 聽聽他們怎麼說 -->
  <div class="bg-primary-bg">
    <div class="container mx-auto py-10">
      <h3 class="text-3xl font-medium text-primary-title text-center mb-8">聽聽他們怎麼說</h3>
      <div class="grid grid-cols-3 gap-x-8 gap-y-4 mb-6">
        <div
          v-for="item in testimonials"
          :key="item.name"
          class="bg-white text-secondary-text py-4 px-4 rounded-2xl flex items-center"
        >
          <img :src="item.img" :alt="item.name" class="mr-5 flex-shrink-0" />
          <div class="flex flex-col text-primary-title gap-2">
            <div class="flex">
              <span>{{ item.name }}</span>
              <span class="ml-2">{{ item.date }}</span>
            </div>
            <p class="flex gap-1">
              <!-- 這裡的 n 會從 1 跑 到 5 -->
              <i
                v-for="n in 5"
                :key="n"
                class="bi text-xl"
                :class="n <= item.rating ? 'bi-star-fill' : 'bi-star'"
              ></i>
            </p>
            <p>{{ item.comment }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'

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
    title: '整體健身',
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
    rating: 3,
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
    name: '葉子',
    date: 'Oct 17 2020',
    rating: 5,
    comment: '很舒壓',
  },
  {
    img: '/user-6.png',
    name: '葉子',
    date: 'Oct 17 2020',
    rating: 5,
    comment: '讚的！',
  },
]
</script>

<style>
/* 透過 CSS 覆寫 Tailwind 沒辦法直接改到的 Swiper 內層顏色 */
.swiper-pagination-bullet-active {
  @apply bg-primary-btn; /* 使用 Tailwind 的顏色變數 */
}
</style>
