import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'

export default function Cholestasis() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-2">Intrahepatic Cholestasis of Pregnancy (ICP)</h1>
        <p className="text-muted-foreground">
          Recognize and manage this pruritic condition with fetal implications
        </p>
      </div>

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle>What is ICP?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Intrahepatic cholestasis of pregnancy is a liver disorder characterized by pruritus and elevated bile acids,
            typically presenting in the 3rd trimester. It poses minimal maternal risk but is associated with increased
            fetal risks including preterm birth and, in severe cases, stillbirth.
          </p>
          <div className="border-l-4 border-primary-500 pl-4 bg-primary-50 dark:bg-primary-900/20 p-3 rounded-r-lg">
            <p className="text-sm font-medium">
              Incidence: 0.5-2% of pregnancies (higher in certain populations, e.g., Chile, Scandinavia)
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Clinical Presentation */}
      <Card>
        <CardHeader>
          <CardTitle>Clinical Presentation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Cardinal Symptom: Pruritus</h3>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4">
              <li>Intense itching, often worse at night</li>
              <li>Typically starts on palms and soles</li>
              <li>May spread to trunk and extremities</li>
              <li>No primary rash (excoriations from scratching may be present)</li>
              <li>Usually begins in 3rd trimester (can occur earlier)</li>
            </ul>
          </div>
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Laboratory Findings</h3>
            <div className="space-y-2 text-sm">
              <div className="border-l-4 border-red-500 pl-4">
                <p className="font-medium">Total Bile Acids (Diagnostic)</p>
                <p className="text-muted-foreground">Elevated (≥10 μmol/L abnormal; ≥40 μmol/L = severe)</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <p className="font-medium">Transaminases (AST/ALT)</p>
                <p className="text-muted-foreground">Mildly elevated (typically 2-5× normal)</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-medium">Bilirubin</p>
                <p className="text-muted-foreground">Normal or mildly elevated (&lt;4-5 mg/dL)</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Risk Assessment */}
      <Card>
        <CardHeader>
          <CardTitle>Fetal Risk Stratification by Bile Acid Level</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20 rounded-r-lg">
              <p className="font-semibold mb-1">Mild (&lt;40 μmol/L)</p>
              <p className="text-sm text-muted-foreground">Lower fetal risk. Weekly monitoring. Delivery at 37-38 weeks.</p>
            </div>
            <div className="p-4 border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 rounded-r-lg">
              <p className="font-semibold mb-1">Moderate (40-99 μmol/L)</p>
              <p className="text-sm text-muted-foreground">Increased stillbirth risk. Twice-weekly monitoring. Delivery at 36-37 weeks.</p>
            </div>
            <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 rounded-r-lg">
              <p className="font-semibold mb-1">Severe (≥100 μmol/L)</p>
              <p className="text-sm text-muted-foreground">Highest risk. Frequent monitoring. Consider delivery at 36 weeks or earlier.</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Management */}
      <Card>
        <CardHeader>
          <CardTitle>Management Strategies</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Maternal Treatment</h3>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4">
              <li><span className="font-medium">Ursodeoxycholic acid (UDCA):</span> First-line treatment. Improves maternal symptoms and may improve fetal outcomes.</li>
              <li><span className="font-medium">Antihistamines:</span> May provide symptomatic relief for pruritus</li>
              <li><span className="font-medium">Vitamin K:</span> If prolonged PT/INR (rare)</li>
            </ul>
          </div>
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Fetal Surveillance</h3>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4">
              <li>Antenatal testing (NST/BPP) starting at diagnosis</li>
              <li>Frequency based on bile acid levels (1-2× weekly)</li>
              <li>Weekly bile acid and LFT monitoring</li>
            </ul>
          </div>
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Delivery Timing</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Balanced approach between fetal maturity and stillbirth risk:
            </p>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4">
              <li>Mild ICP: 37-38 weeks</li>
              <li>Moderate-Severe ICP: 36-37 weeks (consider earlier if very high bile acids)</li>
              <li>Corticosteroids if delivery planned &lt;37 weeks</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Differential Diagnosis */}
      <Card>
        <CardHeader>
          <CardTitle>Differential Diagnosis of Pruritus in Pregnancy</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm space-y-2">
            <li className="flex items-start">
              <span className="font-medium w-48">ICP:</span>
              <span className="text-muted-foreground">No rash, elevated bile acids</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium w-48">PUPPP:</span>
              <span className="text-muted-foreground">Urticarial papules/plaques, normal labs, usually 3rd trimester/postpartum</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium w-48">Pemphigoid gestationis:</span>
              <span className="text-muted-foreground">Bullous lesions, periumbilical distribution</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium w-48">Atopic eruption:</span>
              <span className="text-muted-foreground">Eczematous rash, often with atopic history</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Postpartum */}
      <Card>
        <CardHeader>
          <CardTitle>Postpartum Considerations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Symptoms typically resolve within days to weeks after delivery. Bile acids and LFTs should normalize postpartum.
          </p>
          <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-r-lg">
            <p className="text-sm">
              <span className="font-semibold">Recurrence risk:</span> 60-90% in subsequent pregnancies. Counseling recommended.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Educational Disclaimer */}
      <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
        <p className="text-sm text-yellow-900 dark:text-yellow-200">
          <span className="font-semibold">Educational Content:</span> This material is for educational purposes only.
          All clinical decisions must be made by qualified healthcare providers following current guidelines.
        </p>
      </div>
    </div>
  )
}
