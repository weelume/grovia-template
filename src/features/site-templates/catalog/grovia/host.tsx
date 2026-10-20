'use client'
import { createContext, useContext, type ReactNode } from 'react'
import type { TemplateLocale } from '../../types'
import { brand } from './config/brand'
export interface GroviaHostOptions {
  brandName?: Record<TemplateLocale, string>; logo?: string; lightLogo?: string;
  marketplaceHref?: string; marketplaceLabel?: Record<TemplateLocale, string>;
  marketplaceAriaLabel?: Record<TemplateLocale, string>; filing?: ReactNode;
}
const Context = createContext<GroviaHostOptions>({})
/** 消费方只注入品牌和导航能力；独立预览不依赖消费方资源。 */
export function GroviaHostProvider({ children, ...options }: GroviaHostOptions & { children: ReactNode }) { return <Context.Provider value={options}>{children}</Context.Provider> }
export function useGroviaHost() { const options = useContext(Context); return { ...options, brandName: options.brandName ?? brand.name, logo: options.logo ?? brand.logo, lightLogo: options.lightLogo ?? brand.lightLogo } }
