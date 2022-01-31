// @vendors
import React from 'react'
import { Routes, Route } from 'react-router-dom'

// @components
import { Home, Products, Clients, Contact } from '../pages'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<Products />}>
        <Route path="tech" element={<Products />} />
        <Route path="services" element={<Products />} />
        <Route path="office" element={<Products />} />
      </Route>
      <Route path="clients" element={<Clients />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  )
}
