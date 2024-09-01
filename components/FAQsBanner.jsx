import React, { useState } from 'react';
import { faqs } from '../lib/helpers/data';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';

const AccordionItem = ({ question, answer, isOpen, onClick, isEven }) => {
    const cssChevron = " h-4 w-4 shrink-0 transition-transform duration-200 display_0";
    const cssArray = [cssChevron, { 'faqs-chevron-open': isEven }];
    return (
        <div className="faqs-accordion-item">
            <div className="faqs-accordion-header" onClick={onClick}>
                <h3>{question}</h3>
                <ChevronDownIcon className={classNames('AccordionChevron', cssArray, 'faqs-chevron-open')} />
                <ChevronDownIcon className={classNames('AccordionChevron', cssArray)} />
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && <div className="faqs-accordion-body">{answer}</div>}
        </div>
    )
};

const FAQsBanner = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };


    function isEven(number) {
        return number % 2 === 0;
    }

    return (
        <div className="community-banner-cover">
            <div className="sub-heading">
                <h2 className="heading-h2">Frequently Asked Questions</h2>
            </div>
            <div className="faqs-accordion">
                {faqs.map((item, i) => (
                    <AccordionItem

                        key={i}
                        question={item.question}
                        answer={item.answer}
                        isOpen={openIndex === i}
                        isEven={() => (i % 2 === 0)}
                        onClick={() => handleClick(i)}
                    />
                ))}
            </div></div>
    );
};

export default FAQsBanner;
