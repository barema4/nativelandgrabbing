// cosmic/blocks/pages/PageSection.tsx
import { cn } from "@/cosmic/utils";
import { buttonVariants } from "@/cosmic/elements/Button";
import Link from "next/link";

type SectionType = {
  heading: string;
  layout: {
    key: string;
    value: string;
  };
  image: {
    url: string;
    imgix_url: string;
  };
  content: string;
  cta_link: string;
  cta_text: string;
};

export function Section({
  section,
  className,
}: {
  section: SectionType;
  className?: string;
}) {
  return (
    <div key={section.heading} className={className}>
      {section.layout.key === "1-column-center" && (
        <div className="m-auto max-w-[800px]">
          <div className="mb-6 text-center">
            <h2 className="mb-4 text-2xl font-semibold">
              Elevate Your Understanding and Advocacy
            </h2>
            <div
              className="mb-6"
              // dangerouslySetInnerHTML={{ __html: section.content }}
            >
              Harness the full potential of your platform to raise awareness
              about land-grabbing and its effects. Our specialized strategies
              ensure your messaging effectively communicates the historical and
              ongoing impacts, while advancing the cause of equitable land
              management and amplifying the voices of affected communities.
            </div>
            <div>
              <Link
                className={cn(
                  "ml-2",
                  buttonVariants({
                    variant: "secondary",
                  })
                )}
                // href={section.cta_link}
                href="/about"
              >
                {section.cta_text}
              </Link>
            </div>
          </div>
          <div>
            <img
              alt={section.heading}
              className="rounded-xl"
              src={`${section.image.imgix_url}?w=1200&auto=format,compression`}
            />
          </div>
        </div>
      )}
      {section.layout.key === "2-column-image-content" && (
        <div className="grid gap-2 md:grid-cols-2">
          <div className="mr-4">
            <img
              alt={section.heading}
              className="rounded-xl"
              src={`${section.image.imgix_url}?w=1200&auto=format,compression`}
            />
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Goals</h2>
            <div
              className="mb-6"
              // dangerouslySetInnerHTML={{ __html: section.content }}
            >
              <ul>
                <li>
                  - Educate the public about the historical and ongoing impacts
                  of land-grabbing.
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
            <div>
              <Link
                className={cn(
                  "ml-2",
                  buttonVariants({
                    variant: "secondary",
                  })
                )}
                // href={section.cta_link}
                href="/about"
              >
                {section.cta_text}
              </Link>
            </div>
          </div>
        </div>
      )}
      {section.layout.key === "2-column-content-image" && (
        <div className="grid gap-2 md:grid-cols-2">
          <div className="mr-4">
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
                  - Organize events, webinars, and conferences to promote
                  dialogue and action on land-related issues.
                </li>
                <li>
                  - Collaborate with NGOs, governments, and other stakeholders
                  to influence policy and practice.
                </li>
              </ul>
            </div>
            <div>
              <Link
                className={cn(
                  "ml-2",
                  buttonVariants({
                    variant: "secondary",
                  })
                )}
                // href={section.cta_link}
                href="/about"
              >
                {section.cta_text}
              </Link>
            </div>
          </div>
          <div>
            <img
              alt={section.heading}
              className="rounded-xl"
              src={`${section.image.imgix_url}?w=1200&auto=format,compression`}
            />
          </div>
        </div>
      )}
    </div>
  );
}
