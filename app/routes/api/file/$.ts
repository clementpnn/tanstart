import { createAPIFileRoute } from '@tanstack/start/api'

export const Route = createAPIFileRoute('/api/file/$')({
  GET: async ({ params }) => {
    const { _splat } = params
    return new Response(`File: ${_splat}`)
  },
})