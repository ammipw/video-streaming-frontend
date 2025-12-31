interface VideoPreviewProps {
  title: string;
  videoUrl?: string;
}

export default function VideoPreview({ title, videoUrl }: VideoPreviewProps) {
  return (
    <a href={videoUrl} className="block cursor-pointer group hover:bg-neutral-100">
      <img src="https://placehold.co/400x225" alt={title} className="w-full h-full object-cover mb-2"/>
      <p>{title}</p>
    </a>
  )
}