import { ReactComponent as GitHub } from '../icons/github.svg'
import { ReactComponent as DarkModeIcon } from '../icons/darkMode.svg'
import { ReactComponent as LightModeIcon } from '../icons/lightMode.svg'

const Header = ({
  isDarkMode,
  setDarkMode,
}: {
  isDarkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const toggleTheme = () => {
    const root = window.document.documentElement
    root.classList.toggle('dark')
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark')
    setDarkMode(!isDarkMode)
  }

  return (
    <div className="flex flex-row w-full justify-between px-4 py-4">
      <a
        className="w-0 text-zinc-950 dark:text-zinc-100 hover:text-orange-400"
        href="https://github.com/peyk0v"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub />
      </a>
      <button
        className="text-zinc-950 dark:text-zinc-100 hover:text-orange-400"
        onClick={() => toggleTheme()}
      >
        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </button>
    </div>
  )
}

export default Header
