import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface OGTTInput {
  fasting: string
  oneHour: string
  twoHour: string
  threeHour: string
}

export default function GDM() {
  const [testType, setTestType] = useState<'one-step' | 'two-step'>('one-step')
  const [inputs, setInputs] = useState<OGTTInput>({
    fasting: '',
    oneHour: '',
    twoHour: '',
    threeHour: '',
  })
  const [result, setResult] = useState<{ diagnosis: string; abnormalValues: string[] } | null>(null)

  const interpretTest = () => {
    const fasting = parseFloat(inputs.fasting)
    const oneHour = parseFloat(inputs.oneHour)
    const twoHour = parseFloat(inputs.twoHour)
    const threeHour = parseFloat(inputs.threeHour)
    const abnormal: string[] = []

    if (testType === 'one-step') {
      // 75g OGTT (IADPSG criteria)
      if (fasting >= 92) abnormal.push(`Fasting: ${fasting} mg/dL (threshold ≥92)`)
      if (oneHour >= 180) abnormal.push(`1-hour: ${oneHour} mg/dL (threshold ≥180)`)
      if (twoHour >= 153) abnormal.push(`2-hour: ${twoHour} mg/dL (threshold ≥153)`)

      const diagnosis = abnormal.length > 0
        ? 'Gestational Diabetes Mellitus (GDM)'
        : 'Normal glucose tolerance'
      setResult({ diagnosis, abnormalValues: abnormal })
    } else {
      // 100g OGTT (Carpenter-Coustan criteria)
      if (fasting >= 95) abnormal.push(`Fasting: ${fasting} mg/dL (threshold ≥95)`)
      if (oneHour >= 180) abnormal.push(`1-hour: ${oneHour} mg/dL (threshold ≥180)`)
      if (twoHour >= 155) abnormal.push(`2-hour: ${twoHour} mg/dL (threshold ≥155)`)
      if (threeHour >= 140) abnormal.push(`3-hour: ${threeHour} mg/dL (threshold ≥140)`)

      const diagnosis = abnormal.length >= 2
        ? 'Gestational Diabetes Mellitus (GDM)'
        : abnormal.length === 1
        ? 'Impaired glucose tolerance (1 abnormal value)'
        : 'Normal glucose tolerance'
      setResult({ diagnosis, abnormalValues: abnormal })
    }
  }

  const reset = () => {
    setInputs({ fasting: '', oneHour: '', twoHour: '', threeHour: '' })
    setResult(null)
  }

  // Sample data for visualization
  const thresholds = testType === 'one-step'
    ? [
        { time: 'Fasting', threshold: 92, normal: 85 },
        { time: '1 hour', threshold: 180, normal: 150 },
        { time: '2 hour', threshold: 153, normal: 120 },
      ]
    : [
        { time: 'Fasting', threshold: 95, normal: 85 },
        { time: '1 hour', threshold: 180, normal: 150 },
        { time: '2 hour', threshold: 155, normal: 125 },
        { time: '3 hour', threshold: 140, normal: 110 },
      ]

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-2">Gestational Diabetes Mellitus (GDM)</h1>
        <p className="text-muted-foreground">
          Master GDM screening, diagnosis, and management strategies
        </p>
      </div>

      {/* Screening Overview */}
      <Card>
        <CardHeader>
          <CardTitle>GDM Screening Approaches</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">One-Step Approach (IADPSG/ADA)</h3>
            <p className="text-sm text-muted-foreground mb-2">
              75g OGTT at 24-28 weeks. GDM diagnosed if ≥1 value meets or exceeds threshold:
            </p>
            <ul className="text-sm text-muted-foreground list-disc list-inside ml-4 space-y-1">
              <li>Fasting: ≥92 mg/dL</li>
              <li>1-hour: ≥180 mg/dL</li>
              <li>2-hour: ≥153 mg/dL</li>
            </ul>
          </div>
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Two-Step Approach (ACOG)</h3>
            <p className="text-sm text-muted-foreground mb-2">
              <span className="font-medium">Step 1:</span> 50g glucose challenge test (GCT) at 24-28 weeks
            </p>
            <p className="text-sm text-muted-foreground mb-2 ml-4">
              If ≥140 mg/dL (or ≥130 for higher sensitivity), proceed to Step 2
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              <span className="font-medium">Step 2:</span> 100g OGTT (Carpenter-Coustan). GDM if ≥2 values abnormal:
            </p>
            <ul className="text-sm text-muted-foreground list-disc list-inside ml-4 space-y-1">
              <li>Fasting: ≥95 mg/dL</li>
              <li>1-hour: ≥180 mg/dL</li>
              <li>2-hour: ≥155 mg/dL</li>
              <li>3-hour: ≥140 mg/dL</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* OGTT Threshold Visualization */}
      <Card>
        <CardHeader>
          <CardTitle>OGTT Diagnostic Thresholds</CardTitle>
          <CardDescription>
            Visual representation of glucose thresholds over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex gap-2">
            <Button
              variant={testType === 'one-step' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setTestType('one-step')}
            >
              One-Step (75g)
            </Button>
            <Button
              variant={testType === 'two-step' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setTestType('two-step')}
            >
              Two-Step (100g)
            </Button>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={thresholds}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis label={{ value: 'Glucose (mg/dL)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Bar dataKey="normal" fill="#22c55e" name="Normal example" />
                <Bar dataKey="threshold" fill="#ef4444" name="Diagnostic threshold" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Interactive Interpreter */}
      <Card>
        <CardHeader>
          <CardTitle>OGTT Interpretation Tool</CardTitle>
          <CardDescription>
            Enter glucose values to determine GDM diagnosis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex gap-2 mb-4">
            <Button
              variant={testType === 'one-step' ? 'default' : 'outline'}
              size="sm"
              onClick={() => {
                setTestType('one-step')
                reset()
              }}
            >
              One-Step (75g)
            </Button>
            <Button
              variant={testType === 'two-step' ? 'default' : 'outline'}
              size="sm"
              onClick={() => {
                setTestType('two-step')
                reset()
              }}
            >
              Two-Step (100g)
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Fasting (mg/dL)</label>
              <input
                type="number"
                value={inputs.fasting}
                onChange={(e) => setInputs(prev => ({ ...prev, fasting: e.target.value }))}
                className="w-full px-3 py-2 border rounded-md bg-background"
                placeholder={testType === 'one-step' ? 'Threshold: ≥92' : 'Threshold: ≥95'}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">1-hour (mg/dL)</label>
              <input
                type="number"
                value={inputs.oneHour}
                onChange={(e) => setInputs(prev => ({ ...prev, oneHour: e.target.value }))}
                className="w-full px-3 py-2 border rounded-md bg-background"
                placeholder="Threshold: ≥180"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1 block">2-hour (mg/dL)</label>
              <input
                type="number"
                value={inputs.twoHour}
                onChange={(e) => setInputs(prev => ({ ...prev, twoHour: e.target.value }))}
                className="w-full px-3 py-2 border rounded-md bg-background"
                placeholder={testType === 'one-step' ? 'Threshold: ≥153' : 'Threshold: ≥155'}
              />
            </div>
            {testType === 'two-step' && (
              <div>
                <label className="text-sm font-medium mb-1 block">3-hour (mg/dL)</label>
                <input
                  type="number"
                  value={inputs.threeHour}
                  onChange={(e) => setInputs(prev => ({ ...prev, threeHour: e.target.value }))}
                  className="w-full px-3 py-2 border rounded-md bg-background"
                  placeholder="Threshold: ≥140"
                />
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <Button onClick={interpretTest}>Interpret Results</Button>
            <Button onClick={reset} variant="outline">Reset</Button>
          </div>

          {result && (
            <div className={`p-4 rounded-lg border-2 ${
              result.diagnosis.includes('GDM')
                ? 'bg-red-50 dark:bg-red-900/20 border-red-500'
                : 'bg-green-50 dark:bg-green-900/20 border-green-500'
            }`}>
              <h3 className="font-semibold text-lg mb-3">{result.diagnosis}</h3>
              {result.abnormalValues.length > 0 && (
                <div className="mb-4">
                  <p className="font-medium text-sm mb-2">Abnormal Values:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {result.abnormalValues.map((value, idx) => (
                      <li key={idx}>{value}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="pt-4 border-t">
                <p className="font-semibold text-sm mb-1">Management:</p>
                <p className="text-sm">
                  {result.diagnosis.includes('GDM')
                    ? 'Initiate diet modification and glucose monitoring. Target fasting <95 mg/dL, 1-hour postprandial <140 mg/dL, or 2-hour postprandial <120 mg/dL. Consider insulin if targets not met with diet alone.'
                    : 'Continue routine prenatal care. Repeat screening if risk factors develop.'
                  }
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Management */}
      <Card>
        <CardHeader>
          <CardTitle>GDM Management</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold">Diet & Exercise</h3>
            <p className="text-sm text-muted-foreground mt-1">
              First-line therapy. Medical nutrition therapy with carbohydrate distribution and portion control.
              Moderate exercise as tolerated.
            </p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold">Glucose Monitoring</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Self-monitoring 4× daily (fasting + 1 or 2 hours postprandial). Goals: fasting &lt;95, 1-hr &lt;140, 2-hr &lt;120 mg/dL
            </p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold">Pharmacotherapy</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Insulin if glucose targets not met despite diet/exercise. Some use metformin or glyburide as alternatives.
            </p>
          </div>
          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="font-semibold">Delivery Timing</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Well-controlled: 39-40 weeks. Requiring medication or poor control: 37-39 weeks. Fetal surveillance starting 32-36 weeks.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Educational Disclaimer */}
      <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
        <p className="text-sm text-yellow-900 dark:text-yellow-200">
          <span className="font-semibold">Educational Content:</span> This material is for educational purposes only.
          All management decisions must follow institutional protocols and current evidence-based guidelines.
        </p>
      </div>
    </div>
  )
}
