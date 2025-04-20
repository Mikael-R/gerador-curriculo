<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'
import { activePreview } from '.'
</script>

<template>
  <Tippy :content="activePreview ? 'Desativar preview' : 'Ativar preview'">
    <Button
      variant="outline"
      size="icon"
      class="relative"
      @click="activePreview = !activePreview"
    >
      <Icon
        icon="radix-icons:eye-open"
        :class="[
          'absolute h-4 w-4 transition-all duration-300 ease-in-out',
          !activePreview ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        ]"
      />
      <Icon
        icon="radix-icons:eye-closed"
        :class="[
          'absolute h-4 w-4 transition-all duration-300 ease-in-out',
          activePreview ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        ]"
      />
    </Button>
  </Tippy>
</template>
