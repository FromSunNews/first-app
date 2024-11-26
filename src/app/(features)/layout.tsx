'use client'

import { Suspense } from 'react'

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense>
      {children}
    </Suspense>
  )
} 