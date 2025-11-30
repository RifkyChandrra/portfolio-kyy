import Link from "next/link";
import { projectVideos } from "@/lib/projects";

export default function ProjectPreview() {
  const preview = projectVideos.slice(0, 3);
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <Link href="/projects" className="text-sm text-brand-700">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {preview.map((v) => (
          <div key={v.id} className="card">
            <iframe title={v.title} src={v.url} className="w-full aspect-video" allowFullScreen />
            <div className="p-3">
              <h3 className="font-semibold">{v.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
