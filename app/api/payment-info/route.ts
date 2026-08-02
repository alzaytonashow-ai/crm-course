export async function GET() {
  const paymentInfo = {
    instapay: {
      number: '01552537557',
      label: 'Instapay',
      description: 'تحويل فوري وآمن',
    },
    paymentLink: 'https://checkouts.kashier.io/en/paymentpage?ppLink=PP-1817925704,live',
    amount: 2500,
    originalAmount: 3500,
    discount: 1000,
    currency: 'EGP',
    description: 'كورس إدارة علاقات العملاء CRM - 18 ساعة تدريب عملي',
  }

  return Response.json(paymentInfo, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
