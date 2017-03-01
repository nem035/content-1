import questionParser from '../questionParser'

export const context = 'revision-question'
export const description = 'revision-question'
export const link = 'https://enkidevs.github.io/guidelines/Insights-guidelines.html#revise-question'

export default function ({reviseQuestion}) {
  if (typeof reviseQuestion === 'undefined') return true
  if (questionParser(reviseQuestion) instanceof Error) return false
  return true
}