import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div>
      <h1 className='text-lg'>Welcome to Tanstack!</h1>
    </div>
  )
}
