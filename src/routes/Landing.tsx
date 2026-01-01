import { Footer, Header } from "../components"
import { APP_NAME } from "../utils/constants"

export default function LandingPage() {
  return (
    <>
      <Header />
      <main className="p-4">
        <section>
          <h1>Welcome to {APP_NAME}</h1>
          <a href="/videos">Browse Videos</a>
        </section>
      </main>
      <Footer />
    </>
  )
}