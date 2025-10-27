import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import toast from 'react-hot-toast'

//type rafce to get this snippet
const App = () => {
  return (
    <div data-theme="coffee">
      {/* <button 
      onClick={()=> toast.success("Congrats !",{position: 'bottom-right'})}
      className="text-red-500 p-4 bg-purple-300"
      
      > Click Me</button> */}
      {/* <button
        onDoubleClick={() => toast.success("You Double Tapped Me !!", { position: 'bottom-left' })}
        className="btn btn-outline"
      >ClickMe</button> */}
      <button className="btn btn-active">Default</button>
      <button className="btn btn-active btn-neutral">Neutral</button>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />

      </Routes>
    </div>
  )
}

export default App