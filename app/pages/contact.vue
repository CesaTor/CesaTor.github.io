<script setup lang="ts">
definePageMeta({
  middleware: [
    function (to, from) {
      return navigateTo('/#contacts')
    }
  ]
})
</script>

<template>
  <div>Redirecting...</div>
</template>
