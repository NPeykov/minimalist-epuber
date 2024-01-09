const ButtonContainer = ({
  text,
  children,
}: {
  text: string
  children: React.ReactNode
}) => {
  return (
    <>
      <button
        className="ms-3 flex items-center text-center justify-center w-9 h-9 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-full-view hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-1 dark:focus:text-orange-400 focus:ring-orange-400 dark:focus:ring-orange-500 dark:bg-[#0a0a0a] focus:outline-none dark:text-gray-400 dark:border-orange-400/50 dark:hover:text-orange-400 dark:hover:border-orange-400 hover:dark:bg-[#0a0a0a]"
        type="button"
        data-tooltip-target={text}
        data-tooltip-placement="top"
        data-tooltip-strategy="fixed"
      >
        {children}
      </button>

      <div
        id={text}
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-orange-500"
      >
        {text}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  )
}

export default ButtonContainer
