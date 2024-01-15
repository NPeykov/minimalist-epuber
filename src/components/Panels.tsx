import { useEffect, useState } from 'react'
import INITIAL_TEXT from '../texts/initialText'
import PreviewPanel from './PreviewPanel'
import WrittingPanel from './WrittingPanel'

const Panels = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [text, setText] = useState<string>('')
  useEffect(() => {
    const LSText = localStorage.getItem('text')
    const _text: string = LSText !== null ? LSText : INITIAL_TEXT
    setText(_text)
  }, [])

  return (
    <div className="h-3/4 w-5/6 grid grid-cols-2 gap-4 mx-auto">
      <WrittingPanel text={text} setText={setText} />
      <PreviewPanel text={text} isDarkMode={isDarkMode} />
    </div>
  )
}

export default Panels
