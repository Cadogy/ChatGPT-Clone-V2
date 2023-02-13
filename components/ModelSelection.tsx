'use client'
import useSWR from 'swr'
import Select from 'react-select'
import { useState } from 'react'

const fetchModels = () => fetch('/api/getEngines').then(res => res.json())

function ModelSelection() {
  const { data: models, isLoading } = useSWR('models', fetchModels)
  const { data: model, mutate: setModel } = useSWR('model', {
    fallbackData: 'text-davinci-003'
  })

  return (
    <div className="mt-2">
      <Select
        className="mt-2"
        defaultValue={model}
        placeholder={model}
        options={models?.modelOptions}
        isSearchable
        isLoading={isLoading}
        menuPosition='fixed'
        onChange={(e) => setModel(e.value)}
      />
    </div>
  )
}

export default ModelSelection