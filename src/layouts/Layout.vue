<template>
  <div class="min-h-screen">
    <Navbar />
    <Sidebar />

    <main>
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Sidebar from '../components/Sidebar.vue'
</script>
