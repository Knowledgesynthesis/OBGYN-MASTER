import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const fourTsCases = [
  {
    id: 1,
    scenario: 'Uterus is soft and boggy after delivery. Fundus above umbilicus.',
    answer: 'Tone (Uterine Atony)',
    management: 'Uterine massage, uterotonics (oxytocin, methylergonovine, misoprostol, carboprost), bimanual compression if refractory',
    notes: 'Most common cause of PPH (70-80%). Risk factors: overdistended uterus, prolonged labor, rapid labor, chorioamnionitis'
  },
  {
    id: 2,
    scenario: 'Placenta delivered but appears incomplete. Bleeding continues despite firm uterus.',
    answer: 'Tissue (Retained Products)',
    management: 'Manual exploration of uterus, ultrasound evaluation, possible D&C for retained placental fragments',
    notes: 'Retained placenta diagnosed if not delivered within 30 minutes. Can lead to infection if not addressed.'
  },
  {
    id: 3,
    scenario: 'Uterus is firm, but continuous bleeding from vaginal laceration noted.',
    answer: 'Trauma (Genital Tract Laceration)',
    management: 'Systematic inspection and repair of cervical, vaginal, and perineal lacerations. Ensure good lighting and anesthesia.',
    notes: 'Common with operative delivery, precipitous delivery, or large infant. Inspect carefully even with firm uterus.'
  },
  {
    id: 4,
    scenario: 'Ongoing bleeding despite firm uterus and no visible trauma. Labs show prolonged PT/PTT.',
    answer: 'Thrombin (Coagulopathy)',
    management: 'Correct coagulopathy with blood products (FFP, platelets, cryoprecipitate). Treat underlying cause (DIC, dilutional, inherited).',
    notes: 'Consider with abruption, IUD, HELLP, amniotic fluid embolism. Send PT/PTT/INR, fibrinogen, CBC.'
  }
]

