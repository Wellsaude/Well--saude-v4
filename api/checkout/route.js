import { NextResponse } from 'next/server'
export async function POST(req){
  const { nome, cpf, whatsapp, email, afiliado_de, forma_pagamento } = await req.json()
  const customerRes = await fetch('https://api.asaas.com/v3/customers',{
    method:'POST',
    headers:{'Content-Type':'application/json','access_token': process.env.ASAAS_KEY},
    body: JSON.stringify({name:nome, cpfCnpj:cpf, mobilePhone:whatsapp, email})
  })
  const customer = await customerRes.json()
  const subRes = await fetch('https://api.asaas.com/v3/subscriptions',{
    method:'POST',
    headers:{'Content-Type':'application/json','access_token': process.env.ASAAS_KEY},
    body: JSON.stringify({
      customer: customer.id,
      billingType: forma_pagamento || 'PIX',
      value: 43.50,
      nextDueDate: new Date().toISOString().split('T')[0],
      cycle: 'MONTHLY',
      externalReference: afiliado_de || 'direto',
      description: 'Well Saúde R$43,50'
    })
  })
  const sub = await subRes.json()
  return NextResponse.json(sub)
}
