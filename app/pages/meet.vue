<template>
  <div class="min-h-[calc(100vh-80px)] flex items-center justify-center p-4 overflow-hidden relative">
    <!-- Animated Background Particles -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div v-for="(particle, index) in particles" :key="index" class="particle absolute rounded-full bg-primary-500/20 blur-xl" :style="particle.style"></div>
    </div>

    <div class="w-full max-w-md bg-gray-900/40 border border-gray-800 rounded-3xl p-8 text-center relative overflow-hidden backdrop-blur-xl shadow-2xl shadow-primary-500/5 animate-scale-in">
      <!-- Background Glow -->
      <div class="absolute -top-20 -right-20 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow"></div>
      <div class="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-slow delay-700"></div>

      <!-- Profile Image Placeholder -->
      <div class="relative mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 shadow-lg shadow-primary-500/30 animate-float">
        <div class="rounded-full overflow-hidden flex items-center justify-center  ">
          <NuxtImg src="/logo.png" alt="CesaTor Logo" />
        </div>
      </div>

      <h1 class="text-3xl font-bold mb-2 text-white">Cesare Torchia</h1>
      <p class="text-primary-400 font-medium mb-6">Full-stack Developer & AI Enthusiast</p>
      
      <p class="text-gray-400 text-sm mb-8 leading-relaxed">
        Building intelligent web applications and exploring the frontiers of AI.
      </p>

      <div class="space-y-4">
        <UButton
          to="#"
          block
          size="xl"
          color="primary"
          variant="solid"
          icon="i-heroicons-user-plus"
          class="animate-slide-up delay-100 shadow-lg shadow-primary-500/20"
          @click="downloadVCard"
        >
          Save Contact
        </UButton>

        <UButton
          to="https://linkedin.com/in/cesare-torchia"
          target="_blank"
          block
          size="xl"
          color="neutral"
          variant="solid"
          icon="i-simple-icons-linkedin"
          class="animate-slide-up delay-200 hover:bg-[#0077b5] hover:text-white transition-colors"
        >
          Connect on LinkedIn
        </UButton>

        <UButton
          to="https://github.com/CesaTor"
          target="_blank"
          block
          size="xl"
          color="neutral"
          variant="solid"
          icon="i-simple-icons-github"
          class="animate-slide-up delay-300 hover:bg-black hover:text-white transition-colors"
        >
          GitHub Profile
        </UButton>

        <UButton
          to="https://instagram.com/lanternsflame"
          target="_blank"
          block
          size="xl"
          color="neutral"
          variant="solid"
          icon="i-simple-icons-instagram"
          class="animate-slide-up delay-350 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:text-white transition-all duration-300"
        >
          Follow on Instagram
        </UButton>

        <UButton
          to="mailto:cesare@torchia.eu"
          block
          size="xl"
          color="neutral"
          variant="solid"
          icon="i-heroicons-envelope"
          class="animate-slide-up delay-500"
        >
          Email Me
        </UButton>
      </div>

      <div class="mt-12 pt-6 border-t border-gray-800/50">
        <NuxtLink to="/" class="text-sm text-gray-500 hover:text-white transition-colors">
          cesare.torchia.eu
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Particle } from '~/types'

definePageMeta({
  layout: 'default'
})

const particles = ref<Particle[]>([])

onMounted(() => {
  particles.value = Array.from({ length: 20 }).map(() => {
    const size = Math.random() * 100 + 50 + 'px'
    const left = Math.random() * 100 + '%'
    const top = Math.random() * 100 + '%'
    const duration = Math.random() * 10 + 10 + 's'
    const delay = Math.random() * 5 + 's'
    
    return {
      style: {
        width: size,
        height: size,
        left,
        top,
        animation: `float ${duration} ease-in-out infinite ${delay}`,
        opacity: Math.random() * 0.1 + 0.05
      }
    }
  })
})

const downloadVCard = () => {
  const encoded = 'QkVHSU46VkNBUkQKVkVSU0lPTjozLjAKRk46Q2VzYXJlIFRvcmNoaWEKVElUTEU6RnVsbC1zdGFjayBEZXZlbG9wZXIKVEVMO1RZUEU9Q0VMTDorMzkgMzc4IDQyMiAxMzU1CkVNQUlMOmNlc2FyZUB0b3JjaGlhLmV1ClVSTDpodHRwczovL2Nlc2FyZS50b3JjaGlhLmV1Ck5PVEU6RnVsbC1zdGFjayB3ZWIgYXBwbGljYXRpb25zIHdpdGggQUkvTUwgaW50ZWdyYXRpb24uCkVORDpWQ0FSRA=='
  const vcard = atob(encoded)

  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
  
  if (isIOS) {
    const newWindow = window.open(url, '_blank')
    if (newWindow) {
      setTimeout(() => URL.revokeObjectURL(url), 100)
    }
  } else {
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'cesare_torchia.vcf')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }
}
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(20px, -20px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

.animate-scale-in {
  animation: scaleIn 0.5s ease-out forwards;
}

.animate-slide-up {
  opacity: 0;
  animation: slideUp 0.5s ease-out forwards;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }
.delay-400 { animation-delay: 0.4s; }
.delay-700 { animation-delay: 0.7s; }

.particle {
  position: absolute;
}
</style>
