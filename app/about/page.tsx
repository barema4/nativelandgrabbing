// app/page.tsx
import { cosmic } from "@/cosmic/client";
import { TeamList } from "@/cosmic/blocks/team/TeamList";

export default async function AboutPage() {
  const { object: page } = await cosmic.objects
    .findOne({
      type: "pages",
      slug: "about",
    })
    .props("slug,title,metadata")
    .depth(1);
  return (
    <main className="py-4">
      <section className="pb-8 m-auto px-4">
        <div className="m-auto max-w-[950px] flex flex-col items-start gap-2">
          <h1 className="mb-4 m-auto md:mx-0 text-3xl md:text-6xl font-display text-zinc-900 dark:text-zinc-100 leading-tight tracking-tighter">
            About us
          </h1>
          <div
            // dangerouslySetInnerHTML={{ __html: page.metadata.content }}
            className="text-zinc-700 dark:text-zinc-300"
          >
            <p>
              Welcome to Native Landgrab, your dedicated resource for
              understanding and addressing the complex issues surrounding land
              ownership and land-grabbing. Our mission is to provide
              comprehensive and accessible information on the historical and
              ongoing impacts of land-grabbing on native populations worldwide.
              We believe that through education, advocacy, and collaboration, we
              can foster a world where land is managed equitably and
              sustainably, respecting the rights and heritage of all
              communities.
            </p>
            <br />

            <p>
              Our platform is designed to serve a diverse audience, including
              indigenous communities, activists, educators, researchers, policy
              makers, NGOs, and the general public. We offer a wide array of
              resources, from in-depth articles and reports to multimedia
              content and educational tools. By bringing together historical
              analyses, case studies, and contemporary issues, we aim to equip
              our users with the knowledge and strategies needed to advocate for
              just land policies and practices.
            </p>
            <br />

            <p>
              At Native Landgrab, we understand that land-grabbing is not just a
              historical issue but a present-day challenge that continues to
              affect millions of people globally. Our commitment is to amplify
              the voices of those impacted, providing them with a platform to
              share their stories and connect with supportive networks. We also
              strive to influence policy and public opinion by fostering
              informed dialogue and promoting sustainable land management
              practices.
            </p>
            <br />

            <p>
              Join us in our mission to make a difference. Whether you are
              looking to educate yourself and others, advocate for change, or
              simply stay informed about land-related issues, Native Landgrab is
              here to support you. Together, we can work towards a future where
              every community’s land rights are recognized and protected, and
              where the land is a source of life and prosperity for all.
            </p>
            <br />
          </div>
        </div>
      </section>
      {
        <div className="mt-4 md:mt-8 w-full bg-zinc-50 dark:bg-zinc-900 px-4">
          <section className="py-8 w-full md:max-w-7xl mx-auto">
            <h2 className="w-full mb-4 text-2xl md:text-4xl font-display text-zinc-900 dark:text-zinc-100 tracking-tighter justify-center flex">
              Our team
            </h2>
            <TeamList
              query={{ type: "team-members" }}
              className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2"
            />
          </section>
        </div>
      }
    </main>
  );
}
