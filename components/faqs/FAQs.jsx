// components/faqs.js
import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./Accordion";
import { faqs } from "../../lib/helpers/data";

export async function FAQs({ className }) {
    return (
        <div className={className}>
            {faqs.map((faq, index) => (
                <Accordion type="single" collapsible key={index}>
                    <AccordionItem value={`item-${index}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                </Accordion>
            ))}
        </div>
    );
}
