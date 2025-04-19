<script setup lang="ts">
import { ref } from 'vue'
import { useForm, useFieldArray } from 'vee-validate'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { X } from 'lucide-vue-next'
import { validationSchema } from './validation'

const { handleSubmit, control } = useForm({
  validationSchema,
  initialValues: {
    experience: [{}],
  },
})

const {
  fields: experienceFields,
  remove: removeExperience,
  push: addExperience
} = useFieldArray('experience')

const onSubmit = handleSubmit((values) => {
  console.log(values)
})
</script>

<template>
  <form @submit="onSubmit" class="flex flex-col gap-2">
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

    <div class="flex flex-col">
      <div class="flex flex-col gap-2" v-for="(exp, index) in experienceFields" :key="index">
        <h3 class="font-semibold mt-4">
          <Button v-if="index > 0" variant="destructive" size="icon" @click="removeExperience(index)" class="mr-2" type="button">
            <X class="w-3 h-3" />
          </Button>
          Experiência Profissional {{ index + 1 }}
        </h3>

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

      <Button type="button" @click="addExperience({})" class="mt-2 ml-auto">
        Adicionar experiência
      </Button>
    </div>

    <Button type="submit" class="mt-4">
      Enviar
    </Button>
  </form>
</template>
