import { createClient } from '@supabase/supabase-js'
import { cookies } from 'next/headers'

// Variáveis de ambiente do Supabase
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Cliente para Componentes de Servidor
export async function createServerClient() {
  const cookieStore = await cookies()

  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      storage: {
        getAll() {
          return cookieStore.getAll().map(c => ({
            name: c.name,
            value: c.value
          }))
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options)
            })
          } catch (err) {
            // Ignora erro se rodar em componente de servidor de leitura
          }
        }
      }
    }
  })
}

// Cliente para Componentes de Cliente
export function createClientComponentClient() {
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
}
