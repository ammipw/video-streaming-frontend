interface VideoPreviewProps {
  title: string;
  videoUrl?: string;
  variant?: 'small' | 'medium' | 'large';
}

export default function VideoPreview({ title, videoUrl, variant='medium' }: VideoPreviewProps) {
  if (variant === 'small') {
    return (
      <a href={videoUrl} className="inline-block cursor-pointer group hover:bg-primary-hover p-4 rounded">
        <img src="https://placehold.co/120x68" alt={title} className="w-full h-full object-cover rounded"/>
      </a>
    )
  }

  if (variant === 'large') {
    return (
      <a href={videoUrl} className="inline-block cursor-pointer group hover:bg-primary-hover p-4 rounded">
        <img src="https://placehold.co/800x450" alt={title} className="w-full h-full object-cover rounded"/>
        <p className="text-lg font-semibold my-3">{title}</p>
      </a>
    )
  }

  return (
    <a href={videoUrl} className="inline-block cursor-pointer group hover:bg-primary-hover p-4 rounded">
      <img src="https://placehold.co/400x225" alt={title} className="w-full h-full object-cover rounded"/>
      <p className="my-3">{title}</p>
    </a>
  )
}