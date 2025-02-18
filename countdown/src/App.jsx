import Title from './components/title/title'
import Counter from './components/Counter/Counter'
import NewYear from './assets/newyear.jpg'
import useCountdown from './hooks/useCountdown'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
      <div className='App' style={{ backgroundImage: `url(${NewYear})` }}>
        <div className="container">
          
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
