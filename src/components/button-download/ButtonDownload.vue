<template>
  <Tippy content="Baixar currículo">
    <Button variant="outline" size="icon">
      <Icon icon="radix-icons:download" class="h-4 w-4" />
    </Button>
  </Tippy>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'
</script>
