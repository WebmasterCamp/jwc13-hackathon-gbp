import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Page() {
  return (
    <div className="m-12 flex flex-col">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <img src="cabibara.webp" alt="" />
        </div>
        <div>
          <img src="cabibara.webp" alt="" />
        </div>
      </div>
      <div className="flex flex-row">
        <h1>About us</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo reprehenderit alias natus, enim atque corporis ratione esse expedita ea facilis! Dolorem eos animi sapiente necessitatibus cum! Unde animi vitae veniam!</p>
      </div>
      <div className="flex flex-row">
        <h1>F&Q</h1>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
