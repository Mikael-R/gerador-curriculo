<template>
  <div class="bg-slate-100 dark:bg-zinc-900 rounded-md px-4 py-6 shadow-md">
    <h1 class="text-2xl text-center font-semibold">{{ curriculo.name }}</h1>
  </div>
</template>

<script setup lang="ts">
import type { TCurriculo } from '@/components/curriculo-form'

defineProps<{
  curriculo: TCurriculo
}>()
</script>
