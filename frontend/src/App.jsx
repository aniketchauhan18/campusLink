import { Routes, Route } from 'react-router-dom'
import Groups from './components/Groups'
import Chats from './components/Chats'
import Profile from './components/Profile'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Lost from './components/Lost'
import { useAuth0 } from "@auth0/auth0-react";
import Calendar from './components/Calendar'
import HomePage from './components/HomePage'
import Found from './components/Found'
import FoundListPage from './pages/FoundListPage'
import LostListPage from './pages/LostListPage'
import Footer from './components/Footer'
import Bot from './components/Bot'
import MessReview from './pages/MessReview'

function App() {
  const { user } = useAuth0();
  return (
    <div className='font-kanit'>
      <Navbar />
      <Routes>
        <Route path="/groups" element={<Groups/>} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/" element={<Home />} />
        <Route path="/scheduler" element={<Calendar />} />
        <Route path="/lostquery" element={<Lost />}/>
        <Route path='/home' element={<HomePage />}/>
        <Route path='/foundquery' element={<Found />} />
        <Route path='/foundlist' element={<FoundListPage />} />
        <Route path='/lostlist' element={<LostListPage />}/>
        <Route path='/talkwithbot' element={<Bot />} />
        <Route path='/messreview' element={<MessReview />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App;