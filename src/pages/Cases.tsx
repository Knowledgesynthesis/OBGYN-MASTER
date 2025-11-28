import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ChevronRight } from 'lucide-react'

interface CaseStudy {
  id: number
  title: string
  category: string
  scenario: string
  questions: {
    question: string
    options: string[]
    correctIndex: number
    explanation: string
  }[]
}

const cases: CaseStudy[] = [
  {
    id: 1,
    title: 'Third Trimester Bleeding',
    category: 'Placental Disorders',
    scenario: 'A 32-year-old G2P1 at 34 weeks presents with sudden onset painless bright red vaginal bleeding. She denies contractions or abdominal pain. Vital signs are stable. She had a prior cesarean delivery.',
    questions: [
      {
        question: 'What is the most likely diagnosis?',
        options: [
          'Placental abruption',
          'Placenta previa',
          'Vasa previa',
          'Cervical polyp'
        ],
        correctIndex: 1,
        explanation: 'Placenta previa presents with painless bright red bleeding in the third trimester. Risk factors include prior cesarean delivery. Abruption typically presents with painful bleeding.'
      },
      {
        question: 'What is the most appropriate next step?',
        options: [
          'Digital cervical exam',
          'Speculum exam',
          'Transvaginal ultrasound',
          'Immediate cesarean delivery'
        ],
        correctIndex: 2,
        explanation: 'Transvaginal ultrasound should be performed to confirm placenta previa BEFORE any cervical exam. Digital exam is contraindicated as it can cause massive hemorrhage.'
      }
    ]
  },
  {
    id: 2,
    title: 'Severe Hypertension in Pregnancy',
    category: 'Preeclampsia',
    scenario: 'A 28-year-old primigravida at 37 weeks has BP 168/112 on two occasions 30 minutes apart. She reports a severe headache and seeing spots. Labs show platelets 85k, AST 120, ALT 98, creatinine 1.4.',
    questions: [
      {
        question: 'What is the diagnosis?',
        options: [
          'Gestational hypertension',
          'Chronic hypertension',
          'Preeclampsia without severe features',
          'Preeclampsia with severe features'
        ],
        correctIndex: 3,
        explanation: 'Preeclampsia with severe features: BP ≥160/110, thrombocytopenia, elevated transaminases, elevated creatinine, and severe headache/visual symptoms.'
      },
      {
        question: 'What is the most appropriate management?',
        options: [
          'Outpatient monitoring with weekly labs',
          'Admission for observation only',
          'Magnesium sulfate and plan for delivery',
          'Start antihypertensive and discharge home'
        ],
        correctIndex: 2,
        explanation: 'Severe features at term (37 weeks) warrant magnesium sulfate for seizure prophylaxis, antihypertensives for severe hypertension, and delivery.'
      }
    ]
  },
  {
    id: 3,
    title: 'Early Pregnancy Uncertainty',
    category: 'Ectopic Pregnancy',
    scenario: 'A 26-year-old woman presents with 6 weeks amenorrhea and vaginal spotting. She has mild left lower quadrant pain. β-hCG is 1200 mIU/mL. Transvaginal ultrasound shows no intrauterine or extrauterine pregnancy.',
    questions: [
      {
        question: 'What is the most likely diagnosis?',
        options: [
          'Ectopic pregnancy',
          'Early viable intrauterine pregnancy',
          'Pregnancy of unknown location',
          'Completed abortion'
        ],
        correctIndex: 2,
        explanation: 'β-hCG below discriminatory threshold (1500-2000) without visible pregnancy on ultrasound = pregnancy of unknown location. Could be early IUP, ectopic, or failing pregnancy.'
      },
      {
        question: 'What is the most appropriate next step?',
        options: [
          'Immediate methotrexate',
          'Serial β-hCG in 48 hours',
          'Diagnostic laparoscopy',
          'Expectant management without follow-up'
        ],
        correctIndex: 1,
        explanation: 'Serial β-hCG monitoring is appropriate. Expect doubling in viable IUP. Plateau or slow rise suggests ectopic or failing pregnancy. Repeat ultrasound when above discriminatory zone.'
      }
    ]
  },
  {
    id: 4,
    title: 'Postpartum Hemorrhage',
    category: 'PPH',
    scenario: 'Immediately after vaginal delivery, you note heavy vaginal bleeding. The uterus feels soft and boggy, and the fundus is at the umbilicus. Estimated blood loss is 800 mL and ongoing.',
    questions: [
      {
        question: 'Which of the 4 Ts is most likely?',
        options: [
          'Tone (uterine atony)',
          'Tissue (retained placenta)',
          'Trauma (laceration)',
          'Thrombin (coagulopathy)'
        ],
        correctIndex: 0,
        explanation: 'Soft, boggy uterus with fundus above expected position indicates uterine atony, the most common cause of PPH (70-80%).'
      },
      {
        question: 'What is the most appropriate first-line intervention?',
        options: [
          'Immediate hysterectomy',
          'Uterine artery embolization',
          'Uterine massage and uterotonics',
          'Exploratory laparotomy'
        ],
        correctIndex: 2,
        explanation: 'For uterine atony, first-line treatment is bimanual uterine massage and uterotonic medications (oxytocin, methylergonovine, misoprostol, carboprost).'
      }
    ]
  },
  {
    id: 5,
    title: 'Acute Pelvic Pain',
    category: 'GYN Emergencies',
    scenario: 'A 24-year-old woman presents with sudden onset severe right lower quadrant pain that started 2 hours ago. She has nausea and vomiting. Last menstrual period was 2 weeks ago. Pregnancy test is negative. Pelvic ultrasound shows a 7 cm right ovarian cyst with decreased Doppler flow.',
    questions: [
      {
        question: 'What is the most likely diagnosis?',
        options: [
          'Appendicitis',
          'Ruptured ovarian cyst',
          'Ovarian torsion',
          'Pelvic inflammatory disease'
        ],
        correctIndex: 2,
        explanation: 'Sudden severe unilateral pain with ovarian mass and decreased Doppler flow is classic for ovarian torsion. Nausea/vomiting are common associated symptoms.'
      },
      {
        question: 'What is the most appropriate management?',
        options: [
          'Observation and pain control',
          'Antibiotics for PID',
          'Urgent surgical consultation',
          'CT scan to confirm diagnosis'
        ],
        correctIndex: 2,
        explanation: 'Ovarian torsion is a surgical emergency. Urgent laparoscopy for detorsion and ovarian preservation is needed to prevent ovarian loss from ischemia.'
      }
    ]
  }
]

