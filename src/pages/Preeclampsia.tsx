import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { AlertTriangle, CheckCircle } from 'lucide-react'

interface SeverityInput {
  systolicBP: string
  diastolicBP: string
  platelets: string
  creatinine: string
  transaminases: string
  symptoms: string[]
}

const symptomOptions = [
  'Severe headache',
  'Visual disturbances',
  'Right upper quadrant pain',
  'Epigastric pain',
  'Pulmonary edema',
]

export default function Preeclampsia() {
  const [inputs, setInputs] = useState<SeverityInput>({
    systolicBP: '',
    diastolicBP: '',
    platelets: '',
    creatinine: '',
    transaminases: '',
    symptoms: [],
  })
  const [result, setResult] = useState<{ severity: string; features: string[] } | null>(null)

  const toggleSymptom = (symptom: string) => {
    setInputs(prev => ({
      ...prev,
      symptoms: prev.symptoms.includes(symptom)
        ? prev.symptoms.filter(s => s !== symptom)
        : [...prev.symptoms, symptom]
    }))
  }

  const assessSeverity = () => {
    const severeFeatures: string[] = []

    const systolic = parseFloat(inputs.systolicBP)
    const diastolic = parseFloat(inputs.diastolicBP)
    const platelets = parseFloat(inputs.platelets)
    const creatinine = parseFloat(inputs.creatinine)
    const transaminases = parseFloat(inputs.transaminases)

    if (systolic >= 160 || diastolic >= 110) {
      severeFeatures.push('Severe hypertension (BP ≥160/110)')
    }
    if (platelets < 100) {
      severeFeatures.push(`Thrombocytopenia (${platelets}k, <100k)`)
    }
    if (creatinine > 1.1) {
      severeFeatures.push(`Elevated creatinine (${creatinine}, >1.1 mg/dL)`)
    }
    if (transaminases > 70) {
      severeFeatures.push(`Elevated liver enzymes (${transaminases}U/L, >2× normal)`)
    }
    if (inputs.symptoms.length > 0) {
      inputs.symptoms.forEach(s => severeFeatures.push(s))
    }

    const severity = severeFeatures.length > 0
      ? 'Preeclampsia with Severe Features'
      : 'Preeclampsia without Severe Features'

    setResult({ severity, features: severeFeatures })
  }

  const reset = () => {
    setInputs({
      systolicBP: '',
      diastolicBP: '',
      platelets: '',
      creatinine: '',
      transaminases: '',
      symptoms: [],
    })
    setResult(null)
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-2">Preeclampsia & Eclampsia</h1>
        <p className="text-muted-foreground">
          Understand hypertensive disorders of pregnancy and identify severe features
        </p>
      </div>

      {/* Diagnostic Criteria */}
      <Card>
        <CardHeader>
          <CardTitle>Diagnostic Criteria for Preeclampsia</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Blood Pressure ≥140/90 (after 20 weeks) + ONE of:</h3>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4">
              <li>Proteinuria (≥300 mg/24hr or urine protein:creatinine ≥0.3)</li>
              <li>OR any severe feature (in absence of proteinuria)</li>
            </ul>
          </div>
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Severe Features Include:</h3>
            <div className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground mb-1">Blood Pressure</p>
                <p>Systolic ≥160 or Diastolic ≥110 (on two occasions 4+ hours apart)</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Thrombocytopenia</p>
                <p>Platelets &lt;100,000/μL</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Renal</p>
                <p>Creatinine &gt;1.1 mg/dL or doubling of baseline</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Liver</p>
                <p>Transaminases &gt;2× normal, RUQ/epigastric pain</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Neurologic</p>
                <p>Severe headache, visual disturbances, altered mental status</p>
              </div>
              <div>
                <p className="font-medium text-foreground mb-1">Pulmonary</p>
                <p>Pulmonary edema</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Severity Builder */}
      <Card>
        <CardHeader>
          <CardTitle>Preeclampsia Severity Assessment Tool</CardTitle>
          <CardDescription>
            Enter patient data to determine if severe features are present
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Systolic BP (mmHg)</label>
              <input
                type="number"
                value={inputs.systolicBP}
                onChange={(e) => setInputs(prev => ({ ...prev, systolicBP: e.target.value }))}
                className="w-full px-3 py-2 border rounded-md bg-background"
                placeholder="e.g., 165"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Diastolic BP (mmHg)</label>
              <input
                type="number"
                value={inputs.diastolicBP}
                onChange={(e) => setInputs(prev => ({ ...prev, diastolicBP: e.target.value }))}
                className="w-full px-3 py-2 border rounded-md bg-background"
                placeholder="e.g., 110"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Platelets (×1000/μL)</label>
              <input
                type="number"
                value={inputs.platelets}
                onChange={(e) => setInputs(prev => ({ ...prev, platelets: e.target.value }))}
                className="w-full px-3 py-2 border rounded-md bg-background"
                placeholder="e.g., 92"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">Creatinine (mg/dL)</label>
              <input
                type="number"
                step="0.1"
                value={inputs.creatinine}
                onChange={(e) => setInputs(prev => ({ ...prev, creatinine: e.target.value }))}
                className="w-full px-3 py-2 border rounded-md bg-background"
                placeholder="e.g., 1.3"
              />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm font-medium mb-1 block">Transaminases (U/L)</label>
              <input
                type="number"
                value={inputs.transaminases}
                onChange={(e) => setInputs(prev => ({ ...prev, transaminases: e.target.value }))}
                className="w-full px-3 py-2 border rounded-md bg-background"
                placeholder="e.g., 120"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Symptoms</label>
            <div className="space-y-2">
              {symptomOptions.map(symptom => (
                <label key={symptom} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inputs.symptoms.includes(symptom)}
                    onChange={() => toggleSymptom(symptom)}
                    className="rounded"
                  />
                  <span className="text-sm">{symptom}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <Button onClick={assessSeverity}>Assess Severity</Button>
            <Button onClick={reset} variant="outline">Reset</Button>
          </div>

          {result && (
            <div className={`p-4 rounded-lg border-2 ${
              result.severity.includes('Severe')
                ? 'bg-red-50 dark:bg-red-900/20 border-red-500'
                : 'bg-green-50 dark:bg-green-900/20 border-green-500'
            }`}>
              <div className="flex items-center gap-2 mb-3">
                {result.severity.includes('Severe') ? (
                  <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
                ) : (
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                )}
                <h3 className="font-semibold text-lg">{result.severity}</h3>
              </div>
              {result.features.length > 0 && (
                <div>
                  <p className="font-medium text-sm mb-2">Identified Severe Features:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {result.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-4 pt-4 border-t">
                <p className="font-semibold text-sm mb-1">Management Considerations:</p>
                <p className="text-sm">
                  {result.severity.includes('Severe')
                    ? 'Magnesium sulfate for seizure prophylaxis. Antihypertensive therapy for BP ≥160/110. Consider delivery timing based on gestational age.'
                    : 'Close monitoring. Weekly labs and fetal surveillance. Delivery typically at 37 weeks or with development of severe features.'
                  }
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Eclampsia */}
      <Card>
        <CardHeader>
          <CardTitle>Eclampsia</CardTitle>
          <CardDescription>
            New-onset seizures in patient with preeclampsia
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-semibold">Immediate Management</h3>
            <ol className="text-sm text-muted-foreground list-decimal list-inside space-y-1 mt-2 ml-2">
              <li>Ensure patient safety and protect airway</li>
              <li>Magnesium sulfate IV (loading and maintenance dosing)</li>
              <li>Antihypertensive therapy if BP ≥160/110</li>
              <li>Evaluate for delivery after maternal stabilization</li>
            </ol>
          </div>
          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm">
              <span className="font-semibold">Note:</span> Eclampsia can occur antepartum, intrapartum, or postpartum (up to 4-6 weeks).
              Magnesium sulfate is the drug of choice for both treatment and prophylaxis.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Educational Disclaimer */}
      <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
        <p className="text-sm text-yellow-900 dark:text-yellow-200">
          <span className="font-semibold">Educational Content:</span> This material is for educational purposes only.
          All medication dosing and clinical management must follow institutional protocols and current guidelines.
        </p>
      </div>
    </div>
  )
}
