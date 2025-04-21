<template>
  <div class="bg-slate-100 dark:bg-zinc-900 px-4 py-6 shadow-md">
    <h1>{{ curriculo.name }}</h1>
    <p>{{ curriculo.email }}</p>
    <p>{{ curriculo.phone }}</p>
    <p>{{ curriculo.address }}</p>
    <hr />
    <h2>Resumo</h2>
    <p>{{ curriculo.summary }}</p>
    <hr />
    <h2>Experiência Profissional</h2>
    <ul>
      <li
        v-for="(experience, index) in curriculo.experience"
        :key="index"
        class="text-base"
      >
        <h3 class="font-medium text-lg">{{ experience.position }}</h3>
        <p>
          {{ experience.companyName }}
          <span
            v-if="experience.startDate && experience.endDate"
            class="text-sm"
          >
            ({{ experience.startDate }} até {{ experience.endDate }})
          </span>
        </p>
        <p>{{ experience.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { TCurriculo } from '@/components/curriculo-form'

defineProps<{
  curriculo: TCurriculo
}>()
</script>

<style scoped lang="postcss">
h1 {
  @apply text-2xl text-center font-semibold mb-2;
}

h2 {
  @apply text-xl font-semibold mb-2;
}

hr {
  @apply my-3 border-t-0 border-b border-slate-300 dark:border-zinc-700;
}
</style>
