const ButtonContainer = ({
  text,
  children,
}: {
  text: string
  children: React.ReactNode
}) => {
  return (
    <button className="flex items-center justify-center w-9 h-9 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-full-view hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 dark:focus:text-orange-400 focus:ring-orange-400 dark:focus:ring-orange-500 dark:bg-[#0a0a0a] focus:outline-none dark:text-gray-400 dark:border-orange-400/50 dark:hover:text-orange-400 dark:hover:border-orange-400 hover:dark:bg-[#0a0a0a]">
      <span className="tooltip sr-only" data-tooltip="Hello">
        {text}
      </span>
      {children}
    </button>
  )
}

export default ButtonContainer
