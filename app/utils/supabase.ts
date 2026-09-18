// app/utils/supabase.ts
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

// Variáveis de ambiente
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Cliente para Server Components / Server Actions
export async function createSupabaseServerClient() {
  const cookieStore = await cookies()

  return createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    // ✅ AQUI É A CHAVE: A CONFIGURAÇÃO É DIRETA EM "cookies", NÃO DENTRO DE "auth"!
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value, ...options })
        } catch (error) {
          // Ignora erro em ambientes de leitura
        }
      },
      remove(name: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value: '', ...options })
        } catch (error) {
          // Ignora erro em ambientes de leitura
        }
      },
    },
  })
}

// Cliente para Componentes do Cliente
export function createSupabaseBrowserClient() {
  return createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      get(name: string) {
        return document.cookie.split('; ').find(row => row.startsWith(`${name}=`))?.split('=')[1]
      },
      set(name: string, value: string, options: CookieOptions) {
        document.cookie = `${name}=${value}; path=${options.path || '/'}; max-age=${options.maxAge || 0}; ${options.httpOnly ? 'HttpOnly;' : ''} ${options.secure ? 'Secure;' : ''}`
      },
      remove(name: string, options: CookieOptions) {
        document.cookie = `${name}=; path=${options.path || '/'}; max-age=0`
      },
    },
  })
}
