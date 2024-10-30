import { json } from '@tanstack/start'
import { createAPIFileRoute } from '@tanstack/start/api'

export const Route = createAPIFileRoute('/api/hello')({
  GET: async ({ request }) => {
    return new Response('Hello, World! from ' + request.url)
  },

  POST: async ({ request }) => {
    const body = await request.json()
    return json({ message: 'Hello, World!' })
  },
})
