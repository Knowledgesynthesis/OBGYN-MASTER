# **OBGYN MASTER — OPTIMIZED MASTER PROMPT FOR EDUCATIONAL APP GENERATION**
A clinically rigorous, mobile-first, offline-capable educational app blueprint designed to teach **high-yield obstetrics and gynecology topics**, with a strong emphasis on **obstetric complications**, **emergencies**, and **labor management**—all core Step 3 and residency competencies.

This super-app covers:
- Ectopic pregnancy  
- Preeclampsia & eclampsia  
- Gestational diabetes  
- Placental abruption vs placenta previa  
- Intrahepatic cholestasis of pregnancy (ICP)  
- Postpartum hemorrhage (PPH)  
- Threatened vs inevitable abortion  
- Normal vs abnormal labor progression  
- Ovarian torsion  
- Pelvic inflammatory disease (PID)  

---

# **MASTER PROMPT — OBGYN Master Educational App Generator (SPECIALIZED VERSION)**

## **Role & Mission**
You are a cross-functional product team:  
PM, Staff Engineer, Senior Instructional Designer, Obstetrics SME, Gynecology SME, Maternal–Fetal Medicine SME, Emergency Medicine SME, Anesthesia/OB Critical Care SME, UX Writer, QA.

Your mission: design an **interactive, evidence-based OBGYN learning platform** integrating diagnostics, imaging logic, obstetric algorithms, and case-based reasoning, using only **synthetic data** and **guideline-aligned conceptual frameworks** (ACOG/SMFM/CDC-informed).

The app must:
- Be mobile-first + dark mode  
- Work offline (IndexedDB + SW)  
- Maintain internal consistency & safe educational boundaries  
- Use structured reasoning pathways  
- Simulate obstetric triage and labor decision-making  

---

# **Inputs (Fill These)**
- Primary Topics: {{TOPICS}}  
- Target Level: {{LEVELS}}  
- Learning Context: {{CONTEXT}}  
- Learning Objectives: {{LEARNING_OBJECTIVES}}  
- Constraints: mobile-first, dark mode, offline-ready, synthetic-only  
- References: {{REFERENCES}}  
- Tone: {{VOICE_TONE}}  
- Locale: {{LOCALE}}

---

# **1. Executive Summary**
OBGYN Master solves the time-sensitive, pattern-recognition challenges at the heart of obstetrics and gynecology.  
It teaches:
- How to triage abdominal pain & bleeding in pregnancy  
- How to differentiate pregnancy complications  
- How to interpret fetal/maternal risk  
- How labor progresses normally vs abnormally  
- When emergencies require immediate action  
- How to recognize and manage gynecologic surgical emergencies  

**Name Options:**  
- BirthFlow Pro – “Master obstetrics from triage to delivery.”  
- GynLogic MD – “Diagnose & treat women’s health conditions conceptually.”  
- OB Alert Atlas – “Emergency-focused obstetric reasoning.”

---

# **2. Personas & Use Cases**

### **Personas**
- OB intern learning triage workflows  
- Family Medicine/IM resident reviewing OBGYN emergencies  
- EM resident managing early pregnancy bleeding  
- Medical student preparing for Step 2/3  
- Midwife/NP/PA trainees practicing labor interpretation  

### **Use Cases**
- Triage: pregnant patient with pain/bleeding  
- Management of severe hypertension in pregnancy  
- Labor progress assessment  
- Postpartum hemorrhage response  
- Early pregnancy viability vs loss  
- Ovarian torsion and acute abdomen in women  
- PID diagnosis and management  

---

# **3. Curriculum Map & Knowledge Graph**

## **Module 1: Ectopic Pregnancy**
- Presentation patterns  
- Risk factors  
- Beta-hCG discriminatory thresholds  
- Ultrasound interpretation logic  
- Ruptured vs unruptured distinctions  
- Treatment pathways (synthetic): MTX vs surgical approach  

## **Module 2: Hypertensive Disorders of Pregnancy**
### **Preeclampsia**
- Diagnostic criteria (BP + proteinuria or severe features)  
- Maternal risks & fetal implications  
- Magnesium sulfate educational overview  
- Delivery timing logic  

### **Eclampsia**
- Seizure recognition  
- Stabilization sequence  

## **Module 3: Gestational Diabetes (GDM)**
- Screening logic (1-step vs 2-step conceptual)  
- Glucose tolerance test patterns  
- Management tiers:
  - Diet & exercise  
  - Insulin introduction (education only)  
- Delivery timing considerations  

## **Module 4: Placental Abruption vs Previa**
- Painful vs painless bleeding  
- Uterine tenderness vs normal tone  
- Ultrasound usage  
- Maternal-fetal stabilization  
- Delivery decision-making  

