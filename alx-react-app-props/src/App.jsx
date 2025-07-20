import WelcomeMessage from './components/WelcomeMessage'  
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import { UserContext } from './components/UserContext'

function App() {

  return (
    <>
      <div>
        <WelcomeMessage />
        <Header />
        <MainContent />
        <UserProfile name="John Doe" age={30} bio="New York, USA" />
        <UserProfile name="Jane Smith" age={25} bio="London, UK" />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      </div>
      <Footer/>
    </>
  )
}


export default App
