import { NavLink } from "react-router"
import { Footer, Header } from "../components"

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="max-w-(--max-width) mx-auto mb-16">
          <div className="max-w-md pt-16 mb-8">
            <h2 className="text-8xl font-extrabold tracking-tighter uppercase mb-6">Watch Streaming</h2>
            <p className="mb-6">Experience the best in video and live streaming content.</p>
            <NavLink to="/videos" className="inline-block px-5 py-3 rounded-full bg-accent text-white mb-6 mr-3">Browse Videos</NavLink>
            <NavLink to="/profile" className="inline-block px-5 py-3 rounded-full border border-(--color-accent-lighter) text-(--color-accent-lighter) mb-6 mr-3">Start Streaming</NavLink>
          </div>
          <div className="flex gap-8">
            <p><span className="block text-2xl font-bold mb-2 text-neutral-100 border-l border-neutral-600 px-4 py-2">200K+</span><span className="px-4">Streamers</span></p>
            <p><span className="block text-2xl font-bold mb-2 text-neutral-100 border-l border-neutral-600 px-4 py-2">20M+</span><span className="px-4">Users</span></p>
          </div>
        </section>
        <section className="bg-accent py-4">
          <div className="max-w-(--max-width) mx-auto flex gap-4">
            {Array(5).fill(0).map((_, index) => (
              <div key={index} className="h-16 w-48 bg-(--color-accent-lightest)"></div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}