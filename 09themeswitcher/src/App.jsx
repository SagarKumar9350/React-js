
import { useState ,useEffect} from 'react'
import './App.css'
import { Themeprovider } from './Contexts/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode,setThemMode] = useState("light")

  const lightTheme = ()=>{
    setThemMode("light")
  }

  const darkTheme = ()=>{
    setThemMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <Themeprovider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn/>
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card/>
            </div>
          </div>
      </div>
    </Themeprovider>
  )
}

export default App
