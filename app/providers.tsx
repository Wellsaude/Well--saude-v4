'use client'
import { SessionProvider } from '@supabase/auth-helpers-react'

export function Providers({ children }) {
  return <SessionProvider>{children}</SessionProvider>
}
