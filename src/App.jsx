import Header from './components/index/header.jsx'
import SignIn from './components/sign/signIn.jsx'
import SignUp from './components/sign/signup.jsx'
import Info from './components/index/Info.jsx'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/variables.css'
import './styles/global.css'

function App() {
  return ( 

    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
             <Info />
          </>
        }/>  
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </Router>
  )
}

export default App
