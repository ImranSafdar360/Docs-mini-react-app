import React from 'react'
import Background from './Components/Background'
import Foreground from './Components/Foreground'

const Docs_App = () => {
  return (
    <>
     <div className="relative container-fluid w-full h-screen bg-zinc-800">
          <Background title="Docs." subtitle="Documents."/>
          <Foreground/>
      </div> 
    </>
  )
}

export default Docs_App
