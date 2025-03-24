<template>
  <textarea
    v-model="internalValue"
    class="w-full p-3 rounded-md bg-[#D9D9D9] text-black font-medium border border-primary focus:outline-none placeholder:text-black/40 placeholder:text-sm"
    rows="4"
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