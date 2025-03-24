<template>
  <input
    v-model="internalValue"
    class="w-full px-4 py-2 rounded-md bg-[#27272a] border border-[#333] placeholder:text-zinc-400 text-white focus:outline-none focus:border-[#666]"
    v-bind="$attrs"
    @input="$emit('update:modelValue', internalValue)"
  />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const internalValue = ref(props.modelValue)

watch(() => props.modelValue, (value) => {
  internalValue.value = value
})
</script>