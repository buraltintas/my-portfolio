export interface SkillCategory {
  title: { en: string; tr: string }
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: { en: 'Frontend', tr: 'Frontend' },
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Redux', 'Context API', 'Zustand'],
  },
  {
    title: { en: 'Mobile', tr: 'Mobil' },
    skills: ['React Native', 'Expo', 'EAS Build & Submit', 'Swift (App Intents, WidgetKit)', 'Kotlin', 'Push Notifications', 'App Store Connect', 'Google Play Console'],
  },
  {
    title: { en: 'Backend & APIs', tr: 'Backend & API' },
    skills: ['Go', 'Node.js', 'Express', 'ASP.NET Core', 'REST API', 'PostgreSQL', 'PostGIS', 'Neon', 'Firebase', 'MongoDB'],
  },
  {
    title: { en: 'Cloud & DevOps', tr: 'Bulut & DevOps' },
    skills: ['Google Cloud Run', 'Cloud Build', 'Cloud Scheduler', 'Cloud Storage', 'Docker', 'Netlify'],
  },
  {
    title: { en: 'Payments & Services', tr: 'Ödeme & Servisler' },
    skills: ['RevenueCat', 'In-App Purchases', 'AdMob', 'Resend', 'Google Places API', 'Playwright'],
  },
  {
    title: { en: 'Styling', tr: 'Stil' },
    skills: ['Tailwind CSS', 'Material UI', 'CSS Modules', 'Styled Components', 'Sass'],
  },
  {
    title: { en: 'Tools & Testing', tr: 'Araçlar & Test' },
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Jest', 'React Testing Library'],
  },
  {
    title: { en: 'AI & Developer Tools', tr: 'Yapay Zeka & Geliştirici Araçları' },
    skills: ['Claude', 'ChatGPT', 'OpenAI API', 'Cursor', 'GitHub Copilot'],
  },
  {
    title: { en: 'Other', tr: 'Diğer' },
    skills: ['Agile / Scrum', 'Jira', 'CI/CD', 'Responsive Design', 'SEO', 'i18n', 'Git Flow', 'Trunk-based Development', 'Domain Driven Design'],
  },
]
