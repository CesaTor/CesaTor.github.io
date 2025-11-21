<template>
  <div class="container mx-auto px-4 py-12">
    <div class="max-w-4xl mx-auto">
      <div class="mb-12 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p class="text-gray-400 text-lg">Thoughts on AI, Web Development, and the Future.</p>
      </div>

      <div class="grid gap-8">
        <div 
          v-for="article in sortedList" 
          :key="article.path" 
          class="group relative bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
        >
          <NuxtLink :to="article.path" class="absolute inset-0 z-10">
            <span class="sr-only">Read {{ article.title }}</span>
          </NuxtLink>
          
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div class="flex items-center gap-2 text-sm text-gray-500">
              <UIcon name="i-heroicons-calendar" class="w-4 h-4" />
              <time>{{ new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</time>
            </div>
            <div class="flex gap-2">
              <span v-for="tag in article.tags" :key="tag" class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20">
                #{{ tag }}
              </span>
            </div>
          </div>

          <h2 class="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
            {{ article.title }}
          </h2>
          
          <p class="text-gray-400 mb-6 line-clamp-3">
            {{ article.description }}
          </p>

          <div class="flex items-center text-primary-400 font-medium group-hover:translate-x-1 transition-transform">
            Read Article <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-1" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Blog - CesaTor',
  meta: [
    { name: 'description', content: 'Thoughts on AI, Web Development, and the Future.' }
  ]
})

const { data: list } = await useAsyncData('blog-list', () => {
  return queryCollection('content').all()
})

// Sort by date in descending order (most recent first)
const sortedList = computed(() => {
  if (!list.value) return []
  return [...list.value].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
})
</script>
