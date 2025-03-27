import { openai } from '@ai-sdk/openai'
import { Agent } from '@mastra/core/agent'

export const generalAgent = new Agent({
  name: 'My Agent',
  instructions: 'You are a helpful assistant',
  model: openai('gpt-4o-mini'),
})

async function main() {
  const query =
    '最近なかなか寝付けないんだけど、解決するための良い方法はないかな？'
  console.log(`Query: ${query}`)

  const response = await generalAgent.generate([
    { role: 'user', content: query },
  ])
  console.log('\nMy Agent:', response.text)
}

main()
