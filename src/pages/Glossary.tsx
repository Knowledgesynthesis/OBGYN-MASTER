import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/Card'

interface Term {
  term: string
  definition: string
  category: string
}

const glossaryTerms: Term[] = [
  {
    term: 'Abruption',
    definition: 'Premature separation of the placenta from the uterine wall before delivery, often presenting with painful vaginal bleeding and a firm, tender uterus.',
    category: 'Placental'
  },
  {
    term: 'Arrest of Dilation',
    definition: 'Cessation of cervical dilation for ≥4 hours with adequate contractions or ≥6 hours with inadequate contractions in active labor.',
    category: 'Labor'
  },
  {
    term: 'Arrest of Descent',
    definition: 'Lack of fetal descent during second stage of labor despite adequate pushing efforts and contractions.',
    category: 'Labor'
  },
  {
    term: 'β-hCG (Beta Human Chorionic Gonadotropin)',
    definition: 'Hormone produced by the placenta during pregnancy. Used to confirm pregnancy and monitor early pregnancy viability. Should double approximately every 48-72 hours in early viable pregnancy.',
    category: 'Labs'
  },
  {
    term: 'Bishop Score',
    definition: 'Scoring system to assess cervical favorability for induction, based on dilation, effacement, station, consistency, and position. Score <6 indicates unfavorable cervix.',
    category: 'Labor'
  },
  {
    term: 'Cervical Motion Tenderness (CMT)',
    definition: 'Pain elicited when moving the cervix during bimanual exam, suggestive of pelvic inflammatory disease or other pelvic pathology.',
    category: 'Exam'
  },
  {
    term: 'Cholestasis (ICP)',
    definition: 'Intrahepatic cholestasis of pregnancy: liver disorder characterized by intense pruritus and elevated bile acids, typically in third trimester.',
    category: 'Complications'
  },
  {
    term: 'Discriminatory Zone',
    definition: 'β-hCG level (typically 1500-2000 mIU/mL) above which transvaginal ultrasound should reliably detect an intrauterine pregnancy.',
    category: 'Ectopic'
  },
  {
    term: 'Eclampsia',
    definition: 'New-onset seizures in a patient with preeclampsia, representing a severe manifestation of hypertensive disorders of pregnancy.',
    category: 'Preeclampsia'
  },
  {
    term: 'Effacement',
    definition: 'Thinning and shortening of the cervix, expressed as percentage from 0% (thick) to 100% (paper-thin). Occurs during late pregnancy and labor.',
    category: 'Labor'
  },
  {
    term: 'Fetal Station',
    definition: 'Position of fetal presenting part relative to ischial spines, measured in centimeters from -5 (high) to +5 (crowning). Station 0 is at ischial spines.',
    category: 'Labor'
  },
  {
    term: 'Fitz-Hugh-Curtis Syndrome',
    definition: 'Perihepatitis associated with pelvic inflammatory disease, causing right upper quadrant pain.',
    category: 'PID'
  },
  {
    term: 'Gestational Diabetes (GDM)',
    definition: 'Glucose intolerance first recognized during pregnancy, diagnosed via oral glucose tolerance test.',
    category: 'Diabetes'
  },
  {
    term: 'HELLP Syndrome',
    definition: 'Severe variant of preeclampsia: Hemolysis, Elevated Liver enzymes, Low Platelets. Can occur without severe hypertension.',
    category: 'Preeclampsia'
  },
  {
    term: 'Incomplete Abortion',
    definition: 'Passage of some but not all products of conception, with retained tissue in uterus causing continued bleeding.',
    category: 'Pregnancy Loss'
  },
  {
    term: 'Inevitable Abortion',
    definition: 'Pregnancy loss in progress with dilated cervix and/or ruptured membranes, but products not yet fully expelled.',
    category: 'Pregnancy Loss'
  },
  {
    term: 'Magnesium Sulfate',
    definition: 'Medication used for seizure prophylaxis in preeclampsia with severe features and treatment of eclamptic seizures.',
    category: 'Medications'
  },
  {
    term: 'Missed Abortion',
    definition: 'Fetal demise without expulsion of products of conception. Embryo ≥7mm CRL without cardiac activity or gestational sac ≥25mm without embryo.',
    category: 'Pregnancy Loss'
  },
  {
    term: 'OGTT (Oral Glucose Tolerance Test)',
    definition: 'Diagnostic test for gestational diabetes. 75g one-step or 100g two-step protocol measuring glucose response to oral glucose load.',
    category: 'Diabetes'
  },
  {
    term: 'Ovarian Torsion',
    definition: 'Twisting of ovary on its vascular pedicle causing ischemia. Surgical emergency presenting with sudden severe unilateral pelvic pain.',
    category: 'GYN Emergency'
  },
  {
    term: 'Placenta Accreta Spectrum',
    definition: 'Abnormally adherent placenta: accreta (adheres to myometrium), increta (invades myometrium), percreta (penetrates through serosa).',
    category: 'Placental'
  },
  {
    term: 'Placenta Previa',
    definition: 'Placenta overlying or near the internal cervical os, presenting with painless bright red vaginal bleeding in third trimester.',
    category: 'Placental'
  },
  {
    term: 'Postpartum Hemorrhage (PPH)',
    definition: 'Blood loss ≥500 mL after vaginal delivery or ≥1000 mL after cesarean, or bleeding causing hemodynamic instability.',
    category: 'PPH'
  },
  {
    term: 'Preeclampsia',
    definition: 'Hypertensive disorder of pregnancy: BP ≥140/90 after 20 weeks with proteinuria or severe features.',
    category: 'Preeclampsia'
  },
  {
    term: 'Preeclampsia with Severe Features',
    definition: 'Preeclampsia with BP ≥160/110, thrombocytopenia, elevated Cr, elevated LFTs, pulmonary edema, or cerebral/visual symptoms.',
    category: 'Preeclampsia'
  },
  {
    term: 'Protracted Labor',
    definition: 'Abnormally slow but progressive cervical dilation or fetal descent during labor.',
    category: 'Labor'
  },
  {
    term: 'PUPPP',
    definition: 'Pruritic Urticarial Papules and Plaques of Pregnancy: benign pruritic condition with urticarial rash, usually in third trimester.',
    category: 'Dermatology'
  },
  {
    term: 'Retained Placenta',
    definition: 'Failure of placenta to deliver within 30 minutes of infant birth, requiring manual removal or other intervention.',
    category: 'PPH'
  },
  {
    term: 'Rh Immunoglobulin (RhoGAM)',
    definition: 'Medication given to Rh-negative mothers to prevent Rh alloimmunization. Administered after pregnancy events with potential maternal-fetal blood mixing.',
    category: 'Medications'
  },
  {
    term: 'Severe Features (Preeclampsia)',
    definition: 'Indicators of end-organ damage in preeclampsia: severe BP, low platelets, elevated Cr, elevated LFTs, neurologic symptoms, pulmonary edema.',
    category: 'Preeclampsia'
  },
  {
    term: 'The 4 Ts',
    definition: 'Framework for PPH causes: Tone (uterine atony), Tissue (retained placenta), Trauma (lacerations), Thrombin (coagulopathy).',
    category: 'PPH'
  },
  {
    term: 'Threatened Abortion',
    definition: 'Vaginal bleeding in early pregnancy with closed cervix and viable intrauterine pregnancy on ultrasound.',
    category: 'Pregnancy Loss'
  },
  {
    term: 'Tubo-ovarian Abscess (TOA)',
    definition: 'Complication of pelvic inflammatory disease involving infection and abscess formation in fallopian tube and ovary.',
    category: 'PID'
  },
  {
    term: 'Uterine Atony',
    definition: 'Loss of uterine muscle tone after delivery, most common cause of postpartum hemorrhage. Uterus feels soft and boggy.',
    category: 'PPH'
  }
].sort((a, b) => a.term.localeCompare(b.term))

const categories = ['All', ...Array.from(new Set(glossaryTerms.map(t => t.category))).sort()]

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || term.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-2">Glossary</h1>
        <p className="text-muted-foreground">
          Key terms and definitions in obstetrics and gynecology
        </p>
      </div>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Search terms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg bg-background"
        />

        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredTerms.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center text-muted-foreground">
            No terms found matching your search.
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {filteredTerms.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold">{item.term}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300">
                    {item.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.definition}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="text-sm text-muted-foreground text-center">
        Showing {filteredTerms.length} of {glossaryTerms.length} terms
      </div>
    </div>
  )
}
