<template>
  <div class="flex flex-col gap-24 pb-24 overflow-x-hidden">
    <!-- Hero Section -->
    <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden perspective-1000">
      <!-- Animated Background -->
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-primary-900/20 via-gray-950 to-gray-950 z-0 animate-pulse-slow"></div>
      <div class="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 pointer-events-none"></div>
      
      <div class="container mx-auto px-4 relative z-10 text-center transform-style-3d" ref="heroContainer">
        <div class="inline-block mb-6 px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-300 text-sm font-medium animate-fade-in-up backdrop-blur-sm">
          <span class="relative inline-flex h-2 w-2 mr-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
          </span>
          Open to Collaboration
        </div>
        
        <h1 class="text-6xl md:text-8xl font-bold mb-6 tracking-tight animate-fade-in-up delay-100">
          Cesare <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-purple-400 to-pink-400 animate-gradient-x">Torchia</span>
        </h1>
        
        <div class="h-8 md:h-12 mb-8 text-xl md:text-3xl text-gray-400 font-light animate-fade-in-up delay-200">
          <span class="typing-text">{{ typingText }}</span><span class="cursor-blink">|</span>
        </div>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-300 mt-12">
          <UButton
            to="#projects"
            size="xl"
            color="primary"
            variant="solid"
            class="px-10 py-4 rounded-full shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 transition-all duration-300 hover:-translate-y-1"
          >
            View Projects
          </UButton>
          <UButton
            to="https://github.com/CesaTor"
            target="_blank"
            size="xl"
            color="neutral"
            variant="ghost"
            class="px-10 py-4 rounded-full hover:bg-gray-800/50 backdrop-blur-sm transition-all duration-300"
            icon="i-simple-icons-github"
          >
            GitHub
          </UButton>
        </div>
      </div>
    </section>

    <!-- About Section (Bento Grid) -->
    <section id="about" class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">About Me</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
        <!-- Bio Card -->
        <div class="md:col-span-1 row-span-2 bg-gray-900/40 border border-gray-800 rounded-3xl p-8 backdrop-blur-md hover:border-primary-500/30 transition-colors group relative overflow-hidden">
          <div class="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl group-hover:bg-primary-500/20 transition-colors duration-500"></div>
          <h3 class="text-2xl font-bold mb-4 text-white">The Developer</h3>
          <p class="text-gray-400 leading-relaxed text-lg mb-6">
            I'm a Full-stack Developer with a passion for AI/ML integration. I specialize in building intelligent web applications that solve real-world problems. Currently focused on Nuxt modules, startup platforms, and multi-agent systems.
          </p>
          <div class="flex flex-wrap gap-3">
            <UBadge color="primary" variant="subtle" size="lg">Nuxt Expert</UBadge>
            <UBadge color="purple" variant="subtle" size="lg">AI Integration</UBadge>
            <UBadge color="green" variant="subtle" size="lg">Flutter</UBadge>
          </div>
        </div>

        <!-- ReQurv Card -->
        <div class="md:col-span-2 bg-gray-900/40 border border-gray-800 rounded-3xl p-8 backdrop-blur-md hover:border-blue-500/30 transition-colors group relative overflow-hidden">
          <div class="absolute top-0 left-0 -mt-10 -ml-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500"></div>
          <div class="flex items-start gap-6">
            <div class="flex-shrink-0">
              <NuxtLink to="https://requrv.io" target="_blank" class="block group-hover:scale-105 transition-transform">
                <div class="w-16 h-16 rounded-2xl p-2 flex items-center justify-center">
                  <NuxtImg src="/req-logo.png" class="w-full text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                </div>
              </NuxtLink>
            </div>
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-2">
                <h3 class="text-xl font-bold text-white">Part of ReQurv Team</h3>
                <UIcon name="i-heroicons-check-badge-solid" class="w-5 h-5 text-blue-500" />
              </div>
              <p class="text-gray-400 leading-relaxed mb-3">
                Working with an amazing team at <NuxtLink to="https://requrv.io" target="_blank" class="text-blue-400 hover:text-blue-300 transition-colors font-medium">ReQurv</NuxtLink>, developing AI-powered solutions that bend reality. We create intelligent tools for businesses and education, focusing on privacy-first AI infrastructure.
              </p>
              <UButton
                to="https://requrv.io"
                target="_blank"
                color="neutral"
                variant="ghost"
                size="sm"
                trailing-icon="i-heroicons-arrow-top-right-on-square"
              >
                Visit ReQurv
              </UButton>
            </div>
          </div>
        </div>

        <!-- Stack Card -->
        <div class="bg-gray-900/40 border border-gray-800 rounded-3xl p-6 backdrop-blur-md hover:border-purple-500/30 transition-colors flex flex-col justify-center items-center text-center group">
          <UIcon name="i-simple-icons-flutter" class="w-12 h-12 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
          <h4 class="font-bold text-white">Mobile Dev</h4>
          <p class="text-sm text-gray-500">Flutter & Dart</p>
        </div>

        <!-- Stack Card -->
        <div class="bg-gray-900/40 border border-gray-800 rounded-3xl p-6 backdrop-blur-md hover:border-green-500/30 transition-colors flex flex-col justify-center items-center text-center group">
          <UIcon name="i-simple-icons-nuxtdotjs" class="w-12 h-12 text-green-400 mb-3 group-hover:scale-110 transition-transform" />
          <h4 class="font-bold text-white">Web Framework</h4>
          <p class="text-sm text-gray-500">Nuxt & Vue</p>
        </div>

        <!-- Focus Card -->
        <div class="md:col-span-3 bg-gradient-to-r from-gray-900/60 to-gray-900/40 border border-gray-800 rounded-3xl p-8 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 class="text-xl font-bold mb-2 text-white">Currently Working On</h3>
            <p class="text-gray-400">Building full-stack web apps with AI/ML integration & Nuxt modules.</p>
          </div>
          <div class="flex gap-4">
             <div class="text-center">
               <div class="text-2xl font-bold text-white">27+</div>
               <div class="text-xs text-gray-500 uppercase tracking-wider">Repos</div>
             </div>
             <div class="text-center">
               <div class="text-2xl font-bold text-white">13+</div>
               <div class="text-xs text-gray-500 uppercase tracking-wider">Stars</div>
             </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="container mx-auto px-4 py-12">
      <h2 class="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Featured Projects</h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          v-for="(project, index) in projects" 
          :key="index"
          :project="project"
        />
      </div>
    </section>

    <!-- Contacts Section -->
    <section id="contacts" class="container mx-auto px-4 py-20">
      <div class="max-w-4xl mx-auto text-center relative">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <h2 class="text-4xl md:text-5xl font-bold mb-8 relative z-10">Ready to Collaborate?</h2>
        <p class="text-xl text-gray-400 mb-12 relative z-10">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>
        
        <div class="flex flex-wrap justify-center gap-6 relative z-10">
          <UButton
            to="mailto:cesare@torchia.eu"
            size="xl"
            variant="solid"
            class="bg-white px-8 py-4 rounded-full"
            icon="i-heroicons-envelope"
          >
            Email Me
          </UButton>
          <UButton
            to="https://linkedin.com/in/cesare-torchia"
            target="_blank"
            size="xl"
            color="neutral"
            variant="outline"
            class="px-8 py-4 rounded-full"
            icon="i-simple-icons-linkedin"
          >
            LinkedIn
          </UButton>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const typingText = ref('')
const phrases = ['Full-stack Developer', 'AI Enthusiast', 'Nuxt Module Creator', 'Flutter Developer']
let phraseIndex = 0
let charIndex = 0
let isDeleting = false

const { projects } = useProjects()

onMounted(() => {
  typeEffect()
})

const typeEffect = () => {
  const currentPhrase = phrases[phraseIndex]!
  
  if (isDeleting) {
    typingText.value = currentPhrase.substring(0, charIndex - 1)
    charIndex--
  } else {
    typingText.value = currentPhrase.substring(0, charIndex + 1)
    charIndex++
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true
    setTimeout(typeEffect, 2000)
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    phraseIndex = (phraseIndex + 1) % phrases.length
    setTimeout(typeEffect, 500)
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100)
  }
}
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

.transform-style-3d {
  transform-style: preserve-3d;
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 8s ease infinite;
}

@keyframes gradient-x {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.cursor-blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.animate-pulse-slow {
  animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.5; }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

.delay-100 { animation-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>