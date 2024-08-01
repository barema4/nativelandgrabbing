// app/projects/[slug]/page.tsx
import { cosmic } from "@/cosmic/client";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default async function SingleProjectsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { objects: projects } = await cosmic.objects.find({
    type: "projects",
  });
  const { object: project } = await cosmic.objects
    .findOne({
      type: "projects",
      slug: params.slug,
    })
    .props("id,slug,title,metadata")
    .depth(1);
  const item = [
    { title: "Global Land Justice Summit" },
    { title: "Indigenous Land Rights Awareness Week" },
    { title: "Project Equitable Land" },
    { title: "Heritage Lands Initiative" },
  ];
  const index = projects.findIndex((obj: any) => obj.title === project.title);

  return (
    <main className="p-4">
      <div className="mb-10 w-full overflow-hidden">
        {project.metadata.image?.imgix_url && (
          <img
            src={`${project.metadata.image.imgix_url}?w=2000&auto=format,compression`}
            alt={project.title}
            className="aspect-video w-full md:max-w-5xl mx-auto object-cover border border-zinc-100 dark:border-zinc-800 rounded-lg"
          />
        )}
      </div>
      <section className="md:container grid items-center pb-8 m-auto">
        <div className="relative m-auto flex max-w-[750px] flex-col items-start gap-2">
          <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl text-black dark:text-white">
            {/* {project.title} */}
            {item[index]?.title}
          </h1>
          <div className="flex w-full items-center mb-8">
            <img
              className="mr-2 h-12 w-12 rounded-full object-cover"
              src={`${project.metadata.client.metadata.logo.imgix_url}?w=120&auto=format,compression`}
              alt={project.metadata.client.title}
            />
            <div className="flex justify-between w-full">
              <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                {project.metadata.client.title}
              </span>
              <span className="text-zinc-500 dark:text-zinc-400 font-mono">
                {/* {project.metadata.year} */}
                December 31, 2023
              </span>
            </div>
          </div>
          <div
            className="text-zinc-700 dark:text-zinc-300 space-y-4"
            // dangerouslySetInnerHTML={{ __html: project.metadata.content }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            lacinia metus et metus blandit, eget tristique mi venenatis. Integer
            tempus urna in elit rutrum dictum. Vestibulum sed mauris
            sollicitudin, laoreet magna vel, varius tellus.
          </div>
          <div className="my-10">
            <Link href="/work" className="flex text-sky-500 dark:text-sky-400">
              <ArrowLeftIcon className="w-4 h-4 mr-2 mt-1" /> Back to projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
