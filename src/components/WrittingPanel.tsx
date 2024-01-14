import WrittingButtons from './WrittingButtons'

const WrittingPanel = ({
  text,
  setText,
}: {
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
}) => {
  const handleChange = (value: string): void => {
    setText(value)
    localStorage.setItem('text', value)
  }

  return (
    <div className="relative">
      <textarea
        spellCheck="false"
        // TODO: change background in this panel and in previews pannel
        className="overflow-y-scroll text-zinc-900 dark:text-zinc-100 w-full h-full p-2.5 bg-zinc-50 dark:bg-zinc-900 border border-solid rounded-lg border-orange-400 focus:border-orange-400 focus:ring-orange-400"
        style={{ outline: 'none', resize: 'none' }}
        onChange={({ target }) => handleChange(target.value)}
        value={text}
      />
      <WrittingButtons text={text} setText={setText} />
    </div>
  )
}

export default WrittingPanel
