<script setup lang="ts">
import { ref } from 'vue'
import { useForm, useFieldArray } from 'vee-validate'
import { validationSchema } from '.'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Trash } from 'lucide-vue-next'

const { handleSubmit } = useForm({
  validationSchema,
  initialValues: {
    experience: [{} as any],
  },
})

const {
  fields: experienceFields,
  remove: removeExperience,
  push: addExperience
} = useFieldArray('experience')

const loading = ref(false)

const onSubmit = handleSubmit((values) => {
  console.log(values)
})
</script>

<template>
  <form @submit="onSubmit" class="flex flex-col gap-3">
    <FormField v-slot="{ componentField }" name="name">
      <FormItem>
        <FormLabel>Nome completo</FormLabel>
        <FormControl>
          <Input type="text" placeholder="João da Silva" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="email">
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input type="email" placeholder="seu@email.com" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="phone">
      <FormItem>
        <FormLabel>Telefone</FormLabel>
        <FormControl>
          <Input type="tel" placeholder="(11) 99999-9999" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="address">
      <FormItem>
        <FormLabel>Endereço</FormLabel>
        <FormControl>
          <Input type="text" placeholder="Rua Exemplo, 123" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="summary">
      <FormItem>
        <FormLabel>Resumo profissional</FormLabel>
        <FormControl>
          <Textarea placeholder="Escreva um breve resumo sobre sua carreira" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-3" v-for="(_, index) of experienceFields" :key="index">
        <div class="relative flex flex-row items-center justify-center mt-2">
          <h3 class="text-xl text-center font-semibold">
            Experiência Profissional {{ index + 1 }}
          </h3>

          <Button v-if="index > 0" variant="destructive" size="icon" @click="removeExperience(index)" class="rounded-full absolute right-0 -top-1" type="button">
            <Trash class="w-3 h-3" />
          </Button>
        </div>

        <FormField :name="`experience.${index}.companyName`" v-slot="{ componentField }">
          <FormItem>
            <FormLabel>Nome da empresa</FormLabel>
            <FormControl>
              <Input placeholder="Empresa Exemplo LTDA" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField :name="`experience.${index}.position`" v-slot="{ componentField }">
          <FormItem>
            <FormLabel>Cargo</FormLabel>
            <FormControl>
              <Input placeholder="Desenvolvedor Frontend" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField :name="`experience.${index}.startDate`" v-slot="{ componentField }">
          <FormItem>
            <FormLabel>Início</FormLabel>
            <FormControl>
              <Input type="month" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField :name="`experience.${index}.endDate`" v-slot="{ componentField }">
          <FormItem>
            <FormLabel>Término</FormLabel>
            <FormControl>
              <Input type="month" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField :name="`experience.${index}.description`" v-slot="{ componentField }">
          <FormItem>
            <FormLabel>Descrição</FormLabel>
            <FormControl>
              <Textarea placeholder="Descreva suas atividades e conquistas" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
      </div>

      <Button type="button" @click="addExperience({})" class="ml-auto">
        Adicionar experiência
      </Button>
    </div>

    <Button type="submit" class="mt-3 h-12 text-base" :loading="loading">
      Enviar
    </Button>
  </form>
</template>
