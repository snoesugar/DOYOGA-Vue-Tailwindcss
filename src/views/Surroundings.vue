<template>
  <div class="container px-4 md:px-10 lg:px-8 text-center py-12 md:py-16">
    <h1 class="text-3xl text-primary-title mb-6 md:mb-8">瑜珈空間</h1>
    <div class="flex flex-col lg:flex-row gap-8 mb-6">
      <div class="basis-3/5">
        <div class="flex flex-col md:grid md:grid-cols-2 gap-6 w-full">
          <div class="relative rounded-2xl overflow-hidden md:col-span-2">
            <img
              src="../../public/class-1.jpg"
              class="object-cover object-center w-full h-full"
              alt="A、B 團體課教室"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
            ></div>
            <div class="absolute bottom-6 left-6 right-6 text-white text-left">
              <h3 class="text-2xl md:text-3xl font-medium leading-tight">A、B 團體課教室</h3>
              <p class="text-sm md:text-base opacity-90">
                教授課程：A-基礎、艾揚格、哈達、寰宇；B-雙人飛行、阿斯坦加、陰陽、香氛
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-full md:w-1/2 lg:basis-2/5 text-primary-title bg-primary-bg rounded-2xl p-8 text-left"
      >
        <p class="text-xl mb-4">DOYOGA 提供：</p>
        <ul class="space-y-1 mb-3">
          <li>四間教室：A、B 團體課教室、C、D 個人訓練室。</li>
          <li>瑜珈墊、輔具：每次課後會進行殺菌清潔，乾淨免擔心。</li>
          <li>男女置物櫃、淋浴間：分別設置在館內 A、B 區。</li>
          <li>舒適交誼廳，咖啡茶水無限供應，假日提供午間蔬食餐點。</li>
        </ul>
        <RouterLink to="/reservation" class="text-primary-title flex items-center group">
          立即預約
          <i class="bi bi-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
        </RouterLink>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row gap-8">
      <div class="basis-3/5">
        <div class="flex flex-col md:grid md:grid-cols-2 gap-6 w-full">
          <div class="relative rounded-2xl overflow-hidden h-[240px] md:h-[280px]">
            <img
              src="../../public/yoga-5.jpg"
              class="object-cover object-center w-full h-full"
              alt="C、D 個人訓練室"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
            ></div>
            <div class="absolute bottom-6 left-6 right-6 text-white text-left">
              <h3 class="text-2xl font-medium leading-tight">C、D 個人訓練室</h3>
              <p class="text-sm opacity-90">開放時間：每週一至週五 09:00~17:00</p>
            </div>
          </div>

          <div class="relative rounded-2xl overflow-hidden h-[240px] md:h-[280px]">
            <img
              src="../../public/class-2.jpg"
              class="object-cover object-center w-full h-full"
              alt="淋浴間"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
            ></div>
            <div class="absolute bottom-6 left-6 right-6 text-white text-left">
              <h3 class="text-2xl font-medium leading-tight">淋浴間</h3>
              <p class="text-sm opacity-90">開放時間：每週一至週日 09:00~21:30</p>
            </div>
          </div>

          <div class="relative rounded-2xl overflow-hidden h-[240px] md:h-[280px]">
            <img
              src="../../public/yoga-7.jpg"
              class="object-cover object-center w-full h-full"
              alt="器材出租"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
            ></div>
            <div class="absolute bottom-6 left-6 right-6 text-white text-left">
              <h3 class="text-2xl font-medium leading-tight">器材出租</h3>
              <p class="text-sm opacity-90">有租借需求請至櫃檯登記</p>
            </div>
          </div>

          <div class="relative rounded-2xl overflow-hidden h-[240px] md:h-[280px]">
            <img
              src="../../public/class-3.jpg"
              class="object-cover object-center w-full h-full"
              alt="交誼廳"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
            ></div>
            <div class="absolute bottom-6 left-6 right-6 text-white text-left">
              <h3 class="text-2xl font-medium leading-tight">交誼廳</h3>
              <p class="text-sm opacity-90">開放時間：每週一至週五 09:00~21:30</p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/2 lg:basis-2/5"></div>
    </div>
  </div>
  <div class="bg-primary-bg pt-10 pb-14">
    <div class="container">
      <h2 class="text-3xl text-primary-title text-center mb-6 md:mb-8">課程推薦</h2>
      <div class="w-full">
        <swiper
          :slides-per-view="'auto'"
          :space-between="70"
          class="overflow-hidden w-full hidden lg:block"
        >
          <swiper-slide
            v-for="item in yogaClasses"
            :key="item.Image"
            class="rounded-2xl flex items-center justify-center w-auto"
          >
            <div class="flex flex-col pr-6">
              <div class="w-[255px] h-[196px] rounded-2xl overflow-hidden mb-2 shadow-sm">
                <img :src="item.Image" :alt="item.alt" class="w-full h-full object-cover" />
              </div>

              <div class="text-primary-title text-left max-w-[255px]">
                <h3 class="text-xl truncate">
                  {{ item.title }}
                </h3>
                <p class="text-sm opacity-90 truncate">授課老師：{{ item.description }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

const yogaClasses = [
  {
    Image: '/yoga-8.jpg',
    alt: 'yoga-8',
    title: '基礎 Basic',
    description: 'Carol Tang',
  },
  {
    Image: '/yoga-9.jpg',
    alt: 'yoga-9',
    title: '艾揚格 Iyengar',
    description: 'Kanae',
  },
  {
    Image: '/yoga-10.jpg',
    alt: 'yoga-10',
    title: '哈達 Hatha',
    description: 'Kuzuha',
  },
  {
    Image: '/yoga-11.jpg',
    alt: 'yoga-11',
    title: '寰宇 Universal',
    description: 'Kuzuha',
  },
  {
    Image: '/yoga-14.jpg',
    alt: 'yoga-14',
    title: '雙人飛行',
    description: 'Kuzuha、Kanae',
  },
  {
    Image: '/yoga-15.jpg',
    alt: 'yoga-15',
    title: '阿斯坦加',
    description: 'Kanae',
  },
  {
    Image: '/yoga-16.jpg',
    alt: 'yoga-16',
    title: '陰陽 Yin Yang',
    description: 'Asa Chen',
  },
  {
    Image: '/yoga-5.jpg',
    alt: 'yoga-5',
    title: '香氛 Aroma Yoga',
    description: 'Asa Chen',
  },
]
</script>
