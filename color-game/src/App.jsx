import { useEffect, useState } from 'react'
import loadIcon from "./assets/Animation - 1738513509435.gif"
import './App.css'
import GuessColor from './components/GuessColor'

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])


  return (
    <>
      {loading ?
        <div className='loadingIcon'>
          <img src={loadIcon} alt="" />
        </div> :
        <GuessColor />}
    </>
  )
}

export default App
