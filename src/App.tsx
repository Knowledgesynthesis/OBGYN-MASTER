import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Ectopic from './pages/Ectopic'
import Preeclampsia from './pages/Preeclampsia'
import GDM from './pages/GDM'
import Placental from './pages/Placental'
import Cholestasis from './pages/Cholestasis'
import PPH from './pages/PPH'
import Loss from './pages/Loss'
import Labor from './pages/Labor'
import GynEmergencies from './pages/GynEmergencies'
import Cases from './pages/Cases'
import Assessment from './pages/Assessment'
import Glossary from './pages/Glossary'
import Settings from './pages/Settings'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ectopic" element={<Ectopic />} />
          <Route path="/preeclampsia" element={<Preeclampsia />} />
          <Route path="/gdm" element={<GDM />} />
          <Route path="/placental" element={<Placental />} />
          <Route path="/cholestasis" element={<Cholestasis />} />
          <Route path="/pph" element={<PPH />} />
          <Route path="/loss" element={<Loss />} />
          <Route path="/labor" element={<Labor />} />
          <Route path="/gyn-emergencies" element={<GynEmergencies />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