## **Module 5: Intrahepatic Cholestasis of Pregnancy (ICP)**
- Pruritus patterns  
- Elevated bile acids (synthetic ranges)  
- Maternal symptoms & fetal risks  
- Timing of delivery considerations  

## **Module 6: Postpartum Hemorrhage (PPH)**
- Tone, Tissue, Trauma, Thrombin framework  
- Uterine atony identification  
- Interventions (educational): massage, uterotonic conceptual overview  
- Retained placenta recognition  
- Escalation for massive hemorrhage (conceptual, safe)  

## **Module 7: Early Pregnancy Loss**
- Threatened vs inevitable vs incomplete vs missed  
- Beta-hCG trends  
- Ultrasound criteria  
- Expectant vs medical vs procedural options (educational only)  

## **Module 8: Labor Progression**
### **Normal Labor**
- Cervical dilation/effacement  
- Friedman curves conceptually vs modern labor curves  
- Stages & phases of labor  

### **Abnormal Labor**
- Arrest of dilation  
- Arrest of descent  
- Protracted disorders  
- Cephalopelvic disproportion conceptualization  
- Induction & augmentation (Pitocin conceptual only)  

## **Module 9: Gynecologic Emergencies**
### **Ovarian Torsion**
- Sudden unilateral pelvic pain  
- Risk factors (ovarian cysts)  
- Doppler flow interpretation (conceptual)  
- Surgical urgency overview  

### **Pelvic Inflammatory Disease (PID)**
- Presentation patterns  
- Cervical motion tenderness  
- Differential: appendicitis, ovarian torsion, ectopic pregnancy  
- Empiric treatment logic (synthetic)  

Knowledge Graph Links:  
Pregnancy status → Symptoms → Red flags → Imaging → Lab patterns → Diagnosis → Stabilization → Delivery/management decision.

---

# **4. Interactive Specs (Table)**

**Interactive | Purpose | Inputs | Outputs | Visuals | Guardrails | Presets**

Pregnancy Bleeding Triage | Distinguish ectopic vs previa vs abruption vs miscarriage | Pain, bleeding, US | Classification | Flow diagram | Non-treatment | 10 cases  
Preeclampsia Severity Builder | Identify severe features | BP, labs | Severity category | Heat map | Educational | 6 cases  
GDM Interpreter | Diagnose gestational diabetes | OGTT values | GDM status | Line graph | No dosing | Normal/abnormal cases  
Placental Pathway Tool | Previa vs abruption | Bleeding, pain, US | Condition tag | Diagram | Educational | Classic cases  
ICP Bile Acid Checker | Determine suspicion | Bile acids, symptoms | Risk category | Gradient UI | Non-diagnostic | Mild/moderate/severe presets  
PPH Engine | Evaluate PPH cause | Bleeding pattern | 4 Ts category | Algorithm | Educational | 8 cases  
Labor Progression Timeline | Recognize normal vs abnormal progression | Dilation, time | Progress label | Timeline chart | No Pitocin dosing | Slow/protracted/arrest cases  
Ovarian Torsion Sorter | Identify torsion risks | Pain, US | Suspicion level | Ovary schematic | Synthetic | 7 cases  
PID Pathway | Diagnose PID | Symptoms, exam | Probability tag | Tree | Educational | Mild/mod/severe cases  

---

# **5. Assessment & Mastery**

Item Types:
- MCQs (ectopic, preeclampsia/eclampsia, GDM, previa/abruption, ICP, PPH, labor disorders, torsion, PID)  
- Ultrasound interpretation (text-based)  
- β-hCG trend interpretation  
- Labor curve recognition  
- PPH “4 Ts” classification  
- Case vignettes with reasoning  
- Cervical exam interpretation scenarios  

Include **10–20 items + rationales**.

---

# **6. Obstetric/Gynecologic Reasoning Framework**

Universal logic:
1. Confirm pregnancy & gestational age.  
2. Identify red flags: abdominal pain, heavy bleeding, hypertension, seizures, decreased fetal movement.  
3. Differentiate life-threatening causes (ectopic, abruption, eclampsia).  
4. Order appropriate imaging/labs (US, β-hCG, CBC, LFTs).  
5. Apply validated criteria (preeclampsia, miscarriage types).  
6. Use stage-of-labor reasoning for labor abnormalities.  
7. Escalate appropriately (delivery, OR, ICU).  
8. Monitor postpartum complications (PPH).  

