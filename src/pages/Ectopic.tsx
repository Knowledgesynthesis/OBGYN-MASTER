import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'

interface Case {
  id: string
  betaHCG: number
  ultrasound: string
  symptoms: string[]
  pain: string
  interpretation: string
  management: string
}

const cases: Case[] = [
  {
    id: 'case1',
    betaHCG: 1800,
    ultrasound: 'No intrauterine pregnancy visible',
    symptoms: ['Spotting', 'Lower abdominal pain'],
    pain: 'Unilateral, moderate',
    interpretation: 'Concern for ectopic pregnancy - β-hCG above discriminatory threshold without IUP',
    management: 'Immediate gynecology consultation. Consider methotrexate vs surgical management based on stability and desire for future fertility.'
  },
  {
    id: 'case2',
    betaHCG: 850,
    ultrasound: 'No definitive intrauterine or extrauterine pregnancy',
    symptoms: ['Mild spotting'],
    pain: 'Minimal',
    interpretation: 'Pregnancy of unknown location - β-hCG below discriminatory threshold',
    management: 'Serial β-hCG monitoring in 48 hours. Expect doubling in viable IUP. Repeat ultrasound when β-hCG >1500-2000.'
  },
  {
    id: 'case3',
    betaHCG: 3500,
    ultrasound: 'Adnexal mass, no IUP',
    symptoms: ['Severe abdominal pain', 'Dizziness'],
    pain: 'Severe, acute onset',
    interpretation: 'Likely ruptured ectopic pregnancy',
    management: 'Emergency surgical intervention. Type and cross. Large-bore IV access. Hemodynamic stabilization.'
  },
]

const hcgTrendData = [
  { day: 0, normal: 100, slow: 100, ectopic: 100 },
  { day: 2, normal: 200, slow: 150, ectopic: 130 },
  { day: 4, normal: 400, slow: 225, ectopic: 165 },
  { day: 6, normal: 800, slow: 340, ectopic: 200 },
  { day: 8, normal: 1600, slow: 510, ectopic: 240 },
]

export default function Ectopic() {
  const [selectedCase, setSelectedCase] = useState<Case | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-2">Ectopic Pregnancy</h1>
        <p className="text-muted-foreground">
          Master the diagnosis and management of ectopic pregnancy through β-hCG interpretation and clinical reasoning
        </p>
      </div>

      {/* Key Concepts */}
      <Card>
        <CardHeader>
          <CardTitle>Key Concepts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Discriminatory Zone</h3>
            <p className="text-sm text-muted-foreground">
              β-hCG level (typically 1500-2000 mIU/mL) above which transvaginal ultrasound should reliably detect an intrauterine pregnancy.
              No IUP at this level raises concern for ectopic pregnancy.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Risk Factors</h3>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>Prior ectopic pregnancy (10-25% recurrence)</li>
              <li>Prior tubal surgery or pelvic inflammatory disease</li>
              <li>Current IUD use</li>
              <li>Infertility treatment</li>
              <li>Smoking</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Clinical Presentation</h3>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
              <li>Abdominal/pelvic pain (often unilateral)</li>
              <li>Vaginal bleeding (usually after pain onset)</li>
              <li>Ruptured: acute severe pain, peritoneal signs, hemodynamic instability</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* β-hCG Trend Visualization */}
      <Card>
        <CardHeader>
          <CardTitle>β-hCG Trends</CardTitle>
          <CardDescription>
            Normal viable IUP shows doubling every 48 hours in early pregnancy. Slower rise or plateau suggests ectopic or nonviable pregnancy.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={hcgTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" label={{ value: 'Days', position: 'insideBottom', offset: -5 }} />
                <YAxis label={{ value: 'β-hCG (mIU/mL)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <ReferenceLine y={1500} stroke="#888" strokeDasharray="3 3" label="Discriminatory zone" />
                <Line type="monotone" dataKey="normal" stroke="#22c55e" name="Normal doubling" strokeWidth={2} />
                <Line type="monotone" dataKey="slow" stroke="#eab308" name="Slow rise" strokeWidth={2} />
                <Line type="monotone" dataKey="ectopic" stroke="#ef4444" name="Plateau/ectopic" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-green-500"></div>
              <span className="text-muted-foreground">Normal viable IUP: doubles every 48-72 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-yellow-500"></div>
              <span className="text-muted-foreground">Slow rise: concerning for nonviable IUP or ectopic</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 bg-red-500"></div>
              <span className="text-muted-foreground">Plateau: highly suspicious for ectopic</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Cases */}
      <Card>
        <CardHeader>
          <CardTitle>Practice Cases</CardTitle>
          <CardDescription>
            Apply your knowledge to these clinical scenarios
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {cases.map((caseItem, index) => (
            <div key={caseItem.id} className="border rounded-lg p-4">
              <h3 className="font-semibold mb-3">Case {index + 1}</h3>
              <div className="space-y-2 text-sm mb-4">
                <p><span className="font-medium">β-hCG:</span> {caseItem.betaHCG} mIU/mL</p>
                <p><span className="font-medium">Ultrasound:</span> {caseItem.ultrasound}</p>
                <p><span className="font-medium">Symptoms:</span> {caseItem.symptoms.join(', ')}</p>
                <p><span className="font-medium">Pain:</span> {caseItem.pain}</p>
              </div>
              <Button
                onClick={() => {
                  setSelectedCase(caseItem)
                  setShowAnswer(!showAnswer || selectedCase?.id !== caseItem.id)
                }}
                variant="outline"
                size="sm"
              >
                {selectedCase?.id === caseItem.id && showAnswer ? 'Hide' : 'Show'} Interpretation
              </Button>
              {selectedCase?.id === caseItem.id && showAnswer && (
                <div className="mt-4 p-4 bg-muted rounded-lg space-y-3">
                  <div>
                    <p className="font-semibold text-sm mb-1">Interpretation:</p>
                    <p className="text-sm text-muted-foreground">{caseItem.interpretation}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Management:</p>
                    <p className="text-sm text-muted-foreground">{caseItem.management}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Management Algorithm */}
      <Card>
        <CardHeader>
          <CardTitle>Management Pathways</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold">Expectant Management</h3>
            <p className="text-sm text-muted-foreground mt-1">
              For declining β-hCG levels in stable patients with suspected early pregnancy failure
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold">Medical Management (Methotrexate)</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Hemodynamically stable, unruptured, β-hCG typically &lt;5000, no fetal cardiac activity, able to follow up
            </p>
          </div>
          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-semibold">Surgical Management</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Hemodynamic instability, ruptured ectopic, high β-hCG, fetal cardiac activity, or patient preference
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Educational Disclaimer */}
      <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
        <p className="text-sm text-yellow-900 dark:text-yellow-200">
          <span className="font-semibold">Educational Content:</span> This material is for educational purposes only and uses synthetic data.
          All clinical decisions should be made in consultation with qualified healthcare providers following current evidence-based guidelines.
        </p>
      </div>
    </div>
  )
}
