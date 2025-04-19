<template>
  <div>
    <h1 class="text-center text-3xl font-semibold mt-3 mb-6"> Gerador de currículo </h1>
    <div class="flex flex-row justify-evenly gap-8 px-3">
      <CurriculoForm class="w-full max-w-md"/>
      <CurriculoTemplate class="w-full max-w-xl" :curriculo="curriculo" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { CurriculoForm } from '@/components/curriculo-form'
import { CurriculoTemplate } from '@/components/curriculo-template'
import type { TCurriculo } from '@/components/curriculo-form'

const curriculo = {
  name: 'João da Silva',
} as TCurriculo
</script>
