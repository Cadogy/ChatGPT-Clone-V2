'use client'

import React from 'react'
import { Toaster } from 'react-hot-toast'

function ClientProvider() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            backgroundColor: '#FFF',
            color: '#222',
          },
          success: {
            style: {
              backgroundColor: '#FFF',
              color: 'lightGreen',
            },
          },
          error: {
            style: {
              backgroundColor: '#FFF',
              color: 'firebrick'
            },
          },
        }}
      />
    </>
  )
}

export default ClientProvider