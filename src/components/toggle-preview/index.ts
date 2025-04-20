import { useLocalStorage } from '@vueuse/core'

export const activePreview = useLocalStorage('active-preview', true)

export { default as TogglePreview } from './TogglePreview.vue'
