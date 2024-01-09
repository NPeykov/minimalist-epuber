import ButtonContainer from './ButtonContainer'
import { ReactComponent as CopyHTMLIcon } from '../icons/copyHTML.svg'

const PreviewButtons = () => {
  return (
    <div className="flex flex-wrap justify-end items-center absolute w-full left-0 -bottom-[14px]">
      {/* NOTE: below justify can be remplaced by others type of justify */}
      <ButtonContainer text="Copy HTML code">
        <CopyHTMLIcon />
      </ButtonContainer>
    </div>
  )
}

export default PreviewButtons
