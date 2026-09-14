import { NextResponse } from 'next/server'

export async function POST(req){
  const { nome, cpf, whatsapp, email, afiliado_de, forma_pagamento } = await req.json()

  // 1. Cria cliente no Asaas
  const customerRes = await fetch('https://api.asaas.com/v3/customers',{
    method:'POST',
    headers:{
      'access_token': process.env.ASAAS_KEY,
      'Content-Type':'application/json'
    },
    body: JSON.stringify({ 
      name: nome, 
      cpfCnpj: cpf, 
      email, 
      mobilePhone: whatsapp 
    })
  })
  const customer = await customerRes.json()
  if(!customer.id) return NextResponse.json({erro: 'Asaas customer', detalhe: customer}, {status:400})

  // 2. Cria assinatura R$43,50
  const subRes = await fetch('https://api.asaas.com/v3/subscriptions',{
    method:'POST',
    headers:{
      'access_token': process.env.ASAAS_KEY,
      'Content-Type':'application/json'
    },
    body: JSON.stringify({
      customer: customer.id,
      billingType: forma_pagamento || 'PIX',
      value: 43.50,
      nextDueDate: new Date().toISOString().split('T')[0],
      cycle: 'MONTHLY',
      externalReference: afiliado_de || 'direto',
      description: 'Well Saude R$43,50'
    })
  })
  const sub = await subRes.json()

  return NextResponse.json({invoiceUrl: sub.invoiceUrl, id: sub.id, customer: customer.id, sub})
}
