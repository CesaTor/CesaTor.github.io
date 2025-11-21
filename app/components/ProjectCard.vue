<template>
  <NuxtLink 
    :to="project.url"
    target="_blank"
    class="group relative bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2 block"
  >
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950/90 z-10"></div>
    <div class="absolute top-0 right-0 p-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
      <UButton variant="ghost" icon="i-heroicons-arrow-up-right" />
    </div>
    
    <div class="p-8 relative z-20 h-full flex flex-col">
      <div class="mb-auto">
        <div class="flex items-center gap-3 mb-4">
          <UIcon :name="project.icon" class="w-8 h-8" :class="project.color" />
          <span class="text-xs font-mono px-2 py-1 rounded bg-gray-800 text-gray-300">{{ project.lang }}</span>
        </div>
        <h3 class="text-2xl font-bold mb-3 text-white group-hover:text-primary-400 transition-colors">{{ project.name }}</h3>
        <p class="text-gray-400 text-sm leading-relaxed">{{ project.desc }}</p>
      </div>
      
      <div class="mt-6 pt-6 border-t border-gray-800 flex items-center justify-between text-sm text-gray-500">
        <div class="flex items-center gap-4">
          <span class="flex items-center gap-1"><UIcon name="i-heroicons-star" /> {{ project.stars }}</span>
          <span class="flex items-center gap-1"><UIcon name="i-heroicons-code-bracket" /> {{ project.forks }}</span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Project } from '~/types'

defineProps<{
  project: Project
}>()
</script>
