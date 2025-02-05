//import { useState } from 'react'
import './App.css'
import Title from './components/Title'
import Form from './components/Form'

function App() {
  return (
    <>
      <header>
        <img id="logo" src="/assets/images/logo-full.svg" alt="Coding Conf logo" />
      </header>
      <main className="container">
        <Title />
        <Form />
      </main>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
        Coded by <a href="#">NL077</a>.
      </div>
    </>
  )
}

export default App
