import Markdown from 'react-markdown'
import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'
import PreviewButtons from './PreviewButtons'

const PreviewPanel = ({ text }: { text: string }) => {
  return (
    <div className="relative">
      <div className="overflow-y-scroll w-full h-full p-2.5 font-mono text-white mx-2 border border-orange-400 rounded-lg bg-zinc-950">
        <Markdown
          className="react-markdown-text w-full prose prose-invert prose-img:rounded-xl prose-a:text-blue-500 prose-pre:bg-transparent prose-pre:p-1 prose-code:bg-[#282C34] font-mono"
          children={text}
          remarkPlugins={[remarkGfm, remarkBreaks]}
          components={{
            code(props) {
              const { children, className, node, ...rest } = props
              const match = /language-(\w+)/.exec(className || '')
              return match ? (
                <SyntaxHighlighter
                  {...(rest as SyntaxHighlighterProps)}
                  PreTag="div"
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                  style={oneDark}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              )
            },
          }}
        />
      </div>
      <PreviewButtons />
    </div>
  )
}

export default PreviewPanel
