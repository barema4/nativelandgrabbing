import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
// import './styles.css';

const AccordionDemo = () => {
    const cssItem = "border-b border-zinc-100 dark:border-zinc-700 hover:rounded-xl hover:bg-zinc-50 hover:dark:bg-zinc-800 hover:border-transparent text-zinc-700 dark:text-zinc-200";
    return (
        <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
            <Accordion.Item className={classNames('AccordionItem', cssItem)} value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
            </Accordion.Item>

            <Accordion.Item className="AccordionItem" value="item-2">
                <AccordionTrigger>Is it unstyled?</AccordionTrigger>
                <AccordionContent>
                    Yes. It's unstyled by default, giving you freedom over the look and feel.
                </AccordionContent>
            </Accordion.Item>

            <Accordion.Item className="AccordionItem" value="item-3">
                <AccordionTrigger>Can it be animated?</AccordionTrigger>
                <Accordion.Content className="AccordionContent">
                    <div className="AccordionContentText">
                        Yes! You can animate the Accordion with CSS or JavaScript.
                    </div>
                </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
    )
};

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
    const cssChevron = " h-4 w-4 shrink-0 transition-transform duration-200";
    const cssTrigger = " flex flex-1 items-start justify-between p-4 text-start font-medium transition-all [&[data-state=open]>svg]:rotate-180";
    return (
        <Accordion.Header className="AccordionHeader flex">
            <Accordion.Trigger
                className={classNames('AccordionTrigger', className + cssTrigger)}
                {...props}
                ref={forwardedRef}
            >
                {children}
                <ChevronDownIcon className={classNames('AccordionChevron', cssChevron)} aria-hidden />
            </Accordion.Trigger>
        </Accordion.Header>
    )
});

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
    const cssContent = " overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    return (
        <Accordion.Content
            className={classNames('AccordionContent', className + cssContent)}
            {...props}
            ref={forwardedRef}
        >
            <div className="AccordionContentText p-4 pt-0">{children}</div>
        </Accordion.Content>
    )
});

export default AccordionDemo;
