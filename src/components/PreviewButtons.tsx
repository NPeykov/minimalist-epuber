import ButtonContainer from './ButtonContainer'
import { ReactComponent as CopyHTMLIcon } from '../icons/copyHTML.svg'

const PreviewButtons = () => {
  const handleCopyHTML = () => {
    const node = document.querySelector('.react-markdown-text')
    if (node) {
      const html = node.innerHTML
      navigator.clipboard.writeText(html)
    } else {
      console.log('error copying HTML')
    }
  }

  return (
    <div className="flex justify-end items-center absolute w-full left-0 -bottom-[14px]">
      <ButtonContainer hoverText="Copy HTML code" onClick={handleCopyHTML}>
        <CopyHTMLIcon />
      </ButtonContainer>
    </div>
  )
}

export default PreviewButtons
