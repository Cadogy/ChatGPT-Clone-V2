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
            userSelect: 'none',
          },
          success: {
            style: {
              backgroundColor: '#FFF',
              color: 'lightGreen',
              userSelect: 'none',
            },
          },
          error: {
            style: {
              backgroundColor: '#FFF',
              color: 'firebrick',
              userSelect: 'none',
            },
          },
        }}
      />
    </>
  )
}

export default ClientProvider