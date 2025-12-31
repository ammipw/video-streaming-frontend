import VideoPreview from "../VideoPreview";

interface VideoListProps {
  list: Array<any>;
}

export default function VideoList({ list }: VideoListProps) {
  return (
    <ul className="flex gap-4 flex-wrap">
      {list.map((video, index) => (
        <li key={index}>
          <VideoPreview title={video.title} videoUrl={video.url} />
        </li>
      ))}
    </ul>
  )
}