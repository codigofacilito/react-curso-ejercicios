import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ListProvider } from './contexts/ListContext'
import NotesForm from './notes/NotesForm'
import NotesList from './notes/NotesList'

function App() {

  return (
    <div className="App">
      <ListProvider>
        <NotesForm />
        <NotesList />
      </ListProvider>
    </div>
  )
}

export default App
