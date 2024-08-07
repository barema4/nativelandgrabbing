// components/product-card.tsx
import Link from "next/link";

export type ProjectType = {
  id: string;
  title: string;
  slug: string;
  metadata: {
    image: {
      imgix_url?: string;
    };
    summary: string;
    client: {
      title: string;
    };
    year: number;
    content: number;
  };
};

export function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <Link href={`/work/${project.slug}`} className="group relative w-full">
      <div className="w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
        {project.metadata.image?.imgix_url && (
          <img
            src={`https://imgix.cosmicjs.com/04355f60-b06b-11ee-9844-f9a09795e2a3-Mobile.png?w=1200&auto=format,compression`}
            // src={`${project.metadata.image.imgix_url}?w=1200&auto=format,compression`}
            alt={project.title}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full border border-zinc-100 dark:border-zinc-800"
          />
        )}
      </div>
      <div className="mt-4">
        <div>
          <h3 className="text-lg font-medium leading-tight text-zinc-700 dark:text-zinc-300">
            <span aria-hidden="true" className="absolute inset-0"></span>
            {project.title}
          </h3>
        </div>
      </div>
      <div
        className="pt-2 text-sm font-medium text-zinc-500 dark:text-zinc-300"
        // dangerouslySetInnerHTML={{ __html: project.metadata.summary }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lacinia
        metus et metus blandit, eget tristique mi venenatis. Integer tempus urna
        in elit rutrum dictum. Vestibulum sed mauris sollicitudin, laoreet magna
        vel, varius tellus.
      </div>
      <div className="flex justify-between">
        {/* <p className="pt-2 text-sm font-medium text-zinc-900 dark:text-zinc-50">
          {project.metadata.client.title}
        </p> */}
        <p className="pt-2 text-sm font-medium text-zinc-500 dark:text-zinc-400 font-mono">
          {/* {project.metadata.year} */}
          December 31, 2023
        </p>
      </div>
    </Link>
  );
}
