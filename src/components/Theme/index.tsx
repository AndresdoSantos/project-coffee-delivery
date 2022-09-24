import { motion } from 'framer-motion'

import { Header } from './components/Header'

interface ThemeProps {
  children: JSX.Element | JSX.Element[]
}

export function Theme({ children }: ThemeProps) {
  return (
    <motion.div
      initial={{ x: 200 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="h-screen w-screen overflow-x-hidden"
    >
      <main className="max-w-[90rem] mx-auto overflow-x-hidden p-10">
        <Header />

        {children}
      </main>
    </motion.div>
  )
}
