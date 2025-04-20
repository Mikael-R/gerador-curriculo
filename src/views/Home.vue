<template>
  <header class="absolute top-4 right-4 flex flex-row gap-2">
    <TogglePreview />
    <ToggleTheme />
  </header>

  <main class="p-4">
    <h1 class="text-center text-3xl font-semibold mt-3 mb-6">
      Gerador de currículo
    </h1>
    <div class="flex flex-row justify-evenly gap-8 px-3">
      <CurriculoForm ref="curriculoForm" class="w-full max-w-md" />
      <CurriculoTemplate
        v-if="activePreview"
        class="w-full max-w-xl"
        :curriculo="curriculoForm?.curriculo"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TogglePreview, activePreview } from '@/components/toggle-preview'
import { ToggleTheme } from '@/components/toggle-theme'
import { CurriculoForm } from '@/components/curriculo-form'
import { CurriculoTemplate } from '@/components/curriculo-template'

const curriculoForm = ref()
</script>
