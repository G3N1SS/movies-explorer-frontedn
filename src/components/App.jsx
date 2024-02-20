import { useState } from 'react'
import { Route, Routes, Link, useNavigate, Navigate, RouterProvider } from 'react-router-dom';
import IntroPage from './IntroPage'
import Registration from './Registration';
import Login from './Login';
import PageNotFound from './PageNotFound';
import Profile from './Profile';
import MainPage from './MainPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='page'>
      <Routes>
        <Route path='/'
        element={<IntroPage/>}/>
        <Route path='/sign-up'
        element={
        <Registration
          name={'sign-up'}
        />}/>
        <Route path='/sign-in'
        element={
        <Login
          name={'sign-in'}
        />}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/films' element={
          <MainPage
            films={true}
          />
        }/>
        <Route path='/saved-films' element={
          <MainPage
            films={false}
          />
        }/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}

export default App
