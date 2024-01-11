import { ReactComponent as GitHub } from '../icons/github.svg'

const Header = () => {
  return (
    <a
      className="w-0 pt-4 pl-4 dark:text-white hover:text-orange-400"
      href="https://github.com/peyk0v"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GitHub />
    </a>
  )
}

export default Header
