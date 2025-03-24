<template>
  <button
    v-bind="$attrs"
    :class="[
      defaultClass,
      theSkin,
      theSize,
      fullWidth ? 'w-full' : '',
      disabled && !loading ? 'disabled:opacity-40' : ''
    ]"
    :disabled="disabled || loading"
  >
    <IconLoading v-if="loading" :class="theIconSize" class="text-white" />
    <slot v-else />
    <span :class="dotClass" v-if="dot">{{ dot }}</span>
  </button>
</template>

<script setup lang="ts">
import IconLoading from "@/components/icons/Loading.vue";

const props = defineProps({
  size: {
    type: String,
    default: "md",
  },
  variant: {
    type: String,
    default: "elevated",
    validator: (value: string) =>
      ["elevated", "outlined", "text"].includes(value),
  },
  dot: {
    type: String,
    default: "",
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

const defaultClass =
  "relative min-w-fit flex select-none items-center justify-center gap-1 whitespace-nowrap px-2 shadow transition-colors disabled:cursor-not-allowed";
const dotClass =
  "rounded-full absolute -top-2 text-xs flex items-center justify-center -right-3 w-5 h-5 font-medium bg-red-600 text-white";

const skins: any = {
  elevated: "text-white bg-yellow-600 rounded-md",
  outlined: "text-yellow-600 bg-transparent border border-yellow-600 rounded-md",
  text: "text-yellow-600",
};

const sizes: any = {
  sm: "text-sm h-8",
  md: "text-base h-10",
  lg: "text-lg h-12",
  xl: "text-xl h-14",
};

const iconSizes: any = {
  sm: "h-6",
  md: "h-7",
  lg: "h-8",
  xl: "h-9",
}

const theSkin = skins[props.variant];
const theSize = sizes[props.size];
const theIconSize = iconSizes[props.size]
</script>
