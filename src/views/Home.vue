<template>
  <header class="absolute top-4 right-4 flex flex-row gap-2">
    <Button variant="outline" size="icon" @click="downloadPDF">
      <Icon icon="radix-icons:download" class="h-4 w-4" />
    </Button>
    <TogglePreview />
    <ToggleTheme />
  </header>

  <main class="p-4">
    <h1 class="text-center text-3xl font-semibold mt-3 mb-6">
      Gerador de currículo
    </h1>
    <div class="flex flex-row justify-center gap-8 px-3">
      <CurriculoForm
        ref="curriculoForm"
        class="w-full max-w-md"
        @submit="downloadPDF"
      />
      <CurriculoTemplate
        v-if="activePreview && curriculoForm"
        ref="curriculoTemplate"
        class="w-full max-w-xl"
        :curriculo="curriculoForm.curriculo"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import html2pdf from 'html2pdf.js'
import { TogglePreview, activePreview } from '@/components/toggle-preview'
import { ToggleTheme } from '@/components/toggle-theme'
import { CurriculoForm } from '@/components/curriculo-form'
import { CurriculoTemplate } from '@/components/curriculo-template'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'
import type { TCurriculo } from '@/components/curriculo-form'

const curriculoForm = ref<{ curriculo: TCurriculo }>()
const curriculoTemplate = ref()

const options = {
  margin: 0,
  image: {
    type: 'jpeg',
    quality: 1
  },
  html2canvas: { scale: 3 },
  jsPDF: {
    unit: 'mm',
    format: 'a4',
    orientation: 'p'
  }
}

const downloadPDF = () => {
  const el = curriculoTemplate.value.$el
  html2pdf().from(el).set(options).save('curriculo.pdf')
}
</script>
