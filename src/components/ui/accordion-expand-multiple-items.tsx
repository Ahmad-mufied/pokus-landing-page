import {Accordion, AccordionItem} from "@heroui/react";

export default function AccordionExpandMultipleItems() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <Accordion 
      selectionMode="multiple" 
      className="w-full max-w-3xl bg-background/10 backdrop-blur-md rounded-xl shadow-xl"
    >
      <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1" className="text-white">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2" className="text-white">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3" className="text-white">
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
} 