import { Header } from './components/Header'

interface ThemeProps {
  children: JSX.Element | JSX.Element[]
}

export function Theme({ children }: ThemeProps) {
  return (
    <div className="h-screen w-screen overflow-x-hidden pb-10">
      <main className="max-w-[90rem] mx-auto">
        <Header />

        {children}
      </main>
    </div>
  )
}
