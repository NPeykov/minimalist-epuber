const WrittingPanel = ({
  text,
  setText,
}: {
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <>
      <textarea
        spellCheck="false"
        className="overflow-y-scroll border border-orange-400/50 hover:border-orange-400 p-2.5 bg-zinc-700 text-white mx-2 rounded-lg"
        style={{ outline: 'none', resize: 'none' }}
        onChange={({ target }) => setText(target.value)}
        value={text}
      />
    </>
  )
}

export default WrittingPanel
