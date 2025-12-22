import React from 'react'
import Signature from '../components/Signature'

function Page() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Signature />
    </React.Suspense>
  )
}

export default Page