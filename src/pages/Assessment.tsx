import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

interface Question {
  id: number
  question: string
  options: string[]
  correctIndex: number
  rationale: string
  category: string
}

const questions: Question[] = [
  {
    id: 1,
    category: 'Ectopic Pregnancy',
    question: 'A 28-year-old woman has a positive pregnancy test with β-hCG of 2500 mIU/mL. Transvaginal ultrasound shows no intrauterine pregnancy. What is the most appropriate next step?',
    options: [
      'Repeat ultrasound in 1 week',
      'Immediate methotrexate administration',
      'Expectant management with serial β-hCG',
      'Emergency department referral for ectopic pregnancy'
    ],
    correctIndex: 3,
    rationale: 'β-hCG above discriminatory threshold (1500-2000) without intrauterine pregnancy raises high concern for ectopic pregnancy. Emergency evaluation is warranted to assess for ectopic and hemodynamic stability.'
  },
  {
    id: 2,
    category: 'Preeclampsia',
    question: 'Which of the following is NOT a criterion for severe features in preeclampsia?',
    options: [
      'Blood pressure ≥160/110 mmHg',
      'Platelet count <100,000/μL',
      'Proteinuria >5 g in 24 hours',
      'Creatinine >1.1 mg/dL'
    ],
    correctIndex: 2,
    rationale: 'Degree of proteinuria is no longer used to define severe features. Severe features include: severe BP, thrombocytopenia, elevated Cr, elevated LFTs, pulmonary edema, cerebral/visual symptoms.'
  },
  {
    id: 3,
    category: 'GDM',
    question: 'Using the one-step approach (75g OGTT), which glucose value alone would diagnose gestational diabetes?',
    options: [
      'Fasting 88 mg/dL',
      'Fasting 94 mg/dL',
      '1-hour 175 mg/dL',
      '2-hour 148 mg/dL'
    ],
    correctIndex: 1,
    rationale: 'One-step approach: Fasting ≥92 mg/dL diagnoses GDM (only one abnormal value needed). Thresholds are: fasting ≥92, 1-hr ≥180, 2-hr ≥153 mg/dL.'
  },
  {
    id: 4,
    category: 'Placental Disorders',
    question: 'A patient presents with vaginal bleeding at 32 weeks. What should be done BEFORE performing a digital cervical exam?',
    options: [
      'Check blood type and Rh status',
      'Perform ultrasound to rule out placenta previa',
      'Obtain complete blood count',
      'Start continuous fetal monitoring'
    ],
    correctIndex: 1,
    rationale: 'Digital cervical exam is contraindicated until placenta previa is excluded by ultrasound, as exam can provoke massive hemorrhage if placenta overlies the os.'
  },
  {
    id: 5,
    category: 'PPH',
    question: 'What is the most common cause of postpartum hemorrhage?',
    options: [
      'Genital tract lacerations',
      'Uterine atony',
      'Retained placental tissue',
      'Coagulopathy'
    ],
    correctIndex: 1,
    rationale: 'Uterine atony accounts for 70-80% of PPH cases. Remember the 4 Ts: Tone (atony) 70-80%, Trauma 20%, Tissue 10%, Thrombin 1%.'
  },
  {
    id: 6,
    category: 'Early Pregnancy Loss',
    question: 'A pregnancy with absent cardiac activity and crown-rump length of 8 mm on ultrasound is classified as:',
    options: [
      'Threatened abortion',
      'Inevitable abortion',
      'Missed abortion',
      'Incomplete abortion'
    ],
    correctIndex: 2,
    rationale: 'Missed abortion (missed miscarriage): embryo/fetus has died but not been expelled. Criteria: CRL ≥7mm without cardiac activity or mean sac diameter ≥25mm without embryo.'
  },
  {
    id: 7,
    category: 'Labor',
    question: 'According to modern definitions, arrest of dilation in active labor is diagnosed after how long with adequate contractions?',
    options: [
      '2 hours',
      '4 hours',
      '6 hours',
      '8 hours'
    ],
    correctIndex: 1,
    rationale: 'Arrest of dilation: no cervical change for ≥4 hours with adequate contractions, or ≥6 hours with inadequate contractions despite oxytocin/amniotomy.'
  },
  {
    id: 8,
    category: 'Cholestasis',
    question: 'What is the cardinal symptom of intrahepatic cholestasis of pregnancy?',
    options: [
      'Jaundice',
      'Right upper quadrant pain',
      'Intense pruritus',
      'Nausea and vomiting'
    ],
    correctIndex: 2,
    rationale: 'Intense pruritus (often on palms/soles, worse at night) is the cardinal symptom of ICP. Jaundice is uncommon. Diagnosis confirmed with elevated bile acids.'
  },
  {
    id: 9,
    category: 'Ovarian Torsion',
    question: 'Which statement about ovarian torsion is TRUE?',
    options: [
      'Normal Doppler flow excludes torsion',
      'It is most common in postmenopausal women',
      'Surgical detorsion should not be attempted if ovary appears necrotic',
      'Most cases involve an underlying ovarian mass'
    ],
    correctIndex: 3,
    rationale: 'Most torsion cases involve an ovarian mass 5-10cm (dermoid, corpus luteum cyst). Normal Doppler does NOT exclude torsion due to dual blood supply. Detorsion should be attempted even if ovary appears necrotic.'
  },
  {
    id: 10,
    category: 'PID',
    question: 'What are the minimum clinical criteria for diagnosing PID?',
    options: [
      'Fever, elevated WBC, and mucopurulent discharge',
      'Lower abdominal tenderness, adnexal tenderness, and cervical motion tenderness',
      'Positive gonorrhea/chlamydia testing and pelvic pain',
      'Endometrial biopsy showing endometritis'
    ],
    correctIndex: 1,
    rationale: 'Minimum criteria (all required): lower abdominal tenderness + adnexal tenderness + cervical motion tenderness. Low threshold for diagnosis due to serious sequelae if untreated.'
  },
  {
    id: 11,
    category: 'Preeclampsia',
    question: 'What is the definitive treatment for preeclampsia?',
    options: [
      'Magnesium sulfate',
      'Antihypertensive medications',
      'Bed rest',
      'Delivery'
    ],
    correctIndex: 3,
    rationale: 'Delivery is the only definitive treatment for preeclampsia. Magnesium sulfate prevents seizures, antihypertensives manage BP, but only delivery resolves the underlying disease.'
  },
  {
    id: 12,
    category: 'Labor',
    question: 'In a nulliparous woman with epidural, what is the maximum duration of second stage of labor before arrest of descent is diagnosed?',
    options: [
      '1 hour',
      '2 hours',
      '3 hours',
      '4 hours'
    ],
    correctIndex: 2,
    rationale: 'Arrest of descent in second stage: nulliparous with epidural = 3 hours (2 hours without epidural); multiparous with epidural = 2 hours (1 hour without epidural).'
  }
]

