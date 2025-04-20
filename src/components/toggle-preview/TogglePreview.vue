<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'
import { activePreview } from '.'
</script>

<template>
  <Tippy :content="activePreview ? 'Desativar preview' : 'Ativar preview'">
    <Button @click="activePreview = !activePreview" variant="outline" size="icon">
      <transition>
        <Icon
          v-if="activePreview"
          icon="radix-icons:eye-open"
          class="absolute h-4 w-4"
        />
        <Icon
          v-else
          icon="radix-icons:eye-closed"
          class="absolute h-4 w-4"
        />
      </transition>
    </Button>
  </Tippy>
</template>
