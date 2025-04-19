<template>
  <main class="min-h-screen min-w-screen relative p-4">
    <ToggleTheme />
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { ToggleTheme } from '@/components/toggle-theme'
</script>