export default function Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showRationale, setShowRationale] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set())

  const question = questions[currentQuestion]
  const isCorrect = selectedAnswer === question.correctIndex
  const canProceed = showRationale

  const handleAnswerSelect = (index: number) => {
    if (!showRationale) {
      setSelectedAnswer(index)
      setShowRationale(true)
      setAnsweredQuestions(prev => new Set([...prev, currentQuestion]))
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowRationale(false)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(null)
      setShowRationale(false)
    }
  }

  const handleReset = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowRationale(false)
    setAnsweredQuestions(new Set())
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-2">Assessment</h1>
        <p className="text-muted-foreground">
          Test your knowledge with these OBGYN questions
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Question {currentQuestion + 1} of {questions.length}
        </div>
        <div className="text-sm text-muted-foreground">
          Answered: {answeredQuestions.size} / {questions.length}
        </div>
      </div>

      <div className="w-full bg-muted rounded-full h-2">
        <div
          className="bg-primary-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        />
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardDescription className="mb-2">{question.category}</CardDescription>
              <CardTitle className="text-xl">{question.question}</CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showRationale}
                className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                  showRationale
                    ? index === question.correctIndex
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : index === selectedAnswer
                      ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                      : 'border-border bg-background'
                    : selectedAnswer === index
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-border bg-background hover:border-primary-300'
                } ${showRationale ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div className="flex items-center">
                  <span className="font-semibold mr-3">{String.fromCharCode(65 + index)}.</span>
                  <span className="text-sm">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {showRationale && (
            <div className={`p-4 rounded-lg border-2 ${
              isCorrect
                ? 'bg-green-50 dark:bg-green-900/20 border-green-500'
                : 'bg-red-50 dark:bg-red-900/20 border-red-500'
            }`}>
              <p className="font-semibold mb-2">
                {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
              </p>
              <p className="text-sm mb-2">
                <span className="font-medium">Correct answer:</span> {String.fromCharCode(65 + question.correctIndex)}. {question.options[question.correctIndex]}
              </p>
              <p className="text-sm">
                <span className="font-medium">Rationale:</span> {question.rationale}
              </p>
            </div>
          )}

          <div className="flex gap-2 pt-4 border-t">
            <Button
              onClick={handlePrevious}
              variant="outline"
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={currentQuestion === questions.length - 1 || !canProceed}
              className="flex-1"
            >
              {currentQuestion === questions.length - 1 ? 'Completed' : 'Next Question'}
            </Button>
            {currentQuestion === questions.length - 1 && (
              <Button onClick={handleReset} variant="outline">
                Start Over
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="p-4 bg-muted/50 border rounded-lg">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold">Study Tip:</span> Read each rationale carefully, even when you answer correctly.
          Understanding the reasoning behind each answer reinforces your clinical knowledge and helps with retention.
        </p>
      </div>
    </div>
  )
}
