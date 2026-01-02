import { useParams } from "react-router-dom";
import { Footer, Header } from "../components";
import { useEffect, useState } from "react";
import { getVideoById } from "../utils/actions";

export default function VideoPlayerPage() {
  const { id } = useParams();
  const [videoData, setVideoData] = useState<any>(null);

  useEffect(() => {
    console.log("VideoPlayerPage mounted with ID:", id);

    if (!id) {
      console.warn("No video ID provided in URL parameters.");
      return;
    }

    const fetchVideoData = getVideoById(id);
    setVideoData(fetchVideoData);
  }, [id]);
  
  return (
    <>
      <Header />
      <main>
        <div className="h-[60vh] w-full bg-black"></div>
        <h1>{videoData?.title}</h1>
        <p>{videoData?.duration}</p>
      </main>
      <Footer />
    </>
  )
}