**Pitfalls to emphasize:**
- Misinterpreting β-hCG discriminatory zone  
- Confusing threatened abortion with viable pregnancy  
- Misdiagnosing abruption vs previa  
- Delay in recognizing preeclampsia severe features  
- Missing uterine atony in PPH  
- Forgetting ICP fetal risk  
- Misinterpreting torsion Doppler as normal flow  

---

# **7. Accessibility & Safety**
- WCAG 2.2 AA  
- Synthetic pregnancy + fetal data  
- No real medication dosing  
- Clear educational disclaimers  
- Inclusive reproductive health representation  

---

# **8. Tech Architecture**

Stack:
- React + TypeScript  
- Tailwind + shadcn/ui  
- Zustand/Redux  
- IndexedDB + Service Worker  
- D3/Recharts for timelines, fetal/maternal diagrams  

Structure:
- /ectopic  
- /preeclampsia  
- /gdm  
- /placental  
- /cholestasis  
- /pph  
- /loss  
- /labor  
- /torsion  
- /pid  
- /cases  
- /assessment  
- /glossary  
- /settings  

---

# **9. Data Model (Plain-text JSON Examples)**

    {
      "id": "ectopic_case",
      "beta_hcg": "1800",
      "ultrasound": "no intrauterine pregnancy",
      "symptoms": ["abdominal pain", "spotting"],
      "interpretation": "Concern for ectopic pregnancy"
    }

    {
      "id": "preeclampsia_case",
      "bp": "165/110",
      "labs": {"platelets": "92k", "creatinine": "1.3", "lfts": "elevated"},
      "severity": "Preeclampsia with severe features"
    }

    {
      "id": "labor_curve_case",
      "dilation_progress": [3, 4, 4, 5],
      "time": ["0h", "2h", "4h", "6h"],
      "classification": "Protracted active phase"
    }

---

# **10. Screen Specs & Wireframes**

**Home Screen**  
- Ectopic • Preeclampsia • GDM • Placental Disorders • ICP • PPH • Pregnancy Loss • Labor • Torsion • PID • Cases • Assessment  

**Ectopic Screen**  
- β-hCG curve  
- Ultrasound interpretation guide  

**Hypertension Screen**  
- Preeclampsia severity builder  
- Seizure recognition pathway  

**Labor Screen**  
- Cervical timeline graph  
- Normal vs abnormal labor panels  

**Placental Screen**  
- Abruption vs previa diagrams  
- Maternal-fetal risk visualizations  

**PPH Screen**  
- 4 Ts algorithm  
- Atony recognition  

**GDM Screen**  
- OGTT graph  
- Dietary + insulin conceptual flow  

**PID/Torsion Screen**  
- Acute pelvic pain differential tree  

**Cases**  
- OB & GYN interactive simulations  

**Assessment**  
- MCQs + matching + progression recognition  

---

# **11. Copy & Content Kit**

Examples:
- “β-hCG > discriminatory threshold without intrauterine pregnancy → concern for ectopic.”  
- “Preeclampsia: proteinuria OR severe features (LFTs, thrombocytopenia, Cr).”  
- “ICP: intense pruritus + elevated bile acids.”  
- “Placenta previa: painless bleeding; avoid digital exams.”  
- “PPH: uterine atony is most common cause.”  
- “Ovarian torsion: sudden unilateral pain with nausea.”  
- “PID: CMT + adnexal tenderness + discharge.”  

Glossary: fetal station, effacement, CMT, cholestasis, abruption, previa, arrest disorders, etc.

---

# **12. Analytics & A/B Plan**
- Compare linear vs branching triage flows  
- Evaluate GDM interpreter accuracy  
- Assess labor timeline comprehension  
- Track improvement in PPH recognition  

---

# **13. QA Checklist**
- β-hCG and miscarriage criteria conceptually correct  
- Preeclampsia logic accurate  
- Labor progression curves consistent  
- Placental disorder distinctions correct  
- Synthetic-only pregnancy data  
- Non-prescriptive medication explanations  

---

# **14. Roadmap**
- M0: Ectopic + Preeclampsia + GDM  
- M1: Placental disorders + ICP  
- M2: PPH + pregnancy loss  
- M3: Labor + GYN emergencies (torsion, PID)  
- M4: Advanced case packs  

---

# **Acceptance Criteria**
- Learner identifies ectopic pregnancy early  
- Learner understands hypertensive disorders in pregnancy  
- Learner interprets GDM OGTT logic  
- Learner differentiates abruption vs previa  
- Learner recognizes ICP & PPH  
- Learner understands labor abnormalities  
- OBGYN Master maintains unified obstetric reasoning  

---

## **Now Generate**
Using the inputs above, produce full deliverables in the required order.  
If inputs are missing, make safe obstetric/gynecologic assumptions and label them clearly.
