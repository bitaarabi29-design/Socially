import React from 'react'

const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="mx-auto grid grid-cols-5  w-full max-w-6xl flex-row gap-6 px-4">
      {children}
    </div>
  )
}

export default Container
