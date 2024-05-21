import React, { useState } from 'react'
import './App.css'
import LoadingBar from 'react-top-loading-bar';
import Main from './main'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  const [a, b] = useState(0)
  return (
    <div>
    
      <Router>
      <LoadingBar color='blue' progress={a}  height="3px"   onLoaderFinished={()=>b(0)}/>
  
  <Routes>
          <Route path='/'           element={<Main   gen="Action"  setProgress={b}/>      }> </Route>
          <Route path='/come'       element={<Main   gen="Comedy" setProgress={b}/>       }> </Route>
          <Route path='/horr'       element={<Main   gen="Horror" setProgress={b}/>       }> </Route>
          <Route path='/dram'       element={<Main   gen="Drama" setProgress={b}/>        }> </Route>
          <Route path='/thri'       element={<Main   gen="Thriller" setProgress={b}/>     }> </Route>
          <Route path='/anim'       element={<Main   gen="Animation" setProgress={b}/>    }> </Route>
          <Route path='/roma'       element={<Main   gen="Romance" setProgress={b}/>      }> </Route>
          <Route path='/adve'       element={<Main   gen="Adventure" setProgress={b}/>    }> </Route>

  </Routes>
</Router>
    </div>
  )
}

export default App
