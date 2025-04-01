import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Banner from './assets/Components/Banner.jsx'
import Wel_scr from './assets/Components/Wel_scr.jsx'
import Our_services from './assets/Components/Our_services.jsx'
import Packages from './assets/Components/Packages.jsx'



function App() {
  const [login, setlogin] = useState(false)

  return (
    <>
      {/* <Banner /> */}
      <Wel_scr />
      <Our_services />
      <Packages />
        
    </>
  )
}

export default App
