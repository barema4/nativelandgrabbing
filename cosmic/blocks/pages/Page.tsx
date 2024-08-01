// app/page.tsx
import { cn } from "@/cosmic/utils";
import { buttonVariants } from "@/cosmic/elements/Button";
import { Section } from "./PageSection";
import { cosmic } from "@/cosmic/client";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function Page({
  query,
  className,
  status,
}: {
  query: any;
  className?: string;
  status?: "draft" | "published" | "any";
}) {
  try {
    const { object: page } = await cosmic.objects
      .findOne(query)
      .props("slug,title,metadata")
      .depth(1)
      .status(status ? status : "published");

    return (
      <div className={className}>
        <div className="mx-auto flex w-full max-w-6xl flex-col-reverse justify-between p-4 pb-16 text-zinc-950 dark:text-zinc-50 md:flex-row md:gap-12">
          here_0
          <div className="flex w-full flex-col items-start justify-start md:w-1/2">
            <div className="py-4 md:pt-20">
              <h1 className="font-display text-4xl tracking-tight md:text-8xl">
                {/* {page.metadata.h1} */}
                Welcome to NATIVE LANDGRAB
              </h1>
            </div>
            <div className="pb-8">
              <div className="text-xl text-zinc-700 dark:text-zinc-300">
                {/* {page.metadata.subheadline} */}
                Your one-stop resource for oneAfrican’s view of a global
                problem. The onset of the modern world began with land-grabbing,
                marking the inception of racism, the subjugation of women, the
                degradation of nature, the reduction of knowledge to mere
                organization, the usurpation of spiritual power, and the
                initiation of systematic, industrial-scale genocide.
              </div>
            </div>
            {false && (
              <div className="w-full md:pb-20">
                <div className="flex w-full gap-4 md:w-max">
                  <Link
                    className={cn(
                      "w-full md:w-max",
                      buttonVariants({
                        variant: "default",
                      })
                    )}
                    href="https://www.cosmicjs.com"
                  >
                    Get started free
                  </Link>
                  <Link
                    className={cn(
                      "w-full md:w-max",
                      buttonVariants({
                        variant: "secondary",
                      })
                    )}
                    href="https://www.cosmicjs.com/contact"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="my-auto w-full px-4 md:w-1/2">
            <img
              src={`${page.metadata.image.imgix_url}?w=1600&auto=format,compression`}
              alt={page.title}
              className="w-full dark:hidden"
            />
            <img
              src={`${page.metadata.dark_image.imgix_url}?w=1600&auto=format,compression`}
              alt={page.title}
              className="hidden w-full dark:block"
            />
          </div>
          here_1
        </div>
        here_2
        <section className="grid items-center bg-zinc-50 p-4 py-10 dark:bg-zinc-900">
          <div className="relative m-auto flex max-w-6xl flex-col items-start gap-2">
            <h2 className="font-display m-auto max-w-[800px] pt-8 text-center text-3xl text-zinc-900 dark:text-zinc-100 md:text-6xl">
              {/* {page.metadata.section_title} */}
              MISSION & VISION
            </h2>
            <div className="m-auto mb-16 max-w-[800px] text-center text-zinc-700 dark:text-zinc-300">
              {/* The onset of what we now call the modern world begins with the act
              of land-grabbing */}
              To provide a comprehensive and accessible resource for
              understanding the global issues surrounding land ownership and
              usage, and to advocate for a world where_land is managed
              equitably. We aim to acknowledge and respect the rights of native
              populations, promote sustainable development, and foster
              understanding and collaboration across cultures and nations.
            </div>
            <div className="grid gap-y-28">
              {page.metadata.sections.map((section: any) => {
                return <Section key={section.heading} section={section} />;
              })}
            </div>
          </div>
        </section>
      </div>
    );
  } catch (e: any) {
    if (e.status === 404) return notFound();
  }
}
