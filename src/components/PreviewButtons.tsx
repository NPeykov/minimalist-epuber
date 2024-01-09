import ButtonContainer from './ButtonContainer'
import { ReactComponent as CopyHTMLIcon } from '../icons/copyHTML.svg'

const PreviewButtons = () => {
  const handleCopyHTML = () => {
    // TODO: do logic
  }

  return (
    <div className="flex justify-end items-center absolute w-full left-0 -bottom-[14px]">
      {/* NOTE: below justify can be remplaced by others type of justify */}
      <ButtonContainer hoverText="Copy HTML code" onClick={handleCopyHTML}>
        <CopyHTMLIcon />
      </ButtonContainer>
    </div>
  )
}

export default PreviewButtons
