import * as fs from 'fs'
import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/start'

const filePath = 'count.txt'

async function readCount() {
  return parseInt(
    await fs.promises.readFile(filePath, 'utf-8').catch(() => '0'),
  )
}

const getCount = createServerFn('GET', () => {
  return readCount()
})

const updateCount = createServerFn('POST', async (formData: FormData) => {
  const count = await readCount()
  const addBy = Number(formData.get('addBy'))
  await fs.promises.writeFile(filePath, `${count + addBy}`)
  return new Response('ok', { status: 301, headers: { Location: '/' } })
})

export const Route = createFileRoute('/')({
  component: Home,
  loader: async () => await getCount(),
})

function Home() {
  const state = Route.useLoaderData()

  return (
    <div>
      <form
        action={updateCount.url}
        method="POST"
        encType="multipart/form-data"
      >
        <input type="number" name="addBy" defaultValue="1" />
        <button type="submit">Add</button>
      </form>
      <pre>{state}</pre>
    </div>
  )
}