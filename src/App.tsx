import { useState } from 'react'
import './App.css'
import { Footer, Header, VideoList } from './components'
import { useUser, type UserState } from './utils/useUser'

const recommendedVideos = [
  { id: 1, title: 'Learn React in 30 Minutes', duration: '30:00', url: '/play/1' },
  { id: 2, title: 'Understanding TypeScript', duration: '45:00', url: '/play/2' },
  { id: 3, title: 'Advanced JavaScript Concepts', duration: '50:00', url: '/play/3' },
  { id: 4, title: 'CSS Flexbox and Grid Tutorial', duration: '25:00', url: '/play/4' },
  { id: 5, title: 'Building REST APIs with Node.js', duration: '40:00', url: '/play/5' },
]

function App() {
  const [activeVideo, setActiveVideo] = useState(null)
  const user = useUser((state: UserState) => state.user)

  return (
    <>
      <Header user={user}/>
      <VideoList list={recommendedVideos}/>
      <Footer />
    </>
  )
}

export default App