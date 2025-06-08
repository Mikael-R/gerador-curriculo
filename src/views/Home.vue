<template>
  <header
    class="md:absolute top-0 right-0 flex flex-row w-full justify-end p-4 gap-2"
  >
    <ButtonDownload @click="downloadPDF" />
    <ToggleTheme />
  </header>

  <main>
    <h1 class="text-center text-3xl font-semibold my-5">
      Gerador de currículo
    </h1>
    <div class="flex flex-col lg:flex-row justify-center gap-8 p-3 lg:pl-8">
      <CurriculoForm
        ref="curriculoForm"
        class="w-full max-w-md m-auto"
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

  html2pdf().from(el).save('curriculo.pdf')

  toast({
    title: 'Currículo gerado com sucesso!',
    description: 'Seu currículo foi gerado e baixado em PDF.'
  })
}
</script>