export default function PPH() {
  const [selectedCase, setSelectedCase] = useState<number | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)

  const handleCaseClick = (id: number) => {
    if (selectedCase === id && showAnswer) {
      setShowAnswer(false)
      setSelectedCase(null)
    } else {
      setSelectedCase(id)
      setShowAnswer(true)
    }
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-2">Postpartum Hemorrhage (PPH)</h1>
        <p className="text-muted-foreground">
          Master the 4 Ts framework for diagnosing and managing PPH
        </p>
      </div>

      {/* Definition */}
      <Card>
        <CardHeader>
          <CardTitle>Definition of PPH</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border-l-4 border-red-500 pl-4">
              <p className="font-semibold mb-1">Vaginal Delivery</p>
              <p className="text-sm text-muted-foreground">Blood loss ≥500 mL or causing hemodynamic instability</p>
            </div>
            <div className="border-l-4 border-red-600 pl-4">
              <p className="font-semibold mb-1">Cesarean Delivery</p>
              <p className="text-sm text-muted-foreground">Blood loss ≥1000 mL or causing hemodynamic instability</p>
            </div>
          </div>
          <div className="border-t pt-3">
            <p className="font-semibold mb-2">Timing</p>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4">
              <li><span className="font-medium">Primary (Early) PPH:</span> Within 24 hours of delivery</li>
              <li><span className="font-medium">Secondary (Late) PPH:</span> 24 hours to 12 weeks postpartum</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* The 4 Ts */}
      <Card>
        <CardHeader>
          <CardTitle>The 4 Ts Framework</CardTitle>
          <CardDescription>
            A systematic approach to identifying PPH causes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2">Tone (70-80%)</h3>
              <p className="text-sm mb-2"><span className="font-medium">Cause:</span> Uterine atony</p>
              <p className="text-sm mb-2"><span className="font-medium">Findings:</span> Soft, boggy uterus; fundus above umbilicus</p>
              <p className="text-sm"><span className="font-medium">Risk factors:</span> Overdistended uterus (twins, polyhydramnios, macrosomia), prolonged/rapid labor, multiparity, chorioamnionitis, magnesium sulfate</p>
            </div>

            <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2">Tissue (10%)</h3>
              <p className="text-sm mb-2"><span className="font-medium">Cause:</span> Retained placental tissue</p>
              <p className="text-sm mb-2"><span className="font-medium">Findings:</span> Incomplete placenta, retained cotyledons/membranes</p>
              <p className="text-sm"><span className="font-medium">Risk factors:</span> Prior uterine surgery, placenta accreta spectrum, uterine anomalies</p>
            </div>

            <div className="p-4 border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2">Trauma (20%)</h3>
              <p className="text-sm mb-2"><span className="font-medium">Cause:</span> Genital tract lacerations (cervical, vaginal, perineal), uterine rupture/inversion</p>
              <p className="text-sm mb-2"><span className="font-medium">Findings:</span> Firm uterus with continued bleeding; visible lacerations</p>
              <p className="text-sm"><span className="font-medium">Risk factors:</span> Operative delivery, precipitous delivery, shoulder dystocia, macrosomia</p>
            </div>

            <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 rounded-r-lg">
              <h3 className="font-semibold text-lg mb-2">Thrombin (1%)</h3>
              <p className="text-sm mb-2"><span className="font-medium">Cause:</span> Coagulopathy (inherited or acquired)</p>
              <p className="text-sm mb-2"><span className="font-medium">Findings:</span> Prolonged bleeding, oozing from IV sites, abnormal coagulation studies</p>
              <p className="text-sm"><span className="font-medium">Risk factors:</span> Abruption, HELLP, IUD, amniotic fluid embolism, sepsis, von Willebrand disease</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Practice Cases */}
      <Card>
        <CardHeader>
          <CardTitle>Apply the 4 Ts Framework</CardTitle>
          <CardDescription>
            Identify which of the 4 Ts is responsible in each scenario
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {fourTsCases.map((caseItem) => (
            <div key={caseItem.id} className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Case {caseItem.id}</h3>
              <p className="text-sm mb-4 text-muted-foreground">{caseItem.scenario}</p>
              <Button
                onClick={() => handleCaseClick(caseItem.id)}
                variant="outline"
                size="sm"
              >
                {selectedCase === caseItem.id && showAnswer ? 'Hide' : 'Show'} Answer
              </Button>
              {selectedCase === caseItem.id && showAnswer && (
                <div className="mt-4 p-4 bg-muted rounded-lg space-y-2">
                  <p className="font-semibold text-primary-600 dark:text-primary-400">{caseItem.answer}</p>
                  <div>
                    <p className="text-sm font-medium mb-1">Management:</p>
                    <p className="text-sm text-muted-foreground">{caseItem.management}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-1">Notes:</p>
                    <p className="text-sm text-muted-foreground">{caseItem.notes}</p>
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
          <CardTitle>Stepwise Management of PPH</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <div>
                <p className="font-semibold">Initial Response</p>
                <p className="text-sm text-muted-foreground">Call for help, vitals, two large-bore IVs, labs (CBC, coags, type & cross), oxygen</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <div>
                <p className="font-semibold">Identify Cause (4 Ts)</p>
                <p className="text-sm text-muted-foreground">Assess uterine tone, examine placenta, inspect for trauma, consider coagulopathy</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <div>
                <p className="font-semibold">First-Line: Uterine Massage + Uterotonics</p>
                <p className="text-sm text-muted-foreground">Oxytocin IV infusion (most common first-line), methylergonovine IM (avoid if HTN), misoprostol PR/PO, carboprost IM (avoid if asthma)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
              <div>
                <p className="font-semibold">Second-Line: Tamponade/Compression</p>
                <p className="text-sm text-muted-foreground">Bimanual uterine compression, intrauterine balloon tamponade (Bakri balloon)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">5</div>
              <div>
                <p className="font-semibold">Surgical Interventions</p>
                <p className="text-sm text-muted-foreground">Uterine artery embolization, compression sutures (B-Lynch), uterine artery ligation, hysterectomy (last resort)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">!</div>
              <div>
                <p className="font-semibold">Throughout: Resuscitation</p>
                <p className="text-sm text-muted-foreground">Crystalloid/blood products, maintain perfusion, massive transfusion protocol if indicated</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Prevention */}
      <Card>
        <CardHeader>
          <CardTitle>Prevention Strategies</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-2 ml-4">
            <li><span className="font-medium">Active management of third stage:</span> Oxytocin administration after anterior shoulder delivery, controlled cord traction, uterine massage</li>
            <li><span className="font-medium">Risk stratification:</span> Identify high-risk patients (prior PPH, fibroids, abruption, preeclampsia, multiple gestation)</li>
            <li><span className="font-medium">Preparation:</span> Type & screen, large-bore IV access, cross-matched blood available for high-risk patients</li>
          </ul>
        </CardContent>
      </Card>

      {/* Educational Disclaimer */}
      <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
        <p className="text-sm text-yellow-900 dark:text-yellow-200">
          <span className="font-semibold">Educational Content:</span> This material is for educational purposes only.
          All medication dosing and management must follow institutional protocols and current evidence-based guidelines.
        </p>
      </div>
    </div>
  )
}
