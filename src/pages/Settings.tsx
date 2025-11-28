import { useThemeStore } from '@/store/themeStore'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Moon, Sun } from 'lucide-react'

export default function Settings() {
  const { isDark, toggleTheme } = useThemeStore()

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Customize your learning experience
        </p>
      </div>

      {/* Theme Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>
            Choose your preferred color theme
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              <div>
                <p className="font-medium">Theme</p>
                <p className="text-sm text-muted-foreground">
                  {isDark ? 'Dark mode' : 'Light mode'}
                </p>
              </div>
            </div>
            <button
              onClick={toggleTheme}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              style={{ backgroundColor: isDark ? '#3b82f6' : '#e5e7eb' }}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isDark ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </CardContent>
      </Card>

      {/* About */}
      <Card>
        <CardHeader>
          <CardTitle>About OBGYN Master</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Mission</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              OBGYN Master is an evidence-based educational platform designed to help medical students,
              residents, and healthcare professionals master high-yield obstetrics and gynecology topics
              through interactive learning and case-based reasoning.
            </p>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Features</h3>
            <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside ml-4">
              <li>Comprehensive coverage of essential OB/GYN topics</li>
              <li>Interactive clinical tools and calculators</li>
              <li>Case-based learning scenarios</li>
              <li>Self-assessment questions with detailed rationales</li>
              <li>Mobile-first design for learning on the go</li>
              <li>Offline capability for studying anywhere</li>
              <li>Dark mode for comfortable reading</li>
            </ul>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Topics Covered</h3>
            <div className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
              <ul className="space-y-1 list-disc list-inside ml-4">
                <li>Ectopic Pregnancy</li>
                <li>Preeclampsia & Eclampsia</li>
                <li>Gestational Diabetes</li>
                <li>Placental Disorders</li>
                <li>Intrahepatic Cholestasis</li>
              </ul>
              <ul className="space-y-1 list-disc list-inside ml-4">
                <li>Postpartum Hemorrhage</li>
                <li>Early Pregnancy Loss</li>
                <li>Labor Progression</li>
                <li>Ovarian Torsion</li>
                <li>Pelvic Inflammatory Disease</li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Version Information</h3>
            <p className="text-sm text-muted-foreground">
              Version 1.0.0
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimers */}
      <Card>
        <CardHeader>
          <CardTitle>Important Disclaimers</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <h3 className="font-semibold mb-2 text-yellow-900 dark:text-yellow-200">
              Educational Purpose Only
            </h3>
            <p className="text-sm text-yellow-900 dark:text-yellow-200 leading-relaxed">
              This application is designed for educational purposes only. All content is based on
              evidence-based guidelines (ACOG, SMFM, CDC) and uses synthetic data for learning scenarios.
            </p>
          </div>

          <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <h3 className="font-semibold mb-2 text-red-900 dark:text-red-200">
              Not for Clinical Use
            </h3>
            <p className="text-sm text-red-900 dark:text-red-200 leading-relaxed">
              This app is NOT a substitute for clinical judgment, consultation with qualified healthcare
              providers, or adherence to institutional protocols. All clinical decisions must be made by
              licensed healthcare professionals following current evidence-based guidelines and considering
              individual patient circumstances.
            </p>
          </div>

          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <h3 className="font-semibold mb-2 text-blue-900 dark:text-blue-200">
              Medical Disclaimer
            </h3>
            <p className="text-sm text-blue-900 dark:text-blue-200 leading-relaxed">
              The information provided in this app does not constitute medical advice, diagnosis, or
              treatment. Always seek the advice of qualified healthcare providers with questions regarding
              medical conditions or treatment. Never disregard professional medical advice or delay seeking
              it because of information accessed through this application.
            </p>
          </div>

          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
            <h3 className="font-semibold mb-2 text-purple-900 dark:text-purple-200">
              Medication Information
            </h3>
            <p className="text-sm text-purple-900 dark:text-purple-200 leading-relaxed">
              Medication names, dosages, and treatment protocols mentioned in this app are for educational
              illustration only and may not reflect current institutional protocols or individual patient
              needs. All medication prescribing must follow current prescribing information, institutional
              formularies, and be tailored to individual patient circumstances.
            </p>
          </div>

          <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <h3 className="font-semibold mb-2 text-green-900 dark:text-green-200">
              Synthetic Data
            </h3>
            <p className="text-sm text-green-900 dark:text-green-200 leading-relaxed">
              All patient scenarios, case studies, and clinical data presented in this application are
              synthetic and created for educational purposes. They do not represent real patients or
              clinical encounters.
            </p>
          </div>

          <div className="border-t pt-4">
            <p className="text-xs text-muted-foreground">
              By using this application, you acknowledge that you have read and understood these disclaimers
              and agree to use this app solely for educational purposes. The creators of this app assume no
              liability for any clinical decisions made based on information accessed through this platform.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Privacy */}
      <Card>
        <CardHeader>
          <CardTitle>Privacy</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">
            This app does not collect, store, or transmit any personal information or user data.
            All preferences (such as theme settings) are stored locally on your device only.
            No analytics, tracking, or data sharing occurs.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
