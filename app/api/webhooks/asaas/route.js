import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
export async function POST(req){
  const body = await req.json()
  if(body.event==='PAYMENT_CONFIRMED' || body.event==='PAYMENT_RECEIVED'){
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY)
    const ref = body.payment.externalReference
    if(ref && ref!=='direto'){
      await supabase.from('pontos').insert({ codigo_afiliado: ref, pontos: 8.33, tipo: 'indicacao' })
    }
    await supabase.from('pontos').insert({ cpf_cliente: body.payment.customer, pontos: 8.33, tipo: 'adimplencia' })
  }
  return NextResponse.json({ok:true})
}
