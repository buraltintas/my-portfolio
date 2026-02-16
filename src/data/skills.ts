export interface SkillCategory {
  title: { en: string; tr: string }
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: { en: 'Frontend', tr: 'Frontend' },
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: { en: 'Mobile', tr: 'Mobil' },
    skills: ['React Native', 'Expo'],
  },
  {
    title: { en: 'State Management', tr: 'State Yönetimi' },
    skills: ['Redux', 'Context API', 'Zustand'],
  },
  {
    title: { en: 'Backend & APIs', tr: 'Backend & API' },
    skills: ['Node.js', 'Express', 'Go', 'REST API', 'Firebase', 'MongoDB'],
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
    title: { en: 'Other', tr: 'Diğer' },
    skills: ['Agile / Scrum', 'Jira', 'CI/CD', 'Responsive Design', 'SEO', 'Git Flow', 'Trunk-based Development', 'Domain Driven Design'],
  },
]
