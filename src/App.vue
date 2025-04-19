<template>
  <main class="min-h-screen min-w-screen relative p-4">
    <Toaster />
    <ToggleTheme />
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { Toaster } from '@/components/ui/toast'
import { ToggleTheme } from '@/components/toggle-theme'
</script>
