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
            backgroundColor: '#202123',
            color: 'white',
          },
          success: {
            style: {
              backgroundColor: '#202123',
              color: 'lightGreen',
            },
          },
          error: {
            style: {
              backgroundColor: '#202123',
              color: 'firebrick'
            },
          },
        }}
      />
    </>
  )
}

export default ClientProvider