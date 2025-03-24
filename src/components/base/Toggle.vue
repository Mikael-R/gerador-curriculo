<template>
  <label class="switch" :class="{ isPause }">
    <input v-model="active" type="checkbox" @change="toggle" />
    <span v-if="isPause" class="slider">{{ active ? 'Pausa' : 'Ativado' }}</span>
    <span v-else class="slider">{{ active ? 'Não' : 'Sim' }}</span>
  </label>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['update:modelValue', 'change'])

const props = defineProps({
  defaultValue: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: Boolean,
    default: false
  },
  isPause: {
    type: Boolean,
    default: false
  }
})

const active = ref(props.defaultValue || props.modelValue)

const toggle = () => {
  emit('update:modelValue', active.value)
  emit('change', active.value)
}

watch(
  () => props.modelValue,
  (value) => {
    active.value = value
  }
)
</script>

<style lang="postcss" scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 124px;
  height: 35px;
}

.switch input {
  display: none;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 5px;
  padding-left: 67%;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.switch.isPause .slider {
  padding-left: 55%;
}

.slider,
.slider:before {
  display: flex;
  align-items: center;
  color: #2f2f32;
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
}

.slider:before {
  position: absolute;
  content: 'Não';
  height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  left: 4px;
  bottom: 3px;
  background: #ffc239;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.switch.isPause .slider:before {
  content: 'Pausa';
}

input:checked + .slider {
  background-color: #d9d9d9;
  padding-left: 15px;
  content: 'Não';
}

.switch.isPause input:checked + .slider {
  content: 'Pausa';
  padding-left: 8px;
}

.switch.isPause input:checked + .slider:before {
  content: 'Ativado';
}

input:checked + .slider:before {
  transform: translateX(85%);
  content: 'Sim';
}
</style>
