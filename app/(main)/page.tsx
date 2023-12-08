import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <main className='mt-10'>
      <Input
        placeholder='Search globally'
        className='pl-10 rounded-full py-7'
      />
    </main>
  )
}
