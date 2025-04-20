import { z } from 'zod'
import i18next from 'i18next'
import { zodI18nMap } from 'zod-i18n-map'
import translation from '@/assets/zod-i18n/pt.json'

i18next.init({
  lng: 'pt',
  resources: {
    pt: { zod: translation }
  }
})

z.setErrorMap(zodI18nMap)

export { z }
