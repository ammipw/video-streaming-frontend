import { Footer, Header, VideoList } from "../components"
import { getVideos } from "../utils/actions"

export default function BrowserPage() {
  const recommendedVideos = getVideos()

  return (
    <>
      <Header />
      <main>
        <div className="max-w-(--max-width) mx-auto">
          <VideoList list={recommendedVideos}/>
        </div>
      </main>
      <Footer />
    </>
  )
}