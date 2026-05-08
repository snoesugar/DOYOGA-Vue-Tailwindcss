<template>
  <footer class="bg-primary-title">
    <div class="py-8 border-b border-white">
      <div class="container mx-auto px-10 lg:px-4">
        <div
          class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 w-full"
        >
          <p class="text-2xl text-white whitespace-nowrap">現在訂閱，獲得課程優惠碼！</p>

          <div class="flex flex-row items-center w-full sm:w-auto mt-2 sm:mt-0">
            <input
              type="email"
              placeholder="輸入您的電子信箱"
              class="flex-grow w-64 px-4 py-2 text-primary-title text-xl placeholder:text-primary-title focus:outline-none focus:ring-2 focus:ring-primary-btn"
            />

            <button
              class="flex-shrink-0 bg-primary-btn px-4 py-2 text-xl text-white hover:opacity-90 transition"
            >
              訂閱
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-primary-title">
      <div class="container mx-auto px-10 lg:px-4 py-6 sm:py-8">
        <div class="flex items-center justify-between">
          <div class="flex shrink-0 items-center">
            <img class="h-8 w-auto" src="/logo-white.png" alt="logo" />
          </div>
          <div class="flex space-x-2">
            <a href="#" class="text-white text-2xl hover:underline"
              ><i class="bi bi-facebook"></i
            ></a>
            <a href="#" class="text-white text-2xl hover:underline"
              ><i class="bi bi-instagram"></i
            ></a>
            <a href="#" class="text-white text-2xl hover:underline"><i class="bi bi-line"></i></a>
          </div>
        </div>
        <ul class="mt-2 space-y-2">
          <li>
            <RouterLink to="/course" class="text-white font-light no-underline"
              >課程介紹</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/surroundings" class="text-white font-light no-underline"
              >瑜珈空間</RouterLink
            >
          </li>
          <li>
            <RouterLink to="/curriculum" class="text-white font-light no-underline"
              >當月課表</RouterLink
            >
          </li>
        </ul>
        <p class="text-start sm:text-center text-white mt-2 sm:-mt-6">
          © 2021. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// 如果沒有邏輯，這邊可以留空，但檔案不能是空的！
</script>
