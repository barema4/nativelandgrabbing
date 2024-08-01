// app/mission/page.tsx

export default async function MissionPage() {
  return (
    <main className="py-4">
      <section className="pb-8 m-auto px-4">
        <div className="m-auto max-w-[950px] flex flex-col items-start gap-2">
          <h1 className="mb-4 m-auto md:mx-0 text-3xl md:text-6xl font-display text-zinc-900 dark:text-zinc-100 leading-tight tracking-tighter">
            Mission & Vision
          </h1>
          <h2 className="mb-4 text-2xl font-semibold">Mission</h2>
          <div className="text-zinc-700 dark:text-zinc-300">
            <p>
              To provide a comprehensive and accessible resource for
              understanding the global issues surrounding land ownership, usage,
              and the historical and contemporary impacts of land-grabbing on
              native populations.
            </p>
          </div>
          <h2 className="mb-4 text-2xl font-semibold">Vision</h2>
          <div className="text-zinc-700 dark:text-zinc-300">
            <p>
              A world where land is managed equitably, acknowledging and
              respecting the rights of native populations, promoting sustainable
              development, and fostering understanding and collaboration across
              cultures and nations.
            </p>
          </div>
        </div>
      </section>
      <section className="pb-8 m-auto px-4">
        <div className="m-auto max-w-[950px] flex flex-col items-start gap-2">
          <h1 className="mb-4 m-auto md:mx-0 text-3xl md:text-6xl font-display text-zinc-900 dark:text-zinc-100 leading-tight tracking-tighter">
            Goals & Objectives
          </h1>
          <h2 className="mb-4 text-2xl font-semibold">Goals</h2>
          <div className="mb-6">
            <ul>
              <li>
                - Educate the public about the historical and ongoing impacts of
                land-grabbing.
              </li>
              <li>
                - Advocate for policies that protect the rights of native
                populations and promote sustainable land use.
              </li>
              <li>
                - Foster a global community of individuals and organizations
                committed to equitable land management.
              </li>
              <li>
                - Provide resources and support for research and activism
                related to land ownership issues.
              </li>
            </ul>
          </div>
          <h2 className="mb-4 text-2xl font-semibold">Objectives</h2>
          <div
            className="mb-6"
            // dangerouslySetInnerHTML={{ __html: section.content }}
          >
            <ul>
              <li>
                - Develop and maintain a comprehensive database of historical
                and current land-grabbing incidents.
              </li>
              <li>
                - Publish educational materials, including articles, reports,
                and multimedia content, to raise awareness.
              </li>
              <li>
                - Organize events, webinars, and conferences to promote dialogue
                and action on land-related issues.
              </li>
              <li>
                - Collaborate with NGOs, governments, and other stakeholders to
                influence policy and practice.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
