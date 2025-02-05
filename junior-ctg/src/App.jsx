//import { useState } from 'react'
import './App.css'
import Title from './Title'

function App() {
  return (
    <>
      <header>
        <img id="logo" src="/assets/images/logo-full.svg" />
      </header>
      <main className="container">
        <Title />
      </main>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
        Coded by <a href="#">NL077</a>.
      </div>
    </>
  )
}

export default App
