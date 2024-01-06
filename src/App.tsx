import Background from './components/Background'
import Footer from './components/Footer'
import Header from './components/Header'
import Panels from './components/Panels'
import Title from './components/Title'

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <Background />
      <Title />
      <Panels />
      <Footer />
    </div>
  )
}

export default App
