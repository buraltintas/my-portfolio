export interface Education {
  school: string
  degree: { en: string; tr: string }
  period: { en: string; tr: string }
}

export const educations: Education[] = [
  {
    school: 'Anadolu Üniversitesi',
    degree: {
      en: "Associate's degree, Artificial Intelligence Assisted Programming",
      tr: 'Ön lisans, Yapay Zekâ Destekli Programlama',
    },
    period: { en: 'Aug 2026 – Jun 2028 (in progress)', tr: 'Ağu 2026 – Haz 2028 (devam ediyor)' },
  },
  {
    school: 'Anadolu Üniversitesi',
    degree: {
      en: "Associate's degree, Web Design and Development",
      tr: 'Ön lisans, Web Tasarımı ve Kodlama',
    },
    period: { en: 'Sep 2023 – Jun 2025', tr: 'Eyl 2023 – Haz 2025' },
  },
  {
    school: 'Atatürk Üniversitesi',
    degree: {
      en: "Associate's degree, Computer Programming",
      tr: 'Ön lisans, Bilgisayar Programcılığı',
    },
    period: { en: 'Sep 2021 – Jun 2023', tr: 'Eyl 2021 – Haz 2023' },
  },
  {
    school: 'Patika.dev',
    degree: {
      en: 'React Developer, Protein React Bootcamp',
      tr: 'React Developer, Protein React Bootcamp',
    },
    period: { en: 'Mar 2022 – Apr 2022', tr: 'Mar 2022 – Nis 2022' },
  },
  {
    school: 'Ondokuz Mayıs Üniversitesi',
    degree: {
      en: "Bachelor's degree, Business Administration",
      tr: 'Lisans, İşletme',
    },
    period: { en: '2005 – 2010', tr: '2005 – 2010' },
  },
]
