import { ReactComponent as CopyIcon } from '../icons/copy.svg'
import { ReactComponent as ResetIcon } from '../icons/reset.svg'
import { ReactComponent as CleanIcon } from '../icons/clean.svg'
import ButtonContainer from './ButtonContainer'

const PreviewButtons = () => {
  return (
    <div className="flex flex-wrap justify-end items-center absolute w-full left-0 -bottom-[14px]">
      {/* NOTE: below justify can be remplaced by others type of justify */}
      <div className="flex flex-wrap justify-center items-center gap-2">
        <ButtonContainer text="Reset to default text">
          <ResetIcon />
        </ButtonContainer>
        <ButtonContainer text="Copy Text">
          <CleanIcon />
        </ButtonContainer>
        <ButtonContainer text="Copy Text">
          <CopyIcon />
        </ButtonContainer>
      </div>
    </div>
  )
}

export default PreviewButtons
