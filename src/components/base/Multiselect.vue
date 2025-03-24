<template>
  <div class="flex items-center justify-center">
    <Multiselect
      v-model="internalValue"
      :options="options"
      :disabled="disabled"
      :searchable="searchable"
      track-by="value"
      label="label"
      placeholder=""
      selectLabel=""
      selectGroupLabel=""
      selectedLabel="Selecionado"
      deselectLabel=""
      deselectGroupLabel=""
      @select="$emit('update:modelValue', $event.value)"
    />
    <input
      :value="modelValue"
      class="w-1 h-1 opacity-0 absolute mx-auto"
      :required="required"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, type PropType } from "vue";
import Multiselect from "vue-multiselect";

defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  options: {
    type: Array as PropType<{ label: string, value: string}[]>,
    default: () => []
  },
  required: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  searchable: {
    type: Boolean,
    default: false
  },
});

const setOption = () => {
  internalValue.value = props.options.find((option) => option.value === props.modelValue) || null
}

const internalValue = ref();

watch(
  () => props.modelValue,
  () => {
   setOption()
  }
);

onMounted(() => {
  setOption()
})
</script>
