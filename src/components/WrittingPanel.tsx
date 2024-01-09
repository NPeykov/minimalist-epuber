import WrittingButtons from './WrittingButtons'

const WrittingPanel = ({
  text,
  setText,
}: {
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    // TODO: fix blue border
    <div className="relative">
      <textarea
        spellCheck="false"
        className="overflow-y-scroll text-white w-full h-full p-2.5 bg-zinc-700 border border-solid rounded-lg border-orange-400/50 hover:border-orange-400"
        style={{ outline: 'none', resize: 'none' }}
        onChange={({ target }) => setText(target.value)}
        value={text}
      />
      <WrittingButtons text={text} setText={setText} />
    </div>
  )
}

export default WrittingPanel
