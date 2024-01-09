import { ReactComponent as CopyIcon } from '../icons/copy.svg'
import { ReactComponent as ResetIcon } from '../icons/reset.svg'
import { ReactComponent as CleanIcon } from '../icons/clean.svg'
import ButtonContainer from './ButtonContainer'

const PreviewButtons = () => {
  return (
    <div className="flex flex-wrap justify-end items-center absolute w-full left-0 -bottom-[14px] gap-4">
      {/* NOTE: below justify can be remplaced by others type of justify */}
      <ButtonContainer text="Reset to default text">
        <ResetIcon />
      </ButtonContainer>
      <ButtonContainer text="Clean text">
        <CleanIcon />
      </ButtonContainer>
      <ButtonContainer text="Copy Text">
        <CopyIcon />
      </ButtonContainer>
    </div>
  )
}

export default PreviewButtons
