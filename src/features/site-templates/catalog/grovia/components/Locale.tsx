'use client'
import { createContext, useContext } from 'react'
import type { TemplateLocale } from '../../../types'
import type { Copy } from '../data'
import { useGroviaHost } from '../host'
export const GroviaLocale = createContext<TemplateLocale>('zh')
export function useCopy() {
  const locale = useContext(GroviaLocale), host = useGroviaHost()
  const format = (value: string) => value.replaceAll('{brand}', host.brandName[locale])
  return { locale, t: (zh: string, en: string) => format(locale === 'en' ? en : zh), copy: (value: Copy) => format(value[locale === 'en' ? 1 : 0]) }
}
