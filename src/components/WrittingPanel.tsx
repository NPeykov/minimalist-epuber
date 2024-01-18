import { useRef } from 'react'
import WrittingButtons from './WrittingButtons'

const WrittingPanel = ({
  text,
  setText,
}: {
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const handleChange = (value: string): void => {
    setText(value)
    localStorage.setItem('text', value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab' && textareaRef.current) {
      e.preventDefault()

      const value = textareaRef.current.value
      const selectionStart = textareaRef.current.selectionStart || 0
      const selectionEnd = textareaRef.current.selectionEnd || 0

      textareaRef.current.value =
        value.substring(0, selectionStart) +
        '    ' +
        value.substring(selectionEnd)

      textareaRef.current.selectionStart =
        selectionEnd + 4 - (selectionEnd - selectionStart)
      textareaRef.current.selectionEnd =
        selectionEnd + 4 - (selectionEnd - selectionStart)

      handleChange(textareaRef.current.value)
    }
  }

  return (
    <div className="relative">
      <textarea
        ref={textareaRef}
        onKeyDown={handleKeyDown}
        spellCheck="false"
        className="overflow-y-scroll w-full h-full text-zinc-900 dark:text-zinc-100 p-2.5 bg-zinc-50 dark:bg-zinc-900 border border-solid rounded-lg border-orange-400 focus:border-orange-400 focus:ring-orange-400"
        style={{ outline: 'none', resize: 'none' }}
        onChange={({ target }) => handleChange(target.value)}
        value={text}
      />
      <WrittingButtons text={text} setText={setText} />
    </div>
  )
}

export default WrittingPanel
