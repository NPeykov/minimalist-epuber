import { ReactComponent as CopyIcon } from '../icons/copy.svg'
import { ReactComponent as ResetIcon } from '../icons/reset.svg'
import { ReactComponent as CleanIcon } from '../icons/clean.svg'
import ButtonContainer from './ButtonContainer'
import INITIAL_TEXT from '../texts/initialText'

const WrittingButtons = ({
  text,
  setText,
}: {
  text: string
  setText: React.Dispatch<React.SetStateAction<string>>
}) => {
  const handleReset = () => {
    setText(INITIAL_TEXT)
  }

  const handleClean = () => {
    setText('')
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="flex flex-wrap justify-end items-center absolute w-full left-0 -bottom-[14px] gap-2">
      {/* NOTE: below justify can be remplaced by others type of justify */}
      <ButtonContainer hoverText="Reset to default text" onClick={handleReset}>
        <ResetIcon />
      </ButtonContainer>
      <ButtonContainer hoverText="Clean text" onClick={handleClean}>
        <CleanIcon />
      </ButtonContainer>
      <ButtonContainer hoverText="Copy Text" onClick={handleCopy}>
        <CopyIcon />
      </ButtonContainer>
    </div>
  )
}

export default WrittingButtons
