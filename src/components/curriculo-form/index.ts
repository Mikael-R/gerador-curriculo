import { z } from '@/lib/zod'

export const experienceSchema = z.object({
  companyName: z.string().min(2, 'Nome da empresa muito curto'),
  startDate: z
    .string()
    .regex(/^\d{4}-\d{2}$/, 'Formato de data inválido (use AAAA-MM)'),
  endDate: z
    .string()
    .regex(/^\d{4}-\d{2}$/, 'Formato de data inválido (use AAAA-MM)'),
  position: z.string().min(2, 'Cargo muito curto'),
  description: z
    .string()
    .min(5, 'Descrição muito curta')
    .max(1000, 'Descrição muito longa')
})

export const curriculoSchema = z.object({
  name: z.string().min(2, 'Nome muito curto').max(50, 'Nome muito longo'),
  email: z.string().email('Email inválido'),
  phone: z
    .string()
    .min(8, 'Telefone muito curto')
    .max(20, 'Telefone muito longo'),
  address: z
    .string()
    .min(5, 'Endereço muito curto')
    .max(100, 'Endereço muito longo'),
  summary: z
    .string()
    .min(10, 'Resumo muito curto')
    .max(1000, 'Resumo muito longo'),
  experience: z
    .array(experienceSchema)
    .min(1, 'Adicione ao menos uma experiência profissional')
})

export type TCurriculo = z.infer<typeof curriculoSchema>
export type TExperience = z.infer<typeof experienceSchema>

export const DEFAULT_CURRICULO: Partial<TCurriculo> = {
  experience: [{} as TExperience]
}

export { default as CurriculoForm } from './CurriculoForm.vue'
