import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'

export default function Placental() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-2">Placental Disorders</h1>
        <p className="text-muted-foreground">
          Distinguish between placental abruption and placenta previa
        </p>
      </div>

      {/* Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle>Abruption vs Previa: Key Differences</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-semibold">Feature</th>
                  <th className="text-left p-2 font-semibold">Placental Abruption</th>
                  <th className="text-left p-2 font-semibold">Placenta Previa</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 font-medium">Bleeding</td>
                  <td className="p-2">Painful, dark blood (may be concealed)</td>
                  <td className="p-2">Painless, bright red blood</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Uterine Tone</td>
                  <td className="p-2">Firm, tender, tetanic</td>
                  <td className="p-2">Soft, non-tender</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Fetal Status</td>
                  <td className="p-2">Often distressed (late decels, bradycardia)</td>
                  <td className="p-2">Usually reassuring</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Ultrasound</td>
                  <td className="p-2">May see retroplacental clot (not sensitive)</td>
                  <td className="p-2">Placenta over/near internal cervical os</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Risk Factors</td>
                  <td className="p-2">Hypertension, cocaine, trauma, prior abruption</td>
                  <td className="p-2">Prior C-section, multiparity, advanced age</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Exam</td>
                  <td className="p-2">Abdominal tenderness, rigid uterus</td>
                  <td className="p-2">NO digital exam until previa ruled out</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Placental Abruption */}
      <Card>
        <CardHeader>
          <CardTitle>Placental Abruption</CardTitle>
          <CardDescription>
            Premature separation of placenta from uterine wall
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Clinical Presentation</h3>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4">
              <li>Vaginal bleeding (80%) - may be concealed</li>
              <li>Abdominal/back pain</li>
              <li>Uterine tenderness and contractions</li>
              <li>Fetal distress or demise in severe cases</li>
            </ul>
          </div>
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Severity Classification</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-yellow-500 pl-4">
                <p className="font-medium">Grade 1 (Mild): ~40%</p>
                <p className="text-sm text-muted-foreground">Minimal bleeding, no distress, normal coagulation</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <p className="font-medium">Grade 2 (Moderate): ~45%</p>
                <p className="text-sm text-muted-foreground">Moderate bleeding, tetanic uterus, fetal distress possible, mild coagulopathy</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <p className="font-medium">Grade 3 (Severe): ~15%</p>
                <p className="text-sm text-muted-foreground">Heavy bleeding, severe pain, fetal demise, shock, DIC</p>
              </div>
            </div>
          </div>
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Management</h3>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4">
              <li>Hemodynamic stabilization (IV access, type & cross)</li>
              <li>Continuous fetal monitoring</li>
              <li>Coagulation studies (CBC, PT/PTT, fibrinogen)</li>
              <li>Delivery: emergency C-section if unstable or fetal distress; vaginal if stable and reassuring</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Placenta Previa */}
      <Card>
        <CardHeader>
          <CardTitle>Placenta Previa</CardTitle>
          <CardDescription>
            Placenta overlies or is near the internal cervical os
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Classification</h3>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4">
              <li><span className="font-medium">Complete:</span> Placenta completely covers internal os</li>
              <li><span className="font-medium">Partial:</span> Placenta partially covers internal os</li>
              <li><span className="font-medium">Marginal:</span> Placental edge within 2 cm of os</li>
              <li><span className="font-medium">Low-lying:</span> Placental edge &gt;2 cm but close to os</li>
            </ul>
          </div>
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Clinical Features</h3>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4">
              <li>Painless, bright red vaginal bleeding (classic triad: painless, bright, recurrent)</li>
              <li>Usually presents in 3rd trimester</li>
              <li>Fetus typically not in distress unless massive hemorrhage</li>
              <li>Ultrasound diagnostic</li>
            </ul>
          </div>
          <div className="border-t pt-4 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg -mx-2">
            <h3 className="font-semibold mb-2 text-red-900 dark:text-red-200">⚠️ Critical Rule</h3>
            <p className="text-sm text-red-900 dark:text-red-200">
              <span className="font-bold">NEVER perform digital cervical exam</span> in patients with vaginal bleeding until previa is ruled out by ultrasound.
              Digital exam can provoke massive hemorrhage.
            </p>
          </div>
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Management</h3>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4">
              <li>Expectant management if preterm and stable (hospitalization vs outpatient based on bleeding)</li>
              <li>Corticosteroids for fetal lung maturity if &lt;34 weeks</li>
              <li>Scheduled C-section at 36-37 weeks for complete/partial previa</li>
              <li>Emergency C-section if massive bleeding or fetal distress</li>
              <li>Prepare for hemorrhage: blood products, experienced team, possible hysterectomy</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Placenta Accreta Spectrum */}
      <Card>
        <CardHeader>
          <CardTitle>Placenta Accreta Spectrum</CardTitle>
          <CardDescription>
            Abnormal placental attachment, often associated with previa + prior C-section
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Risk dramatically increases with combination of placenta previa and prior cesarean delivery.
            Screen with ultrasound ± MRI. Requires planned delivery at tertiary center with experienced surgical team.
          </p>
          <div className="space-y-2 text-sm">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-medium">Accreta: ~75%</p>
              <p className="text-muted-foreground">Placenta adheres to myometrium</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <p className="font-medium">Increta: ~15%</p>
              <p className="text-muted-foreground">Placenta invades into myometrium</p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <p className="font-medium">Percreta: ~5%</p>
              <p className="text-muted-foreground">Placenta penetrates through serosa, may invade bladder/bowel</p>
            </div>
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
