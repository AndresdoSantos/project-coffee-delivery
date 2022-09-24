import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Checkout } from '../screens/Checkout'
import { Home } from '../screens/Home'
import { Success } from '../screens/Success'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route
          path="success/:street/:number/:city/:federativeUnion/:paymentMethod"
          element={<Success />}
        />
      </Routes>
    </BrowserRouter>
  )
}
