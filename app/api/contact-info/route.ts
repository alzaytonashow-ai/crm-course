export async function GET() {
  const contactInfo = {
    phone: '+201552537557',
    whatsapp: '201552537557',
    email: 'crm-course@aistudio-vision.com',
    location: {
      city: 'القاهرة',
      districts: ['العباسية', 'مدينة نصر', 'مصر الجديدة'],
      country: 'مصر',
      fullAddress: 'القاهرة - العباسية / مدينة نصر / مصر الجديدة'
    },
    courseDuration: '18 ساعة عملي',
    maxStudents: 10,
    certification: 'معتمدة من Vision AI Studio',
    instructor: {
      name: 'Joseph Ibrahim',
      title: 'CRM Specialist & AI Solutions',
      certification: 'معتمد من Vision AI Studio'
    }
  }

  return Response.json(contactInfo, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
