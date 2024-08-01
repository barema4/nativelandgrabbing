import { cosmic } from "@/cosmic/client";
import { Testimonial, TestimonialType } from "./Testimonial";

export async function Testimonials({
  query,
  sort,
  limit,
  skip,
  className,
  status,
}: {
  query: any;
  sort?: string;
  limit?: number;
  skip?: number;
  className?: string;
  status?: "draft" | "published" | "any";
}) {
  const results = [
    {
      title: "Meredith Crawford",
      slug: "slug",
      metadata: {
        company: "Morar LLC",
        position: "Marketing Director",
        quote:
          "Using this platform has been a game-changer for our community. The resources provided have helped us understand the complex history of land-grabbing and its ongoing impacts. We now feel empowered to advocate for our rights and have found a supportive network of allies.",
        image: {
          imgix_url: "",
        },
      },
    },
    {
      title: "Cody Mason",
      slug: "slug",
      metadata: {
        company: "Morar LLC",
        position: "Marketing Director",
        quote:
          "The educational materials available here are incredibly comprehensive and well-researched. As an educator, I've found them invaluable for teaching my students about the deep-rooted issues of land ownership and its global consequences. This platform is a vital tool for raising awareness and fostering informed dialogue.",
        image: {
          imgix_url: "",
        },
      },
    },
    {
      title: "Francesca Sharp",
      slug: "slug",
      metadata: {
        company: "Morar LLC",
        position: "Marketing Director",
        quote:
          "As an activist, the strategies and tools offered have significantly amplified our outreach efforts. We've been able to connect with other organizations and individuals who share our mission, making our advocacy more effective. This service truly bridges the gap between knowledge and action.",
        image: {
          imgix_url: "",
        },
      },
    },
    {
      title: "Alfredo Duran",
      slug: "slug",
      metadata: {
        company: "Morar LLC",
        position: "Marketing Director",
        quote:
          "Accessing this platform has broadened my understanding of the impacts of land-grabbing beyond my own experiences. The insightful articles and reports have been instrumental in shaping my perspectives and actions. I highly recommend this service to anyone committed to social justice and sustainable land management.",
        image: {
          imgix_url: "",
        },
      },
    },
  ];
  const { objects: testimonials } = await cosmic.objects
    .find(query)
    .props("id,slug,title,metadata")
    .depth(1)
    .sort(sort ? sort : "-order")
    .limit(limit ? limit : 100)
    .skip(skip ? skip : 0)
    .status(status ? status : "published");
  return (
    <div className={className}>
      {results?.map((testimonial: TestimonialType) => {
        return <Testimonial testimonial={testimonial} key={testimonial.slug} />;
      })}
    </div>
  );
}
