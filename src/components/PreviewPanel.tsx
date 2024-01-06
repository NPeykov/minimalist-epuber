import Markdown from 'react-markdown'
import {
  Prism as SyntaxHighlighter,
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkBreaks from 'remark-breaks'
import remarkGfm from 'remark-gfm'

const PreviewPanel = ({ text }: { text: string }) => {
  return (
    <div className="overflow-y-scroll p-2.5 font-mono text-white mx-2 border border-orange-400 rounded-lg">
      <Markdown
        className="w-full prose prose-invert prose-img:rounded-xl prose-a:text-blue-500 prose-pre:bg-transparent prose-pre:p-1 prose-code:bg-[#282C34] font-mono"
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
  )
}

export default PreviewPanel
