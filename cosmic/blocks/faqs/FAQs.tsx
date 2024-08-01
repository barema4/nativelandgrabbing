// components/faqs.tsx
import { cosmic } from "@/cosmic/client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";

type FAQ = {
  question: string;
  answer: string;
  index?: number;
};

export async function FAQs({
  query,
  className,
  status,
}: {
  query: any;
  className?: string;
  status?: "draft" | "published" | "any";
}) {
  const faqs = [
    {
      index: 1,
      question: "What is the primary focus of your platform?",
      answer:
        "Our platform focuses on raising awareness about land-grabbing and its historical and ongoing impacts on native populations. We aim to educate, advocate, and provide resources to support equitable land management and the protection of indigenous rights.",
    },
    {
      index: 2,
      question: "Who can benefit from using your services?",
      answer:
        "Our services benefit indigenous communities, activists, educators, researchers, policy makers, NGOs, the general public, and media professionals. Anyone interested in social justice, human rights, and sustainable development will find valuable resources here.",
    },
    {
      index: 3,
      question:
        "How can your platform help my community advocate for land rights?",
      answer:
        "Our platform provides comprehensive information, advocacy strategies, and networking opportunities. We offer educational materials, case studies, and tools that empower communities to effectively advocate for their land rights and connect with supportive allies.",
    },
    {
      index: 4,
      question: "What kind of resources do you offer to educators?",
      answer:
        "We offer a wide range of resources for educators, including detailed articles, historical analyses, multimedia content, and teaching guides. These materials are designed to help educators convey the complexities of land-grabbing and its effects on various populations.",
    },
    {
      index: 5,
      question: "How can I get involved with your platform's mission?",
      answer:
        "You can get involved by using and sharing our resources, participating in our events and webinars, contributing your own research or stories, and connecting with other users who share our mission. Additionally, you can support our advocacy efforts by spreading awareness and engaging in policy discussions.",
    },
    {
      index: 6,
      question: "Is there a cost associated with accessing your resources?",
      answer:
        "Most of our resources are available for free to ensure accessibility for all. However, we may offer some premium content or services that require a subscription or one-time payment. We are committed to making our essential resources as widely available as possible to support our mission.",
    },
  ];
  const { object: page } = await cosmic.objects
    .findOne(query)
    .props("slug,title,metadata")
    .depth(1)
    .status(status ? status : "published");
  if (!page?.metadata?.faqs) return <></>;
  return (
    <div className={className}>
      {faqs.map((faq: FAQ) => {
        return (
          <Accordion type="single" collapsible key={faq.question}>
            <AccordionItem value="item-1">
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        );
      })}
    </div>
  );
}
