import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'

export default function Loss() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-2">Early Pregnancy Loss</h1>
        <p className="text-muted-foreground">
          Classify and manage different types of spontaneous abortion
        </p>
      </div>

      {/* Classification */}
      <Card>
        <CardHeader>
          <CardTitle>Types of Early Pregnancy Loss</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-500 pl-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-r-lg">
              <h3 className="font-semibold mb-2">Threatened Abortion</h3>
              <p className="text-sm mb-2"><span className="font-medium">Presentation:</span> Vaginal bleeding, closed cervix</p>
              <p className="text-sm mb-2"><span className="font-medium">Ultrasound:</span> Viable intrauterine pregnancy (fetal cardiac activity)</p>
              <p className="text-sm mb-2"><span className="font-medium">β-hCG:</span> Appropriately rising</p>
              <p className="text-sm"><span className="font-medium">Prognosis:</span> 50% progress to viable pregnancy; 50% progress to pregnancy loss</p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4 p-3 bg-orange-50 dark:bg-orange-900/20 rounded-r-lg">
              <h3 className="font-semibold mb-2">Inevitable Abortion</h3>
              <p className="text-sm mb-2"><span className="font-medium">Presentation:</span> Bleeding with cramping, dilated cervix, may have tissue passage</p>
              <p className="text-sm mb-2"><span className="font-medium">Ultrasound:</span> Open cervical os, may see products in cervix/vagina</p>
              <p className="text-sm"><span className="font-medium">Management:</span> Expectant, medical, or surgical completion of miscarriage</p>
            </div>

            <div className="border-l-4 border-red-500 pl-4 p-3 bg-red-50 dark:bg-red-900/20 rounded-r-lg">
              <h3 className="font-semibold mb-2">Incomplete Abortion</h3>
              <p className="text-sm mb-2"><span className="font-medium">Presentation:</span> Heavy bleeding, cramping, passage of some tissue</p>
              <p className="text-sm mb-2"><span className="font-medium">Ultrasound:</span> Retained products of conception in uterus</p>
              <p className="text-sm mb-2"><span className="font-medium">Exam:</span> Dilated cervix, tissue may be visible</p>
              <p className="text-sm"><span className="font-medium">Management:</span> Usually requires medical or surgical evacuation</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">
              <h3 className="font-semibold mb-2">Complete Abortion</h3>
              <p className="text-sm mb-2"><span className="font-medium">Presentation:</span> History of bleeding/cramping with tissue passage, now resolved</p>
              <p className="text-sm mb-2"><span className="font-medium">Ultrasound:</span> Empty uterus or thin endometrial stripe</p>
              <p className="text-sm mb-2"><span className="font-medium">Exam:</span> Closed or closing cervix</p>
              <p className="text-sm"><span className="font-medium">Management:</span> Expectant, confirm declining β-hCG</p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-r-lg">
              <h3 className="font-semibold mb-2">Missed Abortion (Missed Miscarriage)</h3>
              <p className="text-sm mb-2"><span className="font-medium">Presentation:</span> Fetal demise without expulsion; may have minimal or no symptoms</p>
              <p className="text-sm mb-2"><span className="font-medium">Ultrasound:</span> Absent fetal cardiac activity (CRL ≥7mm) or empty gestational sac (MSD ≥25mm)</p>
              <p className="text-sm mb-2"><span className="font-medium">Exam:</span> Closed cervix, uterus smaller than expected for dates</p>
              <p className="text-sm"><span className="font-medium">Management:</span> Expectant, medical, or surgical management based on patient preference</p>
            </div>

            <div className="border-l-4 border-gray-500 pl-4 p-3 bg-gray-50 dark:bg-gray-900/20 rounded-r-lg">
              <h3 className="font-semibold mb-2">Anembryonic Pregnancy (Blighted Ovum)</h3>
              <p className="text-sm mb-2"><span className="font-medium">Presentation:</span> Usually asymptomatic or minimal bleeding</p>
              <p className="text-sm mb-2"><span className="font-medium">Ultrasound:</span> Gestational sac without embryo (MSD ≥25mm without embryo)</p>
              <p className="text-sm"><span className="font-medium">Management:</span> Expectant, medical, or surgical based on preference and symptoms</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* β-hCG Patterns */}
      <Card>
        <CardHeader>
          <CardTitle>β-hCG Interpretation in Early Pregnancy</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Normal Viable Pregnancy</h3>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4">
              <li>Doubles approximately every 48-72 hours in early pregnancy</li>
              <li>Minimum 53% increase in 48 hours expected for viable IUP</li>
              <li>Discriminatory zone: typically 1500-2000 mIU/mL (should see IUP on TVUS)</li>
            </ul>
          </div>
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Abnormal Patterns</h3>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4">
              <li><span className="font-medium">Declining β-hCG:</span> Indicates nonviable pregnancy (completed abortion or resolving ectopic)</li>
              <li><span className="font-medium">Plateau or slow rise:</span> Suggests ectopic pregnancy or failing IUP</li>
              <li><span className="font-medium">Rise &lt;53% in 48h:</span> Concerning for nonviable pregnancy</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Management Options */}
      <Card>
        <CardHeader>
          <CardTitle>Management Approaches</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-semibold mb-2">Expectant Management</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Allow natural passage of pregnancy tissue without intervention
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              <span className="font-medium">Best for:</span> Incomplete or missed abortion in stable patients
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              <span className="font-medium">Success rate:</span> 80-90% for incomplete; 50-70% for missed
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Follow-up:</span> Weekly β-hCG until negative, pelvic exam, ultrasound PRN
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold mb-2">Medical Management</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Misoprostol to induce uterine contractions and expulsion
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              <span className="font-medium">Best for:</span> Missed or incomplete abortion &lt;12-13 weeks
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              <span className="font-medium">Success rate:</span> 70-90%
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Contraindications:</span> Hemodynamic instability, infection, coagulopathy
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold mb-2">Surgical Management</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Suction D&C or manual vacuum aspiration
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              <span className="font-medium">Best for:</span> Heavy bleeding, hemodynamic instability, patient preference, failed expectant/medical
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              <span className="font-medium">Success rate:</span> 95-99%
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Advantages:</span> Fastest, most predictable, pathology specimen
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Rh Considerations */}
      <Card>
        <CardHeader>
          <CardTitle>Rh Immunoglobulin Considerations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
            <p className="text-sm mb-2">
              <span className="font-semibold">Rh-negative patients:</span> Administer Rh immunoglobulin (RhoGAM) for any pregnancy loss
            </p>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4">
              <li>50 μg dose if &lt;12 weeks gestation</li>
              <li>300 μg dose if ≥12 weeks gestation</li>
              <li>Prevents Rh alloimmunization in future pregnancies</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Recurrent Pregnancy Loss */}
      <Card>
        <CardHeader>
          <CardTitle>Recurrent Pregnancy Loss (RPL)</CardTitle>
          <CardDescription>
            Defined as ≥2 consecutive pregnancy losses
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground">
            Affects 1-2% of couples. Evaluation recommended after 2 losses (rather than waiting for 3).
          </p>
          <div>
            <h3 className="font-semibold mb-2">Evaluation includes:</h3>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4">
              <li>Parental karyotyping</li>
              <li>Antiphospholipid antibody testing</li>
              <li>Thyroid function tests</li>
              <li>Uterine cavity evaluation (HSG, hysteroscopy, saline sonohysterography)</li>
              <li>Consider: diabetes screening, luteal phase assessment</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Educational Disclaimer */}
      <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
        <p className="text-sm text-yellow-900 dark:text-yellow-200">
          <span className="font-semibold">Educational Content:</span> This material is for educational purposes only.
          All clinical decisions must be made by qualified healthcare providers with appropriate counseling and shared decision-making.
        </p>
      </div>
    </div>
  )
}
