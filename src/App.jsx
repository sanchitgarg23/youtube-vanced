import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'

function App() {
  // const [count, setCount] = useState(0)
  const [sidebar,setSidebar]=useState(true)

  return (
    <>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>}/>
        <Route path="/video/:categoryId/:videoId" element={<Video/>}/>
      </Routes>
      {/* <Route>: Defines a specific URL path and the component that should be rendered.*/}
      {/* path="/": When the user visits the root (/) URL of your app, the Home component will be displayed. */}
      {/* element={<Home />}: Specifies the React component (Home) that will be rendered when the user visits this route.*/}
      {/* In React, we build single-page applications (SPAs) where different pages or views are loaded without refreshing the browser. */}

    </>
  )
}

export default App
