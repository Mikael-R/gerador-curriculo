<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'
import { useColorMode } from '@vueuse/core'

const mode = useColorMode({ disableTransition: false })

const toggleMode = () => {
  mode.value = mode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <Tippy :content="mode === 'light' ? 'Mudar para o modo escuro' : 'Mudar para o modo claro'">
    <Button @click="toggleMode" variant="outline" size="icon">
      <Icon icon="radix-icons:moon" class="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Icon icon="radix-icons:sun" class="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  </Tippy>
</template>
