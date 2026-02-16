'use client'

import { useContext } from 'react'
import { LocaleContext } from './LocaleProvider'

export function useLocale() {
  return useContext(LocaleContext)
}
