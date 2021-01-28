import chart from '@toast-ui/editor-plugin-chart'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'
import hljs from 'highlight.js'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'
import tableMergedCell from '@toast-ui/editor-plugin-table-merged-cell'
import uml from '@toast-ui/editor-plugin-uml'

const plugins = [
  chart,
  [codeSyntaxHighlight, { hljs }],
  colorSyntax,
  tableMergedCell,
  uml
]

export default plugins
