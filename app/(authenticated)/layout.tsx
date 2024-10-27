import Header from '@/components/header/header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="p-4 min-h-[calc(100vh-4rem)] flex flex-col">
        {children}
      </main>
    </>
  )
}
