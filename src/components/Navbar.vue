<template>
  <Disclosure as="nav" class="relative bg-primary-bg" v-slot="{ open }">
    <div class="container mx-auto px-4 md:px-4 sm:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 items-center justify-between">
          <!-- Logo -->
          <div class="flex shrink-0 items-center">
            <RouterLink to="/" class="flex items-center">
              <img class="h-8 w-auto" src="../../public/logo.png" alt="logo" />
            </RouterLink>
          </div>

          <!-- Desktop Menu (navigation) -->
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <RouterLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                :class="[
                  isActive(item.href)
                    ? 'bg-primary-btn text-white'
                    : 'text-primary-title hover:bg-primary-btn hover:text-white',
                  'rounded-2xl px-4 py-2 font-light transition-colors',
                ]"
              >
                {{ item.name }}
              </RouterLink>
            </div>
          </div>

          <!-- Desktop Menu (indexbtn) -->
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <RouterLink
                v-for="item in indexbtn"
                :key="item.name"
                :to="item.href"
                :class="[
                  isActive(item.href)
                    ? 'bg-primary-btn text-white border-transparent'
                    : 'text-primary-title border-primary-title hover:text-white hover:bg-primary-btn hover:border-white/50',
                  'rounded-2xl border-[0.5px] px-4 py-2 transition-colors',
                ]"
              >
                {{ item.name }}
              </RouterLink>
            </div>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-secondary-text hover:bg-primary-btn hover:text-white focus:outline-none"
          >
            <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
            <XMarkIcon v-else class="block size-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <!-- Mobile Panel -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pt-2 pb-3">
          <!-- 直接用 RouterLink，並透過 v-slot 取得 close 方法 -->
          <RouterLink
            v-for="item in [...navigation, ...indexbtn]"
            :key="item.name"
            :to="item.href"
            custom
            v-slot="{ navigate, href }"
          >
            <DisclosureButton
              as="a"
              :href="href"
              @click="navigate"
              :class="[
                isActive(item.href)
                  ? 'bg-primary-btn text-white'
                  : 'text-primary-title hover:bg-primary-btn hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              ]"
            >
              {{ item.name }}
            </DisclosureButton>
          </RouterLink>
        </div>
      </DisclosurePanel>
    </transition>
  </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
import { useRoute } from 'vue-router'

const route = useRoute()

// 判斷當前路徑是否等於該按鈕路徑
const isActive = (path: string) => {
  return route.path === path
}

const navigation = [
  { name: '課程介紹', href: '/course' },
  { name: '瑜珈空間', href: '/surroundings' },
  { name: '當月課表', href: '/curriculum' },
]

const indexbtn = [
  { name: '立即預約', href: '/reservation' },
  { name: '聯絡我們', href: '/contact' },
]
</script>
