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
    <div class="flex flex-row justify-evenly gap-8 px-3">
      <CurriculoForm ref="curriculoForm" class="w-full max-w-md" />
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
import jsPDF from 'jspdf'
import { TogglePreview, activePreview } from '@/components/toggle-preview'
import { ToggleTheme } from '@/components/toggle-theme'
import { CurriculoForm } from '@/components/curriculo-form'
import { CurriculoTemplate } from '@/components/curriculo-template'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'
import type { TCurriculo } from '@/components/curriculo-form'

const curriculoForm = ref<{ curriculo: TCurriculo }>()
const curriculoTemplate = ref()

const jspdf = new jsPDF()

const downloadPDF = () => {
  const content = curriculoTemplate.value?.$el.innerHTML
  jspdf.html(content, {
    callback: (pdf) => {
      pdf.save('curriculo.pdf')
    },
    x: 10,
    y: 10
  })
}
</script>
