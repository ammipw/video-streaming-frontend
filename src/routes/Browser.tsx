import { Footer, Header, VideoList } from "../components"
import { getVideos } from "../utils/actions"

export default function BrowserPage() {
  const recommendedVideos = getVideos()

  return (
    <>
      <Header />
      <main className="p-4">
        <VideoList list={recommendedVideos}/>
      </main>
      <Footer />
    </>
  )
}