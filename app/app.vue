<template>
  <div class="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-primary-500/30">
    <!-- Navbar -->
    <header class="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-gray-950/80 backdrop-blur-md">
      <div class="container mx-auto px-4 h-16 flex items-center justify-between">
        <NuxtLink to="/" class="text-xl font-bold bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          CesaTor
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink to="/" class="text-sm font-medium text-gray-400 hover:text-white transition-colors" active-class="text-white">Home</NuxtLink>
          <NuxtLink to="/blog" class="text-sm font-medium text-gray-400 hover:text-white transition-colors" active-class="text-white">Blog</NuxtLink>
          <NuxtLink to="/#contacts" class="text-sm font-medium text-gray-400 hover:text-white transition-colors">Contact</NuxtLink>
        </nav>

        <div class="flex items-center gap-4">
          <UButton
            to="/meet"
            color="primary"
            variant="ghost"
            class="md:hidden"
            icon="i-heroicons-qr-code"
            aria-label="Meet"
          />
          <UButton
            to="https://github.com/CesaTor"
            target="_blank"
            color="neutral"
            variant="ghost"
            icon="i-simple-icons-github"
            aria-label="GitHub"
            class="hidden md:inline-flex"
          />
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="pt-16 min-h-[calc(100vh-80px)]">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-800 bg-gray-950 py-8">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="text-sm text-gray-500">
          © {{ new Date().getFullYear() }} Cesare Torchia. All rights reserved.
        </div>
        <div class="flex items-center gap-6">
          <NuxtLink to="https://instagram.com/lanternsflame" target="_blank" class="text-gray-500 hover:text-white transition-colors">
            <UIcon name="i-simple-icons-instagram" class="w-5 h-5" />
          </NuxtLink>
          <NuxtLink to="https://linkedin.com/in/cesare-torchia" target="_blank" class="text-gray-500 hover:text-white transition-colors">
            <UIcon name="i-simple-icons-linkedin" class="w-5 h-5" />
          </NuxtLink>
          <NuxtLink to="https://github.com/CesaTor" target="_blank" class="text-gray-500 hover:text-white transition-colors">
            <UIcon name="i-simple-icons-github" class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Cesare Torchia - AI Developer',
  meta: [
    { name: 'description', content: 'Full-stack Developer & AI Enthusiast building intelligent web applications.' },
    { name: 'theme-color', content: '#030712' }
  ],
  htmlAttrs: {
    class: 'dark scroll-smooth'
  }
})
</script>

<style>
/* Global Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #030712;
}

::-webkit-scrollbar-thumb {
  background: #374151;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #4b5563;
}

/* Page Transition */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
  filter: blur(4px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  filter: blur(4px);
}

/* Selection */
::selection {
  background: rgba(139, 92, 246, 0.3);
  color: white;
}

/* Smooth Scrolling for Anchor Links */
html {
  scroll-behavior: smooth;
}
</style>
