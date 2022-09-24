import { RecoilRoot } from 'recoil'

import { AppRouter } from './routes/app.routes'

export function App() {
  return (
    <RecoilRoot>
      <AppRouter />
    </RecoilRoot>
  )
}
