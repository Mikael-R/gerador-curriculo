<template>
  <Tippy content="Buscar perfil">
    <Button
      type="button"
      variant="outline"
      aria-label="Buscar perfil"
      @click="searchProfile"
    >
      <Icon icon="radix-icons:magnifying-glass" />
    </Button>
  </Tippy>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LinkedInRepository from '@/repositories/LinkedinRepository'
import { useToast } from '@/components/ui/toast/use-toast'
import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue'

const emit = defineEmits(['profile-found'])

const props = defineProps({
  profileUrl: {
    type: String,
    default: ''
  },
  mock: {
    type: Boolean,
    default: false
  }
})

const { toast } = useToast()

const linkedinRepository = new LinkedInRepository()

const loading = ref(false)

const searchProfile = async () => {
  try {
    loading.value = true

    const profileUrl = props.profileUrl.trim()

    if (!profileUrl) {
      toast({
        title: 'Preencha o LinkedIn',
        description: 'Por favor, insira o link do seu perfil LinkedIn.',
        variant: 'destructive'
      })
      return
    }

    const profileId = profileUrl.split('/').pop() || ''

    const profile = await (props.mock
      ? linkedinRepository.mockSearchProfile()
      : linkedinRepository.searchProfile(profileId))

    emit('profile-found', profile)
  } catch (error) {
    toast({
      title: 'Perfil não encontrado',
      description: 'Não foi possível encontrar o perfil LinkedIn informado.',
      variant: 'destructive'
    })
    console.error('Error searching LinkedIn profile:', error)
  } finally {
    loading.value = false
  }
}
</script>
