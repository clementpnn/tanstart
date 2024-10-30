import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/start'

const getData = createServerFn('GET', () => {
  return "World"
})

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => await getData(),
})

function Home() {
  const state = Route.useLoaderData()

  return (
    <h1>Hello {state}</h1>
  )
}