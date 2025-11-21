<template>
  <div class="container mx-auto px-4 py-12">
    <article class="max-w-3xl mx-auto" v-if="doc">
      <div class="mb-8 text-center">
        <div class="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
          <time>{{ new Date(doc.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</time>
          <span>•</span>
          <div class="flex gap-2">
            <span v-for="tag in doc.tags" :key="tag" class="text-primary-400">#{{ tag }}</span>
          </div>
        </div>
        <h1 class="text-3xl md:text-5xl font-bold mb-6">{{ doc.title }}</h1>
        <p class="text-xl text-gray-400">{{ doc.description }}</p>
      </div>

      <div class="prose prose-invert prose-primary max-w-none prose-lg 
        prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-white
        prose-h3:text-xl prose-h3:font-bold prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-white
        prose-p:mb-4 prose-p:text-gray-300 prose-p:leading-relaxed
        prose-ul:list-disc prose-ul:list-inside prose-ul:mb-4 prose-ul:text-gray-300
        prose-li:mb-2
        prose-strong:text-white prose-strong:font-semibold
        prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:text-primary-300 prose-code:font-mono
        prose-pre:bg-gray-900 prose-pre:p-4 prose-pre:rounded-xl prose-pre:overflow-x-auto prose-pre:mb-6 prose-pre:border prose-pre:border-gray-800
        prose-a:text-primary-400 hover:prose-a:text-primary-300 prose-a:underline prose-a:underline-offset-4">
        <ContentRenderer :value="doc" />
      </div>
      
      <div class="mt-12 pt-8 border-t border-gray-800 flex justify-between items-center">
        <UButton to="/blog" variant="ghost" icon="i-heroicons-arrow-left">Back to Blog</UButton>
        <div class="flex gap-2">
           <UButton
            to="https://instagram.com/lanternsflame"
            target="_blank"
            color="neutral"
            variant="ghost"
            icon="i-simple-icons-instagram"
            aria-label="Follow on Instagram"
          />
          <UButton
            :to="`https://www.linkedin.com/shareArticle?mini=true&url=https://cesare.torchia.eu${$route.path}&title=${doc.title}`"
            target="_blank"
            color="neutral"
            variant="ghost"
            icon="i-simple-icons-linkedin"
            aria-label="Share on LinkedIn"
          />
        </div>
      </div>
    </article>
    <div v-else class="text-center py-20">
      <h1 class="text-2xl font-bold mb-4">Article not found</h1>
      <UButton to="/blog" color="primary">Back to Blog</UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { data: doc } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})

useSeoMeta({
  title: doc.value?.title,
  description: doc.value?.description
})
</script>


