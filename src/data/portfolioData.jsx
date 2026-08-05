import {
  AudioWaveform, Building2, CodeXml, Gamepad2, Gauge, Globe2,
  GraduationCap, MonitorSmartphone, PanelsTopLeft, ServerCog,
  TerminalSquare, UserRoundCog, Users, Zap,
} from 'lucide-react'
import {
  SiCss, SiDocker, SiGit, SiGithub, SiHtml5, SiJavascript, SiLaravel,
  SiLinux, SiMongodb, SiMysql, SiNodedotjs, SiReact, SiTailwindcss,
  SiWordpress,
} from 'react-icons/si'

export const projects = [
  { number: '01', name: 'AMDJ', type: 'React · Tailwind\nLanding Page', icon: Zap, tone: 'lime', url: 'https://github.com/jamal-byte-20/AMDJ' },
  { number: '02', name: 'CMCampus', type: 'JavaScript\nDigital Platform', icon: Building2, tone: 'violet', url: 'https://github.com/jamal-byte-20/CMCampus_bm' },
  { number: '03', name: 'CMC Stages', type: 'Laravel · PHP\nInternship Platform', icon: ServerCog, tone: 'dark', url: 'https://github.com/jamal-byte-20/CMC_Stages' },
  { number: '04', name: 'Tic Tac Game', type: 'React · CSS\nWeb Game', icon: Gamepad2, tone: 'violet', url: 'https://github.com/jamal-byte-20/TIC-TAC-GAME' },
  { number: '05', name: 'Employee Manager', type: 'Python\nDesktop App', icon: UserRoundCog, tone: 'lime', url: 'https://github.com/jamal-byte-20/Employes-manager' },
  { number: '06', name: 'Portfolio V2', type: 'React · Vite\nPortfolio', icon: AudioWaveform, tone: 'violet', url: 'https://github.com/jamal-byte-20/portfolio_v2' },
  { number: '07', name: 'Ekbaal Agency', type: 'WordPress\nMarketing Portfolio', icon: Globe2, tone: 'dark', url: 'https://lime-alpaca-990785.hostingersite.com/' },
  { number: '08', name: 'Study Abroad', type: 'WordPress\nStudent Agency', icon: GraduationCap, tone: 'lime', url: 'https://silver-hedgehog-989523.hostingersite.com/' },
]

export const services = [
  { title: 'Front-end development', text: 'I build responsive and interactive interfaces using modern technologies and best practices.', icon: PanelsTopLeft },
  { title: 'Back-end development', text: 'I develop robust APIs and scalable applications with clean code and secure architecture.', icon: ServerCog },
  { title: 'CMS & WordPress', text: 'I create custom WordPress websites and practical solutions tailored to business needs.', icon: Globe2 },
  { title: 'Development workflow', text: 'I use modern tools and workflows to ship quality code, faster and with confidence.', icon: TerminalSquare },
]

export const stackRows = [
  { label: 'Front-end', items: [
    { name: 'HTML', icon: SiHtml5, color: '#e34f26' },
    { name: 'CSS', icon: SiCss, color: '#1572b6' },
    { name: 'JavaScript', icon: SiJavascript, color: '#d6bd00' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06b6d4' },
    { name: 'React', icon: SiReact, color: '#087ea4' },
  ] },
  { label: 'Back-end & CMS', items: [
    { name: 'Laravel', icon: SiLaravel, color: '#ff2d20' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'WordPress', icon: SiWordpress, color: '#21759b' },
  ] },
  { label: 'Databases', items: [
    { name: 'MongoDB', icon: SiMongodb, color: '#47a248' },
    { name: 'MySQL', icon: SiMysql, color: '#4479a1' },
  ] },
  { label: 'Tools & workflow', items: [
    { name: 'Linux', icon: SiLinux, color: '#1b1b1b' },
    { name: 'Docker', icon: SiDocker, color: '#2496ed' },
    { name: 'Git', icon: SiGit, color: '#f05032' },
    { name: 'GitHub', icon: SiGithub, color: '#181717' },
  ] },
]

export const approach = [
  { title: 'Clean code', text: 'Maintainable, readable code built to stand the test of time.', icon: CodeXml },
  { title: 'Responsive design', text: 'Experiences that look and work beautifully on every device.', icon: MonitorSmartphone },
  { title: 'Performance', text: 'Applications optimized for speed, efficiency, and smooth interaction.', icon: Gauge },
  { title: 'Collaboration', text: 'Clear communication and close teamwork to deliver the best results.', icon: Users },
]
