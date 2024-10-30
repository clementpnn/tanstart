import { createAPIFileRoute } from '@tanstack/start/api'

export const Route = createAPIFileRoute('/api/users/$id')({
  GET: async ({ params }) => {
    const { id } = params
    return new Response(`User ID: ${id}`)
  },
})