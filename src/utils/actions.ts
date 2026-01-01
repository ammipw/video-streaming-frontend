const recommendedVideos = [
  { id: '1', title: 'Learn React in 30 Minutes', duration: '30:00', url: '/videos/1' },
  { id: '2', title: 'Understanding TypeScript', duration: '45:00', url: '/videos/2' },
  { id: '3', title: 'Advanced JavaScript Concepts', duration: '50:00', url: '/videos/3' },
  { id: '4', title: 'CSS Flexbox and Grid Tutorial', duration: '25:00', url: '/videos/4' },
  { id: '5', title: 'Building REST APIs with Node.js', duration: '40:00', url: '/videos/5' },
]

export function getVideos() {
  return recommendedVideos
}

export function getVideoById(id: string) {
  return recommendedVideos.find(video => video.id === id)
}