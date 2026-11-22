export interface SkillCategory {
  title: { en: string; tr: string }
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: { en: 'Frontend', tr: 'Frontend' },
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Sass', 'Material UI', 'Styled Components', 'CSS Modules', 'Redux', 'Redux-Saga', 'TanStack Query', 'Zustand', 'Context API', 'Lit', 'Web Components', 'Chrome Extensions (Manifest V3)'],
  },
  {
    title: { en: 'Mobile', tr: 'Mobil' },
    skills: ['React Native', 'Expo', 'Expo Router', 'EAS Build & Submit', 'React Navigation', 'Skia', 'Swift (App Intents, WidgetKit)', 'Kotlin', 'Capacitor', 'On-device ML (Vision, ML Kit)', 'Push Notifications', 'App Store Connect', 'Google Play Console'],
  },
  {
    title: { en: 'Backend & Data', tr: 'Backend & Veri' },
    skills: ['Go', 'Node.js', 'Express', 'Hono', 'ASP.NET Core', 'Python', 'REST API', 'PostgreSQL', 'PostGIS', 'Neon', 'SQLite', 'Firebase', 'MongoDB'],
  },
  {
    title: { en: 'Cloud & DevOps', tr: 'Bulut & DevOps' },
    skills: ['Google Cloud Run', 'Cloud Build', 'Cloud Scheduler', 'Cloud Storage', 'Cloudflare Workers', 'Cloudflare D1', 'Durable Objects', 'Cloudflare R2', 'Docker', 'Netlify', 'OpenTelemetry'],
  },
  {
    title: { en: 'AI & Developer Tools', tr: 'Yapay Zeka & Geliştirici Araçları' },
    skills: ['Claude API', 'Claude Code', 'Agent Skills', 'OpenAI API', 'Gemini API', 'ElevenLabs', 'ChatGPT', 'Cursor', 'GitHub Copilot'],
  },
  {
    title: { en: 'Media, Maps & Games', tr: 'Medya, Harita & Oyun' },
    skills: ['Remotion', 'ffmpeg', 'OpenSheetMusicDisplay', 'Leaflet', 'OpenStreetMap', 'Phaser'],
  },
  {
    title: { en: 'Payments & Services', tr: 'Ödeme & Servisler' },
    skills: ['RevenueCat', 'In-App Purchases', 'AdMob', 'Resend', 'Google Places API', 'YouTube Data API'],
  },
  {
    title: { en: 'Tools & Testing', tr: 'Araçlar & Test' },
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Jest', 'React Testing Library', 'Cypress', 'Playwright'],
  },
  {
    title: { en: 'Other', tr: 'Diğer' },
    skills: ['Agile / Scrum', 'Jira', 'CI/CD', 'Responsive Design', 'SEO', 'i18n', 'Git Flow', 'Trunk-based Development', 'Domain Driven Design'],
  },
]
