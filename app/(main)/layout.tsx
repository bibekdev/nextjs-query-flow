import LeftSidebar from '@/components/globals/left-sidebar'

type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className='flex'>
      <aside className='hidden lg:block sticky h-cover left-0 w-[300px] p-10 border-r border-grey'>
        <LeftSidebar />
      </aside>
      <section className='p-4 lg:p-10 flex-1'>{children}</section>
    </main>
  )
}
export default MainLayout