export default function Cases() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)

  const handleCaseSelect = (caseStudy: CaseStudy) => {
    setSelectedCase(caseStudy)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
  }

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index)
    setShowExplanation(true)
  }

  const handleNextQuestion = () => {
    if (selectedCase && currentQuestion < selectedCase.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    }
  }

  const handleBackToCases = () => {
    setSelectedCase(null)
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
  }

  if (selectedCase) {
    const question = selectedCase.questions[currentQuestion]
    const isCorrect = selectedAnswer === question.correctIndex

    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        <div>
          <Button onClick={handleBackToCases} variant="outline" size="sm" className="mb-4">
            ← Back to Cases
          </Button>
          <h1 className="text-3xl font-bold mb-2">{selectedCase.title}</h1>
          <p className="text-muted-foreground">{selectedCase.category}</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Clinical Scenario</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">{selectedCase.scenario}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              Question {currentQuestion + 1} of {selectedCase.questions.length}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="font-medium">{question.question}</p>
            <div className="space-y-2">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showExplanation && handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                    showExplanation
                      ? index === question.correctIndex
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                        : index === selectedAnswer
                        ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                        : 'border-border bg-background'
                      : selectedAnswer === index
                      ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                      : 'border-border bg-background hover:border-primary-300'
                  } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center">
                    <span className="font-semibold mr-3">{String.fromCharCode(65 + index)}.</span>
                    <span className="text-sm">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            {showExplanation && (
              <div className={`p-4 rounded-lg border-2 ${
                isCorrect
                  ? 'bg-green-50 dark:bg-green-900/20 border-green-500'
                  : 'bg-red-50 dark:bg-red-900/20 border-red-500'
              }`}>
                <p className="font-semibold mb-2">
                  {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
                </p>
                <p className="text-sm">{question.explanation}</p>
              </div>
            )}

            {showExplanation && currentQuestion < selectedCase.questions.length - 1 && (
              <Button onClick={handleNextQuestion} className="w-full">
                Next Question <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            )}

            {showExplanation && currentQuestion === selectedCase.questions.length - 1 && (
              <Button onClick={handleBackToCases} className="w-full" variant="outline">
                Complete Case - Return to List
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-2">Interactive Cases</h1>
        <p className="text-muted-foreground">
          Apply your knowledge to realistic clinical scenarios
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {cases.map((caseStudy) => (
          <Card
            key={caseStudy.id}
            className="cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02]"
            onClick={() => handleCaseSelect(caseStudy)}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">{caseStudy.title}</CardTitle>
                  <CardDescription className="mb-3">{caseStudy.category}</CardDescription>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {caseStudy.scenario}
                  </p>
                </div>
                <ChevronRight className="h-6 w-6 text-muted-foreground flex-shrink-0 ml-2" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {caseStudy.questions.length} questions
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-muted/50">
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground">
            These cases are designed to test your clinical reasoning and application of OBGYN concepts.
            Each case presents a realistic scenario with multiple questions. Take your time to think through
            each question carefully before selecting your answer.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
