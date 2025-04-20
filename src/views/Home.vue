<template>
  <header class="absolute top-4 right-4 flex flex-row gap-2">
    <ButtonDownload @click="downloadPDF" />
    <ToggleTheme />
  </header>

  <main class="p-4">
    <h1 class="text-center text-3xl font-semibold mt-3 mb-6">
      Gerador de currículo
    </h1>
    <div class="flex flex-row justify-center gap-8 p-3">
      <CurriculoForm
        ref="curriculoForm"
        class="w-full max-w-md"
        @submit="downloadPDF"
      />
      <CurriculoTemplate
        v-if="curriculoForm"
        ref="curriculoTemplate"
        class="w-full h-full"
        :curriculo="curriculoForm.curriculo"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import html2pdf from 'html2pdf.js'
import { useToast } from '@/components/ui/toast/use-toast'
import { ButtonDownload } from '@/components/button-download'
import { ToggleTheme } from '@/components/toggle-theme'
import { CurriculoForm } from '@/components/curriculo-form'
import { CurriculoTemplate } from '@/components/curriculo-template'

const { toast } = useToast()

const curriculoForm = ref()
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

const downloadPDF = async () => {
  if (curriculoForm.value?.validate) {
    const { valid } = await curriculoForm.value.validate()
    if (!valid) {
      toast({
        title: 'Verifique os campos',
        description: 'Preencha corretamente todos os campos.',
        variant: 'destructive'
      })
      return
    }
  }

  const el = curriculoTemplate.value.$el

  html2pdf().from(el).set(options).save('curriculo.pdf')

  toast({
    title: 'Currículo gerado com sucesso!',
    description: 'Seu currículo foi gerado e baixado em PDF.'
  })
}
</script>
