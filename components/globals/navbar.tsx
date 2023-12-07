'use client'

import Link from 'next/link'

import { useState } from 'react'
import { Code2, Search, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()
  const [showSearchBar, setShowSearchBar] = useState(false)

  return (
    <nav className='navbar md:justify-between justify-normal'>
      <div className=''>
        <Link
          href='/'
          className='flex items-center gap-2 font-bold text-xl text-dark-grey font-gelasio'>
          <Code2 className='w-8 h-8 text-primary' /> QueryFlow
        </Link>
      </div>
      <div
        className={cn(
          'absolute bg-white mt-1 border-b border-grey px-[5vw] py-3 top-full left-[50%] -translate-x-[50%] w-full lg:relative lg:top-0 lg:max-w-[500px] lg:left-0 lg:-translate-x-0 lg:px-0 lg:py-0 lg:bg-transparent lg:border-none lg:show',
          showSearchBar ? 'show' : 'hide'
        )}>
        <Input
          type='text'
          className='px-8 lg:px-14 py-7 rounded-full bg-grey'
          placeholder='Search globally...'
        />
        <Search className='w-6 h-6 text-dark-grey absolute right-[9vw] top-1/2 -translate-y-1/2 lg:left-4' />
      </div>

      <div className='ml-auto lg:ml-0 flex items-center gap-3 lg:gap-6'>
        <Button
          size='icon'
          onClick={() => setShowSearchBar(!showSearchBar)}
          className='lg:hidden lg:show'>
          <Search className='w-6 h-6 text-dark-grey' />
        </Button>
        <Button size='icon' className='lg:hidden lg:show'>
          <Menu className='w-6 h-6 text-dark-grey' />
        </Button>

        <Button
          size='lg'
          className='hidden lg:block'
          onClick={() => router.push('/sign-in')}>
          Login
        </Button>
        <Button
          variant='secondary'
          size='lg'
          className='hidden lg:block'
          onClick={() => router.push('/sign-up')}>
          Sign up
        </Button>
      </div>
    </nav>
  )
}
export default Navbar
