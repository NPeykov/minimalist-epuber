import { useState } from 'react'
import { ReactComponent as GitHub } from '../icons/github.svg'
import { ReactComponent as DarkModeIcon } from '../icons/darkMode.svg'
import { ReactComponent as LightModeIcon } from '../icons/lightMode.svg'

const Header = () => {
  const LSTheme = localStorage.getItem('theme')
  const [isDarkMode, setIsDarkMode] = useState(LSTheme === 'dark')
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    const root = document.documentElement
    root.classList.toggle('dark')
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark')
  }

  return (
    <div className="flex flex-row w-full justify-between px-4 py-4">
      <a
        className="w-0 dark:text-white hover:text-orange-400"
        href="https://github.com/peyk0v"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub />
      </a>
      <button
        className="text-black dark:text-white hover:text-orange-400"
        onClick={() => toggleTheme()}
      >
        {isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
      </button>
    </div>
  )
}

export default Header
