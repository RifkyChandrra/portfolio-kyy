import type { ProjectVideo } from "@/lib/types";

export default function VideoCard({ video }: { video: ProjectVideo }) {
  return (
    <div className="card overflow-hidden">
      <iframe title={video.title} src={video.url} className="w-full aspect-video" allowFullScreen />
      <div className="p-3">
        <h3 className="font-semibold">{video.title}</h3>
        {video.desc && <p className="text-sm text-gray-600 mt-1">{video.desc}</p>}
      </div>
    </div>
  );
}
