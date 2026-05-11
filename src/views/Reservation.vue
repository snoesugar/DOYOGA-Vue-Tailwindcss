<template>
  <!-- 立即預約 -->
  <div class="container px-4 lg:px-8 text-center py-12 md:py-16">
    <h1 class="text-3xl text-primary-title mb-6 md:mb-4 lg:mb-6">立即預約</h1>
    <div class="flex flex-row gap-4 md:gap-8 justify-center mb-8">
      <div class="bg-primary-title text-white rounded-2xl py-3 px-5 md:px-3 lg:px-12">選擇方案</div>
      <div class="bg-primary-bg text-primary-title rounded-2xl py-3 px-5 md:px-3 lg:px-12">
        填寫資料
      </div>
      <div class="bg-primary-bg text-primary-title rounded-2xl py-3 px-5 md:px-3 lg:px-12">
        完成預約
      </div>
    </div>
    <div class="grid grid-cols-3 items-center justify-center gap-6 md:gap-8 mb-2">
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
  <!-- 選擇課程階級 -->
  <div
    class="container px-4 lg:px-8 text-center bg-primary-title border border-secondary-text py-8 lg:py-10"
  >
    <h2 class="text-white text-3xl mb-6 lg:mb-8">選擇課程階級</h2>
    <div class="flex flex-row gap-6 justify-center mb-4 md:mb-6">
      <button
        class="flex-1 bg-primary-btn text-white text-left p-6 rounded-2xl shadow-[0px_3px_6px_#00000029]"
      >
        <div class="flex justify-between text-2xl font-medium mb-1">
          基礎 Basic
          <i class="bi bi-check-circle"></i>
        </div>
        <p class="mb-3">
          基礎課程
          <span class="bg-primary-title text-white text-sm font-light py-1 px-4 rounded-xl ml-2"
            >60 min</span
          >
        </p>
        <ul class="space-y-1">
          <li>・入體位法動作解說</li>
          <li>・瑜珈基礎動作、順位</li>
          <li>・適合任何階段練習者</li>
        </ul>
      </button>
      <button
        class="flex-1 bg-primary-btn text-white text-left p-6 rounded-2xl shadow-[0px_3px_6px_#00000029]"
      >
        <div class="flex justify-between text-2xl font-medium mb-1">
          中階 Intermediate
          <i class="bi bi-check-circle"></i>
        </div>
        <p class="mb-3">
          艾揚格、哈達、寰宇
          <span class="bg-primary-title text-white text-sm font-light py-1 px-4 rounded-xl ml-2"
            >60 min</span
          >
        </p>
        <ul class="space-y-1">
          <li>・刺激身體七個層次為核心</li>
          <li>・結合流暢體位法練習、呼吸、觀想</li>
          <li>・適合半年以上練習者</li>
        </ul>
      </button>
      <button
        class="flex-1 bg-primary-btn text-white text-left p-6 rounded-2xl shadow-[0px_3px_6px_#00000029]"
      >
        <div class="flex justify-between text-2xl font-medium mb-1">
          高階 Advanced
          <i class="bi bi-check-circle"></i>
        </div>
        <p class="mb-3">
          阿斯坦加、陰陽
          <span class="bg-primary-title text-white text-sm font-light py-1 px-4 rounded-xl ml-2"
            >60 min</span
          >
        </p>
        <ul class="space-y-1">
          <li>・充分打開身體每個部位</li>
          <li>・顯著提升力量與柔軟度</li>
          <li>・適合一年以上練習者</li>
        </ul>
      </button>
    </div>
  </div>
  <!-- 預約須知 -->
  <div class="container px-4 lg:px-8 text-center py-8 lg:py-10">
    <p class="text-primary-title mb-1">您選擇的是</p>
    <p class="text-xl text-primary-title mb-10">[課程名稱]</p>
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
    <button>
      <div
        class="w-full bg-primary-text py-2 px-16 lg:px-32 text-white rounded-md text-xl mb-14 md:mb-12 lg:mb-16"
      >
        繼續預約
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
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
</script>
