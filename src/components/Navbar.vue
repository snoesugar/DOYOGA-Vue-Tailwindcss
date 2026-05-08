<template>
  <Disclosure as="nav" class="relative bg-primary-bg" v-slot="{ open }">
    <div class="container mx-auto px-4 md:px-4 sm:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 items-center justify-between">
          <div class="flex shrink-0 items-center">
            <img class="h-8 w-auto" src="../../public/logo.png" alt="logo" />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? 'bg-primary-btn text-white'
                    : 'text-primary-title hover:bg-primary-btn hover:text-white',
                  'rounded-2xl px-4 py-2 font-light',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                v-for="item in indexbtn"
                :key="item.name"
                :href="item.href"
                class="text-primary-title hover:text-white hover:bg-primary-btn rounded-2xl border-[0.5px] border-primary-title hover:border-white/50 px-4 py-2"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-secondary-text hover:bg-primary-btn hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
          >
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block size-6" aria-hidden="true" />
            <XMarkIcon v-else class="block size-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

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
          <button
            v-for="item in navigation"
            :key="item.name"
            as="a"
            :href="item.href"
            :class="[
              item.current
                ? 'bg-primary-btn text-white'
                : 'text-primary-title hover:bg-primary-btn hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            ]"
            :aria-current="item.current ? 'page' : undefined"
          >
            {{ item.name }}
          </button>
        </div>
      </DisclosurePanel>
    </transition>
  </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: '課程介紹', href: '#', current: true },
  { name: '瑜珈空間', href: '#', current: false },
  { name: '當月課表', href: '#', current: false },
]

const indexbtn = [
  { name: '立即預約', href: '#', current: false },
  { name: '聯絡我們', href: '#', current: false },
]
</script>
