import Background from './components/Background'
import Footer from './components/Footer'
import Header from './components/Header'
import Pannels from './components/Pannels'
import Title from './components/Title'

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <Background />
      <Title />
      <Pannels />
      <Footer />
    </div>
  )
}

export default App
