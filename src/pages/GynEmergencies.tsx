import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'

export default function GynEmergencies() {
  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-2">Gynecologic Emergencies</h1>
        <p className="text-muted-foreground">
          Recognize and manage ovarian torsion and pelvic inflammatory disease
        </p>
      </div>

      {/* Ovarian Torsion */}
      <Card>
        <CardHeader>
          <CardTitle>Ovarian Torsion</CardTitle>
          <CardDescription>
            Surgical emergency requiring prompt diagnosis and intervention
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Pathophysiology</h3>
            <p className="text-sm text-muted-foreground">
              Twisting of ovary on its vascular pedicle → compromise of venous outflow → ovarian edema →
              arterial compromise → ischemia and potential necrosis. Usually involves fallopian tube (adnexal torsion).
            </p>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Clinical Presentation</h3>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4">
              <li><span className="font-medium">Classic:</span> Sudden onset severe unilateral pelvic pain</li>
              <li>Often associated with nausea and vomiting</li>
              <li>May have intermittent pain (partial torsion with spontaneous detorsion)</li>
              <li>Low-grade fever possible</li>
              <li>Tender adnexal mass on exam</li>
            </ul>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Risk Factors</h3>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4">
              <li>Ovarian mass 5-10 cm (most common: dermoid cyst, corpus luteum cyst)</li>
              <li>Pregnancy (corpus luteum of pregnancy, increased mobility)</li>
              <li>Ovulation induction</li>
              <li>Tubal ligation (longer mesosalpinx)</li>
              <li>Reproductive age (but can occur at any age)</li>
            </ul>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Diagnosis</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-blue-500 pl-4">
                <p className="font-medium text-sm mb-1">Ultrasound with Doppler (First-line)</p>
                <ul className="text-sm text-muted-foreground list-disc list-inside ml-4 space-y-1">
                  <li>Enlarged ovary with peripherally displaced follicles</li>
                  <li>Decreased or absent Doppler flow (arterial and/or venous)</li>
                  <li><span className="font-medium">Important:</span> Normal Doppler does NOT exclude torsion (dual blood supply)</li>
                  <li>May see free fluid</li>
                </ul>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <p className="font-medium text-sm mb-1">Clinical Diagnosis</p>
                <p className="text-sm text-muted-foreground">
                  High clinical suspicion with typical presentation warrants surgical exploration even with normal or equivocal imaging
                </p>
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Management</h3>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg mb-3">
              <p className="text-sm font-semibold text-red-900 dark:text-red-200 mb-2">⚠️ Surgical Emergency</p>
              <p className="text-sm text-red-900 dark:text-red-200">
                Immediate surgical consultation. Delay increases risk of ovarian necrosis and loss.
              </p>
            </div>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4">
              <li><span className="font-medium">Surgical approach:</span> Laparoscopy preferred (diagnostic and therapeutic)</li>
              <li><span className="font-medium">Detorsion:</span> Untwist ovary, assess viability. Ovarian conservation attempted even if appears necrotic</li>
              <li><span className="font-medium">Cystectomy:</span> Remove underlying mass if present and ovary viable</li>
              <li><span className="font-medium">Oophorectomy:</span> Only if completely necrotic; otherwise preserve</li>
            </ul>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Differential Diagnosis</h3>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4">
              <li>Ruptured ovarian cyst</li>
              <li>Ectopic pregnancy (must be ruled out)</li>
              <li>Appendicitis</li>
              <li>Pelvic inflammatory disease</li>
              <li>Kidney stone</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* PID */}
      <Card>
        <CardHeader>
          <CardTitle>Pelvic Inflammatory Disease (PID)</CardTitle>
          <CardDescription>
            Infection of upper genital tract (endometritis, salpingitis, tubo-ovarian abscess)
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Etiology</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Ascending infection from lower genital tract. Often polymicrobial.
            </p>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4">
              <li><span className="font-medium">Common organisms:</span> <i>N. gonorrhoeae</i>, <i>C. trachomatis</i></li>
              <li><span className="font-medium">Also:</span> Anaerobes, <i>G. vaginalis</i>, enteric gram-negatives, <i>Mycoplasma</i></li>
            </ul>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Clinical Presentation</h3>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4">
              <li>Lower abdominal pain (bilateral)</li>
              <li>Vaginal discharge (mucopurulent)</li>
              <li>Abnormal uterine bleeding</li>
              <li>Fever (may be absent in mild cases)</li>
              <li>Dyspareunia</li>
            </ul>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Diagnostic Criteria (CDC)</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-red-500 pl-4 bg-red-50 dark:bg-red-900/20 p-3 rounded-r-lg">
                <p className="font-semibold text-sm mb-2">Minimum Criteria (all required)</p>
                <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                  <li>Lower abdominal tenderness</li>
                  <li>Adnexal tenderness</li>
                  <li>Cervical motion tenderness (CMT)</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-4 bg-orange-50 dark:bg-orange-900/20 p-3 rounded-r-lg">
                <p className="font-semibold text-sm mb-2">Additional Supportive Criteria</p>
                <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                  <li>Fever &gt;101°F (38.3°C)</li>
                  <li>Mucopurulent cervical discharge</li>
                  <li>Elevated ESR or CRP</li>
                  <li>Laboratory evidence of gonorrhea or chlamydia</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4 bg-blue-50 dark:bg-blue-900/20 p-3 rounded-r-lg">
                <p className="font-semibold text-sm mb-2">Definitive Criteria</p>
                <ul className="text-sm list-disc list-inside ml-4 space-y-1">
                  <li>Endometrial biopsy with endometritis</li>
                  <li>Transvaginal ultrasound showing thickened fluid-filled tubes, tubo-ovarian complex</li>
                  <li>Laparoscopic findings consistent with PID</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-3 italic">
              Low threshold for diagnosis recommended due to serious sequelae if untreated (infertility, ectopic pregnancy, chronic pain)
            </p>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Management</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-medium text-sm mb-1">Outpatient Treatment (Mild-Moderate)</p>
                <p className="text-sm text-muted-foreground mb-2">
                  Empiric broad-spectrum antibiotics covering <i>N. gonorrhoeae</i>, <i>C. trachomatis</i>, and anaerobes:
                </p>
                <ul className="text-sm text-muted-foreground list-disc list-inside ml-4 space-y-1">
                  <li>Ceftriaxone IM × 1 PLUS doxycycline PO × 14 days</li>
                  <li>± metronidazole for anaerobic coverage</li>
                  <li>Follow-up in 48-72 hours to assess improvement</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <p className="font-medium text-sm mb-1">Inpatient Treatment Indications</p>
                <ul className="text-sm text-muted-foreground list-disc list-inside ml-4 space-y-1">
                  <li>Surgical emergency cannot be excluded (e.g., appendicitis, ectopic)</li>
                  <li>Tubo-ovarian abscess</li>
                  <li>Pregnancy</li>
                  <li>Severe illness, nausea/vomiting, high fever</li>
                  <li>Unable to tolerate oral medications</li>
                  <li>Failed outpatient treatment</li>
                  <li>HIV infection with low CD4 count</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Partner Management</h3>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-4 rounded-lg">
              <p className="text-sm">
                <span className="font-semibold">Critical:</span> Treat sexual partners from past 60 days.
                Empiric treatment for gonorrhea and chlamydia even if testing negative. Patient should abstain from
                intercourse until treatment completed and partners treated.
              </p>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Complications</h3>
            <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1 ml-4">
              <li>Tubo-ovarian abscess (may require drainage or surgery)</li>
              <li>Fitz-Hugh-Curtis syndrome (perihepatitis)</li>
              <li>Chronic pelvic pain</li>
              <li>Ectopic pregnancy (6-10× increased risk)</li>
              <li>Infertility (12-18% after single episode, increases with recurrence)</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle>Ovarian Torsion vs PID: Quick Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2 font-semibold">Feature</th>
                  <th className="text-left p-2 font-semibold">Ovarian Torsion</th>
                  <th className="text-left p-2 font-semibold">PID</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2 font-medium">Onset</td>
                  <td className="p-2">Sudden, acute</td>
                  <td className="p-2">Gradual, subacute</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Pain</td>
                  <td className="p-2">Severe, unilateral</td>
                  <td className="p-2">Moderate, bilateral</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Fever</td>
                  <td className="p-2">Usually absent or low-grade</td>
                  <td className="p-2">Common (if severe)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Discharge</td>
                  <td className="p-2">Absent</td>
                  <td className="p-2">Mucopurulent often present</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Exam</td>
                  <td className="p-2">Tender adnexal mass</td>
                  <td className="p-2">CMT, bilateral adnexal tenderness</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2 font-medium">Treatment</td>
                  <td className="p-2">Surgical emergency</td>
                  <td className="p-2">Antibiotics</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Educational Disclaimer */}
      <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
        <p className="text-sm text-yellow-900 dark:text-yellow-200">
          <span className="font-semibold">Educational Content:</span> This material is for educational purposes only.
          All clinical decisions and antibiotic regimens must follow current CDC STI treatment guidelines and institutional protocols.
        </p>
      </div>
    </div>
  )
}
