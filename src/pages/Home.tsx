import { Link } from 'react-router-dom'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card'
import {
  AlertCircle,
  Activity,
  Droplet,
  Heart,
  Stethoscope,
  Baby,
  FileText,
  BookOpen,
  ClipboardList
} from 'lucide-react'

const modules = [
  {
    path: '/ectopic',
    title: 'Ectopic Pregnancy',
    description: 'β-hCG trends, ultrasound interpretation, and triage pathways',
    icon: AlertCircle,
    color: 'text-red-500',
  },
  {
    path: '/preeclampsia',
    title: 'Preeclampsia & Eclampsia',
    description: 'Hypertensive disorders, severe features, and seizure management',
    icon: Activity,
    color: 'text-orange-500',
  },
  {
    path: '/gdm',
    title: 'Gestational Diabetes',
    description: 'OGTT interpretation, screening logic, and management tiers',
    icon: Droplet,
    color: 'text-blue-500',
  },
  {
    path: '/placental',
    title: 'Placental Disorders',
    description: 'Abruption vs previa: bleeding patterns and delivery decisions',
    icon: Heart,
    color: 'text-pink-500',
  },
  {
    path: '/cholestasis',
    title: 'Cholestasis (ICP)',
    description: 'Pruritus patterns, bile acids, and fetal risk assessment',
    icon: Stethoscope,
    color: 'text-yellow-500',
  },
  {
    path: '/pph',
    title: 'Postpartum Hemorrhage',
    description: '4 Ts framework: Tone, Tissue, Trauma, Thrombin',
    icon: Droplet,
    color: 'text-red-600',
  },
  {
    path: '/loss',
    title: 'Early Pregnancy Loss',
    description: 'Threatened vs inevitable vs incomplete vs missed abortion',
    icon: Heart,
    color: 'text-purple-500',
  },
  {
    path: '/labor',
    title: 'Labor Progression',
    description: 'Normal vs abnormal labor curves and arrest disorders',
    icon: Baby,
    color: 'text-green-500',
  },
  {
    path: '/gyn-emergencies',
    title: 'GYN Emergencies',
    description: 'Ovarian torsion and pelvic inflammatory disease',
    icon: AlertCircle,
    color: 'text-indigo-500',
  },
  {
    path: '/cases',
    title: 'Interactive Cases',
    description: 'Apply clinical reasoning to realistic scenarios',
    icon: FileText,
    color: 'text-cyan-500',
  },
  {
    path: '/assessment',
    title: 'Assessment',
    description: 'MCQs and case vignettes to test your knowledge',
    icon: ClipboardList,
    color: 'text-teal-500',
  },
  {
    path: '/glossary',
    title: 'Glossary',
    description: 'Key terms and definitions in obstetrics and gynecology',
    icon: BookOpen,
    color: 'text-slate-500',
  },
]

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">OBGYN Master</h1>
        <p className="text-lg text-muted-foreground">
          Master obstetrics and gynecology through interactive learning and case-based reasoning
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module) => {
          const Icon = module.icon
          return (
            <Link key={module.path} to={module.path}>
              <Card className="h-full transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <CardTitle className="text-xl">{module.title}</CardTitle>
                      <CardDescription>{module.description}</CardDescription>
                    </div>
                    <Icon className={`h-8 w-8 ${module.color} flex-shrink-0 ml-2`} />
                  </div>
                </CardHeader>
              </Card>
            </Link>
          )
        })}
      </div>

      <div className="mt-12 p-6 rounded-lg bg-muted/50 border">
        <h2 className="text-xl font-semibold mb-3">About This App</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          OBGYN Master is an evidence-based educational platform designed to help medical students,
          residents, and healthcare professionals master high-yield obstetrics and gynecology topics.
          All content is based on ACOG/SMFM/CDC guidelines and uses synthetic data for educational
          purposes only. This app works offline and is optimized for mobile learning.
        </p>
      </div>
    </div>
  )
}
