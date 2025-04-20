<script setup lang="ts">
import { useForm, useFieldArray } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { curriculoSchema, DEFAULT_CURRICULO } from '.'

import { Button } from '@/components/ui/button'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Icon } from '@iconify/vue'

const emit = defineEmits(['submit'])

const {
  validate,
  handleSubmit,
  values: curriculo
} = useForm({
  validationSchema: toTypedSchema(curriculoSchema),
  initialValues: DEFAULT_CURRICULO
})

const {
  fields: experienceFields,
  remove: removeExperience,
  push: addExperience
} = useFieldArray('experience')

const onSubmit = handleSubmit((values) => {
  emit('submit', values)
})

defineExpose({ curriculo, validate })
</script>

<template>
  <form class="flex flex-col gap-3" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="name">
      <FormItem>
        <FormLabel>Nome completo</FormLabel>
        <FormControl>
          <Input
            type="text"
            placeholder="João da Silva"
            v-bind="componentField"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="email">
      <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
          <Input
            type="email"
            placeholder="seu@email.com"
            v-bind="componentField"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="phone">
      <FormItem>
        <FormLabel>Telefone</FormLabel>
        <FormControl>
          <Input
            type="tel"
            placeholder="(11) 99999-9999"
            v-bind="componentField"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="address">
      <FormItem>
        <FormLabel>Endereço</FormLabel>
        <FormControl>
          <Input
            type="text"
            placeholder="Rua Exemplo, 123"
            v-bind="componentField"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <FormField v-slot="{ componentField }" name="summary">
      <FormItem>
        <FormLabel>Resumo profissional</FormLabel>
        <FormControl>
          <Textarea
            placeholder="Escreva um breve resumo sobre sua carreira"
            v-bind="componentField"
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>

    <div class="flex flex-col gap-4">
      <div
        v-for="(_, index) of experienceFields"
        :key="index"
        class="flex flex-col gap-3"
      >
        <div class="relative flex flex-row items-center justify-center mt-2">
          <h3 class="text-xl text-center font-semibold">
            Experiência Profissional {{ index + 1 }}
          </h3>

          <Tippy content="Apagar experiência" class="absolute right-0 -top-1">
            <Button
              v-if="index > 0"
              variant="destructive"
              size="icon"
              class="rounded-full"
              type="button"
              @click="removeExperience(index)"
            >
              <Icon icon="radix-icons:trash" />
            </Button>
          </Tippy>
        </div>

        <FormField
          v-slot="{ componentField }"
          :name="`experience.${index}.position`"
        >
          <FormItem>
            <FormLabel>Cargo</FormLabel>
            <FormControl>
              <Input
                placeholder="Desenvolvedor Frontend"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField
          v-slot="{ componentField }"
          :name="`experience.${index}.companyName`"
        >
          <FormItem>
            <FormLabel>Nome da empresa</FormLabel>
            <FormControl>
              <Input
                placeholder="Empresa Exemplo LTDA"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField
          v-slot="{ componentField }"
          :name="`experience.${index}.startDate`"
        >
          <FormItem>
            <FormLabel>Início</FormLabel>
            <FormControl>
              <Input type="month" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField
          v-slot="{ componentField }"
          :name="`experience.${index}.endDate`"
        >
          <FormItem>
            <FormLabel>Término</FormLabel>
            <FormControl>
              <Input type="month" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField
          v-slot="{ componentField }"
          :name="`experience.${index}.description`"
        >
          <FormItem>
            <FormLabel>Descrição</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Descreva suas atividades e conquistas"
                v-bind="componentField"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
      </div>

      <Button type="button" class="ml-auto" @click="addExperience({})">
        Adicionar experiência
      </Button>
    </div>

    <Button type="submit" class="mt-3 h-12 text-base">
      <Icon icon="radix-icons:download" class="w-3 h-3" />
      Baixar currículo
    </Button>
  </form>
</template>
