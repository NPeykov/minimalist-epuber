import { useState } from 'react'
import INITIAL_TEXT from '../texts/initialText'
import PreviewPannel from './PreviewPannel'
import WrittingPannel from './WrittingPannel'

const Pannels = () => {
  const [text, setText] = useState(INITIAL_TEXT)

  return (
    <div className="h-3/4 w-5/6 grid grid-cols-2 gap-4 mx-auto">
      <WrittingPannel text={text} setText={setText} />
      <PreviewPannel text={text} />
    </div>
  )
}

export default Pannels
