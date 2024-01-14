import { useState } from 'react'
import DarkBackground from './components/DarkBackground'
import LightBackground from './components/LightBackground'
import Footer from './components/Footer'
import Header from './components/Header'
import Panels from './components/Panels'
import Title from './components/Title'

function App() {
  const LSTheme = localStorage.getItem('theme')
  const root = window.document.documentElement
  if (LSTheme === 'dark') {
    root.classList.add('dark')
    root.classList.remove('light')
  } else {
    root.classList.remove('dark')
    root.classList.add('light')
  }
  const [isDarkMode, setDarkMode] = useState(LSTheme === 'dark')

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      {isDarkMode ? <DarkBackground /> : <LightBackground />}
      <Title />
      <Panels isDarkMode={isDarkMode} />
      <Footer />
    </div>
  )
}

export default App
