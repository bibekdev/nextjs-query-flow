'use client'

import { sidebarLinks } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'
import { Button } from '../ui/button'

const LeftSidebar = () => {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <div className='flex flex-col h-full'>
      <div className='flex flex-col gap-y-6'>
        {sidebarLinks.map(item => {
          const { id, name, href, icon: Icon } = item
          const isActive =
            (pathname.includes(item.href as string) &&
              (item.href?.length as number) > 1) ||
            pathname === item.href

          return (
            <Link
              href={href}
              key={id}
              className={cn(
                'flex items-center gap-x-4 px-4 py-3 rounded-lg hover:bg-primary hover:text-grey transition-all text-dark-grey',
                isActive ? 'bg-primary text-grey' : ''
              )}>
              <Icon className='w-5 h-5' />
              <span className='text-base font-bold'>{name}</span>
            </Link>
          )
        })}
      </div>
      <div className='mt-auto w-full flex flex-col gap-5 lg:hidden'>
        <Button size='lg' onClick={() => router.push('/sign-in')}>
          Login
        </Button>
        <Button
          variant='secondary'
          size='lg'
          onClick={() => router.push('/sign-up')}>
          Sign up
        </Button>
      </div>
    </div>
  )
}
export default LeftSidebar
