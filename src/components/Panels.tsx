import { useState } from 'react'
import INITIAL_TEXT from '../texts/initialText'
import PreviewPanel from './PreviewPanel'
import WrittingPanel from './WrittingPanel'

const Panels = () => {
  const [text, setText] = useState(INITIAL_TEXT)

  return (
    <div className="h-3/4 w-5/6 grid grid-cols-2 gap-4 mx-auto">
      <WrittingPanel text={text} setText={setText} />
      <PreviewPanel text={text} />
    </div>
  )
}

export default Panels
