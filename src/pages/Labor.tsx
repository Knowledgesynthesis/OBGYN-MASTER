import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts'

// Sample labor curve data
const normalLaborData = [
  { time: 0, dilation: 3 },
  { time: 1, dilation: 4 },
  { time: 2, dilation: 5 },
  { time: 3, dilation: 6 },
  { time: 4, dilation: 7.5 },
  { time: 5, dilation: 9 },
  { time: 6, dilation: 10 },
]

const protractedData = [
  { time: 0, dilation: 3 },
  { time: 2, dilation: 4 },
  { time: 4, dilation: 5 },
  { time: 6, dilation: 6 },
  { time: 8, dilation: 7 },
  { time: 10, dilation: 8 },
  { time: 12, dilation: 9 },
]

const arrestData = [
  { time: 0, dilation: 4 },
  { time: 1, dilation: 5 },
  { time: 2, dilation: 6 },
  { time: 3, dilation: 6 },
  { time: 4, dilation: 6 },
  { time: 5, dilation: 6 },
  { time: 6, dilation: 6 },
]

export default function Labor() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-2">Labor Progression</h1>
        <p className="text-muted-foreground">
          Understand normal labor patterns and recognize abnormalities
        </p>
      </div>

      {/* Stages of Labor */}
      <Card>
        <CardHeader>
          <CardTitle>Stages and Phases of Labor</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold mb-2">First Stage: Cervical Dilation (0 → 10 cm)</h3>
            <div className="ml-4 space-y-2 text-sm">
              <div>
                <p className="font-medium">Latent Phase: 0-6 cm</p>
                <p className="text-muted-foreground">Highly variable duration. Regular contractions establish. Cervical effacement occurs.</p>
              </div>
              <div>
                <p className="font-medium">Active Phase: 6-10 cm</p>
                <p className="text-muted-foreground">More rapid, predictable dilation. Typically begins at 6 cm.</p>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold mb-2">Second Stage: Full Dilation → Delivery</h3>
            <p className="text-sm text-muted-foreground">
              Begins at complete dilation (10 cm), ends with delivery of infant. Maternal pushing efforts.
              Duration varies: nulliparous up to 3h (4h with epidural), multiparous up to 2h (3h with epidural).
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold mb-2">Third Stage: Delivery → Placental Expulsion</h3>
            <p className="text-sm text-muted-foreground">
              Begins after infant delivery, ends with placental delivery. Typically 5-30 minutes.
              Retained placenta diagnosed if not delivered by 30 minutes.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="font-semibold mb-2">Fourth Stage: First 2 Hours Postpartum</h3>
            <p className="text-sm text-muted-foreground">
              Period of highest risk for postpartum hemorrhage. Close monitoring of vital signs, uterine tone, bleeding.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Normal Labor Curve */}
      <Card>
        <CardHeader>
          <CardTitle>Normal Active Labor Progression</CardTitle>
          <CardDescription>
            Typical cervical dilation pattern in active phase (after 6 cm)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={normalLaborData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" label={{ value: 'Hours', position: 'insideBottom', offset: -5 }} />
                <YAxis domain={[0, 10]} label={{ value: 'Cervical Dilation (cm)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <ReferenceLine y={6} stroke="#888" strokeDasharray="3 3" label="Active phase" />
                <Line type="monotone" dataKey="dilation" stroke="#22c55e" strokeWidth={3} name="Normal progression" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Modern studies show active phase dilation of ~0.5-1.2 cm/hour (slower than traditional Friedman curves suggested).
          </p>
        </CardContent>
      </Card>

      {/* Abnormal Labor */}
      <Card>
        <CardHeader>
          <CardTitle>Abnormal Labor Patterns</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Protracted Labor</h3>
            <div className="h-64 mb-3">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={protractedData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" label={{ value: 'Hours', position: 'insideBottom', offset: -5 }} />
                  <YAxis domain={[0, 10]} label={{ value: 'Dilation (cm)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Line type="monotone" dataKey="dilation" stroke="#eab308" strokeWidth={3} name="Protracted" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Definition:</span> Abnormally slow but progressive dilation or descent.
              Causes: inadequate contractions, cephalopelvic disproportion, malposition.
            </p>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold mb-3">Arrest of Dilation</h3>
            <div className="h-64 mb-3">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={arrestData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" label={{ value: 'Hours', position: 'insideBottom', offset: -5 }} />
                  <YAxis domain={[0, 10]} label={{ value: 'Dilation (cm)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <ReferenceLine x={2} stroke="#ef4444" strokeDasharray="3 3" label="4h mark" />
                  <Line type="monotone" dataKey="dilation" stroke="#ef4444" strokeWidth={3} name="Arrest" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-muted-foreground mb-2">
              <span className="font-medium">Definition:</span> Cessation of cervical dilation for ≥4 hours with adequate contractions,
              or ≥6 hours with inadequate contractions (despite oxytocin ± amniotomy).
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Management:</span> Cesarean delivery typically indicated after excluding reversible causes.
            </p>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold mb-2">Arrest of Descent</h3>
            <p className="text-sm text-muted-foreground mb-2">
              <span className="font-medium">Definition:</span> Lack of fetal descent in second stage
            </p>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4">
              <li>Nulliparous: No descent after 3 hours with epidural (2 hours without)</li>
              <li>Multiparous: No descent after 2 hours with epidural (1 hour without)</li>
            </ul>
            <p className="text-sm text-muted-foreground mt-2">
              <span className="font-medium">Management:</span> Operative vaginal delivery (if safe criteria met) vs cesarean delivery
            </p>
          </div>
        </CardContent>
      </Card>

      {/* The Three Ps */}
      <Card>
        <CardHeader>
          <CardTitle>The Three Ps of Labor</CardTitle>
          <CardDescription>
            Key factors affecting labor progression
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">
              <h3 className="font-semibold mb-2">Power (Contractions)</h3>
              <p className="text-sm text-muted-foreground">
                Uterine contractions must be adequate in frequency, duration, and intensity.
                Inadequate contractions → augmentation with oxytocin.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-r-lg">
              <h3 className="font-semibold mb-2">Passenger (Fetus)</h3>
              <p className="text-sm text-muted-foreground">
                Fetal size, presentation, position, and attitude affect labor. Macrosomia, asynclitism,
                occiput posterior position can prolong labor.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg">
              <h3 className="font-semibold mb-2">Pelvis (Passage)</h3>
              <p className="text-sm text-muted-foreground">
                Maternal pelvic dimensions and shape. Cephalopelvic disproportion (CPD) occurs when fetal head
                cannot pass through maternal pelvis.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Induction and Augmentation */}
      <Card>
        <CardHeader>
          <CardTitle>Labor Induction & Augmentation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Cervical Ripening (Unfavorable Cervix)</h3>
            <p className="text-sm text-muted-foreground mb-2">
              <span className="font-medium">Bishop Score &lt;6:</span> Cervical ripening recommended before induction
            </p>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4">
              <li>Mechanical: Foley balloon catheter</li>
              <li>Prostaglandins: Misoprostol, dinoprostone</li>
            </ul>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Induction/Augmentation</h3>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4">
              <li><span className="font-medium">Oxytocin:</span> IV infusion, titrate to achieve adequate contractions (3-5 in 10 min)</li>
              <li><span className="font-medium">Amniotomy:</span> Artificial rupture of membranes (if not already ruptured)</li>
            </ul>
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
